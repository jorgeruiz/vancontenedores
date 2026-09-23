# Estado del Sitio - VAN Contenedores

---

## Estado actual

**Ultima actualizacion:** 2026-09-23
**Version del sitio:** 1.0.0
**URL de produccion:** https://vancontenedores.com
**Repo:** https://github.com/jorgeruiz/vancontenedores.git
**Branch principal:** main
**Estado:** Completo - sin pendientes

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
- [x] Galeria de fotos con carrusel infinito y drag support
- [x] Mapa de cobertura con 8 ciudades y bordes estatales
- [x] FAQ en texto plano (8 preguntas, 2 columnas, sin acordeon)
- [x] CTA final con cotizador por email (envio SMTP a 5 correos)
- [x] Footer con datos verificables para AEO (ciudades, NAP, ano de fundacion)
- [x] Design system cerrado via tokens.css con @theme resets
- [x] JSON-LD: LocalBusiness, FAQPage, 3 Service schemas
- [x] Meta tags: title, description, OG, Twitter Cards, canonical, lang="es"
- [x] robots.ts y sitemap.ts
- [x] verify-design.sh con checks de contraste WCAG AA
- [x] Focus-visible en todos los elementos interactivos
- [x] prefers-reduced-motion respetado en todas las animaciones
- [x] Imagenes en webp con lazy loading (hero con priority)
- [x] Landing pages por ciudad (6 ciudades) con SEO local y schema LocalBusiness
- [x] Geo-redirect por IP via proxy.ts (redirige visitantes de ciudades conocidas a su landing)
- [x] Formulario popup WhatsApp (QuoteForm) con envio de correo SMTP en paralelo
- [x] Cotizador por email (CTAFinal) con envio SMTP a 5 destinatarios
- [x] Etiqueta de origen en correos (Home / Landing Ciudad) en subject y cuerpo
- [x] Favicon dinamico generado con icon.tsx (V verde del logo)
- [x] Logo del cliente integrado en Navbar y componentes
- [x] GTM instalado (GTM-W2BQDP2Z) con 2 eventos separados
- [x] Evento `cotizador_enviado` para formulario de email
- [x] Evento `cotizacion_whatsapp` para formulario WhatsApp
- [x] Pixel de Meta (fbq Contact / Lead) en ambos formularios
- [x] WhatsApp bubble flotante

---

## Pendientes e issues conocidos

### Bloqueantes

- (Ninguno)

### No bloqueantes

- (Ninguno)

---

## Historial de cambios

### 2026-09-23
- Geo-redirect: proxy.ts redirige trafico por ciudad a landing pages correspondientes
- Favicon: reemplazo de favicon.ico generico por icon.tsx dinamico (V verde)
- Correo: QuoteForm ahora envia email SMTP ademas de abrir WhatsApp
- Correo: CTAFinal envia a 5 destinatarios con etiqueta de origen (landing/home)
- GTM: eventos separados cotizador_enviado y cotizacion_whatsapp

### 2026-09-17
- Landing pages por ciudad con rutas dinamicas [city] y slugs prefijados
- Hero con altura ajustada para enfoque en contenedores

### 2026-09-09
- Construccion inicial del sitio completo
