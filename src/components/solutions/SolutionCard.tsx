"use client";
import { motion } from "framer-motion";
import {
  GraduationCap, Users, Wallet, Building2, Bot, Stamp,
} from "lucide-react";
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
      className="group bg-primary-800 border border-white/5 rounded-2xl p-7 cursor-pointer hover:border-accent/30 hover:bg-primary-700 transition-all duration-300 relative overflow-hidden"
    >
      {/* Glow hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${solution.color}18 0%, transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        {/* Icône */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: solution.color + "22" }}
        >
          <Icon size={22} style={{ color: solution.color }} />
        </div>

        {/* Contenu */}
        <h3 className="font-heading font-bold text-light text-lg mb-1">{solution.name}</h3>
        <p className="text-accent text-xs font-medium mb-4">{solution.tagline}</p>
        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2">{solution.description}</p>

        {/* Features preview */}
        <div className="flex flex-wrap gap-2">
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

        {/* Arrow */}
        <div className="mt-6 flex items-center gap-2 text-muted text-xs font-medium group-hover:text-accent transition-colors duration-300">
          <span>En savoir plus</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </motion.div>
  );
}