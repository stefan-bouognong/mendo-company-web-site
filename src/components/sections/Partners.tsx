"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  GraduationCap,
  Globe,
  Briefcase,
} from "lucide-react";

import SectionTitle from "@/components/layout/SectionTitle";

const CATEGORIES = [
  {
    icon: Landmark,
    label: "Institutions Publiques",
    items: [
      "Communes",
      "Administrations",
      "Établissements publics",
    ],
  },
  {
    icon: GraduationCap,
    label: "Établissements d'Enseignement",
    items: [
      "Universités",
      "Instituts supérieurs",
      "Centres de formation",
    ],
  },
  {
    icon: Globe,
    label: "Organisations Internationales",
    items: [
      "ONG",
      "Programmes de développement",
      "Structures d'accompagnement",
    ],
  },
  {
    icon: Briefcase,
    label: "Entreprises Privées",
    items: [
      "Fintech",
      "Entreprises technologiques",
      "Cabinets de conseil",
    ],
  },
];

export default function Partners() {
  return (
    <section id="partners" className="bg-light py-28">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Écosystème"
          title="Nos Partenaires"
          subtitle="Nous collaborons avec des institutions publiques, éducatives, internationales et privées afin de maximiser notre impact."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-dark/5 bg-white p-7 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Icon size={20} className="text-accent" />
                </div>

                <h3 className="mb-4 text-sm font-semibold text-dark">
                  {category.label}
                </h3>

                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-dark"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="mt-16 rounded-2xl bg-primary p-10 text-center"
        >
          <h3 className="mb-3 text-xl font-bold text-light">
            Vous souhaitez devenir partenaire ?
          </h3>

          <p className="mx-auto mb-7 max-w-xl text-sm text-muted">
            Rejoignez l'écosystème Mendo et participez à la transformation
            numérique de l'Afrique.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-semibold text-primary transition-all duration-300 hover:scale-105"
          >
            Devenir Partenaire
          </a>
        </motion.div>
      </div>
    </section>
  );
}