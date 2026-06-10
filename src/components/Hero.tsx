import { MapPin, MessageCircle, ChevronDown } from "lucide-react";
import { asset } from "@/lib/asset";
import { site, whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink-900"
    >
      {/* Vídeo de fundo (exterior) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={asset("/media/exterior-poster.jpg")}
        aria-hidden="true"
      >
        <source src={asset("/media/exterior.mp4")} type="video/mp4" />
      </video>

      {/* Overlays para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/55 to-ink-900/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/30 to-transparent" />
      <div className="absolute inset-0 bg-grain opacity-60" />

      <div className="container-px relative z-10 w-full pt-28 pb-16">
        <div className="max-w-2xl">
          {/* Badge pré-lançamento */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-gold" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-widest2 text-gold-300">
              Pré-lançamento
            </span>
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-widest2 text-cream/70">
            Residencial
          </p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-[0.95] text-cream sm:text-6xl lg:text-7xl">
            Centro
            <br />
            <span className="text-gold">Itajubá</span>
          </h1>

          <p className="mt-6 font-display text-xl font-medium text-cream sm:text-2xl">
            More no centro.{" "}
            <span className="text-gold-300">Invista no futuro.</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Um empreendimento moderno, pensado para quem busca praticidade,
            conforto e excelente potencial de valorização — apartamentos
            compactos e inteligentes no coração de Itajubá.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
              Falar com um corretor
            </a>
            <a href="#planta" className="btn-outline">
              Conhecer o apartamento
            </a>
          </div>

          {/* Localização */}
          <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cream/80">
            <MapPin className="h-4 w-4 text-gold" strokeWidth={2.2} />
            {site.location}
          </div>
        </div>

        {/* Stats rápidos */}
        <div className="mt-12 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/5 backdrop-blur-sm">
          {[
            { value: site.facts.units, label: "Apartamentos exclusivos" },
            { value: site.facts.perFloor, label: "Unidades por pavimento" },
            { value: `${site.facts.areaTotal}m²`, label: "Área total aprox." },
          ].map((s) => (
            <div key={s.label} className="bg-ink-900/40 px-4 py-5 text-center">
              <div className="font-display text-2xl font-bold text-gold sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-cream/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#empreendimento"
        aria-label="Rolar para baixo"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <ChevronDown className="h-7 w-7 animate-scroll-hint text-cream/70" />
      </a>
    </section>
  );
}
