"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";

// Ícone oficial do WhatsApp (glifo) para máxima reconhecibilidade.
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.56 4.18 1.6 6L4 29l8.16-1.56a12 12 0 0 0 3.88.64h.01c6.64 0 12.04-5.4 12.04-12.04C28.09 8.4 22.68 3 16.04 3Zm0 21.92h-.01c-1.18 0-2.34-.32-3.36-.92l-.24-.14-4.84.92.92-4.72-.16-.25a9.94 9.94 0 0 1-1.52-5.29c0-5.5 4.48-9.98 10-9.98 2.67 0 5.18 1.04 7.06 2.93a9.9 9.9 0 0 1 2.92 7.06c0 5.5-4.48 9.98-9.99 9.98Zm5.47-7.48c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-all duration-500 sm:bottom-6 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {/* Tooltip (desktop) */}
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-ink-900 py-2.5 text-sm font-medium text-cream opacity-0 shadow-soft transition-all duration-300 group-hover:max-w-[220px] group-hover:px-4 group-hover:opacity-100 lg:block">
        Fale com um corretor
      </span>

      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
        <span className="absolute inset-0 animate-ping-slow rounded-full bg-[#25D366] opacity-60" />
        <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}
