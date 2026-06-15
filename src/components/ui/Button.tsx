import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?:    "sm" | "default" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size    = "default",
  className,
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-heading font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";

  const variants = {
    primary: "bg-accent text-primary hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/30",
    outline: "border-2 border-accent/40 text-accent hover:border-accent hover:bg-accent/10",
    ghost:   "text-muted hover:text-accent hover:bg-white/5",
  };

  const sizes = {
    sm:      "text-sm px-4 py-2",
    default: "text-sm px-5 py-2.5",
    lg:      "text-base px-7 py-3.5",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;