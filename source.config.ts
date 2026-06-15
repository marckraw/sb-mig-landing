import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultLanguage: "plaintext",
      inline: "tailing-curly-colon",
      langs: [
        "bash",
        "shellsession",
        "dotenv",
        "js",
        "json",
        "jsonc",
        "jsonl",
        "markdown",
        "mdx",
        "ts",
        "tsx",
        "yaml",
      ],
      langAlias: {
        console: "shellsession",
        env: "dotenv",
        shell: "bash",
        sh: "bash",
        terminal: "shellsession",
        text: "txt",
        zsh: "bash",
      },
    },
  },
});
