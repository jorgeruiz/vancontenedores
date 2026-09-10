# VAN Contenedores - Reglas del repositorio

**Stack:** Next.js 16 + Tailwind v4 + GSAP
**Raiz del proyecto:** este directorio
**Deploy:** Vercel

---

## Fuentes de verdad del diseno

- `DESIGN.md` - prohibiciones, tokens, tipografia, motion budget, accesibilidad
- `tokens.css` - variables CSS canonicas en bloque @theme

No usar colores hex fuera de los 7 tokens + error (#DC2626). No usar clases Tailwind default de color, rounded, o shadow. Ver DESIGN.md para la lista completa de prohibiciones.

---

## Reglas de mantenimiento

- Toda pagina nueva se registra en `docs/site-map.md` antes de cerrar la sesion
- Toda sesion de cambios agrega una entrada al historial de `docs/site-state.md`
- No dejar bloques `>` de instrucciones ni placeholders `[...]` en los docs
- Correr `./verify-design.sh` antes de cada commit
- Los esquemas JSON-LD viven en `src/lib/schemas.ts`
- Las imagenes van en `/public/images/` en formato `.webp`
- Solo la imagen del hero lleva `priority`; el resto usa lazy loading

---

## Documentos del proyecto

| Archivo | Contenido |
|---------|-----------|
| `docs/site-spec.md` | Stack, dependencias, componentes, decisiones de arquitectura |
| `docs/site-map.md` | Paginas y secciones con IDs para el selector de cambios |
| `docs/site-state.md` | Estado actual, features, pendientes, historial de cambios |
| `docs/catalog-schemas.md` | Schemas de blog, landings, micrositios (no implementados) |
| `docs/brief-negocio.md` | Brief original del negocio |
| `docs/seo-textos.md` | Copy SEO del sitio |
| `docs/seo-aeo-geo.md` | Contenido para motores de IA |
| `docs/schema-org.md` | Referencia de JSON-LD structured data |
| `docs/keyword-research.md` | Keywords con clusters tematicos |
| `docs/image-manifest.md` | Manifiesto de imagenes del home |

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
