import Image from "next/image";
import { Building2, TrendingUp, KeyRound } from "lucide-react";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: Building2,
    title: "Compacto e inteligente",
    text: "Plantas que aproveitam cada metro com conforto e funcionalidade.",
  },
  {
    icon: KeyRound,
    title: "Pronto para morar ou alugar",
    text: "Opção de unidades mobiliadas e planejadas, prontas para uso.",
  },
  {
    icon: TrendingUp,
    title: "Alto potencial de valorização",
    text: "Localização central com forte demanda de locação e temporada.",
  },
];

export default function Intro() {
  return (
    <section id="empreendimento" className="bg-cream py-20 sm:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texto */}
          <Reveal>
            <span className="eyebrow">
              <span className="gold-rule" />O Empreendimento
            </span>
            <h2 className="section-title mt-5 text-ink">
              More no centro.
              <br />
              <span className="text-gold-600">Invista no futuro.</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg">
              <p>
                Um empreendimento moderno, pensado para quem busca praticidade,
                conforto e excelente potencial de valorização.
              </p>
              <p>
                Apartamentos compactos e inteligentes, desenvolvidos para
                oferecer o máximo aproveitamento dos espaços, em uma localização
                privilegiada no centro de Itajubá.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              {[
                { k: "20", v: "Unidades exclusivas" },
                { k: "5", v: "Por pavimento" },
                { k: "100%", v: "No centro" },
              ].map((item) => (
                <div key={item.v}>
                  <dt className="font-display text-3xl font-bold text-ink sm:text-4xl">
                    {item.k}
                  </dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/55">
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Imagem */}
          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
              <Image
                src={asset("/images/gallery/ext-02.jpg")}
                alt="Fachada do Residencial Centro Itajubá"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
            </div>
            {/* Card flutuante */}
            <div className="absolute -bottom-6 -left-4 max-w-[220px] rounded-xl border border-gold/20 bg-ink-900 p-5 shadow-soft sm:-left-6">
              <p className="font-display text-2xl font-bold text-gold">
                38,16 m²
              </p>
              <p className="mt-1 text-xs leading-snug text-cream/70">
                de área total aproximada, com varanda privativa
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pilares */}
        <div className="mt-24 grid gap-5 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="group rounded-2xl border border-ink/10 bg-cream-100 p-7 transition-colors hover:border-gold/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-gold transition-transform group-hover:scale-105">
                <p.icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
