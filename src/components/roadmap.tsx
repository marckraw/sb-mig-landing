"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";
import { GradientText } from "./ui/gradient-text";
import { ROADMAP_ITEMS } from "@/lib/constants";

export function Roadmap() {
  return (
    <SectionWrapper id="roadmap">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          <GradientText>Documentation track</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-subtext">
          The site is moving from a landing page into the operating manual for
          Storyblok schema, content, and environment operations.
        </p>
      </div>

      <div className="relative">
        {/* Connecting gradient line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand via-accent to-green md:block" />

        <div className="grid gap-12 md:gap-16">
          {ROADMAP_ITEMS.map((item, i) => (
            <motion.div
              key={item.quarter}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`flex items-center gap-8 md:gap-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:flex-row`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="mb-2 font-mono text-sm text-brand">{item.quarter}</div>
                <h3 className="text-xl font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-subtext">{item.description}</p>
              </div>

              {/* Center dot */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-base">
                <span className="text-xs font-bold text-brand font-mono">{i + 1}</span>
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
