import { Bed, Sofa, CookingPot, Trees, Bath, Sun } from "lucide-react";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";

const ROOMS = [
  {
    icon: Bed,
    title: "Dormitório amplo",
    text: "Espaço confortável para cama de casal e armário planejado.",
  },
  {
    icon: Sofa,
    title: "Sala integrada",
    text: "Ambiente acolhedor e integrado à cozinha, com mais amplitude.",
  },
  {
    icon: CookingPot,
    title: "Cozinha funcional",
    text: "Conceito aberto, prática e moderna, com ótimo aproveitamento.",
  },
  {
    icon: Trees,
    title: "Varanda espaçosa",
    text: "Ampla varanda privativa de 6,15 m², ideal para relaxar e receber.",
  },
  {
    icon: Bath,
    title: "Banheiro completo",
    text: "Acabamentos de qualidade para o seu dia a dia.",
  },
  {
    icon: Sun,
    title: "Luz e ventilação",
    text: "Excelente iluminação e ventilação natural em todos os ambientes.",
  },
];

export default function Ambientes() {
  return (
    <section id="ambientes" className="bg-cream py-20 sm:py-28">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="gold-rule" />
            Ambientes
          </span>
          <h2 className="section-title mt-5 text-ink">
            Pensados para o{" "}
            <span className="text-gold-600">seu conforto</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
            Do dormitório à varanda, cada ambiente foi desenhado para unir
            bem-estar, praticidade e uma estética contemporânea.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Vídeo interior */}
          <Reveal className="order-1">
            <div className="relative overflow-hidden rounded-2xl border border-ink/10 shadow-card">
              <video
                className="aspect-[4/3] h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={asset("/media/interior-poster.jpg")}
                aria-label="Vídeo do interior do apartamento decorado"
              >
                <source src={asset("/media/interior.mp4")} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cream/10" />
              <div className="absolute bottom-4 left-4 rounded-full bg-ink-900/75 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wide text-cream/85 backdrop-blur-sm">
                Tour pelo interior decorado
              </div>
            </div>
          </Reveal>

          {/* Lista de ambientes */}
          <div className="order-2 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {ROOMS.map((r, i) => (
              <Reveal key={r.title} delay={i * 70} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-gold">
                  <r.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
