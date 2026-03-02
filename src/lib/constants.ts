import { Code, Shield, RefreshCw } from "lucide-react";

export const REPO_URL = "https://github.com/sb-mig/sb-mig";
export const NPM_URL = "https://www.npmjs.com/package/sb-mig";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "GitHub", href: REPO_URL, external: true },
] as const;

export const FEATURES = [
  {
    icon: Code,
    title: "Code-first schemas",
    description:
      "Sync .sb.js and TypeScript schemas instead of manually clicking through each model update. Keep component definitions reviewable and version-controlled.",
  },
  {
    icon: Shield,
    title: "Safe migrations",
    description:
      "Run content migrations with backups and explicit CLI flags before touching production spaces. Roll back safely when something goes wrong.",
  },
  {
    icon: RefreshCw,
    title: "Reusable workflows",
    description:
      "Script repetitive operations for components, stories, datasources, presets, plugins, and roles. Share workflows across teams and projects.",
  },
] as const;

export const ROADMAP_ITEMS = [
  {
    quarter: "Q2 2026",
    title: "Landing + docs improvements",
    description:
      "Expand this landing into a full docs experience with migration guides and examples.",
  },
  {
    quarter: "Q2-Q3 2026",
    title: "Multi-space operations",
    description:
      "Improve commands for cross-space workflows and safer merge-like synchronization patterns.",
  },
  {
    quarter: "Q3 2026",
    title: "Schema export and onboarding",
    description:
      "Refine the component export-to-schema experience and reduce setup friction for new teams.",
  },
] as const;

export const CAPABILITIES = [
  "Component sync",
  "Content migration",
  "Space to space flows",
  "TypeScript schema support",
] as const;
