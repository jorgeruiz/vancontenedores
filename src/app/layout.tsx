import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { businessSchema } from "@/lib/schemas";
import Script from "next/script";
import QuoteProvider from "@/components/QuoteProvider";
import "./globals.css";

const GTM_ID = "GTM-W2BQDP2Z";

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={businessSchema} />
        <QuoteProvider>
          {children}
        </QuoteProvider>
      </body>
    </html>
  );
}
