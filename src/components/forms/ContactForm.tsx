"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormSchemaType } from "@/lib/validations";
import { Button } from "@/ui/Button";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  Mail,
  Phone,
  Building,
  User,
  DollarSign,
  FileText,
} from "lucide-react";

interface ContactFormProps {
  initialService?: string;
  source?: "contact" | "quote";
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = "",
  source = "contact",
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      businessEmail: "",
      phoneNumber: "",
      companyName: "",
      serviceRequired: initialService || "",
      estimatedBudget: "",
      projectDetails: "",
    },
  });

  const onSubmit = async (data: ContactFormSchemaType) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source,
          // honeypot field
          website_url_hp: (document.getElementById("website_url_hp") as HTMLInputElement)?.value || "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setIsSubmitted(true);
      reset();
    } catch (err: any) {
      setServerError(
        err.message ||
          "An error occurred while transmitting your request. Please email us directly at technologiesvgrow@gmail.com."
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-glass-card border border-emerald-500/30 text-center space-y-6 animate-fade-in shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-white">
            Thank You! Your Inquiry Is Received.
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            A senior strategist from VGrow Technologies has received your project parameters and will respond within 24 hours with an actionable roadmap.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="secondary"
            size="md"
            onClick={() => setIsSubmitted(false)}
          >
            Submit Another Project
          </Button>
          <Button
            href="/"
            variant="primary"
            size="md"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 sm:p-10 rounded-3xl bg-glass-card border border-white/10 shadow-2xl space-y-6 relative"
      noValidate
    >
      {/* Honeypot hidden input */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_hp">Do not fill this</label>
        <input
          type="text"
          id="website_url_hp"
          name="website_url_hp"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Grid Row 1: Full Name & Business Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Full Name <span className="text-brand-orange">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <User className="w-4 h-4" />
            </div>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Alexander Vance"
              {...register("fullName")}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border ${
                errors.fullName ? "border-rose-500" : "border-white/10"
              } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange text-sm transition-all`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-400">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="businessEmail"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Business Email <span className="text-brand-orange">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="businessEmail"
              type="email"
              placeholder="alex@company.com"
              {...register("businessEmail")}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border ${
                errors.businessEmail ? "border-rose-500" : "border-white/10"
              } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange text-sm transition-all`}
            />
          </div>
          {errors.businessEmail && (
            <p className="mt-1 text-xs text-rose-400">
              {errors.businessEmail.message}
            </p>
          )}
        </div>
      </div>

      {/* Grid Row 2: Phone & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Phone Number <span className="text-brand-orange">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Phone className="w-4 h-4" />
            </div>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="+91 85278 0368"
              {...register("phoneNumber")}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border ${
                errors.phoneNumber ? "border-rose-500" : "border-white/10"
              } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange text-sm transition-all`}
            />
          </div>
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-rose-400">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Company Name <span className="text-brand-orange">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Building className="w-4 h-4" />
            </div>
            <input
              id="companyName"
              type="text"
              placeholder="Acme Global Inc."
              {...register("companyName")}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border ${
                errors.companyName ? "border-rose-500" : "border-white/10"
              } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange text-sm transition-all`}
            />
          </div>
          {errors.companyName && (
            <p className="mt-1 text-xs text-rose-400">
              {errors.companyName.message}
            </p>
          )}
        </div>
      </div>

      {/* Grid Row 3: Service Required & Estimated Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="serviceRequired"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Primary Service Required <span className="text-brand-orange">*</span>
          </label>
          <select
            id="serviceRequired"
            {...register("serviceRequired")}
            className={`w-full px-4 py-3 rounded-xl bg-brand-surface border ${
              errors.serviceRequired ? "border-rose-500" : "border-white/10"
            } text-white focus:outline-none focus:ring-2 focus:ring-brand-orange text-sm transition-all`}
          >
            <option value="">Select a service...</option>
            <option value="Website Development">Website Development (Next.js)</option>
            <option value="Web Design & UI/UX">Web Design &amp; UI/UX</option>
            <option value="E-Commerce Development">E-Commerce (Shopify / Headless)</option>
            <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
            <option value="Google Ads (PPC)">Google Ads (PPC)</option>
            <option value="Meta Ads (FB & Insta)">Meta Ads (FB &amp; Instagram)</option>
            <option value="AI & Marketing Automation">AI &amp; Marketing Automation</option>
            <option value="B2B Lead Generation">B2B Lead Generation</option>
            <option value="Branding & Identity">Branding &amp; Graphic Design</option>
            <option value="Full-Service Retainer">Multi-Service Growth Retainer</option>
          </select>
          {errors.serviceRequired && (
            <p className="mt-1 text-xs text-rose-400">
              {errors.serviceRequired.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="estimatedBudget"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
          >
            Estimated Budget <span className="text-brand-orange">*</span>
          </label>
          <select
            id="estimatedBudget"
            {...register("estimatedBudget")}
            className={`w-full px-4 py-3 rounded-xl bg-brand-surface border ${
              errors.estimatedBudget ? "border-rose-500" : "border-white/10"
            } text-white focus:outline-none focus:ring-2 focus:ring-brand-orange text-sm transition-all`}
          >
            <option value="">Select budget range...</option>
            <option value="Under $2,500 / ₹1.5L">Under $2,500 (₹1.5 Lakhs)</option>
            <option value="$2,500 - $5,000 / ₹1.5L - ₹4L">$2,500 – $5,000 (₹1.5L – ₹4 Lakhs)</option>
            <option value="$5,000 - $10,000 / ₹4L - ₹8L">$5,000 – $10,000 (₹4L – ₹8 Lakhs)</option>
            <option value="$10,000 - $25,000 / ₹8L - ₹20L">$10,000 – $25,000 (₹8L – ₹20 Lakhs)</option>
            <option value="$25,000+ / ₹20L+">$25,000+ (₹20 Lakhs+)</option>
          </select>
          {errors.estimatedBudget && (
            <p className="mt-1 text-xs text-rose-400">
              {errors.estimatedBudget.message}
            </p>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label
          htmlFor="projectDetails"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
        >
          Project Details &amp; Objectives <span className="text-brand-orange">*</span>
        </label>
        <textarea
          id="projectDetails"
          rows={5}
          placeholder="Please describe your current challenges, desired outcomes, timeline, and any reference websites..."
          {...register("projectDetails")}
          className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
            errors.projectDetails ? "border-rose-500" : "border-white/10"
          } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange text-sm transition-all resize-y`}
        />
        {errors.projectDetails && (
          <p className="mt-1 text-xs text-rose-400">
            {errors.projectDetails.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          variant="glow"
          size="lg"
          className="w-full justify-center"
          disabled={isSubmitting}
          icon={
            isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )
          }
        >
          {isSubmitting ? "Transmitting Proposal Request..." : "Submit Project Inquiry"}
        </Button>
      </div>

      {/* Security Privacy assurance */}
      <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
        <Lock className="w-3.5 h-3.5 text-slate-500" />
        <span>Strict confidentiality. Your information is never sold or shared.</span>
      </div>
    </form>
  );
};
