# sb-mig landing and docs

Next.js + Fumadocs site for `sb-mig`, covering the public landing page,
CLI reference, guides, and AI-readable documentation entry points.

## Run locally

```bash
npm install
npm run dev -- --port 4173
```

Open `http://localhost:4173`.

## Main routes

- `/` - product landing page
- `/docs` - documentation home
- `/api/search` - Fumadocs search endpoint
- `/llms.txt` - AI-friendly docs index

## Content

- Landing page components live in `src/components`.
- Documentation pages live in `content/docs`.
- Shared docs navigation and branding live in `src/lib/layout.shared.tsx`.
- Newsletter fallback settings live in `src/lib/newsletter.ts`.

## Checks

```bash
npm run lint
npm run build
```
