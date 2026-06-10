import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Identidade visual — Residencial Centro Itajubá
        ink: {
          DEFAULT: "#0E211C", // verde-petróleo escuro (fundo principal)
          900: "#0A1714",
          800: "#10271F",
          700: "#163129",
          soft: "#1B3A31",
        },
        cream: {
          DEFAULT: "#F4EEE2",
          100: "#FAF6EE",
          200: "#EFE7D7",
          300: "#E5DAC4",
        },
        gold: {
          DEFAULT: "#C8943D",
          300: "#E2B45F",
          400: "#D6A24C",
          600: "#A9792B",
          700: "#8C6322",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(10, 23, 20, 0.55)",
        card: "0 22px 60px -28px rgba(10, 23, 20, 0.45)",
        gold: "0 14px 40px -12px rgba(200, 148, 61, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ping-slow": {
          "75%, 100%": { transform: "scale(1.9)", opacity: "0" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "ping-slow": "ping-slow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite",
        "scroll-hint": "scroll-hint 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
