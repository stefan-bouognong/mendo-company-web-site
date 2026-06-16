import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "brand" | "outline" | "outline-brand" | "ghost";
  size?:    "sm" | "default" | "lg";
}

export default function Button({
  variant   = "brand",
  size      = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-heading font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60";

  const variants = {
    brand:         "bg-brand text-white hover:bg-brand-hover shadow-lg shadow-brand/20 hover:shadow-brand/30",
    primary:       "bg-accent text-primary hover:bg-accent-hover shadow-lg shadow-accent/20",
    outline:       "border-2 border-accent/40 text-accent hover:border-accent hover:bg-accent/10",
    "outline-brand":"border-2 border-brand/40 text-brand hover:border-brand hover:bg-brand/10",
    ghost:         "text-muted hover:text-light hover:bg-white/5",
  };

  const sizes = {
    sm:      "text-sm px-4 py-2",
    default: "text-sm px-5 py-2.5",
    lg:      "text-base px-7 py-3.5",
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}