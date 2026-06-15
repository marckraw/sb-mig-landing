import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/components/logo";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <Logo className="h-6 w-6" />
          sb-mig
        </span>
      ),
    },
    links: [
      {
        text: "Docs",
        url: "/docs",
        active: "nested-url",
      },
      {
        text: "GitHub",
        url: "https://github.com/sb-mig/sb-mig",
        external: true,
      },
      {
        text: "npm",
        url: "https://www.npmjs.com/package/sb-mig",
        external: true,
      },
    ],
  };
}
