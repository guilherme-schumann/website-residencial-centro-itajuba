"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { whatsappUrl } from "@/lib/site";

const NAV = [
  { label: "O Empreendimento", href: "#empreendimento" },
  { label: "Planta", href: "#planta" },
  { label: "Ambientes", href: "#ambientes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Localização", href: "#localizacao" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-cream/10 bg-ink-900/90 backdrop-blur-md py-2.5"
          : "py-4"
      }`}
    >
      <div className="container-px flex items-center justify-between">
        <a href="#topo" aria-label="Início" className="shrink-0">
          <Logo variant="light" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !px-5 !py-2.5"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
            Quero saber mais
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-cream/15 text-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-cream/10 bg-ink-900/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-px flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-cream/85 transition-colors hover:bg-cream/5 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold mt-3 w-full"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
