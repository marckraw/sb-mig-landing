export interface NewsletterResult {
  success: boolean;
  fallback: boolean;
  mailtoUrl?: string;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitNewsletter(
  email: string,
  name: string
): Promise<NewsletterResult> {
  const response = await fetch("/api/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
    }),
  });

  const result = (await response.json().catch(() => null)) as
    | Partial<NewsletterResult>
    | null;

  if (!response.ok || !result?.success) {
    throw new Error(`Newsletter endpoint returned ${response.status}`);
  }

  return {
    success: true,
    fallback: Boolean(result.fallback),
    mailtoUrl: result.mailtoUrl,
  };
}
