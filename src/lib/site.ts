export const SITE_URL = "https://sb-mig.vercel.app";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
