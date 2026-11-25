import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { portfolioProjects } from "@/data/portfolio";
import { Button } from "@/ui/Button";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Portfolio & Selected Works | VGrow Technologies",
  description:
    "Explore our showcase of web development, e-commerce, UI/UX, and performance marketing projects engineered for international clients.",
  alternates: {
    canonical: "https://vgrowtechnologies.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-radial-glow border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <Container size="wide" className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering &amp; Creative Showcase</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Selected Works &amp;{" "}
              <span className="text-gradient-orange">Digital Solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every project represents a commitment to technical precision, brand elevation, and measurable commercial results.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 bg-brand-dark">
        <Container size="wide">
          {/* Transparency Disclaimer */}
          <div className="mb-12 p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>
              All project specifications and performance metrics displayed are verified production benchmarks.
            </span>
            <span className="text-brand-orange font-semibold">
              Verified Production Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-glass-card border border-white/10 hover:border-brand-orange/40 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-brand-surface">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-brand-dark/80 text-white backdrop-blur-md border border-white/10">
                    {project.industry}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.slice(0, 2).map((svc) => (
                        <span
                          key={svc}
                          className="text-[10px] font-semibold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Benchmark Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 bg-white/[0.02] rounded-xl px-2 text-center">
                    {project.results.map((r, i) => (
                      <div key={i}>
                        <div className="text-sm font-bold text-white">
                          {r.metric}
                        </div>
                        <div className="text-[9px] text-slate-400 truncate">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/case-studies"
                      className="text-xs font-semibold text-brand-orange hover:text-orange-400 flex items-center justify-between transition-colors"
                    >
                      <span>Explore In-Depth Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
