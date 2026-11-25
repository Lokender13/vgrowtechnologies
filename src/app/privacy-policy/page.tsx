import React from "react";
import type { Metadata } from "next";
import { Container } from "@/ui/Container";
import { COMPANY_DETAILS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy | VGrow Technologies",
  description:
    "Privacy Policy for VGrow Technologies. Learn how we collect, protect, and handle client data and visitor information in compliance with international privacy standards.",
  alternates: {
    canonical: "https://vgrowtechnologies.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 25, 2026";

  return (
    <section className="pt-36 pb-24 bg-brand-dark min-h-screen">
      <Container size="small">
        <div className="space-y-4 mb-10 pb-8 border-b border-white/10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: {lastUpdated} &bull; VGrow Technologies
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              At <strong>{COMPANY_DETAILS.name}</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we take your privacy seriously. This Privacy Policy describes how we collect, use, store, and protect your personal information when you visit our website (vgrowtechnologies.com), utilize our digital marketing and web development services, or communicate with our team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>We may collect information you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>Full Name and Job Title</li>
              <li>Business Email Address and Telephone Number</li>
              <li>Company Name, Website URL, and Industry</li>
              <li>Project specifications, estimated budget, and commercial goals</li>
              <li>Technical usage data (browser type, IP address, referral sources) collected via Google Analytics and server logs.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <p>We use collected data solely for legitimate business purposes:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>To prepare customized proposals, quotes, and technical architectures</li>
              <li>To deliver contracted web development, SEO, advertising, and marketing services</li>
              <li>To provide client support, project progress reports, and invoicing</li>
              <li>To safeguard against fraudulent inquiries and spam submissions</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Data Confidentiality &amp; Non-Disclosure</h2>
            <p>
              We treat all client project materials, source code, business data, and ad accounts as strictly confidential. We never sell, rent, or lease your contact information or intellectual property to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Cookies &amp; Tracking Technologies</h2>
            <p>
              Our website uses essential and analytics cookies to optimize performance, measure page load speeds, and understand visitor interactions. You can adjust your browser settings to decline non-essential cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions or requests regarding your personal data under GDPR, CCPA, or applicable Indian data protection laws, contact us at:
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm">
              <p className="font-bold text-white">{COMPANY_DETAILS.name}</p>
              <p>Email: {COMPANY_DETAILS.email}</p>
              <p>Phone: {COMPANY_DETAILS.phoneFormatted}</p>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}
