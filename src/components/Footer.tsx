import { MessageCircle, MapPin, Instagram, Mail } from "lucide-react";
import Logo from "./Logo";
import { site, whatsappUrl } from "@/lib/site";

const NAV = [
  { label: "O Empreendimento", href: "#empreendimento" },
  { label: "Planta", href: "#planta" },
  { label: "Ambientes", href: "#ambientes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-cream">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              Pré-lançamento de apartamentos compactos e inteligentes no centro
              de Itajubá/MG. More no centro, invista no futuro.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-lg border border-cream/15 text-cream/80 transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              {site.instagram && (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-cream/15 text-cream/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {site.email && (
                <a
                  href={`mailto:${site.email}`}
                  aria-label="E-mail"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-cream/15 text-cream/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Mail className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold">
              Navegação
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-cream/65 transition-colors hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold">
              Localização
            </h3>
            <p className="mt-5 flex items-start gap-2 text-sm text-cream/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Centro de Itajubá — Minas Gerais
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-6 !px-5 !py-2.5"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
              Tenho interesse
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-cream/10 pt-7">
          <p className="text-xs leading-relaxed text-cream/45">
            Imagens meramente ilustrativas. Projeto em aprovação. As informações,
            metragens e perspectivas têm caráter informativo e podem sofrer
            alterações. Este material não constitui oferta ou contrato.
          </p>
          <div className="mt-5 flex flex-col items-center justify-between gap-2 text-xs text-cream/50 sm:flex-row">
            <p>
              © {year} {site.name}. Todos os direitos reservados.
            </p>
            <p>Centro • Itajubá/MG</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
