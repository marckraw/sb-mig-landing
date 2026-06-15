"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Github, Package } from "lucide-react";
import { REPO_URL, CAPABILITIES } from "@/lib/constants";
import { GradientText } from "./ui/gradient-text";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 hero-glow" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-surface bg-mantle/80 px-4 py-2 text-sm text-subtext">
            <Image
              src="/sb-mig-logo.png"
              alt="sb-mig logo"
              width={24}
              height={24}
              className="h-6 w-6 rounded"
              priority
            />
            Storyblok migrations you can inspect before you run
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:mx-0 lg:text-7xl">
            Safer Storyblok migrations with{" "}
            <GradientText>proof on disk.</GradientText>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-subtext md:text-xl lg:mx-0">
            sb-mig syncs Storyblok schemas from code and runs auditable content
            migrations with dry-run artifacts, published-layer preservation, and
            language-aware publishing.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
            {CAPABILITIES.map((cap) => (
              <span
                key={cap}
                className="rounded-full border border-surface bg-mantle px-3.5 py-1.5 text-sm text-subtext"
              >
                {cap}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-brand/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <BookOpen className="w-4 h-4" />
              Read the docs
            </Link>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-surface bg-mantle px-8 py-3.5 text-sm font-medium text-text transition-all hover:bg-surface/30 hover:border-surface-hover"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="rounded-2xl border border-surface bg-mantle/90 p-4 shadow-2xl shadow-black/30"
        >
          <div className="mb-4 flex items-center gap-2 border-b border-surface pb-3">
            <span className="h-3 w-3 rounded-full bg-red" />
            <span className="h-3 w-3 rounded-full bg-yellow" />
            <span className="h-3 w-3 rounded-full bg-green" />
            <span className="ml-3 font-mono text-xs text-subtext">dry-run</span>
          </div>
          <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-6 text-text">
{`$ sb-mig migrate content --all \\
  --from 12345 --to 12345 \\
  --migration normalize-design \\
  --publicationMode preserve-layers \\
  --dry-run

✓ selected 84 stories
✓ migrated draft/current layer
✓ migrated published layer
✓ wrote publication plan
✓ no API changes were made`}
          </pre>
          <div className="mt-5 rounded-xl border border-surface bg-base p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-text">
              <Package className="h-4 w-4 text-brand" />
              Artifacts
            </div>
            <div className="grid gap-2 font-mono text-xs text-subtext">
              <span>dry-run--release---publication-plan-summary.json</span>
              <span>dry-run--release---published-layer-summary.json</span>
              <span>release---story-migration-run-log.jsonl</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
