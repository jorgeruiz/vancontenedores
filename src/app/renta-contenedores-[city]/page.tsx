import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

interface CityData {
  name: string;
  region: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
}

const CITIES: Record<string, CityData> = {
  monterrey: {
    name: "Monterrey",
    region: "Nuevo León",
    subtitle: "Almacenaje temporal en sitio para constructoras y empresas en el área metropolitana de Monterrey. Entrega en menos de 24 horas.",
    metaTitle: "Renta de Contenedores Marítimos en Monterrey | VAN Contenedores",
    metaDescription: "Renta de contenedores marítimos de 20 y 40 pies en Monterrey y área metropolitana. Entrega en menos de 24 horas. Almacenaje temporal para constructoras y empresas.",
  },
  queretaro: {
    name: "Querétaro",
    region: "Querétaro",
    subtitle: "Contenedores marítimos para almacenaje y transporte en Querétaro. Entrega rápida desde nuestra sucursal local.",
    metaTitle: "Renta de Contenedores Marítimos en Querétaro | VAN Contenedores",
    metaDescription: "Renta de contenedores marítimos de 20 y 40 pies en Querétaro. Entrega en menos de 24 horas. Almacenaje temporal para constructoras y empresas.",
  },
  guadalajara: {
    name: "Guadalajara",
    region: "Jalisco",
    subtitle: "Almacenaje temporal y transporte con contenedores marítimos en Guadalajara y zona metropolitana. Sucursal local con entrega inmediata.",
    metaTitle: "Renta de Contenedores Marítimos en Guadalajara | VAN Contenedores",
    metaDescription: "Renta de contenedores marítimos de 20 y 40 pies en Guadalajara y zona metropolitana. Entrega en menos de 24 horas desde nuestra sucursal en Jalisco.",
  },
  "san-luis-potosi": {
    name: "San Luis Potosí",
    region: "San Luis Potosí",
    subtitle: "Contenedores marítimos para almacenaje en obra y bodega temporal en San Luis Potosí. Entrega rápida con sucursal local.",
    metaTitle: "Renta de Contenedores Marítimos en San Luis Potosí | VAN Contenedores",
    metaDescription: "Renta de contenedores marítimos de 20 y 40 pies en San Luis Potosí. Entrega en menos de 24 horas. Almacenaje temporal para constructoras y empresas.",
  },
  altamira: {
    name: "Altamira",
    region: "Tamaulipas",
    subtitle: "Contenedores marítimos para almacenaje y logística portuaria en Altamira y Tampico. Sucursal estratégica en zona portuaria.",
    metaTitle: "Renta de Contenedores Marítimos en Altamira | VAN Contenedores",
    metaDescription: "Renta de contenedores marítimos de 20 y 40 pies en Altamira y Tampico. Entrega en menos de 24 horas desde nuestra sucursal en zona portuaria.",
  },
  merida: {
    name: "Mérida",
    region: "Yucatán",
    subtitle: "Almacenaje temporal y contenedores marítimos en Mérida y península de Yucatán. Cobertura regional con entrega rápida.",
    metaTitle: "Renta de Contenedores Marítimos en Mérida | VAN Contenedores",
    metaDescription: "Renta de contenedores marítimos de 20 y 40 pies en Mérida, Yucatán. Entrega en menos de 24 horas. Almacenaje temporal para constructoras y empresas.",
  },
};

export async function generateStaticParams() {
  return Object.keys(CITIES).map((city) => ({ city }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city } = await params;
  const data = CITIES[city];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://vancontenedores.com/renta-contenedores-${city}/`,
      siteName: "VAN Contenedores",
      type: "website",
      locale: "es_MX",
    },
    alternates: {
      canonical: `https://vancontenedores.com/renta-contenedores-${city}/`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = CITIES[city];
  if (!data) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `VAN Contenedores ${data.name}`,
    description: data.metaDescription,
    url: `https://vancontenedores.com/renta-contenedores-${city}/`,
    telephone: "+52-81-8469-2252",
    address: {
      "@type": "PostalAddress",
      addressLocality: data.name,
      addressRegion: data.region,
      addressCountry: "MX",
    },
    areaServed: { "@type": "City", name: data.name },
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={serviceSchemas} />
      <Navbar />
      <main>
        <Hero city={data.name} subtitle={data.subtitle} />
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
