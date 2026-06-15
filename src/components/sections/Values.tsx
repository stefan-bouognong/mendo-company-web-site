"use client";
import { motion } from "framer-motion";
import { Lightbulb, Star, Heart, Shield, TrendingUp } from "lucide-react";
import SectionTitle from "@/components/layout/SectionTitle";
import { VALUES } from "@/data/values";

const ICONS: Record<string, React.ElementType> = {
  Lightbulb, Star, Heart, Shield, TrendingUp,
};

export default function Values() {
  return (
    <section id="values" className="py-28 bg-light">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Ce qui nous guide"
          title="Nos Valeurs"
          subtitle="Cinq principes qui orientent chaque décision et chaque ligne de code chez Mendo."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {VALUES.map((v, i) => {
            const Icon = ICONS[v.icon];
            const colors = ["#00D9A6","#F59E0B","#EC4899","#6366F1","#3B82F6"];
            const color  = colors[i % colors.length];

            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center p-8 bg-white rounded-2xl border border-dark/5 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: color + "1A" }}
                >
                  <Icon size={24} style={{ color }} />
                </div>
                <h3 className="font-heading font-bold text-dark mb-3">{v.title}</h3>
                <p className="text-muted-dark text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}