# VAN Contenedores — Schema.org: Structured Data

> **Generado el 4 de septiembre de 2026 por Constructor / Click Society**
> **Cliente:** Van Contenedores

---

<!-- El contenido generado por IA se agrega a continuación -->

# VAN Contenedores — Schema.org: Structured Data

---

## Schema del tipo de negocio (BusinessType especializado)

`business_type` personalizado: **Renta de contenedores marítimos**. El @type más preciso disponible en schema.org es `LocalBusiness` con `additionalType` apuntando a una descripción más específica. Se agrega `areaServed` nacional con las ciudades de cobertura del Brief 2.

> **Nota para Code:** Este schema complementa el Organization/LocalBusiness base de `seo-tecnico.md`. Si ese schema ya cubre los campos compartidos, usar este para los campos específicos del negocio (`areaServed`, `openingHoursSpecification`, etc.) o fusionar ambos en uno solo para evitar duplicación.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/MovingCompany",
  "name": "VAN Contenedores",
  "description": "Renta de contenedores marítimos para almacenaje temporal en sitio, bodega móvil y transporte de mercancías. Cobertura nacional con entrega en menos de 24 horas.",
  "url": "https://vancontenedores.com/",
  "telephone": "+52-81-8469-2252",
  "email": "ventas@vancontenedores.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Monterrey",
    "addressRegion": "Nuevo León",
    "addressCountry": "MX"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Monterrey"
    },
    {
      "@type": "City",
      "name": "Veracruz"
    },
    {
      "@type": "City",
      "name": "Altamira"
    },
    {
      "@type": "City",
      "name": "Mérida"
    },
    {
      "@type": "City",
      "name": "Tijuana"
    },
    {
      "@type": "City",
      "name": "Querétaro"
    },
    {
      "@type": "City",
      "name": "San Luis Potosí"
    },
    {
      "@type": "City",
      "name": "Guadalajara"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["[COMPLETAR: días de operación, ej. Monday, Tuesday, Wednesday, Thursday, Friday]"],
    "opens": "[COMPLETAR: hora apertura, ej. 09:00]",
    "closes": "[COMPLETAR: hora cierre, ej. 18:00]"
  },
  "priceRange": "[COMPLETAR: ej. $$ o rango orientativo]",
  "sameAs": [
    "[COMPLETAR: URL de Google Business Profile]",
    "[COMPLETAR: Facebook, LinkedIn u otras redes si aplican]"
  ]
}
```

---

## FAQPage Schema

Todas las FAQs del Brief 2 incluidas íntegramente. El texto de las respuestas coincide con el contenido que debe aparecer visible en el HTML del sitio.

**Ubicación:** Homepage (`app/page.tsx`) — las FAQs están en la sección de la página única.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Para qué se utiliza un contenedor en renta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En VAN CONTENEDORES rentamos contenedores marítimos principalmente para el uso de bodega temporal, bodega móvil o almacenaje temporal en sitio. Nuestros contenedores marítimos en renta tienen múltiples usos, por ejemplo: herramientas, inventario, maquinaria, documentos, mobiliario, entre otros."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es un contenedor marítimo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los contenedores marítimos son una caja de metal utilizado para transportar mercancías por diferentes vías entre ciudades, países y continentes. Se caracteriza por su seguridad, economía y versatilidad. En VAN CONTENEDORES rentamos contenedores para el uso de bodega o también conocido como bodega móvil o almacenaje temporal en sitio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué documentación se requiere para rentar un contenedor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En VAN CONTENEDORES, el proceso para rentar un contenedor marítimo para el almacenaje temporal es bastante eficiente. Se requiere la siguiente documentación: Identificación oficial del contratante o representante legal (persona moral), Constancia de situación fiscal, Comprobante de domicilio, Acta constitutiva (persona moral)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tiempo mínimo para rentar un contenedor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En VAN Contenedores rentamos contenedores desde un mes. Somos una empresa enfocada en resolver las necesidades de almacenaje temporal en sitio para nuestros clientes. Si requieres la renta del contenedor marítimo por menos de un mes, contacta a nuestro equipo comercial y con gusto encontraremos una solución."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tamaños existen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los tamaños más comunes a nivel mundial de contenedores marítimos son las unidades de 20 y 40 pies. En VAN CONTENEDORES ofrecemos contenedores marítimos en renta para el uso de bodega de 10, 20 y 40 pies."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tardan en cotizar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En VAN CONTENEDORES, nuestra prioridad es entregarte tu contenedor en renta cuanto antes para que puedas comenzar a almacenar tus pertenencias. Solicita tu cotización y nuestro equipo comercial se pondrá en contacto contigo de manera inmediata."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tardan en entregar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos caracteriza la entrega eficaz. Por lo general, en VAN CONTENEDORES entregamos tu contenedor en renta en menos de 24 horas posteriores a haber finalizado el proceso de renta."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué regiones cubren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VAN CONTENEDORES es una empresa orgullosamente mexicana dedicada a la venta y renta de contenedores marítimos, con cobertura nacional: Monterrey, Veracruz, Altamira, Mérida, Tijuana, Querétaro, San Luis y Guadalajara."
      }
    }
  ]
}
```

---

## Service Schemas

Tres servicios principales inferidos del Brief 1 y Brief 2: renta para almacenaje en obra, renta para bodega temporal, y transporte/logística. Se agrupan por naturaleza del uso.

