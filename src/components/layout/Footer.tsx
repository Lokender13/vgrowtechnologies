import React from "react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { Logo } from "@/ui/Logo";
import { COMPANY_DETAILS } from "@/lib/utils";
import { serviceCategories } from "@/data/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  ShieldCheck,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-orange/5 blur-3xl pointer-events-none" />

      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="lg" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              VGrow Technologies is an international-caliber digital marketing and technology solutions agency. We engineer high-converting web applications, authoritative SEO strategies, and automated growth engines for ambitious businesses worldwide.
            </p>

            <div className="space-y-2 pt-2 text-sm text-slate-300">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 hover:text-brand-orange transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-brand-orange group-hover:border-brand-orange">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{COMPANY_DETAILS.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-3 hover:text-brand-orange transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-brand-orange group-hover:border-brand-orange">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{COMPANY_DETAILS.email}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-slate-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>India &bull; Global Remote Delivery</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_DETAILS.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DETAILS.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DETAILS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DETAILS.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-brand-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-orange transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-orange transition-colors">
                  Portfolio Showcase
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-brand-orange transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-orange transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/get-a-quote" className="hover:text-brand-orange transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column 1 */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider">
              Engineering &amp; SEO
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services/website-development" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="hover:text-white transition-colors">
                  Web Design &amp; UI
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="hover:text-white transition-colors">
                  E-Commerce Development
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress-development" className="hover:text-white transition-colors">
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link href="/services/shopify-development" className="hover:text-white transition-colors">
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link href="/services/search-engine-optimization" className="hover:text-white transition-colors">
                  Organic SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/technical-seo" className="hover:text-white transition-colors">
                  Technical SEO Audit
                </Link>
              </li>
              <li>
                <Link href="/services/local-seo" className="hover:text-white transition-colors">
                  Local SEO &amp; Maps
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column 2 */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
              Marketing &amp; AI
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services/google-ads-ppc" className="hover:text-white transition-colors">
                  Google Ads (PPC)
                </Link>
              </li>
              <li>
                <Link href="/services/meta-ads" className="hover:text-white transition-colors">
                  Meta Ads (FB &amp; Insta)
                </Link>
              </li>
              <li>
                <Link href="/services/lead-generation" className="hover:text-white transition-colors">
                  B2B Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-white transition-colors">
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing" className="hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/content-marketing" className="hover:text-white transition-colors">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/email-marketing" className="hover:text-white transition-colors">
                  Email Marketing Funnels
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="hover:text-white transition-colors">
                  Branding &amp; Identity
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved. Elevating Brands. Defining Excellence.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
