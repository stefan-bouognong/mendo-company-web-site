"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  GraduationCap,
  Users,
  Wallet,
  Building2,
  Bot,
  Stamp,
} from "lucide-react";

import type { Solution } from "@/data/solutions";

const ICONS: Record<string, React.ElementType> = {
  GraduationCap,
  Users,
  Wallet,
  Building2,
  Bot,
  Stamp,
};

interface Props {
  solution: Solution | null;
  onClose: () => void;
}

export default function SolutionModal({
  solution,
  onClose,
}: Props) {
  useEffect(() => {
    if (solution) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [solution]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const Icon = solution ? ICONS[solution.icon] : null;

  return (
    <AnimatePresence>
      {solution && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-lg overflow-y-auto border-l border-white/10 bg-primary"
          >
            {/* Header */}
            <div className="border-b border-white/10 p-8">
              <div className="mb-6 flex items-start justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: `${solution.color}22`,
                  }}
                >
                  {Icon && (
                    <Icon
                      size={26}
                      style={{ color: solution.color }}
                    />
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-muted transition-all hover:bg-white/10 hover:text-light"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>

              <span
                className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: `${solution.color}20`,
                  color: solution.color,
                }}
              >
                {solution.category}
              </span>

              <h2 className="mb-2 text-2xl font-bold text-light">
                {solution.name}
              </h2>

              <p className="text-sm font-medium text-accent">
                {solution.tagline}
              </p>
            </div>

            {/* Body */}
            <div className="p-8">
              <p className="mb-8 leading-relaxed text-muted">
                {solution.description}
              </p>

              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-light">
                Fonctionnalités
              </h3>

              <ul className="mb-10 space-y-3">
                {solution.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{
                        color: solution.color,
                      }}
                    />

                    <span className="text-sm text-muted">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={onClose}
                className="block w-full rounded-xl py-3.5 text-center font-semibold text-primary transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                style={{
                  backgroundColor: solution.color,
                }}
              >
                Demander une démo
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}