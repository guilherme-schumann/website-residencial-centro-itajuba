import Image from "next/image";
import { TrendingUp, Building, BadgeDollarSign, ShieldCheck } from "lucide-react";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";

const REASONS = [
  {
    icon: TrendingUp,
    title: "Alta demanda",
    text: "Forte procura por locação residencial e por temporada.",
  },
  {
    icon: Building,
    title: "Localização central",
    text: "Valorização garantida e constante no coração da cidade.",
  },
  {
    icon: BadgeDollarSign,
    title: "Ótima rentabilidade",
    text: "Retorno seguro e consistente para o seu investimento.",
  },
  {
    icon: ShieldCheck,
    title: "Tranquilidade",
    text: "Projeto moderno com acabamentos selecionados.",
  },
];

export default function Investimento() {
  return (
    <section className="relative overflow-hidden py-24 text-cream sm:py-32">
      {/* Fundo */}
      <Image
        src={asset("/images/gallery/int-sala.jpg")}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink-900/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/90" />

      <div className="container-px relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="gold-rule" />
            Um investimento inteligente
            <span className="gold-rule rotate-180" />
          </span>
          <h2 className="section-title mt-5">
            Morar bem ou{" "}
            <span className="text-gold">construir patrimônio</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/75 sm:text-lg">
            Projetado para atender o crescente mercado de locação e o público que
            busca praticidade sem abrir mão do conforto. Uma excelente
            oportunidade em uma das regiões mais valorizadas da cidade.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 80}
              className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 text-center backdrop-blur-sm"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/25">
                <r.icon className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">
                {r.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
