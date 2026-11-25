import React from "react";
import { Container } from "@/ui/Container";
import { benchmarkStats } from "@/data/stats";

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-surface/40 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-28 bg-brand-cyan/5 blur-3xl pointer-events-none" />

      <Container size="wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
            Measurable Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineering &amp; Growth Benchmarks
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Target performance metrics engineered into every platform we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benchmarkStats.map((stat) => (
            <div
              key={stat.id}
              className="p-8 rounded-2xl bg-glass-card hover:bg-white/[0.04] border border-white/10 transition-all duration-300 text-center group"
            >
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400 mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.metric}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {stat.description}
              </p>
              {stat.note && (
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
                  {stat.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
