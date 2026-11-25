"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { allServices } from "@/data/services";
import {
  Code2,
  Layout,
  ShoppingBag,
  FileCode,
  TrendingUp,
  MapPin,
  Cpu,
  Share2,
  Target,
  Megaphone,
  FileText,
  Mail,
  Layers,
  Image as ImageIcon,
  Palette,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  FileCode: <FileCode className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Megaphone: <Megaphone className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Image: <ImageIcon className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export const ServicesOverview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Development",
    "Marketing",
    "Design",
    "AI & Automation",
  ];

  const filteredServices =
    activeCategory === "All"
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24 bg-brand-surface/30 relative" id="services">
      <Container size="wide">
        <SectionHeading
          badge="End-to-End Capabilities"
          title="Digital Marketing &amp;"
          highlightedText="Technology Services"
          description="Explore our specialized services engineered to scale your digital presence, generate commercial leads, and elevate your brand equity."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange",
                activeCategory === cat
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 scale-105"
                  : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-glass-card hover:bg-brand-navy/90 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    {iconMap[service.icon] || <Sparkles className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-full bg-white/5">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-semibold text-slate-200 group-hover:text-brand-orange flex items-center gap-1.5 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-slate-400">
                  Explore Offering
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-300 mb-4">
            Need a tailored multi-service digital growth strategy for your enterprise?
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-orange-400 hover:underline transition-colors"
          >
            <span>Request a Custom Agency Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
