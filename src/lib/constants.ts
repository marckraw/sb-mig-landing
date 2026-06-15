import { Code, FileText, Languages, RefreshCw, Shield, Terminal } from "lucide-react";

export const REPO_URL = "https://github.com/sb-mig/sb-mig";
export const NPM_URL = "https://www.npmjs.com/package/sb-mig";

export const NAV_LINKS = [
  { label: "Docs", href: "/docs" },
  { label: "Guides", href: "/docs/guides/safe-content-migration" },
  { label: "CLI", href: "/docs/reference/cli" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "GitHub", href: REPO_URL, external: true },
] as const;

export const FEATURES = [
  {
    icon: Code,
    title: "Component schemas from code",
    description:
      "Sync Storyblok components and presets from version-controlled schema files instead of hand-copying Visual Editor changes.",
  },
  {
    icon: RefreshCw,
    title: "Space-to-space operations",
    description:
      "Move stories and assets between Storyblok spaces or local files with explicit direction, backup, and confirmation behavior.",
  },
  {
    icon: Terminal,
    title: "Configuration sync",
    description:
      "Keep datasources, roles, and field plugins aligned across environments through repeatable CLI commands.",
  },
  {
    icon: Shield,
    title: "Dry-run evidence",
    description:
      "Preview supported Storyblok writes before they happen, especially for schema syncs and production content changes.",
  },
  {
    icon: FileText,
    title: "Auditable migrations",
    description:
      "Run content and preset migrations with JSON summaries, before/after payloads, publication plans, and JSONL logs.",
  },
  {
    icon: Languages,
    title: "Publication-state checks",
    description:
      "Inspect published layers and translated publish state before deciding what should be saved, published, or preserved.",
  },
] as const;

export const ROADMAP_ITEMS = [
  {
    quarter: "Now",
    title: "CLI operating manual",
    description:
      "Document the full command surface for schema sync, content sync, inspection, backups, and migrations.",
  },
  {
    quarter: "Next",
    title: "Source-verified command matrix",
    description:
      "Keep docs synced with CLI help output, source-level command descriptions, and write/read behavior.",
  },
  {
    quarter: "Later",
    title: "Storyblok operations playbooks",
    description:
      "Publish practical guides for schema governance, environment syncs, localization checks, and safe content releases.",
  },
] as const;

export const CAPABILITIES = [
  "Component schemas",
  "Datasources and roles",
  "Stories and assets",
  "Dry-run plans",
  "Migration logs",
] as const;
