# sb-mig-landing

Landing page project for sb-mig, including newsletter signup and "coming changes" sections.

## Run locally

From repository root:

```bash
npm run landing:dev
```

Or directly:

```bash
cd sb-mig-landing
npm run dev
```

Default URL: `http://localhost:4173`

## Newsletter setup

`config.js` controls signup behavior:

- `newsletter.endpoint`: your API/form endpoint URL
- `newsletter.method`: HTTP method (`POST` by default)
- `newsletter.headers`: request headers
- `newsletter.emailFieldName`: request field for email
- `newsletter.metadataFieldName`: request field for metadata payload
- `fallbackEmail`: used for `mailto:` fallback when endpoint is empty

If `newsletter.endpoint` is not set, the form still works by opening the user's email app with a prefilled signup email.
