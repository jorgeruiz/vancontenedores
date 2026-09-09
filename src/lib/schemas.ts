export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/MovingCompany",
  name: "VAN Contenedores",
  description:
    "Renta de contenedores maritimos para almacenaje temporal en sitio, bodega movil y transporte de mercancias. Cobertura nacional con entrega en menos de 24 horas.",
  url: "https://vancontenedores.com/",
  telephone: "+52-81-8469-2252",
  email: "ventas@vancontenedores.com",
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Monterrey",
    addressRegion: "Nuevo Leon",
    addressCountry: "MX",
  },
  areaServed: [
    { "@type": "City", name: "Monterrey" },
    { "@type": "City", name: "Veracruz" },
    { "@type": "City", name: "Altamira" },
    { "@type": "City", name: "Merida" },
    { "@type": "City", name: "Tijuana" },
    { "@type": "City", name: "Queretaro" },
    { "@type": "City", name: "San Luis Potosi" },
    { "@type": "City", name: "Guadalajara" },
  ],
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Para que se utiliza un contenedor en renta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En VAN CONTENEDORES rentamos contenedores maritimos principalmente para el uso de bodega temporal, bodega movil o almacenaje temporal en sitio. Nuestros contenedores maritimos en renta tienen multiples usos: herramientas, inventario, maquinaria, documentos, mobiliario, entre otros.",
      },
    },
    {
      "@type": "Question",
      name: "Que documentacion se requiere para rentar un contenedor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se requiere identificacion oficial del contratante o representante legal (persona moral), constancia de situacion fiscal, comprobante de domicilio, y acta constitutiva (persona moral).",
      },
    },
    {
      "@type": "Question",
      name: "Cual es el tiempo minimo para rentar un contenedor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En VAN Contenedores rentamos contenedores desde un mes. Si requieres la renta por menos tiempo, contacta a nuestro equipo comercial.",
      },
    },
    {
      "@type": "Question",
      name: "Que tamanos existen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrecemos contenedores maritimos en renta de 10, 20 y 40 pies. El de 20 pies mide 6.09 m x 2.44 m x 2.60 m; el de 40 pies mide 12.19 m x 2.44 m x 2.60 m.",
      },
    },
    {
      "@type": "Question",
      name: "Cuanto tardan en entregar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entregamos tu contenedor en renta en menos de 24 horas posteriores a haber finalizado el proceso de renta.",
      },
    },
    {
      "@type": "Question",
      name: "Que regiones cubren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAN CONTENEDORES tiene cobertura nacional: Monterrey, Veracruz, Altamira, Merida, Tijuana, Queretaro, San Luis Potosi y Guadalajara.",
      },
    },
  ],
};

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Renta de contenedor maritimo para obra",
    description:
      "Renta de contenedores maritimos de 10, 20 y 40 pies para almacenaje temporal en sitio de construccion. Entrega en menos de 24 horas.",
    provider: {
      "@type": "LocalBusiness",
      name: "VAN Contenedores",
      url: "https://vancontenedores.com/",
    },
    areaServed: "Mexico",
    serviceType: "Renta de contenedor para obra",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Renta de contenedor maritimo como bodega movil",
    description:
      "Contenedores maritimos en renta para uso de bodega temporal o bodega movil. Cobertura en Monterrey, Guadalajara, Queretaro, Merida, Veracruz, Altamira, Tijuana y San Luis Potosi.",
    provider: {
      "@type": "LocalBusiness",
      name: "VAN Contenedores",
      url: "https://vancontenedores.com/",
    },
    areaServed: [
      "Monterrey",
      "Guadalajara",
      "Queretaro",
      "Merida",
      "Veracruz",
      "Altamira",
      "Tijuana",
      "San Luis Potosi",
    ],
    serviceType: "Renta de bodega movil",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Renta de contenedor maritimo para logistica y transporte",
    description:
      "Renta de contenedores maritimos de 20 y 40 pies para transporte y logistica de mercancias a nivel nacional. Contenedores certificados y disponibles de inmediato.",
    provider: {
      "@type": "LocalBusiness",
      name: "VAN Contenedores",
      url: "https://vancontenedores.com/",
    },
    areaServed: "Mexico",
    serviceType: "Renta de contenedor para transporte",
  },
];
