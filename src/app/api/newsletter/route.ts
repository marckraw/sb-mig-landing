import { NextResponse, type NextRequest } from "next/server";

const RESEND_CONTACTS_URL = "https://api.resend.com/contacts";
const FALLBACK_EMAIL = "marckraw@icloud.com";

type NewsletterBody = {
  email?: unknown;
  name?: unknown;
  company?: unknown;
};

type ResendContactPayload = {
  email: string;
  firstName?: string;
  lastName?: string;
  unsubscribed: boolean;
  segments?: Array<{ id: string }>;
  topics?: Array<{ id: string; subscription: "opt_in" }>;
};

export const runtime = "nodejs";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function splitName(name: string): Pick<ResendContactPayload, "firstName" | "lastName"> {
  const parts = name.split(/\s+/).filter(Boolean);

  if (parts.length === 0) {
    return {};
  }

  if (parts.length === 1) {
    return { firstName: parts[0] };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

function buildMailtoFallback(email: string, name: string): string {
  const contact = process.env.NEWSLETTER_FALLBACK_EMAIL?.trim() || FALLBACK_EMAIL;
  const subject = encodeURIComponent("sb-mig newsletter signup");
  const body = encodeURIComponent(
    [
      "New newsletter signup request:",
      "",
      `Email: ${email}`,
      `Name: ${name || "-"}`,
      `Submitted at: ${new Date().toISOString()}`,
    ].join("\n")
  );

  return `mailto:${contact}?subject=${subject}&body=${body}`;
}

function resendHeaders(apiKey: string): HeadersInit {
  return {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
}

function buildContactPayload(email: string, name: string): ResendContactPayload {
  const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID?.trim();
  const topicId = process.env.RESEND_NEWSLETTER_TOPIC_ID?.trim();

  return {
    email,
    ...splitName(name),
    unsubscribed: false,
    ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
    ...(topicId ? { topics: [{ id: topicId, subscription: "opt_in" }] } : {}),
  };
}

async function addContactToSegment(email: string, apiKey: string, segmentId: string) {
  const response = await fetch(
    `${RESEND_CONTACTS_URL}/${encodeURIComponent(email)}/segments/${segmentId}`,
    {
      method: "POST",
      headers: resendHeaders(apiKey),
      cache: "no-store",
    }
  );

  if (!response.ok && response.status !== 409) {
    throw new Error(`Resend segment add failed with ${response.status}`);
  }
}

async function optContactIntoTopic(email: string, apiKey: string, topicId: string) {
  const response = await fetch(
    `${RESEND_CONTACTS_URL}/${encodeURIComponent(email)}/topics`,
    {
      method: "PATCH",
      headers: resendHeaders(apiKey),
      cache: "no-store",
      body: JSON.stringify({
        topics: [{ id: topicId, subscription: "opt_in" }],
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Resend topic update failed with ${response.status}`);
  }
}

async function updateExistingContact(email: string, apiKey: string) {
  const response = await fetch(`${RESEND_CONTACTS_URL}/${encodeURIComponent(email)}`, {
    method: "PATCH",
    headers: resendHeaders(apiKey),
    cache: "no-store",
    body: JSON.stringify({ unsubscribed: false }),
  });

  if (!response.ok) {
    throw new Error(`Resend contact update failed with ${response.status}`);
  }

  const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID?.trim();
  const topicId = process.env.RESEND_NEWSLETTER_TOPIC_ID?.trim();

  if (segmentId) {
    await addContactToSegment(email, apiKey, segmentId);
  }

  if (topicId) {
    await optContactIntoTopic(email, apiKey, topicId);
  }
}

function isDuplicateContact(response: Response, message: string): boolean {
  return response.status === 409 || /already exists|already exist|duplicate/i.test(message);
}

export async function POST(request: NextRequest) {
  let body: NewsletterBody = {};

  try {
    const parsed = await request.json();
    body = isRecord(parsed) ? parsed : {};
  } catch {
    return NextResponse.json(
      { success: false, error: "invalid-json" },
      { status: 400 }
    );
  }

  if (getString(body.company)) {
    return NextResponse.json({ success: true, ignored: true });
  }

  const email = getString(body.email).toLowerCase();
  const name = getString(body.name);

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "invalid-email" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    return NextResponse.json({
      success: true,
      fallback: true,
      mailtoUrl: buildMailtoFallback(email, name),
      reason: "missing-resend-api-key",
    });
  }

  try {
    const createResponse = await fetch(RESEND_CONTACTS_URL, {
      method: "POST",
      headers: resendHeaders(apiKey),
      cache: "no-store",
      body: JSON.stringify(buildContactPayload(email, name)),
    });

    if (createResponse.ok) {
      return NextResponse.json({ success: true, fallback: false });
    }

    const createMessage = await createResponse.text();

    if (isDuplicateContact(createResponse, createMessage)) {
      await updateExistingContact(email, apiKey);
      return NextResponse.json({
        success: true,
        fallback: false,
        existing: true,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: "resend-error",
        status: createResponse.status,
      },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "resend-request-failed" },
      { status: 502 }
    );
  }
}
