import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { allServices } from "@/data/services";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = allServices.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://vgrowtechnologies.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://vgrowtechnologies.com/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = allServices.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Related services
  const relatedServices = allServices
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: "VGrow Technologies",
      url: "https://vgrowtechnologies.com",
    },
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.keyFeatures.map((f, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: f.title,
          description: f.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-radial-glow border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

        <Container size="wide" className="relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-brand-orange truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.category} Tier</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              {service.heroHeadline}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {service.heroSubheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                href="/get-a-quote"
                variant="glow"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get a Proposal for {service.title}
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Speak With a Strategist
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Overview & Problems Solved */}
      <section className="py-24 bg-brand-dark relative">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Overview */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Service Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Standard Approaches Fail &amp;{" "}
                <span className="text-gradient-orange">How We Solve It</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Technologies Pills */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Core Technologies &amp; Tooling
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Key Deliverables
                </span>
                <ul className="space-y-2">
                  {service.deliverables.map((del, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Problems and Solutions */}
            <div className="lg:col-span-7 space-y-12">
              {/* Problems Solved */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                  <AlertCircle className="w-6 h-6 text-rose-400" />
                  <span>Critical Business Problems We Eliminate</span>
                </h3>

                <div className="space-y-4">
                  {service.problemsSolved.map((prob, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white/[0.02] border border-rose-500/20 hover:border-rose-500/40 transition-colors"
                    >
                      <h4 className="text-base font-bold text-white mb-2">
                        {prob.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {prob.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                  <Zap className="w-6 h-6 text-brand-orange" />
                  <span>Our Engineered Solutions</span>
                </h3>

                <div className="space-y-4">
                  {service.solutions.map((sol, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-glass-card border border-brand-orange/20 hover:border-brand-orange/40 transition-colors"
                    >
                      <h4 className="text-base font-bold text-white mb-2">
                        {sol.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 bg-brand-surface/30 border-y border-white/5 relative">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
              Strategic Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Key Features &amp;{" "}
              <span className="text-gradient-orange">Capabilities</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Every detail is calibrated to maximize your conversion rates, organic visibility, and customer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-glass-card border border-white/10 hover:border-brand-orange/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Step by Step Process */}
      <section className="py-24 bg-brand-dark relative">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block mb-2">
              Proven Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our 4-Phase{" "}
              <span className="text-gradient-cyan">Execution Process</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Clear milestone progression ensuring on-time delivery with zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="p-8 rounded-2xl bg-glass-card border border-white/10 relative group"
              >
                <span className="text-4xl font-black text-white/10 group-hover:text-brand-orange/30 transition-colors block mb-4">
                  {p.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Specific FAQ */}
      <section className="py-20 bg-brand-surface/20 border-t border-white/5">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
              Specific Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-glass-card border border-white/10 space-y-2"
              >
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-brand-dark border-t border-white/5">
          <Container size="wide">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Complementary Offerings
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Related Services You Might Need
                </h3>
              </div>
              <Link
                href="/services"
                className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="p-6 rounded-2xl bg-glass-card border border-white/10 hover:border-brand-orange/40 transition-all duration-300 group hover:-translate-y-1 block"
                >
                  <span className="text-[11px] font-semibold text-brand-orange uppercase tracking-wider block mb-2">
                    {rel.category}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Final Conversion CTA */}
      <FinalCTA />
    </>
  );
}
