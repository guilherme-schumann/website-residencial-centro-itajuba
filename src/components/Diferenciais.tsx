import {
  Building2,
  MapPin,
  Car,
  Sofa,
  Wallet,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: Building2,
    title: "Apenas 20 apartamentos",
    text: "Um condomínio exclusivo, com 5 unidades por pavimento e mais privacidade.",
  },
  {
    icon: MapPin,
    title: "Localização privilegiada",
    text: "No coração do centro de Itajubá, perto de tudo o que você precisa.",
  },
  {
    icon: Car,
    title: "Vagas de garagem",
    text: "Vagas disponíveis para unidades selecionadas — mais comodidade.",
  },
  {
    icon: Sofa,
    title: "Mobiliado e planejado",
    text: "Possibilidade de aquisição da unidade mobiliada e planejada.",
  },
  {
    icon: Wallet,
    title: "Potencial de locação",
    text: "Excelente para locação residencial ou por temporada.",
  },
  {
    icon: TrendingUp,
    title: "Alta valorização",
    text: "Grande perspectiva de valorização imobiliária na região.",
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-ink-900 py-20 text-cream sm:py-28"
    >
      <div className="bg-grain absolute inset-0 opacity-70" />
      <div
        className="absolute -left-32 top-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8943D, transparent 70%)" }}
      />
      <div className="container-px relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="gold-rule" />
            Diferenciais do empreendimento
          </span>
          <h2 className="section-title mt-5">
            Um investimento que{" "}
            <span className="text-gold">faz sentido</span>
          </h2>
          <p className="mt-5 text-cream/70">
            Tudo o que torna o Residencial Centro Itajubá uma oportunidade única
            para morar ou investir.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 70}
              className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-cream/[0.06]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                <item.icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Faixa destaque */}
        <Reveal delay={120} className="mt-8">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent px-6 py-7 text-center sm:flex-row sm:justify-center sm:gap-8 sm:text-left">
            <p className="font-display text-2xl font-bold text-gold sm:text-3xl">
              20 unidades exclusivas
            </p>
            <span className="hidden h-8 w-px bg-gold/30 sm:block" />
            <p className="text-cream/80">
              5 apartamentos por pavimento · projeto moderno e selecionado
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
