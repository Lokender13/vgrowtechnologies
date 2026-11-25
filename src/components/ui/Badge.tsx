import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "cyan" | "slate" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "orange",
  className,
}) => {
  const variantStyles = {
    orange: "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
    cyan: "bg-brand-cyan/15 text-brand-cyan border-brand-cyan/30",
    slate: "bg-slate-800 text-slate-300 border-slate-700",
    outline: "bg-transparent text-slate-300 border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
