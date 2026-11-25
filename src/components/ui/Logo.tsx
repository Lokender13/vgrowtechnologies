import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className,
  size = "md",
}) => {
  const sizeStyles = {
    sm: "h-11 w-28 sm:w-32",
    md: "h-12 w-32 sm:w-36",
    lg: "h-14 w-40 sm:w-48",
  };

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-xl p-0.5 transition-transform",
        className
      )}
      aria-label="VGrow Technologies"
    >
      {/* Only the official logo image */}
      <div
        className={cn(
          "relative flex items-center justify-center bg-white rounded-xl px-2 py-1 shadow-sm overflow-hidden border border-white/20 transition-all duration-300 group-hover:shadow-brand-orange/20 group-hover:scale-105 group-hover:border-brand-orange/40",
          sizeStyles[size]
        )}
      >
        <Image
          src="/images/logo.png"
          alt="VGrow Technologies"
          fill
          priority
          sizes="(max-width: 768px) 140px, 200px"
          className="object-contain p-1"
        />
      </div>
    </Link>
  );
};
