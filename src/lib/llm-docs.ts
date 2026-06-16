import type { InferPageType } from "fumadocs-core/source";
import { source } from "@/lib/source";

export type DocsPage = InferPageType<typeof source>;

const EXCLUDED_LLM_PATH_PREFIXES = ["/docs/blog"];

export function getPublicDocsPages(): DocsPage[] {
  return source
    .getPages()
    .filter((page) =>
      EXCLUDED_LLM_PATH_PREFIXES.every((prefix) => !page.url.startsWith(prefix)),
    )
    .sort((a, b) => a.url.localeCompare(b.url));
}

export function getMarkdownUrl(page: DocsPage): string {
  if (page.url === "/docs") {
    return "/docs.md";
  }

  return `${page.url}.md`;
}

export async function getPageMarkdown(page: DocsPage): Promise<string> {
  const body = (await page.data.getText("processed")).trim();

  if (!body) {
    throw new Error(
      `Missing processed Markdown for ${page.url}. Enable includeProcessedMarkdown in source.config.ts.`,
    );
  }

  return [
    `# ${page.data.title}`,
    page.data.description ? `\n> ${page.data.description}` : "",
    "",
    body.replace(/^# .+\n+/, ""),
  ]
    .filter(Boolean)
    .join("\n")
    .trim();
}

export function createMarkdownResponse(markdown: string): Response {
  return new Response(`${markdown.trim()}\n`, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
    },
  });
}
