import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { businessSchema } from "@/lib/schemas";
import QuoteProvider from "@/components/QuoteProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Renta de Contenedores Marítimos en Monterrey | VAN Contenedores",
  description:
    "Renta de contenedores marítimos de 20 y 40 pies para almacenaje temporal y transporte. Entrega en menos de 24 horas. Cobertura nacional desde 6 sucursales.",
  openGraph: {
    title: "Renta de Contenedores Marítimos | VAN Contenedores",
    description:
      "Almacenaje temporal en sitio con entrega en menos de 24 horas. Contenedores de 20 y 40 pies con cobertura nacional.",
    url: "https://vancontenedores.com/",
    siteName: "VAN Contenedores",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://vancontenedores.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable} ${plusJakarta.className}`}
    >
      <body>
        <JsonLd data={businessSchema} />
        <QuoteProvider>
          {children}
        </QuoteProvider>
      </body>
    </html>
  );
}
