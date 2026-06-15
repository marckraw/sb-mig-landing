"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Github } from "lucide-react";
import { GradientText } from "./ui/gradient-text";
import { REPO_URL } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Start with the{" "}
          <GradientText>command surface</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-subtext">
          Use the CLI reference to choose the right sync, inspection, backup, or
          migration workflow before touching a Storyblok space.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/docs/reference/cli"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-brand/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <BookOpen className="w-4 h-4" />
            CLI reference
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
        </div>
      </motion.div>
    </section>
  );
}
