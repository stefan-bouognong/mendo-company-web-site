import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?:      string;
  className?: string;
  size?:      "sm" | "md" | "lg";
  /** Sur fond sombre : "Company" en blanc. Sur fond clair : en dark */
  variant?:   "dark" | "light";
}

export default function Logo({
  href      = "/",
  className,
  size      = "md",
  variant   = "light",
}: LogoProps) {
  const imgSize = { sm: 24, md: 32, lg: 44 }[size];
  const textCls = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  const companyCls =
    variant === "light"
      ? "text-light/90"
      : "text-dark/80";

  const inner = (
    <span className={cn("inline-flex items-center gap-2 group", className)}>
      {/* Logo image */}
      <Image
        src="/images/logo.png"
        alt="mendo logo"
        width={imgSize}
        height={imgSize}
        className="object-contain transition-transform duration-300 group-hover:scale-105"
        priority
      />
      {/* Texte "Company" — "mendo" est déjà dans l'image */}
      <span
        className={cn(
          "font-heading font-bold tracking-tight leading-none",
          textCls,
          companyCls
        )}
      >
        Company
      </span>
    </span>
  );

  return href ? (
    <Link href={href}>{inner}</Link>
  ) : (
    inner
  );
}