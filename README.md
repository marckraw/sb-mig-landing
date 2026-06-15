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
- `/api/newsletter` - newsletter signup endpoint
- `/llms.txt` - AI-friendly docs index

## Newsletter signup

The landing page form posts to `/api/newsletter`.

Configure these env vars in Vercel to make signups write to Resend Contacts:

```bash
RESEND_API_KEY=re_...
RESEND_NEWSLETTER_SEGMENT_ID=...
RESEND_NEWSLETTER_TOPIC_ID=...
NEWSLETTER_FALLBACK_EMAIL=marckraw@icloud.com
```

`RESEND_API_KEY` is required for real signups. Segment and topic IDs are
optional, but useful for keeping sb-mig release notes separate from other
contacts. Without `RESEND_API_KEY`, the API returns a `mailto:` fallback so the
form still has a manual path in local/dev environments.

## Content

- Landing page components live in `src/components`.
- Documentation pages live in `content/docs`.
- Shared docs navigation and branding live in `src/lib/layout.shared.tsx`.
- Newsletter fallback and Resend settings live in `src/app/api/newsletter/route.ts`.

## Checks

```bash
npm run lint
npm run build
```
