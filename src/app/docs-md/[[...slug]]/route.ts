import { notFound } from "next/navigation";
import { createMarkdownResponse, getPageMarkdown } from "@/lib/llm-docs";
import { source } from "@/lib/source";

type RouteContext = {
  params: Promise<{
    slug?: string[];
  }>;
};

export const revalidate = false;

function stripMarkdownSuffix(slug: string[] | undefined): string[] | undefined {
  if (!slug || slug.length === 0) {
    return undefined;
  }

  const last = slug[slug.length - 1];

  if (!last.endsWith(".md")) {
    return slug;
  }

  const next = [...slug];
  next[next.length - 1] = last.slice(0, -".md".length);

  return next;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const page = source.getPage(stripMarkdownSuffix(slug));

  if (!page) {
    notFound();
  }

  return createMarkdownResponse(await getPageMarkdown(page));
}
