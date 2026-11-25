import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "small" | "wide";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "default",
  ...props
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "small" && "max-w-4xl",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[1400px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
