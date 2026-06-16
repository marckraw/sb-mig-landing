import type { MetadataRoute } from "next";
import { getMarkdownUrl, getPublicDocsPages } from "@/lib/llm-docs";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = getPublicDocsPages();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
    },
    {
      url: absoluteUrl("/llms.txt"),
      lastModified: now,
    },
    {
      url: absoluteUrl("/llms-full.txt"),
      lastModified: now,
    },
    ...pages.flatMap((page) => [
      {
        url: absoluteUrl(page.url),
        lastModified: now,
      },
      {
        url: absoluteUrl(getMarkdownUrl(page)),
        lastModified: now,
      },
    ]),
  ];
}
