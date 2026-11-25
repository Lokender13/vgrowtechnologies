import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  size = "md",
  showText = true,
}) => {
  const sizeStyles = {
    sm: "h-10 w-24 sm:w-28",
    md: "h-12 w-28 sm:w-32",
    lg: "h-16 w-36 sm:w-44",
  };

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-xl p-1 transition-transform",
        className
      )}
      aria-label="VGrow Technologies — Elevating Brands. Defining Excellence."
    >
      {/* Crisp Logo Container */}
      <div
        className={cn(
          "relative flex items-center justify-center bg-white rounded-xl px-2 py-1 shadow-md overflow-hidden border border-white/20 transition-all duration-300 group-hover:shadow-brand-orange/20 group-hover:scale-105 group-hover:border-brand-orange/40",
          sizeStyles[size]
        )}
      >
        <Image
          src="/images/logo.png"
          alt="VGrow Technologies — Elevating Brands. Defining Excellence."
          fill
          priority
          sizes="(max-width: 768px) 120px, 180px"
          className="object-contain p-1"
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
