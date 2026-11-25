import React from "react";
import type { Metadata } from "next";
import { Container } from "@/ui/Container";
import { COMPANY_DETAILS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms and Conditions | VGrow Technologies",
  description:
    "Terms and Conditions governing the use of services, websites, and digital marketing engagements provided by VGrow Technologies.",
  alternates: {
    canonical: "https://vgrowtechnologies.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "November 25, 2026";

  return (
    <section className="pt-36 pb-24 bg-brand-dark min-h-screen">
      <Container size="small">
        <div className="space-y-4 mb-10 pb-8 border-b border-white/10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            Contractual Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: {lastUpdated} &bull; VGrow Technologies
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing the website of <strong>{COMPANY_DETAILS.name}</strong> or engaging our digital marketing, web engineering, SEO, and consulting services, you agree to be bound by these Terms and Conditions. If you do not agree, you must not use our website or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Scope of Services &amp; Proposals</h2>
            <p>
              All service engagements, deliverables, milestones, and timelines are governed by mutual written Statements of Work (SOW) or approved project proposals. Any modifications to project scope will be documented and may affect delivery schedules and investment tiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property Ownership</h2>
            <p>
              Upon receipt of full payment for contracted services, all custom source code, design Figma files, creative assets, and documentation produced specifically for the client are transferred in full ownership to the client. Pre-existing proprietary tools, libraries, or open-source components remain under their respective licenses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Payment Terms &amp; Invoicing</h2>
            <p>
              Project fees are structured on defined milestone schedules (e.g., initial deposit upon kickoff, milestone review, final deployment). Retainer services (such as ongoing SEO or media management) are billed monthly in advance unless agreed otherwise in writing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Third-Party Platforms &amp; Ad Spend</h2>
            <p>
              Advertising spend on Google Ads, Meta, LinkedIn, or other networks is paid directly by the client to the respective ad network. VGrow Technologies manages campaign execution and optimization but is not liable for third-party platform policy changes or algorithmic suspensions outside our direct control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, {COMPANY_DETAILS.name} shall not be liable for indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, server outages beyond our direct management, or third-party API changes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
