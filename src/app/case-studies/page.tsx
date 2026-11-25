import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { portfolioProjects } from "@/data/portfolio";
import { Button } from "@/ui/Button";
import { ArrowRight, Sparkles, CheckCircle2, AlertCircle, Zap } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Case Studies & Engineering Breakdowns | VGrow Technologies",
  description:
    "In-depth architectural and growth case studies detailing how VGrow Technologies delivers sub-second page speeds, high-intent lead funnels, and enterprise digital solutions.",
  alternates: {
    canonical: "https://vgrowtechnologies.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-radial-glow border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <Container size="wide" className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural &amp; Growth Analysis</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              In-Depth <span className="text-gradient-orange">Case Studies</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore how we decompose business bottlenecks, architect modern technical solutions, and measure real business impact.
            </p>
          </div>
        </Container>
      </section>

      {/* Case studies list */}
      <section className="py-24 bg-brand-dark">
        <Container size="wide">
          <div className="space-y-16">
            {portfolioProjects.map((cs, idx) => (
              <div
                key={cs.id}
                className="p-8 sm:p-12 rounded-3xl bg-glass-card border border-white/10 overflow-hidden space-y-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
                  <div>
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-1">
                      Case Study 0{idx + 1} &bull; {cs.industry}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {cs.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((svc) => (
                      <span
                        key={svc}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-brand-surface border border-white/10">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-rose-400 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>The Challenge &amp; Initial Bottlenecks</span>
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed pl-7">
                        {cs.challenges}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                        <Zap className="w-5 h-5 shrink-0" />
                        <span>The Engineered Strategy &amp; Solution</span>
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed pl-7">
                        {cs.solution}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3">
                      {cs.results.map((r, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-white/[0.03] text-center border border-white/5"
                        >
                          <div className="text-lg font-black text-white">
                            {r.metric}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
