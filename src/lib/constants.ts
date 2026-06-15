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
    icon: Shield,
    title: "Dry-run first migrations",
    description:
      "Preview selected stories, transformed output, publication plans, and changed payloads before any Storyblok write happens.",
  },
  {
    icon: RefreshCw,
    title: "Preserve published layers",
    description:
      "Migrate dirty published stories without accidentally publishing saved editor drafts.",
  },
  {
    icon: Languages,
    title: "Language-aware publishing",
    description:
      "Inspect translated publish state and publish only languages that were already live before the migration.",
  },
  {
    icon: FileText,
    title: "Audit artifacts",
    description:
      "Keep JSON summaries, before/after payloads, publication plans, and JSONL run logs with every release.",
  },
  {
    icon: Code,
    title: "Code-first schemas",
    description:
      "Sync Storyblok component schemas, datasources, roles, plugins, and presets from version-controlled files.",
  },
  {
    icon: Terminal,
    title: "Scriptable operations",
    description:
      "Run repeatable Storyblok workflows locally, in CI, or as part of a controlled release process.",
  },
] as const;

export const ROADMAP_ITEMS = [
  {
    quarter: "Now",
    title: "CLI and migration reference",
    description:
      "Document the command surface, high-risk flags, dry-run artifacts, and safe production workflows.",
  },
  {
    quarter: "Next",
    title: "Generated command matrix",
    description:
      "Keep docs synced with CLI help output and source-level command descriptions.",
  },
  {
    quarter: "Later",
    title: "Use-case playbooks",
    description:
      "Publish practical migration stories for translated content, Storyblok space duplication, and Backpack upgrades.",
  },
] as const;

export const CAPABILITIES = [
  "Dry-run artifacts",
  "Published layer preservation",
  "Language publish-state maps",
  "Code-first schema sync",
  "JSONL migration logs",
] as const;
