"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  Users,
  Building,
} from "lucide-react";

const FEATURES = [
  {
    icon: Banknote,
    title: "Épargne & Crédit",
    desc: "Solutions modernes de financement pour particuliers et PME.",
  },
  {
    icon: Users,
    title: "Finance Inclusive",
    desc: "Services accessibles aux associations et coopératives.",
  },
  {
    icon: Building,
    title: "Infrastructure Mendo",
    desc: "Adossé aux plateformes technologiques du groupe.",
  },
];

export default function Subsidiary() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      {/* Effet lumineux */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              Notre Filiale
            </span>

            <h2 className="mb-2 text-3xl font-bold text-light md:text-4xl">
              Mendo Finances
            </h2>

            <h2 className="mb-6 text-3xl font-bold text-accent md:text-4xl">
              Coop-CA
            </h2>

            <p className="mb-8 max-w-lg leading-relaxed text-muted">
              Le bras financier du groupe. Sa mission est de développer des
              services financiers inclusifs destinés aux particuliers,
              entrepreneurs, associations, coopératives et PME, en s'appuyant
              sur les infrastructures technologiques développées par Mendo
              Company SAS.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold text-accent transition-all duration-300 hover:gap-3"
            >
              En savoir plus
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Cartes */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="grid gap-4"
          >
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gold/15">
                  <Icon size={18} className="text-gold" />
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold text-light">
                    {title}
                  </h3>

                  <p className="text-xs leading-relaxed text-muted">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}