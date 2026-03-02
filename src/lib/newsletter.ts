export interface NewsletterConfig {
  endpoint: string;
  method: string;
  headers: Record<string, string>;
  emailFieldName: string;
  metadataFieldName: string;
}

const FALLBACK_EMAIL = "marckraw@icloud.com";

const config: NewsletterConfig = {
  endpoint: "",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  emailFieldName: "email",
  metadataFieldName: "metadata",
};

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function buildMailtoFallback(email: string, name: string): string {
  const contact = FALLBACK_EMAIL;
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

export async function submitNewsletter(
  email: string,
  name: string
): Promise<{ success: boolean; fallback: boolean; mailtoUrl?: string }> {
  const payload = {
    [config.emailFieldName]: email,
    [config.metadataFieldName]: {
      name,
      source: "sb-mig-landing",
      submittedAt: new Date().toISOString(),
    },
  };

  if (!config.endpoint) {
    const mailtoUrl = buildMailtoFallback(email, name);
    return { success: true, fallback: true, mailtoUrl };
  }

  const response = await fetch(config.endpoint, {
    method: config.method.toUpperCase(),
    headers: config.headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Newsletter endpoint returned ${response.status}`);
  }

  return { success: true, fallback: false };
}
