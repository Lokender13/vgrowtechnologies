import React from "react";
import type { Metadata } from "next";
import { Container } from "@/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY_DETAILS } from "@/lib/utils";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | VGrow Technologies — Start Your Digital Growth",
  description:
    "Get in touch with VGrow Technologies. Call +91 852780368 or email technologiesvgrow@gmail.com for custom web development, SEO, and digital marketing inquiries.",
  alternates: {
    canonical: "https://vgrowtechnologies.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-radial-glow border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/30 text-brand-orange mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Inquiries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-gradient-orange">Extraordinary.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Have a new project or looking to upgrade your digital strategy? Reach out to our engineering and marketing leads directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-glass-card border border-white/10 space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  Direct Contact Information
                </h2>

                <div className="space-y-4">
                  <a
                    href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, "")}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-orange/40 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                        Telephone / WhatsApp
                      </span>
                      <span className="text-base font-bold text-white group-hover:text-brand-orange transition-colors">
                        {COMPANY_DETAILS.phoneFormatted}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Mon – Sat, 9:00 AM – 7:00 PM IST
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-orange/40 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                        Official Email
                      </span>
                      <span className="text-base font-bold text-white group-hover:text-brand-orange transition-colors truncate block">
                        {COMPANY_DETAILS.email}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        24-Hour Guaranteed Turnaround
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                        Headquarters &amp; Delivery
                      </span>
                      <span className="text-base font-bold text-white">
                        India
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Delivering for clients in India, US, UK, and UAE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Non-Disclosure Agreements (NDAs) signed upon request</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-orange" />
                    <span>Average consultation response time: under 4 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm source="contact" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
