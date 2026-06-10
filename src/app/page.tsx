import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Planta from "@/components/Planta";
import Ambientes from "@/components/Ambientes";
import Gallery from "@/components/Gallery";
import Diferenciais from "@/components/Diferenciais";
import Localizacao from "@/components/Localizacao";
import Investimento from "@/components/Investimento";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Planta />
        <Ambientes />
        <Gallery />
        <Diferenciais />
        <Localizacao />
        <Investimento />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
