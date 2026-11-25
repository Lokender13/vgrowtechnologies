import React from "react";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { Globe, BarChart3, Sparkles, Database } from "lucide-react";

export const TrustValues: React.FC = () => {
  const values = [
    {
      icon: <Globe className="w-7 h-7 text-brand-cyan" />,
      title: "Digital-First Approach",
      description:
        "Every touchpoint engineered for modern digital consumers: responsive across all screens, lightning-fast, and built on cutting-edge web architecture.",
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-brand-orange" />,
      title: "Performance-Focused Strategies",
      description:
        "We reject vanity metrics. Our campaigns and web platforms focus strictly on client conversions, qualified pipeline growth, and tangible revenue.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-brand-cyan" />,
      title: "Creative Execution",
      description:
        "Stand out from competitors with bespoke editorial UI design, refined typography, and cohesive brand storytelling that commands prestige.",
    },
    {
      icon: <Database className="w-7 h-7 text-brand-orange" />,
      title: "Data-Driven Decisions",
      description:
        "Continuous iterative optimization powered by verified analytics, Google Tag Manager attribution, user behavior heatmaps, and A/B testing.",
    },
  ];

  return (
    <section className="py-20 bg-brand-surface/40 border-y border-white/5 relative">
      <Container size="wide">
        <SectionHeading
          badge="Our Core Pillars"
          title="Engineered for"
          highlightedText="Digital Distinction"
          description="We unify world-class technology engineering with strategic marketing to build platforms that attract, engage, and convert."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-glass-card hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-orange/40 transition-all duration-300">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                {v.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
