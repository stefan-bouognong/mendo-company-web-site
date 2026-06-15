import React from "react";

interface SectionTitleProps {
  title:     string;
  subtitle?: string;
  centered?: boolean;
  light?:    boolean;
  eyebrow?:  string;   // Texte badge au-dessus du titre
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title, subtitle, centered = true, light = false, eyebrow,
}) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-heading font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-5">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${
          light ? "text-light" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {/* Ligne accent */}
      <div className={`flex mb-6 ${centered ? "justify-center" : "justify-start"}`}>
        <div className="h-1 w-12 bg-accent rounded-full" />
        <div className="h-1 w-4 bg-accent/30 rounded-full ml-1" />
      </div>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed text-muted max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;