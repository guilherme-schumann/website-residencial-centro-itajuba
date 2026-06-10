"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Maximize2, Ruler } from "lucide-react";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import Lightbox, { type LightboxImage } from "./Lightbox";

const HIGHLIGHTS = [
  "Dormitório confortável e bem distribuído",
  "Sala de estar integrada à cozinha",
  "Cozinha moderna em conceito aberto",
  "Espaço para refeições",
  "Banheiro completo",
  "Ampla varanda privativa",
  "Excelente iluminação e ventilação natural",
  "Projeto ideal para moradia ou investimento",
];

const PLAN_IMAGES: LightboxImage[] = [
  { src: asset("/images/planta.jpg"), alt: "Apartamento tipo 102 — planta humanizada" },
  { src: asset("/images/planta-cotas.jpg"), alt: "Apartamento tipo 102 — planta cotada" },
];

export default function Planta() {
  const [lb, setLb] = useState<number | null>(null);

  const areas = [
    { label: "Área interna", value: site.facts.areaInternal },
    { label: "Varanda privativa", value: site.facts.areaVaranda },
    { label: "Área total aprox.", value: site.facts.areaTotal, highlight: true },
  ];

  return (
    <section id="planta" className="relative overflow-hidden bg-ink py-20 text-cream sm:py-28">
      <div className="bg-grain absolute inset-0 opacity-70" />
      <div className="container-px relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Texto */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="gold-rule" />
                Apartamento Tipo · 102
              </span>
              <h2 className="section-title mt-5">
                Planta inteligente
                <br />e <span className="text-gold">funcional</span>
              </h2>
              <p className="mt-5 max-w-md text-cream/70">
                Cada metro pensado para o seu dia a dia: ambientes integrados,
                muita luz natural e uma varanda para chamar de sua.
              </p>
            </Reveal>

            {/* Áreas */}
            <Reveal delay={80} className="mt-9 grid grid-cols-3 gap-3">
              {areas.map((a) => (
                <div
                  key={a.label}
                  className={`rounded-xl border p-4 ${
                    a.highlight
                      ? "border-gold/50 bg-gold/10"
                      : "border-cream/10 bg-cream/5"
                  }`}
                >
                  <div className="font-display text-xl font-bold text-gold sm:text-2xl">
                    {a.value}
                    <span className="text-sm font-medium text-cream/60"> m²</span>
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase leading-tight tracking-wide text-cream/55">
                    {a.label}
                  </div>
                </div>
              ))}
            </Reveal>

            {/* Destaques */}
            <Reveal delay={140}>
              <h3 className="mt-10 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest2 text-cream/80">
                <Ruler className="h-4 w-4 text-gold" /> Destaques da planta
              </h3>
              <ul className="mt-5 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-cream/80">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Planta */}
          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-2xl border border-cream/10 bg-cream-100 shadow-card">
              <button
                type="button"
                onClick={() => setLb(0)}
                className="group relative block w-full"
                aria-label="Ampliar planta humanizada"
              >
                <Image
                  src={asset("/images/planta.jpg")}
                  alt="Planta do apartamento tipo 102"
                  width={1100}
                  height={1400}
                  className="h-auto w-full"
                />
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-ink-900/80 text-cream opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-5 w-5" />
                </span>
              </button>
              <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 bg-cream px-5 py-4 text-ink">
                <span className="text-sm font-semibold">
                  Apartamento Tipo 102
                </span>
                <button
                  type="button"
                  onClick={() => setLb(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-600 transition-colors hover:text-gold"
                >
                  <Ruler className="h-4 w-4" /> Ver planta cotada
                </button>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      <Lightbox
        images={PLAN_IMAGES}
        index={lb}
        onClose={() => setLb(null)}
        onIndexChange={setLb}
      />
    </section>
  );
}
