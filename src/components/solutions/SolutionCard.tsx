"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Wallet, Building2, Bot, Stamp } from "lucide-react";
import type { Solution } from "@/data/solutions";

const ICONS: Record<string, React.ElementType> = {
  GraduationCap, Users, Wallet, Building2, Bot, Stamp,
};

interface SolutionCardProps {
  solution: Solution;
  index:    number;
  onClick:  () => void;
}

export default function SolutionCard({ solution, index, onClick }: SolutionCardProps) {
  const Icon = ICONS[solution.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative bg-primary-800 border border-white/5 rounded-2xl p-7 cursor-pointer hover:border-white/10 transition-all duration-300 overflow-hidden"
    >
      {/* Glow hover radial */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${solution.color}18 0%, transparent 75%)`,
        }}
      />

      {/* Barre colorée top */}
      <div
        className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] rounded-t-2xl transition-all duration-500"
        style={{ backgroundColor: solution.color }}
      />

      <div className="relative z-10">

        {/* Icône */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: solution.color + "20" }}
        >
          <Icon size={22} style={{ color: solution.color }} />
        </div>

        {/* Titre + tagline */}
        <h3 className="font-heading font-bold text-light text-lg mb-1">
          {solution.name}
        </h3>
        <p className="text-xs font-medium mb-4" style={{ color: solution.color }}>
          {solution.tagline}
        </p>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2">
          {solution.description}
        </p>

        {/* Tags features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {solution.features.slice(0, 2).map((f) => (
            <span
              key={f}
              className="text-xs px-3 py-1 rounded-full border"
              style={{ borderColor: solution.color + "40", color: solution.color }}
            >
              {f}
            </span>
          ))}
          {solution.features.length > 2 && (
            <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-muted">
              +{solution.features.length - 2}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-muted text-xs font-medium group-hover:text-light transition-colors duration-300">
          <span>En savoir plus</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>

      </div>
    </motion.div>
  );
}