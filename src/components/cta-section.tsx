"use client";

import { motion } from "framer-motion";
import { Github, Package } from "lucide-react";
import { GradientText } from "./ui/gradient-text";
import { REPO_URL, NPM_URL } from "@/lib/constants";

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
          Ready to{" "}
          <GradientText>migrate smarter</GradientText>?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-subtext">
          Get started with sb-mig and bring your Storyblok workflows into code.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-brand/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
          <a
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-surface bg-mantle px-8 py-3.5 text-sm font-medium text-text transition-all hover:bg-surface/30 hover:border-surface-hover"
          >
            <Package className="w-4 h-4" />
            npm package
          </a>
        </div>
      </motion.div>
    </section>
  );
}
