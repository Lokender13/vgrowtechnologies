import React from "react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { ArrowRight, Phone, Mail, Sparkles } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/utils";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-orange/15 blur-[140px] rounded-full pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 lg:p-20 bg-gradient-to-br from-brand-navy/95 to-brand-dark/95 border border-white/15 shadow-2xl text-center space-y-8 relative overflow-hidden">
          {/* Subtle top badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accelerate Your Digital Evolution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Ready to Take Your Business to the{" "}
            <span className="text-gradient-orange">Next Level?</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build a digital growth strategy that moves your business forward. Connect directly with our senior technology and marketing specialists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/get-a-quote"
              variant="glow"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Start Your Project
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Contact Our Team
            </Button>
          </div>

          {/* Direct Contact Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call Direct: {COMPANY_DETAILS.phoneFormatted}</span>
            </a>

            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-2 hover:text-brand-orange transition-colors"
            >
              <Mail className="w-4 h-4 text-brand-orange" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
