"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Landmark,
  GraduationCap,
  Globe,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "@/components/layout/SectionTitle";

const CATEGORIES = [
  {
    icon: Landmark,
    label: "Institutions Publiques",
    color: "#005CE6",
    items: ["Communes", "Administrations", "Établissements publics"],
  },
  {
    icon: GraduationCap,
    label: "Établissements d'Enseignement",
    color: "#6366F1",
    items: ["Universités", "Instituts supérieurs", "Centres de formation"],
  },
  {
    icon: Globe,
    label: "Organisations Internationales",
    color: "#00D9A6",
    items: ["ONG", "Programmes de développement", "Structures d'accompagnement"],
  },
  {
    icon: Briefcase,
    label: "Entreprises Privées",
    color: "#F59E0B",
    items: ["Fintech", "Entreprises technologiques", "Cabinets de conseil"],
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-primary-800 py-28"
    >
      {/* Lueur décorative */}
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6">
        <SectionTitle
          eyebrow="Écosystème"
          title="Nos Partenaires"
          subtitle="Nous collaborons avec des institutions publiques, éducatives, internationales et privées afin de maximiser notre impact."
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-primary p-7 transition-all duration-300 hover:border-white/10"
              >
                {/* Barre colorée supérieure */}
                <div
                  className="absolute top-0 left-0 h-[3px] w-full rounded-t-2xl"
                  style={{ backgroundColor: cat.color }}
                />

                {/* Effet glow au survol */}
                <div
                  className="pointer-events-none absolute top-0 left-0 right-0 h-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(to bottom, ${cat.color}12, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${cat.color}20`,
                    }}
                  >
                    <Icon
                      size={20}
                      style={{
                        color: cat.color,
                      }}
                    />
                  </div>

                  <h3 className="mb-4 font-heading text-sm font-semibold text-light">
                    {cat.label}
                  </h3>

                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <span
                          className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{
                            backgroundColor: cat.color,
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Partenariat */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="relative mt-16 overflow-hidden rounded-2xl border border-white/5 bg-primary p-10 text-center md:p-14"
        >
          {/* Lueur centrale */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[200px] w-[400px] rounded-full bg-brand/10 blur-[80px]" />
          </div>

          <div className="relative z-10">
            <p className="mb-4 text-xs font-heading font-semibold uppercase tracking-widest text-brand">
              Collaboration
            </p>

            <h3 className="mb-4 font-heading text-2xl font-bold text-light md:text-3xl">
              Vous souhaitez devenir partenaire ?
            </h3>

            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted">
              Rejoignez l'écosystème Mendo et participez à la transformation
              numérique de l'Afrique.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-3.5 font-heading font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:bg-brand-hover"
            >
              Devenir Partenaire
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

