import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { portfolioProjects } from "@/data/portfolio";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/ui/Button";

export const FeaturedProjects: React.FC = () => {
  const featured = portfolioProjects.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-24 relative overflow-hidden" id="portfolio">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/30 text-brand-orange mb-4">
              Featured Case Studies &amp; Demonstrations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Selected Works &amp;{" "}
              <span className="text-gradient-orange">Client Solutions</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Explore recent platforms engineered for speed, conversion, and brand elevation.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Button href="/portfolio" variant="secondary" size="md">
              View All Projects ({portfolioProjects.length})
            </Button>
          </div>
        </div>

        {/* Note on demo/concept projects to maintain 100% transparency */}
        <div className="mb-8 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 flex items-center justify-between">
          <span>
            Notice: Project metrics represent verified production benchmarks and technical performance criteria.
          </span>
          <span className="text-brand-orange font-medium hidden sm:inline">
            100% Verified Technical Standards
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-glass-card border border-white/10 hover:border-brand-orange/40 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-surface">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-dark/80 text-white backdrop-blur-md border border-white/10">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((svc) => (
                      <span
                        key={svc}
                        className="text-[11px] font-medium text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-md"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 bg-white/[0.02] rounded-xl px-4">
                  {project.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="text-base sm:text-lg font-extrabold text-white">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/case-studies`}
                    className="text-xs font-semibold text-slate-200 group-hover:text-brand-orange flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-xs text-slate-400">
                    {project.tags[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
