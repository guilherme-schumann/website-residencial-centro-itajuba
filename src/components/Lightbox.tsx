"use client";

import { useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = { src: string; alt: string };

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const open = index !== null;
  const many = images.length > 1;

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  if (!open || index === null) return null;
  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/95 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      {many && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Próxima"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl"
      />

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-ink-900/70 px-4 py-1.5 text-xs font-medium text-cream/80">
        {img.alt}
        {many && (
          <span className="ml-2 text-cream/50">
            {index + 1}/{images.length}
          </span>
        )}
      </div>
    </div>
  );
}
