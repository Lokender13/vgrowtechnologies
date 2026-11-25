import React from "react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

      <Container size="default" className="text-center relative z-10 space-y-6">
        <span className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
          404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
          The page or resource you are looking for has been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Back to Homepage
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="md"
            icon={<Search className="w-4 h-4" />}
            iconPosition="left"
          >
            Explore Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
