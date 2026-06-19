"use client";
import { useState } from "react";
import SectionTitle from "@/components/layout/SectionTitle";
import SolutionCard from "@/components/solutions/SolutionCard";
import { SOLUTIONS } from "@/data/solutions";

export default function Solutions() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="solutions" className="py-28 bg-primary">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle
          eyebrow="Nos Produits"
          title="L'Écosystème Mendo"
          subtitle="Six solutions complémentaires, conçues pour répondre aux besoins réels observés sur le terrain africain."
          light
        />

        <div className="flex flex-col gap-4">
          {SOLUTIONS.map((sol, i) => (
            <SolutionCard
              key={sol.id}
              solution={sol}
              index={i}
              isOpen={selectedId === sol.id}
              onToggle={() => setSelectedId(selectedId === sol.id ? null : sol.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}