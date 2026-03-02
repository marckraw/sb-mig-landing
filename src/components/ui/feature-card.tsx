"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-surface bg-mantle p-6 transition-all duration-300 hover:border-surface-hover hover:bg-surface/20"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
        <Icon className="h-5 w-5 text-brand" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-text">{title}</h3>
      <p className="text-sm leading-relaxed text-subtext">{description}</p>
    </motion.div>
  );
}