### Servicio 1 — Renta de contenedor para almacenaje en obra

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Renta de contenedor marítimo para obra",
  "description": "Renta de contenedores marítimos de 10, 20 y 40 pies para almacenaje temporal en sitio de construcción. Ideal para resguardar herramientas, materiales, maquinaria e inventario de forma segura. Entrega en menos de 24 horas.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VAN Contenedores",
    "url": "https://vancontenedores.com/"
  },
  "areaServed": "México",
  "serviceType": "Renta de contenedor para obra",
  "termsOfService": "Renta mínima de un mes. Documentación requerida: identificación oficial, constancia de situación fiscal, comprobante de domicilio.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MXN",
    "price": "[COMPLETAR: precio base mensual si se quiere publicar]",
    "availability": "https://schema.org/InStock"
  }
}
```

### Servicio 2 — Renta de contenedor como bodega móvil

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Renta de contenedor marítimo como bodega móvil",
  "description": "Contenedores marítimos en renta para uso de bodega temporal o bodega móvil. Solución flexible para guardar inventario, mobiliario, documentos y equipos. Cobertura en Monterrey, Guadalajara, Querétaro, Mérida, Veracruz, Altamira, Tijuana y San Luis Potosí.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VAN Contenedores",
    "url": "https://vancontenedores.com/"
  },
  "areaServed": [
    "Monterrey",
    "Guadalajara",
    "Querétaro",
    "Mérida",
    "Veracruz",
    "Altamira",
    "Tijuana",
    "San Luis Potosí"
  ],
  "serviceType": "Renta de bodega móvil",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MXN",
    "price": "[COMPLETAR]",
    "availability": "https://schema.org/InStock"
  }
}
```

### Servicio 3 — Renta de contenedor para transporte de mercancías

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Renta de contenedor marítimo para logística y transporte",
  "description": "Renta de contenedores marítimos de 20 y 40 pies para transporte y logística de mercancías a nivel nacional. Contenedores certificados, seguros y disponibles de inmediato.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VAN Contenedores",
    "url": "https://vancontenedores.com/"
  },
  "areaServed": "México",
  "serviceType": "Renta de contenedor para transporte"
}
```

---

## BreadcrumbList

No aplica: sitio de profundidad única (single-page). Todas las secciones viven en `https://vancontenedores.com/` bajo anchors. No se generan rutas de segundo nivel que requieran breadcrumb.

---

## Schemas adicionales

El sitio maneja testimonios como acción secundaria. Se puede implementar el schema `Review` o `AggregateRating` en cuanto se cuente con valoraciones verificables. Por ahora se incluye la estructura lista para cuando Code tenga los datos reales.

### AggregateRating (activar cuando haya datos reales de reseñas)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VAN Contenedores",
  "url": "https://vancontenedores.com/",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[COMPLETAR: ej. 4.8]",
    "reviewCount": "[COMPLETAR: número de reseñas]",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

> **Nota para Code:** No activar este schema hasta tener datos reales de reseñas (Google Business Profile, encuestas, etc.). Google penaliza el AggregateRating sin respaldo verificable.

---

## Implementación en Next.js

### Componente reutilizable

Crear en `components/JsonLd.tsx`:

```tsx
interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

### Archivo de constantes

Crear `lib/schemas.ts` con todos los schemas exportados:

```ts
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  // ... schema completo del tipo de negocio
}

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  // ... schema completo FAQPage
}

export const serviceSchemas = [
  { /* schema Servicio 1 */ },
  { /* schema Servicio 2 */ },
  { /* schema Servicio 3 */ },
]
```

### Mapa de implementación por página

| Schema | Página | Archivo Next.js | Método |
|---|---|---|---|
| `LocalBusiness` (negocio) | Global | `app/layout.tsx` | `<JsonLd>` dentro del `<body>` antes del contenido, o en `generateMetadata` |
| `FAQPage` | Homepage | `app/page.tsx` | `<JsonLd data={faqPageSchema} />` al inicio del return |
| `Service` (×3) | Homepage | `app/page.tsx` | `<JsonLd data={serviceSchemas} />` pasando el array completo |

### Ejemplo concreto para `app/page.tsx`

```tsx
import { JsonLd } from '@/components/JsonLd'
import { faqPageSchema, serviceSchemas } from '@/lib/schemas'

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      <JsonLd data={serviceSchemas} />
      {/* Resto del contenido de la página */}
    </>
  )
}
```

### Ejemplo concreto para `app/layout.tsx`

```tsx
import { JsonLd } from '@/components/JsonLd'
import { businessSchema } from '@/lib/schemas'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <JsonLd data={businessSchema} />
        {children}
      </body>
    </html>
  )
}
```

### Schemas con rich results elegibles para este proyecto

| Schema | Rich result posible |
|---|---|
| `FAQPage` | Acordeón de preguntas expandibles en SERP de Google |
| `LocalBusiness` | Panel de negocio en Google Maps y Knowledge Panel |
| `Service` | Puede aparecer en rich snippets de servicios en SERP |
| `AggregateRating` | Estrellas en SERP (activar solo con datos reales) |

### Validación obligatoria antes del deploy

Validar cada schema individualmente en: **https://search.google.com/test/rich-results**

Orden sugerido de validación:
1. `FAQPage` — mayor impacto visual en SERP
2. `LocalBusiness` — impacto en búsquedas de marca y Maps
3. `Service` schemas — validar que no generen errores
4. `AggregateRating` — solo cuando esté activo con datos reales