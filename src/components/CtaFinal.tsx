import { MessageCircle, MapPin, Sparkles } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import Reveal from "./Reveal";

export default function CtaFinal() {
  return (
    <section id="contato" className="bg-cream-200 px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-content">
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="bg-grain absolute inset-0 opacity-70" />
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #C8943D, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #C8943D, transparent 70%)" }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest2 text-gold-300">
              <Sparkles className="h-3.5 w-3.5" />
              Condições especiais de pré-lançamento
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-cream sm:text-5xl">
              Seu novo endereço{" "}
              <span className="text-gold">começa aqui</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              Cadastre-se e receba a tabela de valores e as condições exclusivas
              de lançamento. Unidades limitadas — garanta a sua.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
                Falar no WhatsApp
              </a>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-cream/70">
                <MapPin className="h-4 w-4 text-gold" />
                {site.location}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
