# Mapa del Sitio - VAN Contenedores

**Ultima actualizacion:** 2026-09-23

---

## Paginas y secciones

### Inicio (`/`)

**ID de pagina:** `home`

| ID de seccion | Etiqueta para el cliente | Componente |
|--------------|--------------------------|------------|
| `home_hero` | Hero principal | `src/components/Hero.tsx` |
| `home_differentiators` | Diferenciadores (24h, sucursales, ISO, experiencia) | `src/components/Differentiators.tsx` |
| `home_containers` | Selector de contenedores (10, 20, 40 pies) | `src/components/ContainerSelector.tsx` |
| `home_construction` | Almacenaje en obra | `src/components/Construction.tsx` |
| `home_gallery` | Galeria de fotos (carrusel infinito) | `src/components/Gallery.tsx` |
| `home_coverage` | Cobertura nacional | `src/components/Coverage.tsx` |
| `home_faq` | Preguntas frecuentes | `src/components/FAQ.tsx` |
| `home_cta` | Contacto / Solicitar contenedor (cotizador email) | `src/components/CTAFinal.tsx` |
| `home_footer` | Pie de pagina | `src/components/Footer.tsx` |

### Landing por ciudad (`/renta-contenedores-[city]`)

**ID de pagina:** `city_landing`

Copia del home con Hero localizado por ciudad. Genera paginas estaticas para SEO local. Visitantes de estas ciudades son redirigidos automaticamente desde `/` via geo-redirect (proxy.ts).

| Slug | Ciudad | Region |
|------|--------|--------|
| `monterrey` | Monterrey | Nuevo Leon |
| `queretaro` | Queretaro | Queretaro |
| `guadalajara` | Guadalajara | Jalisco |
| `san-luis-potosi` | San Luis Potosi | SLP |
| `altamira` | Altamira | Tamaulipas |
| `merida` | Merida | Yucatan |

### API

| Ruta | Metodo | Descripcion |
|------|--------|-------------|
| `/api/quote` | POST | Envia cotizacion por email SMTP a 5 destinatarios |

### Archivos generados

| Ruta | Archivo | Descripcion |
|------|---------|-------------|
| `/robots.txt` | `src/app/robots.ts` | Robots |
| `/sitemap.xml` | `src/app/sitemap.ts` | Sitemap |
| `/icon` | `src/app/icon.tsx` | Favicon dinamico (V verde) |
