# Especificacion Tecnica del Sitio - VAN Contenedores

**Ultima actualizacion:** 2026-09-09
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
| Layout raiz | `src/app/layout.tsx` | HTML shell, fuentes, JSON-LD global (LocalBusiness) |
| Navbar | `src/components/Navbar.tsx` | Nav fija con blur, hamburger mobile, CTA |
| Hero | `src/components/Hero.tsx` | Split asimetrico 2/5+3/5, H1, CTA, datos de confianza |
| Differentiators | `src/components/Differentiators.tsx` | Grid 4 cols con iconos Phosphor + numeros mono |
| ContainerSelector | `src/components/ContainerSelector.tsx` | Selector interactivo 10/20/40 pies con GSAP (momento memorable) |
| Construction | `src/components/Construction.tsx` | Split invertido, caso de uso en obra |
| Coverage | `src/components/Coverage.tsx` | Mapa + grid de 8 ciudades |
| FAQ | `src/components/FAQ.tsx` | 8 preguntas en grid 2 cols, texto plano abierto |
| CTAFinal | `src/components/CTAFinal.tsx` | Split con telefono, email, imagen de entrega |
| Footer | `src/components/Footer.tsx` | 3 columnas con datos verificables para AEO |
| JsonLd | `src/components/JsonLd.tsx` | Componente reutilizable para JSON-LD |

---

## Estructura de paginas

| Ruta | Archivo | Descripcion |
|------|---------|-------------|
| `/` | `src/app/page.tsx` | Home (single page) |
| `/robots.txt` | `src/app/robots.ts` | Robots |
| `/sitemap.xml` | `src/app/sitemap.ts` | Sitemap |

---

## Decisiones de arquitectura

- **Single page site:** Todo el home es una sola pagina con secciones ancladas. Las paginas internas quedan como trabajo futuro.
- **GSAP en vez de Motion:** El momento memorable (ContainerSelector) usa GSAP directamente para interpolacion numerica y animaciones de DOM, evitando el bundle de Motion/framer-motion.
- **CSS tokens via @theme:** Los tokens viven en un bloque `@theme` de Tailwind v4 que resetea los defaults. Todas las clases de color/radio/shadow default de Tailwind estan desactivadas con `initial`.
- **Sin dark mode toggle:** El sitio es dark-only por diseno. No hay modo claro ni toggle.
- **Fuentes via geist package + next/font/google:** Geist Sans y Mono se cargan desde el paquete `geist`. Plus Jakarta Sans se carga via `next/font/google`.

---

## Notas para mantenimiento

- Cuando Jorge suba el logo, reemplazar el texto "VAN Contenedores" en Navbar.tsx y Footer.tsx con `<Image>` apuntando a `/images/logo-van.webp`
- El archivo `og-default.jpg` no existe aun en `/public/`. Generarlo cuando se tenga el logo.
- El `verify-design.sh` tiene los hex hardcodeados. Si cambian colores en tokens.css, actualizar el script tambien.
- Los schemas JSON-LD estan en `src/lib/schemas.ts`. Los campos marcados con [COMPLETAR] en docs/schema-org.md no se incluyeron (horarios, redes sociales, precios).
