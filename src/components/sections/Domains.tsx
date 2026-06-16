"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, BookOpen, Landmark, Brain, Code2 } from "lucide-react";
import SectionTitle from "@/components/layout/SectionTitle";
import { DOMAINS } from "@/data/domains";

const ICONS: Record<string, React.ElementType> = {
  CreditCard, BookOpen, Landmark, Brain, Code2,
};

export default function Domains() {
  return (
    <section id="domains" className="py-28 bg-primary-800 relative overflow-hidden">

      {/* Lueurs décoratives */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <SectionTitle
          eyebrow="Expertise"
          title="Nos Domaines d'Intervention"
          subtitle="Cinq piliers technologiques pour transformer les secteurs clés de l'économie africaine."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {DOMAINS.map((d, i) => {
            const Icon = ICONS[d.icon];
            return (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-primary border border-white/5 rounded-2xl p-6 hover:border-brand/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Glow hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${d.color}15 0%, transparent 80%)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: d.color + "20" }}
                  >
                    <Icon size={22} style={{ color: d.color }} />
                  </div>
                  <h3 className="font-heading font-bold text-light text-sm mb-3">
                    {d.label}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}