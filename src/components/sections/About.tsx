"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import SectionTitle from "@/components/layout/SectionTitle";

const POINTS = [
  "Accès aux services financiers pour tous",
  "Éducation numérique de qualité",
  "Gouvernance moderne et transparente",
  "Soutien à l'entrepreneuriat africain",
  "Transformation digitale des institutions",
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visuel */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-primary p-10">
              {/* Motif décoratif */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #00D9A6 0px, #00D9A6 2px, transparent 2px, transparent 24px)",
                }}
              />

              <div className="relative z-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                  Notre Vision
                </p>

                <h3 className="mb-8 text-xl font-bold leading-snug text-light">
                  Construire l&apos;un des plus grands groupes technologiques
                  africains.
                </h3>

                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent">2019</p>
                    <p className="mt-1 text-xs text-muted">Fondation</p>
                  </div>

                  <div className="w-px bg-white/10" />

                  <div className="text-center">
                    <p className="text-3xl font-bold text-gold">6</p>
                    <p className="mt-1 text-xs text-muted">Solutions</p>
                  </div>

                  <div className="w-px bg-white/10" />

                  <div className="text-center">
                    <p className="text-3xl font-bold text-light">🇨🇲</p>
                    <p className="mt-1 text-xs text-muted">Cameroun</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte flottante */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 w-56 rounded-xl border border-dark/5 bg-white p-5 shadow-xl"
            >
              <p className="mb-1 text-sm font-bold text-dark">
                🏆 Distinction
              </p>

              <p className="text-xs leading-relaxed text-muted-dark">
                2ème place au Blue Tech Challenge récompensant les projets
                innovants à fort impact.
              </p>
            </motion.div>
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <SectionTitle
              eyebrow="Qui sommes-nous ?"
              title="Une équipe africaine qui construit pour l’Afrique"
              subtitle="Créée par de jeunes entrepreneurs et ingénieurs africains, Mendo Company développe un écosystème de solutions technologiques visant à accélérer l’inclusion financière, l’éducation numérique et la transformation digitale."
              centered={false}
              light={false}
            />

            <ul className="mb-10 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-accent"
                  />

                  <span className="text-sm leading-relaxed text-dark/80">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#solutions"
              className="inline-flex items-center gap-2 font-semibold text-accent transition-all duration-300 hover:gap-3"
            >
              Découvrir nos solutions
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}