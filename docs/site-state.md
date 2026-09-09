# Estado del Sitio - VAN Contenedores

---

## Estado actual

**Ultima actualizacion:** 2026-09-09
**Version del sitio:** 1.0.0
**URL de produccion:** Pendiente de deploy
**Repo:** https://github.com/jorgeruiz/vancontenedores.git
**Branch principal:** main

---

## Construccion inicial

**Fecha:** 2026-09-09
**Stack:** Next.js 16.3.4 + Tailwind v4 + GSAP + Vercel

---

## Features implementadas

- [x] Home single page con 8 secciones
- [x] Navbar fija con backdrop-blur y menu hamburguesa mobile
- [x] Hero con split asimetrico, H1 SEO, CTA principal y telefono
- [x] Diferenciadores en grid 4 columnas (24h, 5 sucursales, ISO, +10 anos)
- [x] Selector interactivo de contenedores con GSAP (interpolacion numerica, crossfade, barra de escala, spring physics)
- [x] Seccion de almacenaje en obra con checklist de beneficios
- [x] Mapa de cobertura con 8 ciudades
- [x] FAQ en texto plano (8 preguntas, 2 columnas, sin acordeon)
- [x] CTA final con telefono y email
- [x] Footer con datos verificables para AEO (ciudades, NAP, ano de fundacion)
- [x] Design system cerrado via tokens.css con @theme resets
- [x] JSON-LD: LocalBusiness, FAQPage, 3 Service schemas
- [x] Meta tags: title, description, OG, Twitter Cards, canonical, lang="es"
- [x] robots.ts y sitemap.ts
- [x] verify-design.sh con checks de contraste WCAG AA
- [x] Focus-visible en todos los elementos interactivos
- [x] prefers-reduced-motion respetado en todas las animaciones
- [x] Imagenes en webp con lazy loading (hero con priority)

---

## Pendientes e issues conocidos

### Bloqueantes

- (Ninguno)

### No bloqueantes

- Logo del cliente pendiente: Navbar y Footer usan texto "VAN Contenedores" en vez de imagen
- Logo oscuro pendiente: para OG image
- Badge ISO/cargoworthy pendiente: imagen de certificacion no subida
- OG image (`og-default.jpg`) no generada (requiere logo)
- Redes sociales: campos `sameAs` en schema JSON-LD tienen placeholders en docs pero no se incluyeron en el schema implementado
- Horarios de operacion: no incluidos en schema (requiere confirmacion del cliente)
- Version en ingles (`/en/`): documentada en seo-textos.md pero no implementada (fase futura)

---

## Historial de cambios

_Sin cambios registrados aun._
