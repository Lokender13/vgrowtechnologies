"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { Logo } from "@/ui/Logo";
import { Button } from "@/ui/Button";
import { navigationLinks, serviceCategories } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";
import { Menu, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-brand-dark/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
            : "bg-transparent py-5"
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navigationLinks.map((item) => {
                if (item.title === "Services") {
                  return (
                    <div
                      key={item.title}
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        aria-expanded={isServicesOpen}
                        className={cn(
                          "flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange",
                          isServicesOpen
                            ? "text-brand-orange bg-white/5"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <span>Services</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            isServicesOpen && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Mega Dropdown Menu */}
                      {isServicesOpen && (
                        <div className="absolute top-full -left-20 w-[720px] pt-2 z-50">
                          <div className="bg-brand-navy/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl grid grid-cols-2 gap-6">
                            {serviceCategories.slice(0, 4).map((cat) => (
                              <div key={cat.name} className="space-y-2">
                                <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                                  {cat.name}
                                </h4>
                                <ul className="space-y-1">
                                  {cat.services.map((sub) => (
                                    <li key={sub.href}>
                                      <Link
                                        href={sub.href}
                                        onClick={() => setIsServicesOpen(false)}
                                        className="block py-1 text-xs text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                                      >
                                        {sub.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            {/* Dropdown bottom highlight */}
                            <div className="col-span-2 pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-xs">
                              <Link
                                href="/services"
                                onClick={() => setIsServicesOpen(false)}
                                className="text-brand-cyan hover:underline flex items-center gap-1.5 font-medium"
                              >
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>View All 18 Specialized Services</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                              <span className="text-slate-400">
                                Scalable &amp; Bespoke Solutions
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                href="/get-a-quote"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get a Free Quote
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden gap-3">
              <Button
                href="/get-a-quote"
                variant="primary"
                size="sm"
                className="text-xs px-3.5 py-1.5"
              >
                Get Quote
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
