"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";
import Lightbox, { type LightboxImage } from "./Lightbox";

const IMAGES: (LightboxImage & { tag: string })[] = [
  { src: asset("/images/gallery/int-sala.jpg"), alt: "Sala de estar integrada", tag: "Living" },
  { src: asset("/images/gallery/ext-01.jpg"), alt: "Fachada do empreendimento", tag: "Fachada" },
  { src: asset("/images/gallery/int-cozinha.jpg"), alt: "Cozinha em conceito aberto", tag: "Cozinha" },
  { src: asset("/images/gallery/int-jantar.jpg"), alt: "Espaço para refeições", tag: "Jantar" },
  { src: asset("/images/gallery/ext-02.jpg"), alt: "Vista da fachada e entorno", tag: "Exterior" },
];

export default function Gallery() {
  const [lb, setLb] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-cream-200 py-20 sm:py-28">
      <div className="container-px">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">
              <span className="gold-rule" />
              Galeria
            </span>
            <h2 className="section-title mt-5 text-ink">
              Imagens do <span className="text-gold-600">projeto</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink/55">
            Perspectivas ilustrativas dos ambientes e da fachada. Toque para
            ampliar.
          </p>
        </Reveal>

        {/* Mosaico */}
        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4 lg:gap-4">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 60}
              className={
                i === 0
                  ? "col-span-2 row-span-2 lg:col-span-2"
                  : i === 1
                  ? "lg:col-span-2"
                  : ""
              }
            >
              <button
                type="button"
                onClick={() => setLb(i)}
                aria-label={`Ampliar: ${img.alt}`}
                className="group relative h-full w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <span className="absolute left-3 top-3 rounded-full bg-ink-900/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream/90 backdrop-blur-sm">
                  {img.tag}
                </span>
                <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-cream/15 text-cream opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={IMAGES}
        index={lb}
        onClose={() => setLb(null)}
        onIndexChange={setLb}
      />
    </section>
  );
}
