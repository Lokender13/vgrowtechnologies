import React from "react";
import type { Metadata } from "next";
import { Container } from "@/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Sparkles, CheckCircle2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Project Quote | VGrow Technologies",
  description:
    "Request a free, detailed proposal and project investment estimate from VGrow Technologies for custom website development, SEO, paid ads, or AI automation.",
  alternates: {
    canonical: "https://vgrowtechnologies.com/get-a-quote",
  },
};

export default function GetAQuotePage() {
  const steps = [
    {
      num: "01",
      title: "Scope Review",
      desc: "Our technical leads review your parameters, target audience, and goals.",
    },
    {
      num: "02",
      title: "Architecture & Estimate",
      desc: "We formulate a milestone-based architecture and transparent investment tiers.",
    },
    {
      num: "03",
      title: "Roadmap Discussion",
      desc: "We present a comprehensive 30/60/90-day execution roadmap for your approval.",
    },
  ];

  return (
    <>
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-radial-glow border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Proposal Request</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Get Your Custom{" "}
              <span className="text-gradient-orange">Project Quote</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us about your objectives. We will deliver a comprehensive project proposal, technical scope, and timeline estimate within 24 hours.
            </p>
          </div>

          {/* 3 Step expectation pills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {steps.map((s) => (
              <div
                key={s.num}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center space-y-2"
              >
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                  Phase {s.num}
                </span>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <ContactForm source="quote" />
          </div>
        </Container>
      </section>
    </>
  );
}
