# Textos SEO — VAN Contenedores

**Generado por Constructor el 4 de septiembre de 2026**
**Cliente:** Van Contenedores

Este documento contiene los textos del sitio optimizados para SEO: meta titles, meta descriptions, headings H1/H2/H3, copy por sección y página. Usa estos textos directamente en el código — no escribas copy de relleno ni generes texto placeholder.

---

# VAN Contenedores — SEO: Configuración Técnica Global

---

## Resumen para Code

VAN Contenedores es una empresa mexicana de renta de contenedores marítimos para almacenaje y transporte, con presencia en múltiples ciudades del país. El sitio es **un single-page site bilingüe (español/inglés)** con dominio activo en `https://vancontenedores.com/`. **Alerta crítica: el sitio es bilingüe (`bilingual_es_en`); implementar hreflang correctamente desde el inicio es obligatorio — ver sección correspondiente.** Este documento define los estándares técnicos SEO del sitio. Aplícalos globalmente. Los meta tags, schema por página y copy se generarán cuando se cree cada página en Brief 4.

---

## Schema Organization

Colocar este JSON-LD en el `<head>` del layout global (aplica a toda la página). VAN Contenedores opera desde ubicación física con sucursales físicas, por lo que se usa `LocalBusiness`.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VAN Contenedores",
  "url": "https://vancontenedores.com",
  "logo": "https://vancontenedores.com/logo.png",
  "description": "Empresa mexicana especializada en renta de contenedores marítimos para almacenaje temporal y transporte. Cobertura nacional con entrega en menos de 24 horas.",
  "foundingDate": "2014",
  "telephone": "+52-81-8469-2252",
  "email": "ventas@vancontenedores.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+52-81-8469-2252",
    "email": "ventas@vancontenedores.com",
    "contactType": "sales",
    "availableLanguage": ["Spanish", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Monterrey",
    "addressRegion": "Nuevo León",
    "addressCountry": "MX"
  },
  "areaServed": [
    "Nuevo León", "Coahuila", "San Luis Potosí",
    "Tamaulipas", "Querétaro", "Veracruz",
    "Jalisco", "Yucatán", "Baja California"
  ],
  "sameAs": [
    "[COMPLETAR — URL Facebook si existe]",
    "[COMPLETAR — URL Instagram si existe]",
    "[COMPLETAR — URL LinkedIn si existe]"
  ]
}
```

**Nota:** El campo `sameAs` debe completarse con las URLs reales de redes sociales del cliente antes del deploy. No inventar. `areaServed` se infiere del texto fuente del Brief 2 — validar con el cliente si hay ciudades adicionales.

---

## Configuración técnica global

### Idioma y hreflang

El sitio es bilingüe español/inglés (`bilingual_es_en`). Se requiere implementar hreflang en todas las secciones/rutas del sitio.

**Estructura recomendada: subdirectorio `/en/`** — preferido sobre subdominio porque consolida la autoridad de dominio en un solo origen, especialmente relevante para un dominio joven.

```html
<!-- Implementar en el <head> del layout global -->
<link rel="alternate" hreflang="es" href="https://vancontenedores.com/" />
<link rel="alternate" hreflang="en" href="https://vancontenedores.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://vancontenedores.com/" />
```

**Para Next.js (app router):**

```ts
// app/layout.tsx — metadata global
export const metadata: Metadata = {
  alternates: {
    canonical: "https://vancontenedores.com/",
    languages: {
      "es": "https://vancontenedores.com/",
      "en": "https://vancontenedores.com/en/",
      "x-default": "https://vancontenedores.com/",
    },
  },
};
```

Dado que es un single-page site, la versión en inglés será `/en/` (misma página, idioma alternado). Asegurarse de que ambas versiones tengan sus propios hreflang apuntando entre sí.

---

### Canonical strategy

Single-page site sin paginación ni filtros de URL. Regla simple:

```
ES: <link rel="canonical" href="https://vancontenedores.com/" />
EN: <link rel="canonical" href="https://vancontenedores.com/en/" />
```

Cada versión de idioma se auto-referencia como canonical. No deben existir duplicados de contenido entre rutas. Si se añaden parámetros UTM en campañas (`?utm_source=...`), el canonical debe seguir apuntando a la URL limpia sin parámetros — configurar esto en el layout para que sea automático.

---

### Robots

```
# robots.txt
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/

