"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

const STATS = [
  { value: "100K€+", label: "Flux traités" },
  { value: "6 000+", label: "Utilisateurs" },
  { value: "6",      label: "Solutions actives" },
];

const Hero: React.FC = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-20"
    >
      {/* ── Fond ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grille fine couleur brand */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#005CE6 1px, transparent 1px), linear-gradient(90deg, #005CE6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Lueur principale bleue */}
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-brand/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />

        {/* Motif kente diagonale */}
        <div
          className="absolute right-0 top-0 h-full w-[45%] opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #005CE6 0px, #005CE6 2px, transparent 2px, transparent 20px), repeating-linear-gradient(45deg, #F59E0B 0px, #F59E0B 1px, transparent 1px, transparent 40px)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Colonne gauche ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand/10 border border-brand/25 rounded-full px-4 py-1.5 mb-8"
            >
              <Sparkles size={14} className="text-brand" />
              <span className="text-brand text-sm font-heading font-semibold tracking-wide">
                Holding Technologique Africaine
              </span>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-light leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.75rem)" }}
            >
              Construire les{" "}
              <span className="relative inline-block">
                <span className="text-brand">infrastructures</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand/40 rounded-full" />
              </span>{" "}
              numériques de l'
              <span className="text-gold">Afrique</span>.
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted text-lg leading-relaxed mb-10 max-w-xl"
            >
              Finance digitale, éducation, intelligence artificielle,
              gouvernance numérique — des solutions conçues pour les réalités
              africaines et déployées au Cameroun.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a href="#about">
                <Button variant="brand" size="lg">
                  Découvrir le Groupe
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>
              <a href="#solutions">
                <Button variant="outline-brand" size="lg">Nos Solutions</Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-heading font-bold text-light">{s.value}</p>
                  <p className="text-muted text-sm mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Colonne droite : carte ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Carte principale */}
              <div className="bg-primary-800 border border-white/10 rounded-2xl p-8 w-80 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  {/* Mini logo dans la carte */}
                  <div className="w-10 h-10 bg-brand/15 border border-brand/20 rounded-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/logo.png"
                      alt="mendo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-light font-heading font-semibold text-sm">Écosystème Mendo</p>
                    <p className="text-muted text-xs">6 solutions actives</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    { name: "MendoLearn",        color: "#6366F1" },
                    { name: "Mendo Coti",         color: "#00D9A6" },
                    { name: "Mendo Cash",         color: "#F59E0B" },
                    { name: "Mendo Core Banking", color: "#005CE6" },
                    { name: "MIA",                color: "#8B5CF6" },
                    { name: "Estamp",             color: "#EC4899" },
                  ].map((sol) => (
                    <div
                      key={sol.name}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-brand/10 transition-colors group"
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: sol.color }}
                      />
                      <span className="text-light/80 text-sm font-medium group-hover:text-light transition-colors">
                        {sol.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badge flottant */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gold text-dark rounded-xl px-4 py-2 shadow-lg"
              >
                <p className="text-xs font-heading font-bold">🏆 Blue Tech Challenge</p>
                <p className="text-xs font-medium opacity-70">2ème place</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Séparateur bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
    </section>
  );
};

export default Hero;