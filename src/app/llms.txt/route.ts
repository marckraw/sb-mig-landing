import { source } from "@/lib/source";

export const revalidate = false;

export async function GET() {
  const pages = source.getPages();
  const lines = [
    "# sb-mig",
    "",
    "Storyblok operations CLI for schema sync, content movement, migrations, and audit artifacts.",
    "",
    "## Primary Documentation",
    "",
    ...pages.map((page) => {
      const description = page.data.description
        ? ` - ${page.data.description}`
        : "";
      return `- [${page.data.title}](${page.url})${description}`;
    }),
    "",
    "## Source",
    "",
    "- GitHub: https://github.com/sb-mig/sb-mig",
    "- npm: https://www.npmjs.com/package/sb-mig",
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
