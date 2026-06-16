import { getPageMarkdown, getPublicDocsPages } from "@/lib/llm-docs";

export const revalidate = false;

export async function GET() {
  const pages = getPublicDocsPages();
  const sections = await Promise.all(pages.map(async (page) => {
    return [
      `# ${page.data.title}`,
      "",
      `Source: ${page.url}`,
      "",
      (await getPageMarkdown(page)).replace(/^# .+\n+/, ""),
    ]
      .join("\n")
      .trim();
  }));

  return new Response(`# sb-mig full documentation\n\n${sections.join("\n\n---\n\n")}\n`, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
    },
  });
}
