"use client";
import { motion } from "framer-motion";
import { Trophy, Rocket, Globe2 } from "lucide-react";
import SectionTitle from "@/components/layout/SectionTitle";

const ACHIEVEMENTS = [
  {
    icon:        Trophy,
    title:       "Blue Tech Challenge",
    subtitle:    "2ème place",
    description: "Récompense décernée pour les projets innovants à fort impact social et technologique.",
    color:       "#F59E0B",
  },
  {
    icon:        Rocket,
    title:       "Programmes d'Innovation",
    subtitle:    "Lauréat",
    description: "Participation active à plusieurs initiatives nationales et internationales d'accélération.",
    color:       "#00D9A6",
  },
  {
    icon:        Globe2,
    title:       "Déploiements Actifs",
    subtitle:    "Cameroun",
    description: "Solutions opérationnelles dans les secteurs financier, éducatif et communautaire.",
    color:       "#6366F1",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Réalisations"
          title="Ce que nous avons accompli"
          subtitle="Des jalons concrets qui témoignent de notre progression et de la confiance de nos partenaires."
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
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-light rounded-2xl p-8 border border-dark/5 overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                  style={{ backgroundColor: a.color }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: a.color + "1A" }}
                >
                  <Icon size={22} style={{ color: a.color }} />
                </div>
                <p className="text-xs font-heading font-semibold uppercase tracking-wider mb-1" style={{ color: a.color }}>
                  {a.subtitle}
                </p>
                <h3 className="font-heading font-bold text-dark text-lg mb-3">{a.title}</h3>
                <p className="text-muted-dark text-sm leading-relaxed">{a.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}