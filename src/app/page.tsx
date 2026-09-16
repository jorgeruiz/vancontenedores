import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema, serviceSchemas } from "@/lib/schemas";
import Navbar from "@/components/Navbar";
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
