# Mapa del Sitio - VAN Contenedores

**Ultima actualizacion:** 2026-09-17

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
| `home_cta` | Contacto / Solicitar contenedor | `src/components/CTAFinal.tsx` |
| `home_footer` | Pie de pagina | `src/components/Footer.tsx` |

### Landing por ciudad (`/renta-contenedores-[city]`)

**ID de pagina:** `city_landing`

Copia del home con Hero localizado por ciudad. Genera paginas estaticas para SEO local.

| Slug | Ciudad | Region |
|------|--------|--------|
| `monterrey` | Monterrey | Nuevo Leon |
| `queretaro` | Queretaro | Queretaro |
| `guadalajara` | Guadalajara | Jalisco |
| `san-luis-potosi` | San Luis Potosi | SLP |
| `altamira` | Altamira | Tamaulipas |
| `merida` | Merida | Yucatan |
