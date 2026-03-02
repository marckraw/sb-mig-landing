"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Logo } from "./logo";
import { NAV_LINKS, REPO_URL } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-surface/50 bg-base/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3 group">
          <Logo className="w-8 h-8" />
          <span className="text-lg font-semibold text-text group-hover:text-brand transition-colors">
            sb-mig
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-subtext hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-brand/20"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
