import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema, serviceSchemas } from "@/lib/schemas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import ContainerSelector from "@/components/ContainerSelector";
import Construction from "@/components/Construction";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

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
        <Coverage />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
