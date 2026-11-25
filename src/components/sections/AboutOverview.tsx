import React from "react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Code, Target } from "lucide-react";

export const AboutOverview: React.FC = () => {
  const highlights = [
    "Result-Oriented Digital Strategies Grounded in Data",
    "Bespoke High-Performance Software & Web Engineering",
    "Transparent Milestone Delivery & Open Communication",
    "End-to-End Execution From Discovery to Continuous Scaling",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
              Your Digital Growth Partner
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Elevating Brands.{" "}
              <span className="text-gradient-orange">Defining Excellence.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              At <strong>VGrow Technologies</strong>, we combine creativity, technology, and digital marketing expertise to help businesses build a meaningful online presence.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We understand that every business faces distinct challenges and ambitious goals. That is why we reject cookie-cutter templates and automated fluff. Instead, we architect bespoke digital solutions designed around your commercial objectives — whether that means engineering a sub-second Next.js web application, dominating Google search for high-intent keywords, or deploying automated lead acquisition funnels that scale reliably.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discover Our Story
              </Button>
              <Button href="/portfolio" variant="secondary" size="md">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right Column — Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-8 bg-glass-card border border-white/10 shadow-2xl overflow-hidden space-y-6">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/15 blur-3xl pointer-events-none" />

              <div className="space-y-2 border-b border-white/10 pb-6">
                <span className="text-xs uppercase tracking-widest text-brand-orange font-bold">
                  Our Mission &amp; Approach
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Built to Scale Ambition
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We empower forward-thinking founders, marketing directors, and enterprises with digital platforms that convert visitors into revenue.
                </p>
              </div>

              {/* Pillars list */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Modern Tech Architecture
                    </h4>
                    <p className="text-xs text-slate-400">
                      Next.js, TypeScript, Tailwind, and resilient APIs.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Precision Inbound Funnels
                    </h4>
                    <p className="text-xs text-slate-400">
                      High-intent SEO and conversion-optimized PPC campaigns.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Intelligent Automation
                    </h4>
                    <p className="text-xs text-slate-400">
                      Streamlined CRM syncing and 24/7 lead routing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-xs text-slate-400">
                  Phone:{" "}
                  <a
                    href="tel:+91852780368"
                    className="text-white hover:text-brand-orange transition-colors font-medium"
                  >
                    +91 85278 0368
                  </a>{" "}
                  &bull;{" "}
                  <a
                    href="mailto:technologiesvgrow@gmail.com"
                    className="text-white hover:text-brand-orange transition-colors font-medium"
                  >
                    technologiesvgrow@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
