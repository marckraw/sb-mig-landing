import Link from "next/link";
import { Logo } from "./logo";
import { REPO_URL, NPM_URL } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "Docs", href: "/docs" },
  { label: "GitHub", href: REPO_URL },
  { label: "npm", href: NPM_URL },
];

export function Footer() {
  return (
    <footer className="border-t border-surface px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-7 h-7" />
          <span className="font-semibold text-text">sb-mig</span>
        </div>

        <p className="text-sm text-subtext text-center md:text-left">
          Storyblok schema sync, content operations, and auditable migrations.
        </p>

        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            link.href.startsWith("http") ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-subtext hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-subtext hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </footer>
  );
}
