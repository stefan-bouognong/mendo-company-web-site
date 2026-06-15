"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Founder() {
  return (
    <section className="py-28 bg-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          {/* motif */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #00D9A6 0px, #00D9A6 1px, transparent 1px, transparent 30px), repeating-linear-gradient(135deg, #F59E0B 0px, #F59E0B 1px, transparent 1px, transparent 60px)",
            }}
          />

          <div className="relative z-10">
            <Quote size={40} className="text-accent/30 mb-8" />

            <blockquote className="text-light text-xl md:text-2xl font-heading font-medium leading-relaxed mb-10">
              "Chez Mendo, nous croyons que l'Afrique doit construire ses propres infrastructures
              technologiques pour répondre efficacement à ses défis économiques et sociaux.
              Notre ambition n'est pas seulement de créer des applications, mais de bâtir des
              écosystèmes capables de{" "}
              <span className="text-accent">transformer durablement la vie des populations</span>,
              des entreprises et des institutions."
            </blockquote>

            <div className="flex items-center gap-4">
              {/* Avatar initiales */}
              <div className="w-14 h-14 bg-accent/20 border-2 border-accent/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-accent text-lg">CH</span>
              </div>
              <div>
                <p className="text-light font-heading font-bold">Cédric Hugues</p>
                <p className="text-muted text-sm">Président Directeur Général — Mendo Company SAS</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}