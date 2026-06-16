import React from "react";

interface SectionTitleProps {
  title:     string;
  subtitle?: string;
  centered?: boolean;
  light?:    boolean;
  eyebrow?:  string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  light    = false,
  eyebrow,
}) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>

      {/* Badge eyebrow */}
      {eyebrow && (
        <span className={`
          inline-flex items-center gap-2 text-xs font-heading font-semibold
          uppercase tracking-widest rounded-full px-4 py-1.5 mb-5
          ${light
            ? "bg-brand/15 border border-brand/25 text-brand"
            : "bg-brand/10 border border-brand/20 text-brand"
          }
        `}>
          {eyebrow}
        </span>
      )}

      {/* Titre */}
      <h2 className={`
        text-3xl md:text-4xl font-heading font-bold mb-4
        ${light ? "text-light" : "text-dark"}
      `}>
        {title}
      </h2>

      {/* Ligne décorative */}
      <div className={`flex mb-6 ${centered ? "justify-center" : "justify-start"}`}>
        <div className="h-1 w-12 bg-brand rounded-full" />
        <div className="h-1 w-4 bg-brand/30 rounded-full ml-1" />
      </div>

      {/* Sous-titre */}
      {subtitle && (
        <p className={`
          text-base md:text-lg leading-relaxed max-w-2xl
          ${centered ? "mx-auto" : ""}
          ${light ? "text-muted" : "text-muted-dark"}
        `}>
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default SectionTitle;