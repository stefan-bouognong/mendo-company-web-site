"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Founder() {
  return (
    <section className="py-28 bg-primary-800 relative overflow-hidden">

      {/* Lueurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-brand/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand/20 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-primary-800 aspect-square max-w-md mx-auto">
              <img 
                src="/director.png" 
                alt="Cédric Hugues" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}
              />
            </div>
          </motion.div>

          {/* Cadre du mot (à droite) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-primary border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            {/* Motif kente diagonal */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #005CE6 0px, #005CE6 1px, transparent 1px, transparent 32px), " +
                  "repeating-linear-gradient(135deg, #F59E0B 0px, #F59E0B 1px, transparent 1px, transparent 64px)",
              }}
            />

            {/* Lueur coin */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/8 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">

              {/* Icône quote */}
              <div className="w-12 h-12 bg-brand/15 border border-brand/20 rounded-2xl flex items-center justify-center mb-8">
                <Quote size={22} className="text-brand" />
              </div>

              {/* Citation */}
              <blockquote className="text-light text-lg md:text-xl font-heading font-medium leading-relaxed mb-10">
                "Chez Mendo, nous croyons que l'Afrique doit construire ses propres
                infrastructures technologiques pour répondre efficacement à ses défis
                économiques et sociaux. Notre ambition n'est pas seulement de créer
                des applications, mais de bâtir des écosystèmes capables de{" "}
                <span className="text-brand">
                  transformer durablement la vie des populations
                </span>
                , des entreprises et des institutions."
              </blockquote>

              {/* Séparateur */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-white/8" />
                <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                <div className="h-px flex-1 bg-white/8" />
              </div>

              {/* Auteur */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand/15 border-2 border-brand/25 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-brand text-lg">CH</span>
                </div>
                <div>
                  <p className="text-light font-heading font-bold">Cédric Hugues</p>
                  <p className="text-muted text-sm mt-0.5">
                    Président Directeur Général — Mendo Company SAS
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}