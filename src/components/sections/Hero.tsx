"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-radial-glow">
      {/* Decorative Grid and Background Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              International Digital Agency &bull; VGrow Technologies
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Transform Your Digital Presence Into{" "}
            <span className="text-gradient-orange inline-block">
              Measurable Growth.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            We help ambitious businesses grow through strategic digital marketing, powerful custom websites, intelligent automation, and performance-driven campaigns.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              href="/get-a-quote"
              variant="glow"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Let&apos;s Grow Your Business
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Our Services
            </Button>
          </motion.div>

          {/* Mini Highlights Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-white/10 mt-12"
          >
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <Zap className="w-5 h-5 text-brand-orange shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Core Web Vitals</p>
                <p className="text-sm font-bold text-white">Sub-1s Speeds</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <TrendingUp className="w-5 h-5 text-brand-cyan shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Search Strategy</p>
                <p className="text-sm font-bold text-white">High-Intent SEO</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <Sparkles className="w-5 h-5 text-brand-orange shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Architecture</p>
                <p className="text-sm font-bold text-white">Next.js &amp; Modern</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Delivery</p>
                <p className="text-sm font-bold text-white">100% Code Ownership</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
