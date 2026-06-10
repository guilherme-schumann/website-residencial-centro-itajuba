import {
  ShoppingCart,
  Pill,
  GraduationCap,
  UtensilsCrossed,
  Landmark,
  Stethoscope,
  MapPin,
} from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const NEARBY = [
  { icon: ShoppingCart, label: "Supermercados", time: "2 min" },
  { icon: Pill, label: "Farmácias", time: "2 min" },
  { icon: GraduationCap, label: "Escolas e faculdades", time: "3 min" },
  { icon: UtensilsCrossed, label: "Restaurantes e cafés", time: "1 min" },
  { icon: Landmark, label: "Bancos e comércios", time: "1 a 3 min" },
  { icon: Stethoscope, label: "Hospital e clínicas", time: "4 min" },
];

export default function Localizacao() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapQuery
  )}&z=15&output=embed`;

  return (
    <section id="localizacao" className="bg-cream py-20 sm:py-28">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="gold-rule" />
            Localização privilegiada
          </span>
          <h2 className="section-title mt-5 text-ink">
            No centro de <span className="text-gold-600">Itajubá</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
            Perto de tudo que você precisa para viver com praticidade e
            qualidade de vida — mercados, farmácias, escolas, universidades,
            restaurantes, bancos e comércio em geral.
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          {/* Proximidades */}
          <Reveal className="flex flex-col">
            <ul className="grid gap-3 sm:grid-cols-2">
              {NEARBY.map((n) => (
                <li
                  key={n.label}
                  className="flex items-center gap-4 rounded-xl border border-ink/10 bg-cream-100 px-4 py-4 transition-colors hover:border-gold/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ink text-gold">
                    <n.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">
                      {n.label}
                    </p>
                    <p className="text-xs font-medium text-gold-600">
                      a {n.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-ink p-5 text-cream">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={2} />
              <p className="text-sm leading-relaxed text-cream/80">
                <span className="font-semibold text-cream">
                  Centro de Itajubá/MG.
                </span>{" "}
                Um endereço que valoriza o seu tempo e o seu investimento.
              </p>
            </div>
          </Reveal>

          {/* Mapa */}
          <Reveal delay={120}>
            <div className="h-full min-h-[340px] overflow-hidden rounded-2xl border border-ink/10 shadow-card">
              <iframe
                title="Mapa — Centro de Itajubá/MG"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
