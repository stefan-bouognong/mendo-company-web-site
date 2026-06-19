"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Solution } from "@/data/solutions";

interface SolutionCardProps {
  solution: Solution;
  index:    number;
  isOpen:   boolean;
  onToggle: () => void;
}

export default function SolutionCard({ solution, index, isOpen, onToggle }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-primary-800 border border-white/5 rounded-2xl overflow-hidden"
    >
      {/* Barre colorée left */}
      <div
        className="absolute top-0 left-0 h-full w-[4px] transition-all duration-500"
        style={{ backgroundColor: solution.color }}
      />

      <div 
        className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center gap-6 pl-4">
          {/* Logo container */}
          <div 
            className="w-16 h-16  flex items-center justify-center  shrink-0"
            // style={{ border: `1px solid ${solution.color}30` }}
          >
            {/* The user will import the PNG logo based on the solution ID (e.g. mendolearn.png) */}
            <img 
              src={`/${solution.id}.png`} 
              alt={`${solution.name} logo`}
              className="w-16 h-16 object-contain"
              onError={(e) => {
                // Fallback style if logo is not yet placed in public folder
                e.currentTarget.style.opacity = '0';
              }}
            />
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-light text-xl mb-1">
              {solution.name}
            </h3>
            <p className="text-sm font-medium" style={{ color: solution.color }}>
              {solution.tagline}
            </p>
          </div>
        </div>

        {/* Petite flex : Toggle Button */}
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0"
          style={{ backgroundColor: isOpen ? solution.color : 'rgba(255,255,255,0.05)' }}
        >
          {isOpen ? (
            <ChevronUp size={20} className="text-white" />
          ) : (
            <ChevronDown size={20} className="text-white" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 md:pl-28 pr-6 pt-0 border-t border-white/5">
              <p className="text-muted text-sm leading-relaxed mb-6 mt-6">
                {solution.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {solution.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 rounded-full border"
                    style={{ borderColor: solution.color + "40", color: solution.color }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Liens de téléchargement pour Mendo Coti et MendoLearn */}
              {(solution.id === 'mendocoti' || solution.id === 'mendolearn') && (
                <div className="mt-8">
                  {solution.id === 'mendocoti' && (
                    <p className="text-light text-sm font-medium mb-4">
                      Téléchargez application et commencez à bâtir votre épargne dès aujourd’hui. 
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-4">
                    <a href={solution.id === 'mendocoti' ? "https://linktr.ee/mendocoti" : "#"} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
                      <img src="/placestore.png" alt="Get it on Google Play" className="h-12 object-contain" />
                    </a>
                    <a href={solution.id === 'mendocoti' ? "https://linktr.ee/mendocoti" : "#"} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
                      <img src="/appsotre.png" alt="Download on the App Store" className="h-12 object-contain" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}