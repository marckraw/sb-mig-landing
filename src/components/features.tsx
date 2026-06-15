"use client";

import { SectionWrapper } from "./ui/section-wrapper";
import { FeatureCard } from "./ui/feature-card";
import { GradientText } from "./ui/gradient-text";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <SectionWrapper id="features">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Built for Storyblok changes that{" "}
          <GradientText>matter</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-subtext">
          The Storyblok Management API covers content and configuration, while
          the Delivery API serves content through the CDN. sb-mig focuses on the
          operational surface teams need to review, repeat, and run safely.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
