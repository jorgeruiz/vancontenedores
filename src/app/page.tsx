import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema, serviceSchemas } from "@/lib/schemas";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Renta de Contenedores Marítimos | VAN Contenedores",
  description:
    "Renta de contenedores marítimos de 20 y 40 pies para almacenaje temporal y transporte. Entrega en menos de 24 horas. Cobertura nacional desde 6 sucursales.",
  openGraph: {
    title: "Renta de Contenedores Marítimos | VAN Contenedores",
    description:
      "Almacenaje temporal en sitio con entrega en menos de 24 horas. Contenedores de 20 y 40 pies con cobertura nacional.",
    url: "https://vancontenedores.com/",
  },
  alternates: {
    canonical: "https://vancontenedores.com/",
  },
};
import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import ContainerSelector from "@/components/ContainerSelector";
import Construction from "@/components/Construction";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      <JsonLd data={serviceSchemas} />
      <Navbar />
      <main>
        <Hero />
        <Differentiators />
        <ContainerSelector />
        <Construction />
        <Gallery />
        <Coverage />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppBubble />
    </>
  );
}
