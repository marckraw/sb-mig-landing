import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Roadmap } from "@/components/roadmap";
import { Newsletter } from "@/components/newsletter";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="landing-shell min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Roadmap />
        <Newsletter />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
