import { site } from "@/lib/site";

type LogoProps = {
  /** "light" para fundos escuros (texto creme), "dark" para fundos claros */
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-cream" : "text-ink";
  const subColor = variant === "light" ? "text-cream/60" : "text-ink/55";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-gold/50 bg-ink-900 font-display text-lg font-bold text-gold">
        CI
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[15px] font-bold tracking-wide ${textColor}`}
        >
          Centro Itajubá
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold uppercase tracking-widest2 ${subColor}`}
        >
          Residencial
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
