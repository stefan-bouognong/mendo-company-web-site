"use client";

import Link from "next/link";
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
    <section
      id="about"
      className="relative overflow-hidden bg-primary-800 py-28"
    >
      {/* Effets décoratifs */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[80px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Visuel gauche */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-primary p-10">
              {/* Motif décoratif */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #005CE6 0px, #005CE6 2px, transparent 2px, transparent 24px)",
                }}
              />

              {/* Lueur */}
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-brand/10 blur-[60px]" />

              <div className="relative z-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
                  Notre Vision
                </p>

                <h3 className="mb-8 text-xl font-bold leading-snug text-light">
                  Construire l&apos;un des plus grands groupes technologiques
                  africains.
                </h3>

                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="font-heading text-3xl font-bold text-brand">
                      2019
                    </p>
                    <p className="mt-1 text-xs text-muted">Fondation</p>
                  </div>

                  <div className="w-px bg-white/10" />

                  <div className="text-center">
                    <p className="font-heading text-3xl font-bold text-gold">
                      6
                    </p>
                    <p className="mt-1 text-xs text-muted">Solutions</p>
                  </div>

                  <div className="w-px bg-white/10" />

                  <div className="text-center">
                    <p className="font-heading text-3xl font-bold text-light">
                      🇨🇲
                    </p>
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
              className="absolute -right-6 -bottom-6 w-56 rounded-xl border border-white/10 bg-primary-700 p-5 shadow-2xl"
            >
              <p className="mb-1 font-heading text-sm font-bold text-light">
                🏆 Distinction
              </p>

              <p className="text-xs leading-relaxed text-muted">
                2ème place au Blue Tech Challenge — innovation à fort impact.
              </p>
            </motion.div>
          </motion.div>

          {/* Contenu droit */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <SectionTitle
              eyebrow="Qui sommes-nous ?"
              title="Une équipe africaine qui construit pour l'Afrique"
              subtitle="Créée par de jeunes entrepreneurs et ingénieurs africains, Mendo Company développe un écosystème de solutions technologiques visant à accélérer l'inclusion financière, l'éducation numérique et la transformation digitale."
              centered={false}
              light={true}
            />

            <ul className="mb-10 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-brand"
                  />

                  <span className="text-sm leading-relaxed text-muted">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="#solutions"
              className="inline-flex items-center gap-2 font-heading font-semibold text-brand transition-all duration-300 hover:gap-3"
            >
              Découvrir nos solutions →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

