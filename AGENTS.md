# AI Agent Instructions

Use conventional commits for repository changes, matching the existing commit style.

## LLM-ready docs maintenance

The docs site is intentionally LLM-readable. Fumadocs content under `content/docs` feeds `/llms.txt`, `/llms-full.txt`, per-page Markdown routes such as `/docs/quickstart.md`, and `sitemap.xml`.

For ordinary documentation edits, update the relevant MDX/meta files only; the LLM routes should update automatically. Run `npm run build`, `npm run lint`, and `npm run verify:llm-docs` before shipping docs changes.

Update LLM-specific code only when the docs delivery contract changes:

- Update `src/lib/llm-docs.ts` when adding/removing docs sections that should be excluded from LLM output, or when changing Markdown/index behavior.
- Update `src/lib/site.ts` when the canonical public domain changes.
- Update `scripts/verify-llm-docs.mjs` when LLM routes, required assertions, or verification coverage changes.
- Keep `sb-mig` README/package metadata aligned if public docs URLs or LLM entrypoints change.
