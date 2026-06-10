import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: `${site.name} — Pré-lançamento no Centro de Itajubá`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "apartamento Itajubá",
    "lançamento imobiliário Itajubá",
    "Residencial Centro Itajubá",
    "investimento imobiliário",
    "apartamento centro Itajubá MG",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: `${site.name} — More no centro. Invista no futuro.`,
    description: site.description,
    siteName: site.name,
    images: [{ url: asset("/media/exterior-poster.jpg"), width: 1280, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Pré-lançamento`,
    description: site.description,
    images: [asset("/media/exterior-poster.jpg")],
  },
  icons: {
    icon: [{ url: asset("/favicon.svg"), type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E211C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
