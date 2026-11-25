import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "default";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, showText = true }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-lg p-1 transition-transform",
        className
      )}
      aria-label="VGrow Technologies Home"
    >
      <div className="relative h-11 w-24 sm:w-28 flex items-center justify-center bg-white rounded-md px-1 py-0.5 shadow-sm overflow-hidden border border-white/20 transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
        <Image
          src="/images/logo.png"
          alt="VGrow Technologies Logo"
          fill
          priority
          sizes="(max-width: 768px) 100px, 120px"
          className="object-contain"
        />
      </div>
      {showText && (
        <div className="hidden sm:flex flex-col">
          <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-brand-orange transition-colors">
            VGrow<span className="text-brand-orange">.</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
            Technologies
          </span>
        </div>
      )}
    </Link>
  );
};
