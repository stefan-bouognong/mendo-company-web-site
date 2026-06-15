"use client";
import { useState } from "react";
import SectionTitle from "@/components/layout/SectionTitle";
import SolutionCard from "@/components/solutions/SolutionCard";
import SolutionModal from "@/components/solutions/SolutionModal";
import { SOLUTIONS, type Solution } from "@/data/solutions";

export default function Solutions() {
  const [selected, setSelected] = useState<Solution | null>(null);

  return (
    <section id="solutions" className="py-28 bg-primary">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Nos Produits"
          title="L'Écosystème Mendo"
          subtitle="Six solutions complémentaires, conçues pour répondre aux besoins réels observés sur le terrain africain."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((sol, i) => (
            <SolutionCard
              key={sol.id}
              solution={sol}
              index={i}
              onClick={() => setSelected(sol)}
            />
          ))}
        </div>
      </div>

      <SolutionModal solution={selected} onClose={() => setSelected(null)} />
    </section>
  );
}