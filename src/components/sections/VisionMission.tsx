"use client";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  const cards = [
    {
      icon:  Eye,
      label: "Notre Vision",
      color: "#00D9A6",
      text:  "Construire l'un des plus grands groupes technologiques africains en développant des infrastructures numériques accessibles, inclusives et adaptées aux réalités du continent.",
    },
    {
      icon:  Target,
      label: "Notre Mission",
      color: "#F59E0B",
      text:  "Développer des solutions technologiques qui facilitent l'accès aux services financiers, l'éducation numérique, la gouvernance moderne, l'entrepreneuriat et la transformation digitale des institutions.",
    },
  ];

  return (
    <section className="py-20 bg-primary-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-primary border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"
                  style={{ backgroundColor: c.color }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: c.color + "20" }}
                >
                  <Icon size={22} style={{ color: c.color }} />
                </div>
                <h3 className="font-heading font-bold text-light text-lg mb-4">{c.label}</h3>
                <p className="text-muted leading-relaxed">{c.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}