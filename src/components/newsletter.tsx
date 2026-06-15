"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SectionWrapper } from "./ui/section-wrapper";
import { GradientText } from "./ui/gradient-text";
import { isValidEmail, submitNewsletter } from "@/lib/newsletter";

type StatusTone = "neutral" | "success" | "error" | "warning";

const TONE_CLASSES: Record<StatusTone, string> = {
  neutral: "text-subtext",
  success: "text-green",
  error: "text-red",
  warning: "text-yellow",
};

export function Newsletter() {
  const [status, setStatus] = useState("");
  const [tone, setTone] = useState<StatusTone>("neutral");
  const [submitting, setSubmitting] = useState(false);

  function showStatus(message: string, t: StatusTone = "neutral") {
    setStatus(message);
    setTone(t);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const botField = String(formData.get("company") || "").trim();
    const agreed = formData.get("agree") === "on";

    if (botField) {
      showStatus("Submission ignored.", "neutral");
      return;
    }

    if (!isValidEmail(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }

    if (!agreed) {
      showStatus("Please confirm you agree to receive updates.", "error");
      return;
    }

    setSubmitting(true);
    showStatus("Submitting...", "neutral");

    try {
      const result = await submitNewsletter(email, name);

      if (result.fallback && result.mailtoUrl) {
        window.location.href = result.mailtoUrl;
        showStatus(
          "No endpoint configured. Opened your mail app to complete signup.",
          "warning"
        );
      } else {
        showStatus("Thanks. You're on the list for sb-mig updates.", "success");
      }

      (e.target as HTMLFormElement).reset();
    } catch {
      showStatus("Could not submit right now. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SectionWrapper id="newsletter">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl"
      >
        <div className="rounded-2xl border border-surface bg-mantle p-8 md:p-10">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
            <Mail className="h-6 w-6 text-brand" />
          </div>

          <h2 className="mb-2 text-2xl font-bold md:text-3xl">
            <GradientText>Release notes</GradientText> signup
          </h2>
          <p className="mb-8 text-subtext">
            Get updates about sb-mig releases, migration patterns, and new
            documentation.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="newsletter-name"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Name (optional)
              </label>
              <input
                id="newsletter-name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full rounded-lg border border-surface bg-base px-4 py-2.5 text-sm text-text placeholder:text-overlay outline-none transition-colors focus:border-brand"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="newsletter-email"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-surface bg-base px-4 py-2.5 text-sm text-text placeholder:text-overlay outline-none transition-colors focus:border-brand"
              />
            </div>

            {/* Honeypot */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor="newsletter-company">Company</label>
              <input
                id="newsletter-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <label
              htmlFor="newsletter-agree"
              className="mb-6 flex cursor-pointer items-start gap-3 text-sm text-subtext"
            >
              <input
                id="newsletter-agree"
                name="agree"
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-surface accent-brand"
              />
              <span>I agree to receive product and release updates.</span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-gradient-to-r from-brand to-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-brand/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Joining..." : "Join newsletter"}
            </button>

            {status && (
              <p
                className={`mt-4 text-sm ${TONE_CLASSES[tone]}`}
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
