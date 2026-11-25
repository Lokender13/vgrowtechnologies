import React from "react";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { Search, Compass, Rocket, TrendingUp } from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Discover",
      subtitle: "Audit & Architecture",
      icon: <Search className="w-6 h-6 text-brand-orange" />,
      description:
        "We immerse ourselves in your business goals, target customer archetypes, competitor landscape, and technical requirements to define clear success metrics.",
    },
    {
      step: "02",
      title: "Strategize",
      subtitle: "Blueprint & Prototyping",
      icon: <Compass className="w-6 h-6 text-brand-cyan" />,
      description:
        "We engineer high-converting UX wireframes, comprehensive Figma prototypes, keyword intent clusters, and multi-channel campaign roadmaps.",
    },
    {
      step: "03",
      title: "Execute",
      subtitle: "Engineering & Launch",
      icon: <Rocket className="w-6 h-6 text-brand-orange" />,
      description:
        "Writing clean, modular Next.js code, setting up server-side conversion tracking, deploying creative assets, and launching with zero downtime.",
    },
    {
      step: "04",
      title: "Optimize & Scale",
      subtitle: "Analytics & Compounding",
      icon: <TrendingUp className="w-6 h-6 text-brand-cyan" />,
      description:
        "Continuous A/B testing of headlines, conversion funnels, keyword expansions, and campaign scaling to compound your return on investment.",
    },
  ];

  return (
    <section className="py-24 bg-brand-surface/20 border-y border-white/5 relative">
      <Container size="wide">
        <SectionHeading
          badge="Our Methodology"
          title="A Structured 4-Step"
          highlightedText="Growth Engine"
          description="How we take complex business challenges and turn them into scalable, high-converting digital realities."
        />

        <div className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-orange/40 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-8 rounded-2xl bg-glass-card hover:bg-brand-navy border border-white/10 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-dark border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-orange/40 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-4xl font-extrabold text-white/10 group-hover:text-brand-orange/40 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-brand-orange font-bold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Milestone {item.step}</span>
                  <span className="text-brand-orange font-medium">Clear Deliverables</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
