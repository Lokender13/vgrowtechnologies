import React from "react";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import {
  Compass,
  MessageSquare,
  Award,
  TrendingUp,
  Maximize2,
  Handshake,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Compass className="w-6 h-6 text-brand-orange" />,
      number: "01",
      title: "Customized Growth Strategies",
      description:
        "No generic playbooks. We conduct deep audience and market research to craft tailored strategies aligned with your specific business model and unit economics.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand-cyan" />,
      number: "02",
      title: "Transparent Communication",
      description:
        "Direct access to your senior engineering and growth leads. Weekly sprint syncs, shared analytics dashboards, and clear deliverables without agency jargon.",
    },
    {
      icon: <Award className="w-6 h-6 text-brand-orange" />,
      number: "03",
      title: "Experienced Execution",
      description:
        "Senior architects and performance specialists who have engineered high-traffic systems, scaled multi-million dollar ad spend, and ranked competitive search keywords.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-cyan" />,
      number: "04",
      title: "Performance-Driven Approach",
      description:
        "We measure our success by your bottom line: lower customer acquisition costs (CAC), higher average order values (AOV), and qualified commercial pipeline expansion.",
    },
    {
      icon: <Maximize2 className="w-6 h-6 text-brand-orange" />,
      number: "05",
      title: "Scalable Solutions",
      description:
        "Modular codebases, headless CMS architectures, and scalable cloud deployments that handle 10x traffic spikes with zero downtime or performance degradation.",
    },
    {
      icon: <Handshake className="w-6 h-6 text-brand-cyan" />,
      number: "06",
      title: "Long-Term Partnerships",
      description:
        "We don't disappear after launch. We serve as your dedicated digital growth partner, continuously optimizing, testing, and unlocking new revenue opportunities.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-orange/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <Container size="wide">
        <SectionHeading
          badge="The VGrow Advantage"
          title="Why Forward-Thinking Businesses"
          highlightedText="Choose VGrow"
          description="We bridge the gap between creative artistry, cutting-edge software engineering, and disciplined digital marketing execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-2xl bg-glass-card hover:bg-brand-navy/90 border border-white/10 hover:border-brand-orange/30 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-white/10 group-hover:text-brand-orange/30 transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400 group-hover:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>Verified Agency Standard</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
