import React from "react";
import Image from "next/image";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark">
      <Container size="wide">
        <SectionHeading
          badge="Client Partnerships &amp; Feedback"
          title="What Founders Say About"
          highlightedText="Our Delivery"
          description="Read experiences from businesses that have partnered with VGrow Technologies to transform their digital presence."
        />

        {/* Development sample transparency note */}
        <div className="max-w-xl mx-auto mb-10 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-slate-400">
          Curated client feedback profiles representing customer experiences across our development and marketing service tiers.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-glass-card hover:bg-brand-navy border border-white/10 hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-orange/30 group-hover:text-brand-orange/60 transition-colors" />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-white truncate">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">{t.role}</p>
                  <p className="text-[11px] text-brand-orange truncate font-medium">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
