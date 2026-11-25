"use client";

import React, { useState } from "react";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { siteFaqs } from "@/data/faq";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-surface/20 border-t border-white/5 relative" id="faq">
      <Container size="default">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Clear Answers About"
          highlightedText="Our Services &amp; Process"
          description="Everything you need to know about working with VGrow Technologies, timelines, pricing, and our engineering standards."
        />

        <div className="space-y-4 mt-12">
          {siteFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-brand-navy/90 border-brand-orange/40 shadow-lg shadow-brand-orange/5"
                    : "bg-glass-card border-white/10 hover:border-white/20"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-2xl gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180 bg-brand-orange text-white border-brand-orange"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
