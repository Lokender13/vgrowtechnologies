import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { allServices } from "@/data/services";
import { serviceCategories } from "@/data/navigation";
import { Button } from "@/ui/Button";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Specialized Digital Services | VGrow Technologies",
  description:
    "Explore our 18 specialized digital marketing, web engineering, SEO, paid ads, branding, and AI automation services engineered to scale ambitious businesses.",
  alternates: {
    canonical: "https://vgrowtechnologies.com/services",
  },
};

export default function ServicesListingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-radial-glow border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <Container size="wide" className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Digital Growth Agency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Specialized Services for{" "}
              <span className="text-gradient-orange">Measurable Scale</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From bespoke Next.js web application engineering and technical SEO to full-funnel performance advertising and AI automation, we provide end-to-end digital mastery.
            </p>

            <div className="pt-2 flex justify-center">
              <Button
                href="/get-a-quote"
                variant="glow"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Custom Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services categorized view */}
      <section className="py-24 bg-brand-dark">
        <Container size="wide">
          <div className="space-y-20">
            {serviceCategories.map((cat, idx) => (
              <div key={cat.name} className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                  <div>
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                      Domain 0{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {cat.name}
                    </h2>
                  </div>
                  <span className="text-xs text-slate-400">
                    {cat.services.length} Specialized Capabilities
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.services.map((item) => {
                    const fullDetails = allServices.find(
                      (s) => s.slug === item.href.replace("/services/", "")
                    );

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="p-8 rounded-2xl bg-glass-card border border-white/10 hover:border-brand-orange/40 hover:bg-brand-navy/90 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-cyan block mb-2">
                            {fullDetails?.category || "Specialized Service"}
                          </span>
                          <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors mb-3">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                            {fullDetails?.shortDescription ||
                              "Comprehensive strategic solutions tailored for your business."}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-200 group-hover:text-brand-orange transition-colors">
                          <span>View Service Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
