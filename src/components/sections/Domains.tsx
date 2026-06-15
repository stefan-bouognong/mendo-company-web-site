"use client";
import { motion } from "framer-motion";
import { CreditCard, BookOpen, Landmark, Brain, Code2 } from "lucide-react";
import SectionTitle from "@/components/layout/SectionTitle";
import { DOMAINS } from "@/data/domains";

const ICONS: Record<string, React.ElementType> = {
  CreditCard, BookOpen, Landmark, Brain, Code2,
};

export default function Domains() {
  return (
    <section id="domains" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Expertise"
          title="Nos Domaines d'Intervention"
          subtitle="Cinq piliers technologiques pour transformer les secteurs clés de l'économie africaine."
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
                className="group bg-light border border-dark/5 rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: d.color + "1A" }}
                >
                  <Icon size={22} style={{ color: d.color }} />
                </div>
                <h3 className="font-heading font-bold text-dark text-sm mb-3">{d.label}</h3>
                <p className="text-muted-dark text-xs leading-relaxed">{d.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}