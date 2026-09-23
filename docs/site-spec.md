# Especificacion Tecnica del Sitio - VAN Contenedores

**Ultima actualizacion:** 2026-09-23
**Construido por:** Claude Code / Click Society

---

## Stack

**Framework:** Next.js 16.3.4 (App Router, Turbopack)
**Node:** v22+
**Package manager:** npm
**Deploy:** Vercel

**Dependencias principales:**

| Paquete | Version | Proposito |
|---------|---------|-----------|
| next | 16.3.4 | Framework principal |
| react | 19.2.8 | UI |
| tailwindcss | ^4 | Estilos (CSS-first con @theme tokens) |
| gsap | ^3.15.0 | Animaciones del selector interactivo de contenedores |
| @phosphor-icons/react | ^2.1.10 | Iconos (Light/Regular weight) |
| geist | ^1.7.2 | Fuentes Geist Sans y Geist Mono |
| nodemailer | - | Envio de correos SMTP |
| motion | - | Animaciones de entrada (scroll reveal) |

---

## Design System

**Fuentes de verdad del diseno:**
- `DESIGN.md` - prohibiciones, tokens documentados, tipografia, motion budget, accesibilidad
- `tokens.css` (raiz) y `src/app/tokens.css` - variables CSS canonicas en bloque `@theme`

**Tipografias:**
- Headings: Geist, 700
- Body: Plus Jakarta Sans, 400/500
- Mono (datos): Geist Mono, 700

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px (max-width: 1280px)

---

## Componentes clave

| Componente | Ruta | Descripcion |
|-----------|------|-------------|
| Layout raiz | `src/app/layout.tsx` | HTML shell, fuentes, JSON-LD global, GTM (GTM-W2BQDP2Z) |
| Proxy | `src/proxy.ts` | Geo-redirect por IP a landing pages de ciudad |
| Navbar | `src/components/Navbar.tsx` | Nav fija con blur, hamburger mobile, CTA WhatsApp |
| Hero | `src/components/Hero.tsx` | Split asimetrico 2/5+3/5, H1, CTA, datos de confianza |
| Differentiators | `src/components/Differentiators.tsx` | Grid 4 cols con iconos Phosphor + numeros mono |
| ContainerSelector | `src/components/ContainerSelector.tsx` | Selector interactivo 10/20/40 pies con GSAP |
| Construction | `src/components/Construction.tsx` | Split invertido, caso de uso en obra |
| Gallery | `src/components/Gallery.tsx` | Carrusel infinito con drag y autoplay |
| Coverage | `src/components/Coverage.tsx` | Mapa con bordes estatales + grid de ciudades |
| FAQ | `src/components/FAQ.tsx` | 8 preguntas en grid 2 cols, texto plano abierto |
| CTAFinal | `src/components/CTAFinal.tsx` | Cotizador por email, envio SMTP a 5 destinatarios |
| QuoteForm | `src/components/QuoteForm.tsx` | Popup WhatsApp + envio email SMTP en paralelo |
| QuoteProvider | `src/components/QuoteProvider.tsx` | Context provider para abrir/cerrar QuoteForm |
| WhatsAppBubble | `src/components/WhatsAppBubble.tsx` | Boton flotante WhatsApp |
| Footer | `src/components/Footer.tsx` | 3 columnas con datos verificables para AEO |
| JsonLd | `src/components/JsonLd.tsx` | Componente reutilizable para JSON-LD |
| Icon | `src/app/icon.tsx` | Favicon dinamico (V verde del logo) |

---

## Estructura de paginas

| Ruta | Archivo | Descripcion |
|------|---------|-------------|
| `/` | `src/app/page.tsx` | Home (single page) |
| `/renta-contenedores-[city]` | `src/app/[city]/page.tsx` | Landing por ciudad (6 ciudades) |
| `/api/quote` | `src/app/api/quote/route.ts` | API de envio de cotizaciones por email |
| `/robots.txt` | `src/app/robots.ts` | Robots |
| `/sitemap.xml` | `src/app/sitemap.ts` | Sitemap |

---

## Formularios y correo

**Destinatarios de cotizaciones (hardcodeados en route.ts):**
- respaldo@rentacontenedoresmty.com
- respaldo@vancontenedores.com
- ventas@rentacontenedoresmty.com
- ventas@rentacontenedoresqueretaro.com
- ventas@vancontenedores.com

**Variables de entorno SMTP (configuradas en Vercel):**
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`

**Etiqueta de origen:** Cada correo incluye en el subject y cuerpo la landing de origen (Home, Landing Monterrey, Landing Queretaro, etc.)

---

## Tracking y analytics

**GTM:** GTM-W2BQDP2Z (instalado en layout.tsx)

| Evento dataLayer | Componente | Descripcion |
|------------------|------------|-------------|
| `cotizador_enviado` | CTAFinal | Usuario envia cotizador por email |
| `cotizacion_whatsapp` | QuoteForm | Usuario envia form y es redirigido a WhatsApp |

**Meta Pixel:** `fbq("track", "Contact")` en QuoteForm, `fbq("track", "Lead")` en CTAFinal

---

## Geo-redirect

**Archivo:** `src/proxy.ts`
**Mecanismo:** Header `x-vercel-ip-city` (automatico en Vercel)
**Cookie:** `geo-city` (24h) para no repetir redirect
**Redirect:** 302 (temporal, no afecta SEO)

| Ciudad detectada | Redirige a |
|------------------|------------|
| Monterrey | `/renta-contenedores-monterrey` |
| Queretaro | `/renta-contenedores-queretaro` |
| Guadalajara | `/renta-contenedores-guadalajara` |
| San Luis Potosi | `/renta-contenedores-san-luis-potosi` |
| Altamira / Tampico | `/renta-contenedores-altamira` |
| Merida | `/renta-contenedores-merida` |
| Otra ciudad | Se queda en `/` |

---

## Decisiones de arquitectura

- **Single page site:** Todo el home es una sola pagina con secciones ancladas. Las landing por ciudad replican la estructura con Hero localizado.
- **GSAP en vez de Motion para ContainerSelector:** El momento memorable usa GSAP directamente para interpolacion numerica y animaciones de DOM.
- **Motion para scroll reveal:** Animaciones de entrada en secciones usan motion/react (framer-motion).
- **CSS tokens via @theme:** Los tokens viven en un bloque `@theme` de Tailwind v4 que resetea los defaults.
- **Sin dark mode toggle:** El sitio usa fondos claros por diseno. No hay modo oscuro ni toggle.
- **Fuentes via geist package + next/font/google:** Geist Sans y Mono se cargan desde el paquete `geist`. Plus Jakarta Sans se carga via `next/font/google`.
- **Proxy en vez de middleware:** Next.js 16 renombro middleware.ts a proxy.ts. Se usa para geo-redirect.
- **Correo dual:** El QuoteForm envia email SMTP y abre WhatsApp en paralelo. El CTAFinal solo envia email.
