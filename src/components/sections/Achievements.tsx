"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Rocket, Globe2 } from "lucide-react";
import SectionTitle from "@/components/layout/SectionTitle";

const ACHIEVEMENTS = [
  {
    icon:        Trophy,
    title:       "Blue Tech Challenge",
    subtitle:    "2ème place",
    description: (
      <>
        Récompense décernée pour le projet <strong className="text-brand font-bold text-base">MendoCoti</strong> à fort impact social et technologique.
      </>
    ),
    color:       "#F59E0B",
  },
  {
    icon:        Rocket,
    title:       "Programmes d'Innovation",
    subtitle:    "Lauréat",
    description: "Participation active à plusieurs initiatives nationales et internationales d'accélération.",
    color:       "#005CE6",
  },
  {
    icon:        Globe2,
    title:       "Déploiements Actifs",
    subtitle:    "Cameroun",
    description: "Solutions opérationnelles dans les secteurs financier, éducatif et communautaire.",
    color:       "#00D9A6",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-[#040D1A] relative overflow-hidden">

      {/* Lueurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <SectionTitle
          eyebrow="Réalisations"
          title="Ce que nous avons accompli"
          subtitle="Des jalons concrets qui témoignent de notre progression et de la confiance de nos partenaires."
          light
        />

        <div className="grid md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative bg-primary-800 border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-white/10 transition-all duration-300"
              >
                {/* Barre top colorée */}
                <div
                  className="absolute top-0 left-0 w-full h-[3px] rounded-t-2xl"
                  style={{ backgroundColor: a.color }}
                />

                {/* Glow coin */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-[40px] pointer-events-none rounded-full"
                  style={{ backgroundColor: a.color }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: a.color + "20" }}
                  >
                    <Icon size={22} style={{ color: a.color }} />
                  </div>

                  <p
                    className="text-xs font-heading font-semibold uppercase tracking-widest mb-2"
                    style={{ color: a.color }}
                  >
                    {a.subtitle}
                  </p>

                  <h3 className="font-heading font-bold text-light text-lg mb-3">
                    {a.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed">
                    {a.description}
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