"use client";

import { motion } from "framer-motion";
import { Github, Package } from "lucide-react";
import { REPO_URL, NPM_URL, CAPABILITIES } from "@/lib/constants";
import { GradientText } from "./ui/gradient-text";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 hero-glow" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Storyblok migration toolkit with an{" "}
            <GradientText>opinionated CLI.</GradientText>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-subtext md:text-xl">
            sb-mig helps teams sync components, stories, datasources and more
            from code to space. Join the newsletter for release drops and roadmap
            changes.
          </p>

          {/* Capability chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
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

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
