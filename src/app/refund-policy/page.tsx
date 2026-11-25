import React from "react";
import type { Metadata } from "next";
import { Container } from "@/ui/Container";
import { COMPANY_DETAILS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | VGrow Technologies",
  description:
    "Refund and Cancellation Policy for VGrow Technologies. Transparent guidelines on project milestones, deposit refunds, and retainer cancellations.",
  alternates: {
    canonical: "https://vgrowtechnologies.com/refund-policy",
  },
};

export default function RefundPolicyPage() {
  const lastUpdated = "November 25, 2026";

  return (
    <section className="pt-36 pb-24 bg-brand-dark min-h-screen">
      <Container size="small">
        <div className="space-y-4 mb-10 pb-8 border-b border-white/10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            Policy Statement
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: {lastUpdated} &bull; VGrow Technologies
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Principle of Transparency</h2>
            <p>
              At <strong>{COMPANY_DETAILS.name}</strong>, we operate with complete transparency. Because our services involve dedicated technical labor, software engineering, and strategic resources allocated specifically to your account, this Refund Policy outlines how cancellations and refunds are handled.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Web Development &amp; Custom Projects</h2>
            <p>
              Custom web development and design projects operate on a milestone-based payment structure:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>
                <strong>Initial Deposit:</strong> The kickoff deposit reserves engineering capacity and covers architectural research, initial wireframes, and scoping. Once discovery work begins, deposits are non-refundable.
              </li>
              <li>
                <strong>Milestone Approvals:</strong> Payments made upon formal client sign-off of project milestones (e.g., UI approval, development staging review) are non-refundable once approved and delivered.
              </li>
              <li>
                <strong>Project Cancellation:</strong> In the rare event a project is cancelled prior to completion, you will only be invoiced for verified hours and milestones completed up to the date of cancellation.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Monthly Retainer Services (SEO &amp; Ads)</h2>
            <p>
              Monthly retainers (such as SEO, Paid Advertising, and AI Automation support) can be cancelled at any time with a 30-day written notice prior to the start of the next billing cycle. No refunds are issued for services rendered during active monthly billing periods.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Dispute Resolution &amp; Inquiries</h2>
            <p>
              We are committed to client satisfaction. If you ever have questions or concerns about deliverables, reach out to our team at{" "}
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="text-brand-orange hover:underline"
              >
                {COMPANY_DETAILS.email}
              </a>{" "}
              or call {COMPANY_DETAILS.phoneFormatted}. We will schedule an immediate review meeting to address your requirements.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
