import { getMarkdownUrl, getPublicDocsPages } from "@/lib/llm-docs";

export const revalidate = false;

export async function GET() {
  const pages = getPublicDocsPages();
  const lines = [
    "# sb-mig",
    "",
    "> Storyblok operations CLI for schema sync, content movement, migrations, and audit artifacts.",
    "",
    "sb-mig is a command line toolkit for Storyblok teams that need schema and content operations to be reviewable, repeatable, and inspectable.",
    "",
    "## Primary Documentation",
    "",
    ...pages.map((page) => {
      const description = page.data.description
        ? ` - ${page.data.description}`
        : "";
      return `- [${page.data.title}](${getMarkdownUrl(page)})${description}`;
    }),
    "",
    "## Full Context",
    "",
    "- [Full documentation corpus](/llms-full.txt) - All public docs pages as one Markdown file.",
    "",
    "## Source",
    "",
    "- [GitHub](https://github.com/sb-mig/sb-mig) - Source repository for the sb-mig CLI package.",
    "- [npm](https://www.npmjs.com/package/sb-mig) - Published npm package.",
    "- [Website](/) - Human-facing landing page.",
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
