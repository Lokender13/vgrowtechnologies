import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  Sparkles,
  Users,
  Compass,
  Cpu,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/utils";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | VGrow Technologies — Elevating Brands, Defining Excellence",
  description:
    "Learn about VGrow Technologies: our mission, vision, values, and engineering principles. We help ambitious businesses scale through world-class digital solutions.",
  alternates: {
    canonical: "https://vgrowtechnologies.com/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Integrity & Transparency",
      description:
        "No inflated claims, fake reviews, or opaque retainer invoices. We provide clear deliverables, open codebases, and honest performance reporting.",
    },
    {
      title: "Technical Rigor",
      description:
        "We build on production-grade foundations: TypeScript, Next.js, and clean semantic structures that endure Google algorithm shifts and traffic spikes.",
    },
    {
      title: "Commercial Focus",
      description:
        "A beautiful website that does not convert is a wasted investment. Every design decision and campaign parameter is calibrated for customer action.",
    },
    {
      title: "Long-Term Partnerships",
      description:
        "We measure our success by the multi-year trajectory of the businesses we partner with, continuously unlocking new avenues of digital growth.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-radial-glow border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About VGrow Technologies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Elevating Brands.{" "}
              <span className="text-gradient-orange">Defining Excellence.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
              We are an international digital marketing and technology solutions company founded on the principle that ambitious businesses deserve exceptional engineering and transparent marketing execution.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/contact" variant="glow" size="lg">
                Connect With Our Team
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24 bg-brand-dark">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Our Origin &amp; Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why We Built VGrow Technologies
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                The digital agency landscape is filled with two extremes: creative agencies that build visually flashy websites that are slow, insecure, and lack commercial search visibility; and traditional SEO/ad agencies that churn out generic templates and buy low-quality links.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                At <strong>VGrow Technologies</strong>, we eliminated this compromise. We unified senior software architects, performance marketing directors, and brand designers under one cohesive roof. Every platform we deliver is built to load in milliseconds, command consumer respect, and generate quantifiable business pipeline.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-orange">
                    100%
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Bespoke Codebases &amp; Ownership
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-cyan">
                    &lt;1.0s
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Target Mobile PageSpeed
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-12 rounded-3xl bg-glass-card border border-white/10 shadow-2xl space-y-6">
                <span className="text-xs uppercase tracking-widest text-brand-orange font-bold">
                  Our Mission &amp; Vision
                </span>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Target className="w-5 h-5 text-brand-orange" />
                      <span>Our Mission</span>
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      To empower ambitious companies worldwide with scalable digital platforms, authoritative search strategies, and intelligent automation that turn digital investments into measurable enterprise value.
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Compass className="w-5 h-5 text-brand-cyan" />
                      <span>Our Vision</span>
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      To be the trusted technology and growth partner of choice for modern businesses seeking uncompromising quality, exceptional performance, and ethical transparency in digital execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-surface/30 border-y border-white/5">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Principles That Drive Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-glass-card border border-white/10 space-y-3"
              >
                <h3 className="text-xl font-bold text-white text-gradient-orange">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
