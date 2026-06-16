"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Star, Heart, Shield, TrendingUp } from "lucide-react";
import SectionTitle from "@/components/layout/SectionTitle";
import { VALUES } from "@/data/values";

const ICONS: Record<string, React.ElementType> = {
  Lightbulb, Star, Heart, Shield, TrendingUp,
};

const COLORS = ["#005CE6", "#F59E0B", "#EC4899", "#6366F1", "#00D9A6"];

export default function Values() {
  return (
    <section id="values" className="py-28 bg-primary relative overflow-hidden">

      {/* Lueurs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <SectionTitle
          eyebrow="Ce qui nous guide"
          title="Nos Valeurs"
          subtitle="Cinq principes qui orientent chaque décision et chaque ligne de code chez Mendo."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {VALUES.map((v, i) => {
            const Icon  = ICONS[v.icon];
            const color = COLORS[i % COLORS.length];

            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative text-center bg-primary-800 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 overflow-hidden"
              >
                {/* Glow top */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[30px] pointer-events-none"
                  style={{ backgroundColor: color }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color + "20" }}
                  >
                    <Icon size={24} style={{ color }} />
                  </div>
                  <h3 className="font-heading font-bold text-light mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {v.description}
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