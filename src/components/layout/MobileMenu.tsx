"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navigationLinks, serviceCategories } from "@/data/navigation";
import { COMPANY_DETAILS } from "@/lib/utils";
import { Button } from "@/ui/Button";
import { X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-brand-dark/95 border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-bold text-lg text-white">
              Navigation Menu
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-6 space-y-1">
            {navigationLinks.map((item) => {
              if (item.title === "Services") {
                return (
                  <div key={item.title} className="py-1">
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesExpanded ? "rotate-180 text-brand-orange" : ""
                        }`}
                      />
                    </button>

                    {servicesExpanded && (
                      <div className="mt-2 pl-4 pr-2 space-y-4 border-l-2 border-brand-orange/30 ml-3">
                        {serviceCategories.map((cat) => (
                          <div key={cat.name} className="space-y-1">
                            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                              {cat.name}
                            </span>
                            {cat.services.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={onClose}
                                className="block py-1.5 text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer actions in drawer */}
        <div className="p-6 bg-brand-navy/60 border-t border-white/10 space-y-4">
          <Button
            href="/get-a-quote"
            variant="primary"
            size="md"
            className="w-full justify-center"
            onClick={onClose}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Get a Free Quote
          </Button>

          <div className="pt-2 space-y-2 text-xs text-slate-300">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <span>{COMPANY_DETAILS.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-2 hover:text-brand-orange transition-colors"
            >
              <Mail className="w-4 h-4 text-brand-orange shrink-0" />
              <span className="truncate">{COMPANY_DETAILS.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
