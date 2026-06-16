import { createMDX } from "fumadocs-mdx/next";

/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs.md",
        destination: "/docs-md",
      },
      {
        source: "/docs/:path*.md",
        destination: "/docs-md/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value:
              '</llms.txt>; rel="llms-txt"; type="text/plain", </llms-full.txt>; rel="alternate"; type="text/markdown"',
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