Sitemap: https://vancontenedores.com/sitemap.xml
```

**Páginas con `noindex`:**

| Página / Ruta | Razón |
|---|---|
| Página de confirmación de formulario (si existe) | No aporta valor SEO |
| Rutas `/api/*` | Rutas internas del framework |

En Next.js, manejar `noindex` con:

```ts
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};
```

---

### Open Graph — defaults globales

Valores por defecto para el sitio completo. Cada sección/idioma debe sobreescribir `og:title`, `og:description` y `og:image` con valores específicos al construirse en Brief 4.

```
og:site_name:    VAN Contenedores
og:type:         website
og:locale:       es_MX  (versión ES)
og:locale:       en_US  (versión EN — sobreescribir en /en/)
og:image:        https://vancontenedores.com/og-default.jpg  (1200×630)
twitter:card:    summary_large_image
twitter:site:    [COMPLETAR — @handle si existe]
```

**Nota para Code:** Crear una imagen OG genérica (`/og-default.jpg`, 1200×630 px) que muestre el nombre de marca y algún contenedor. Esta imagen actúa como fallback para cualquier URL que no tenga OG image propio.

---

## Sitemap.xml — estructura y reglas

Generación automática vía `app/sitemap.ts` en Next.js. No se listan URLs específicas aquí — el sitemap se construye conforme existen las rutas.

**Reglas de prioridad:**

| Tipo de página | `<priority>` | `<changefreq>` |
|---|---|---|
| Home ES (`/`) | 1.0 | weekly |
| Home EN (`/en/`) | 0.9 | weekly |
| Páginas legales (Privacy, Terms) | 0.3 | yearly |

**Excluir del sitemap:**
- Rutas `/api/*`
- Cualquier página con `noindex` activo
- URLs con parámetros de query (`?utm_*`, `?ref=*`)

**Nota:** Al ser un single-page site, el sitemap tendrá pocas entradas inicialmente (ES + EN). Si en el futuro se añaden rutas adicionales (blog, landings por ciudad), aplicar la tabla de prioridades del estándar.

---

## Convenciones de URLs y slugs

**Formato global:**
- Minúsculas, sin acentos, sin caracteres especiales.
- Separador: guion medio (`-`), nunca guion bajo ni espacios.
- Máximo 3–5 palabras por slug.
- Español para la versión ES, inglés para la versión EN.

**Ejemplos correctos vs incorrectos:**

| ✓ Correcto | ✗ Incorrecto |
|---|---|
| `/renta-de-contenedores` | `/Renta_De_Contenedores` |
| `/en/container-rental` | `/en/Container-Rental` |
| `/contenedor-20-pies` | `/contenedor20Pies` |
| `/almacenaje-temporal` | `/almacenajeTemp` |

**Slugs para las rutas del proyecto actual:**

| Idioma | Ruta | Descripción |
|---|---|---|
| ES | `/` | Home (single page principal) |
| EN | `/en/` | Versión en inglés |

> Al ser single-page, no hay slugs adicionales en la estructura actual. Si en el futuro se crean landings independientes por ciudad o tipo de contenedor, seguir el patrón: `/renta-contenedores-monterrey`, `/renta-contenedores-queretaro`, `/contenedor-20-pies`, etc. — consistente con las keywords seleccionadas.

**Criterio de slug basado en keyword research:**
Las keywords seleccionadas usan "contenedores marítimos" (con tilde en "marítimos") — en slugs eliminar el acento: `/contenedores-maritimos`. El término sin tilde es el estándar correcto para URLs.

---

## Recomendaciones de implementación

### Meta tags — manejo global

- Cada versión de idioma debe tener su propio `<title>` y `<meta name="description">`. Nunca heredar el mismo string en ambas versiones.
- Patrón de title ES: `[Tema] | VAN Contenedores`
- Patrón de title EN: `[Topic] | VAN Containers`
- Character limits: title 55–60 chars, description 150–160 chars.
- En Next.js: usar `metadata` export en cada `page.tsx` o `generateMetadata()` para rutas dinámicas.

### Indexación

- Verificar que el build de producción **no tenga `noindex` global**. Error frecuente al copiar configuración de staging a producción en Vercel/Netlify.
- Confirmar en Google Search Console que `https://vancontenedores.com/` y `https://vancontenedores.com/en/` están siendo rastreadas correctamente post-launch.

### Core Web Vitals

- **LCP:** La imagen hero (contenedor en sitio o contexto de obra) debe tener `fetchPriority="high"` y NO `loading="lazy"`. Es el elemento visual más pesado y determina el LCP.
- **CLS:** Definir `width` y `height` explícitos en todas las imágenes, especialmente la imagen del contenedor en secciones de producto. Usar `aspect-ratio` en CSS como fallback.
- **INP:** Scripts de analytics (Google Analytics, Meta Pixel si aplica) deben cargarse con `strategy="afterInteractive"` en Next.js Script component. Nunca en el `<head>` sin `defer`.

### Implementación bilingüe — checklist crítico

- Usar estructura de subdirectorio `/en/` — **no** `en.vancontenedores.com`.
- Todos los textos de la versión EN deben estar en inglés real, no traducción automática sin revisión.
- Verificar que el `lang` del `<html>` cambia según la versión: `lang="es"` en `/`, `lang="en"` en `/en/`.
- El hreflang debe estar presente en **ambas versiones** apuntando entre sí — si falta en una, Google ignora la señal completa.
- El `og:locale` debe cambiar según versión: `es_MX` en ES, `en_US` en EN.

### Datos de contacto — consistencia NAP

El nombre, dirección y teléfono deben ser **idénticos** en el Schema JSON-LD, en el contenido visible de la página y en Google Business Profile (si existe). Cualquier variación afecta señales locales. El teléfono del brief es `(81) 8469 2252` — en el schema usar formato E.164: `+52-81-8469-2252`.

---

## Estrategia SEO

# VAN Contenedores — SEO: Estrategia

## Resumen estratégico

VAN Contenedores es una empresa mexicana con 10 años de operación dedicada a la renta de contenedores marítimos para almacenaje temporal, con presencia en Nuevo León, Coahuila, San Luis Potosí, Tamaulipas, Querétaro y cobertura nacional; la audiencia primaria son constructoras y responsables de logística que necesitan almacenaje provisional en sitio con urgencia. El set de keywords incluye 13 términos seleccionados que cubren servicios principales, variantes por tamaño, cobertura geográfica e intención informacional. El ángulo SEO central es capturar demanda de alta urgencia — usuarios que necesitan almacenaje en obra de forma inmediata — combinando keywords transaccionales con el diferenciador de entrega en menos de 24 horas. La alerta estratégica más importante: el sitio es una sola página (*single-page*), lo que limita severamente la capacidad de rankear para múltiples intenciones de búsqueda simultáneamente — las secciones con anclas bien estructuradas y un schema adecuado son críticos para compensar esta restricción. El brief no incluye análisis de competidores directos ni datos de volumen real (sin KEYWORD RESEARCH de DataForSEO), por lo que los volúmenes son estimaciones relativas; nivel de confianza: **Media — keyword set limitado y sin datos de volumen real ni análisis competitivo**.

---

## Keywords del proyecto por tema

### Tema 1: Servicio principal — Renta de contenedores marítimos

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| renta de contenedores maritimos | Primaria | Comercial | Alto |
| contenedores maritimos para almacenaje | Primaria | Comercial | Medio |
| contenedor marítimo bodega provisional | Secundaria | Comercial | Medio |
| contenedor de almacenaje con entrega inmediata | Long-tail | Transaccional | Bajo |
| entrega de contenedor en menos de 24 horas | Long-tail | Transaccional | Bajo |

**Cuándo usar este grupo:** Son el núcleo del hero y la sección de servicios generales. Activan búsquedas de usuarios que ya saben lo que quieren y están evaluando proveedores.

**Notas de uso:** "Renta de contenedores marítimos" es la keyword de mayor volumen estimado del set y la de mayor competencia — necesita aparecer en el H1 y en el primer bloque de texto. El diferenciador de entrega en 24 horas es un argumento de conversión fuerte que debe estar visible en el mismo bloque.

---

### Tema 2: Variantes por tamaño de contenedor

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| renta de contenedor 20 pies | Primaria | Transaccional | Medio |
| renta de contenedor 40 pies | Primaria | Transaccional | Medio |

**Cuándo usar este grupo:** Activan búsquedas de usuarios que ya tienen claro el tamaño que necesitan. Corresponde a la sección de catálogo o productos dentro del sitio.

**Notas de uso:** Ambas keywords tienen intención transaccional clara. Al ser un sitio de una sola página, cada tamaño debe tener su propio bloque con ancla nombrada (`#contenedor-20-pies`, `#contenedor-40-pies`). Incluir dimensiones explícitas en el copy refuerza la relevancia semántica.

---

### Tema 3: Aplicación al sector construcción

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| almacenaje temporal en obra | Primaria | Comercial | Medio |
| contenedor para guardar material de construcción | Secundaria | Comercial | Medio |

**Cuándo usar este grupo:** Activan búsquedas de la audiencia primaria del cliente — responsables de obra, directores de proyectos de construcción. Corresponde a una sección de casos de uso o propuesta de valor dirigida específicamente a constructoras.

**Notas de uso:** Este grupo tiene menor competencia que las keywords genéricas de renta, lo que lo convierte en una oportunidad de posicionamiento más alcanzable a corto plazo. El brief indica que la constructora es el cliente prioritario — este lenguaje debe estar reflejado en la comunicación, no solo en el metadata.

---

### Tema 4: Cobertura geográfica

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| renta de contenedores monterrey | Primaria | Transaccional | Alto |
| renta de contenedores nuevo león | Secundaria | Transaccional | Medio |
| contenedores en renta querétaro | Secundaria | Transaccional | Bajo |

**Cuándo usar este grupo:** Activan búsquedas con intención local fuerte. En un sitio de una sola página, estas keywords deben aparecer en la sección de cobertura o en el texto de contacto/footer. No crear páginas separadas por ciudad en esta fase — esa sería una decisión de Brief 4 si se expande la arquitectura.

**Notas de uso:** Monterrey y Nuevo León son las de mayor volumen estimado y directamente alineadas con la sede principal del negocio. Querétaro tiene menor volumen pero baja competencia — es una oportunidad geográfica secundaria viable. La ausencia de keywords para las demás ciudades del brief (Veracruz, Guadalajara, Tijuana, Mérida) es un gap del set actual.

---

### Tema 5: Intención informacional / precio

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| cuánto cuesta rentar un contenedor marítimo | Long-tail | Informacional | Medio |

**Cuándo usar este grupo:** Activa búsquedas de usuarios en etapa de evaluación que aún no han tomado la decisión. En un sitio de una sola página, corresponde a la sección de FAQ o a un bloque de contexto de precios (aunque no se publiquen precios explícitos, responder la pregunta con un CTA es suficiente).

**Notas de uso:** Esta keyword tiene potencial de captura de usuarios más arriba en el funnel. Si bien no convierte directamente, reduce fricción en la decisión y puede mejorar el tiempo en página. La sección de FAQ del cliente ya responde parcialmente esta pregunta.

---

### Narrativa estratégica del keyword map

El ángulo SEO del proyecto es la captura de demanda urgente en nicho B2B de construcción y logística, combinando cobertura geográfica de Monterrey/Noreste con diferenciadores de velocidad de entrega. La keyword con mayor potencial de conversión es **"renta de contenedores monterrey"** — combina volumen estimado alto, intención transaccional clara y alineación directa con la sede y operación principal del negocio; quien busca esto está listo para contratar. El principal riesgo de canibalización está entre el Tema 1 y el Tema 3: "contenedor marítimo bodega provisional" y "almacenaje temporal en obra" compiten por una intención similar (almacenaje provisional), por lo que deben tratarse como mensajes complementarios dentro de la misma sección, no como bloques independientes que dupliquen contenido.

---

## Estructura sugerida del sitio

El sitio es de una sola página. La "estructura" equivale a las secciones con anclas nombradas. Las keywords no se asignan a páginas separadas — se distribuyen en bloques temáticos dentro del single-page.

| Sección sugerida | Keywords relevantes | Prioridad |
|---|---|---|
| Hero / Propuesta de valor | Renta servicio principal, entrega inmediata, Monterrey | Alta |
| Catálogo de contenedores | Contenedor 20 pies, contenedor 40 pies, bodega provisional | Alta |
| Para constructoras / Casos de uso | Almacenaje en obra, guardar material de construcción | Alta |
| Cobertura geográfica | Monterrey, Nuevo León, Querétaro, cobertura nacional | Media |
| FAQ | Cuánto cuesta, proceso de renta, tiempo de entrega | Media |
| Contacto / CTA final | Todas las keywords de conversión como contexto de soporte | Alta |
| Landing pages por ciudad (futuro) | Keywords geográficas individuales por plaza | Futura |

**Nota estratégica:** Si en el futuro el cliente quiere escalar el SEO, el paso más impactante sería migrar de single-page a una arquitectura con páginas independientes por ciudad (Monterrey, Querétaro, etc.) y por tamaño de contenedor. Eso sería una decisión de Brief 4 en una segunda fase.

---

## Estrategia de internal linking

En un sitio de una sola página, el "internal linking" se ejecuta principalmente a través de anclas y navegación interna. Los principios aplican de igual forma.

1. **Flujo hacia conversión:** Cada sección del sitio debe terminar con o contener un enlace/ancla al bloque de contacto. En single-page, esto se traduce en CTAs visibles al final de cada bloque que anclen a `#contacto`.

2. **Anclas semánticas en navegación:** El menú de navegación debe usar texto descriptivo que incluya keywords clave — ej. "Contenedores 20 y 40 pies", "Cobertura", "FAQ" — no solo etiquetas genéricas como "Productos" o "Sección 2".

3. **Contexto semántico en FAQ:** Cada respuesta del FAQ que mencione un servicio, tamaño o ciudad debe enlazar (anclar) al bloque correspondiente del sitio. Esto refuerza la relevancia semántica interna y mejora la experiencia del usuario.

4. **Preparación para expansión:** Nombrar los bloques con IDs descriptivos desde el inicio (`#renta-contenedor-monterrey`, `#contenedor-20-pies`) facilita la migración futura a una arquitectura multipágina sin perder la coherencia de las anclas ya indexadas.

5. **B2B con urgencia:** Dado que el cliente objetivo necesita el contenedor con urgencia, el CTA principal debe aparecer en al menos tres puntos del scroll — hero, mitad de página y footer — para capturar conversión en cualquier momento del recorrido.

---

## Ideas de contenido futuro

**Blog / artículos (temas sugeridos):**

- **¿Cuánto cuesta rentar un contenedor marítimo en México?** — Responde directamente la keyword informacional del set y atrae usuarios en etapa de evaluación antes de que busquen a la competencia.
- **Contenedor de 20 vs 40 pies: ¿cuál necesitas para tu obra?** — Cubre ambas keywords de tamaño con intención educativa y filtra leads más calificados hacia el CTA.
- **Cómo instalar un contenedor de almacenaje en obra en menos de 24 horas** — Refuerza el diferenciador de entrega inmediata y posiciona contra búsquedas de proceso/urgencia.
- **Qué documentación necesitas para rentar un contenedor en México** — El FAQ del cliente ya tiene esta información; convertirla en artículo indexable amplía el alcance orgánico.
- **Almacenaje temporal en obras de construcción: opciones y costos** — Ataca directamente al segmento de constructoras con contenido específico para su dolor de punto.
- **Renta de contenedores en Querétaro: qué debes saber antes de contratar** — Refuerza la presencia geográfica en una plaza con menor competencia y potencial de crecimiento.

**Páginas adicionales o landings:**

- **Landing por ciudad: /monterrey, /queretaro, /nuevo-leon** — Cada landing cubriría las keywords geográficas de su respectivo mercado con contenido específico de cobertura, tiempos de entrega y contacto local; es el paso de mayor impacto SEO post-lanzamiento.
- **Página de venta de contenedores** — El texto fuente menciona "venta y renta" como actividad del negocio; si existe esta oferta, una página separada capturaría un segmento de búsqueda completamente diferente con alta intención de compra.

**Recursos o contenido de autoridad:**

- **Guía de medidas y capacidades de contenedores marítimos** — Recurso descargable o página de referencia que posiciona a VAN Contenedores como autoridad técnica en el sector y genera backlinks naturales de blogs de construcción y logística.
- **Calculadora de espacio de almacenaje** — Herramienta simple (ej. "¿Cuántos m³ necesitas?") que mejora el tiempo en página, reduce la fricción en la decisión y diferencia el sitio frente a competidores que solo tienen formularios de contacto.