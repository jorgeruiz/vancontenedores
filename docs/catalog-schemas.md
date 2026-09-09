# Catálogos del sitio

Este archivo documenta los catálogos de contenido recurrente del sitio.
Code lo lee para saber qué plantillas existen y cómo agregar nuevos ítems.

---

## Blog

**Rutas:**
- Listing: `/blog` — grid editorial con paginación y filtro por categoría
- Detalle: `/blog/[slug]` — artículo completo

**Schema del artículo:**

| Campo | Tipo | Requerido |
|---|---|---|
| titulo | string | sí |
| slug | string (kebab-case, sin acentos, inmutable) | sí |
| categoria | string (una principal) | sí |
| tags | string[] | no |
| extracto | string (max 160, usado como meta description) | sí |
| cuerpo | markdown | sí |
| imagen_portada | image (1 requerida) | sí |
| imagenes_apoyo | image[] | no |
| autor | string (default: VAN Contenedores) | sí |
| fecha_publicacion | date (fecha de push) | sí |

**Categorías existentes:**
<!-- Code actualiza esta lista al agregar artículos con categorías nuevas -->
- (ninguna todavía)

**Reglas SEO:**
- Un solo H1 por artículo (= título)
- `<title>`: "{titulo} | {nombre del sitio}"
- `meta description`: extracto (max 160 chars)
- Schema.org Article: headline, author, datePublished, image
- Alt text descriptivo en portada y todas las imágenes
- Slug limpio, inmutable post-publicación
- Open Graph tags (og:title, og:description, og:image)
- Entrada en sitemap.xml
- Enlazado interno sugerido entre artículos de la misma categoría

**Contenido MDX:**
- Archivos en `content/blog/[slug].mdx`
- Imágenes en `public/blog/[slug]/`
- Frontmatter con todos los campos del schema

**Renderer — requisitos obligatorios:**
- Instalar `remark-gfm` y pasarlo como plugin a react-markdown (o equivalente). El contenido publicado por Constructor incluye tablas GFM, strikethrough y autolinks
- Enlaces internos (`/blog/otro-articulo`, `/contacto`) deben usar `<Link>` de Next.js para navegación client-side con prefetching. Enlaces externos (`http...`) abren en nueva pestaña con `target="_blank" rel="noopener"`

---

## Propiedades

**Rutas:**
- Listing: `/propiedades` — grid de cards con filtros (operación, tipo, precio, ubicación) y paginación
- Detalle: `/propiedades/[slug]` — galería de fotos, ficha de datos, descripción, características, CTA de contacto

**Schema de propiedad (mixto venta/renta):**

| Campo | Tipo | Requerido |
|---|---|---|
| titulo | string | sí |
| slug | string (kebab-case, sin acentos, inmutable) | sí |
| operacion | enum: venta / renta | sí |
| tipo | enum: casa / departamento / oficina / local / nave_industrial / terreno | sí |
| precio | number | sí |
| moneda | enum: MXN / USD | sí |
| periodo_renta | enum: mensual / anual (solo si operacion=renta) | condicional |
| ubicacion | string (colonia/zona, ciudad) | sí |
| recamaras | number (no aplica a terreno/local/nave_industrial) | condicional |
| banos | number (no aplica a terreno/local/nave_industrial) | condicional |
| m2_construccion | number | no |
| m2_terreno | number | no |
| estacionamientos | number | no |
| descripcion | markdown | sí |
| caracteristicas | string[] (amenidades: alberca, seguridad, etc.) | no |
| fotos | image[] (1+ requerida) | sí |
| estatus | enum: disponible / apartada / vendida_rentada | sí (default disponible) |
| destacada | boolean (aparece en home) | no (default false) |
| fecha_publicacion | date (fecha de push) | sí |

**Campos condicionales:**
- `periodo_renta` solo visible/requerido si `operacion = renta`
- `recamaras` y `banos` ocultos si `tipo ∈ {terreno, local, nave_industrial}`

**Reglas SEO:**
- Un solo H1 por propiedad (= título)
- `<title>`: "{titulo} | {operacion} en {ubicacion} | {nombre del sitio}"
- `meta description`: descripción (max 160 chars)
- Schema.org RealEstateListing: precio, moneda, disponibilidad, ubicación
- Alt text descriptivo en todas las fotos
- Open Graph con foto principal y precio
- Slug limpio, inmutable post-publicación
- Entrada en sitemap.xml

**Contenido MDX:**
- Archivos en `content/propiedades/[slug].mdx` (o `app/propiedades/[slug]/page.tsx`)
- Fotos en `public/propiedades/[slug]/`
- Frontmatter con todos los campos del schema

---

## Tours

**Rutas:**
- Listing: `/tours` — grid de cards con filtros (destino, tipo, rango de precio) y paginación
- Detalle: `/tours/[slug]` — galería, datos clave, descripción, itinerario día por día, incluye/no incluye, CTA

**Schema del tour (mixto excursión/paquete):**

| Campo | Tipo | Requerido |
|---|---|---|
| titulo | string | sí |
| slug | string (kebab-case, sin acentos, inmutable) | sí |
| destino | string (ciudad/región) | sí |
| tipo | enum: excursion_dia / paquete / circuito / experiencia | sí |
| duracion | string ("3 días 2 noches", "8 horas") | sí |
| precio_desde | number | sí |
| moneda | enum: MXN / USD | sí |
| precio_por | enum: persona / grupo | sí |
| descripcion | markdown | sí |
| itinerario | array de {dia, titulo, actividades} | no |
| incluye | string[] | no |
| no_incluye | string[] | no |
| salidas | string ("diario", fechas, "bajo demanda") | no |
| fotos | image[] (1+ requerida) | sí |
| destacado | boolean | no (default false) |
| estatus | enum: disponible / agotado / temporada | sí (default disponible) |
| fecha_publicacion | date (fecha de push) | sí |

**Reglas SEO:**
- Un solo H1 por tour (= título)
- `<title>`: "{titulo} | {destino} | {nombre del sitio}"
- `meta description`: primeros 160 chars de la descripción
- Schema.org TouristTrip o Product con offers (precio_desde, moneda, disponibilidad)
- Alt text descriptivo en todas las fotos
- Open Graph con foto principal y precio_desde
- Slug limpio, inmutable post-publicación
- Entrada en sitemap.xml

**Contenido MDX:**
- Archivos en `content/tours/[slug].mdx` (o `app/tours/[slug]/page.tsx`)
- Fotos en `public/tours/[slug]/`
- Frontmatter con todos los campos del schema

---

## Landing Pages

No implementado. Bootstrappear cuando Jorge lo pida.

**Rutas:**
- Detalle: `/[slug]` (raiz, sin prefijo) — pagina de conversion con secciones reutilizables del sitio

**Schema de landing page:**

| Campo | Tipo | Requerido |
|---|---|---|
| titulo | string | si |
| slug | string (kebab-case, sin acentos, inmutable) | si |
| descripcion | string (max 200, usado como meta description) | si |
| og_image | image | no |
| target_audience | string (a quien va dirigida) | no |
| cta_principal | string (texto del boton principal) | si |
| noindex | boolean (true para campanas privadas) | no (default false) |
| fecha_publicacion | date | si |

**Secciones disponibles:**
Cada landing se compone de secciones MDX con tipo + props. El renderer mapea
tipo a componente. Tipos base (reutilizan componentes del home):

- `hero` — titulo, subtitulo, imagen, cta
- `problema` — dolor del cliente, contexto
- `solucion` — que ofrece el negocio
- `beneficios` — lista de beneficios con icono/imagen
- `testimonios` — citas de clientes
- `faq` — preguntas frecuentes (acordeon)
- `cta` — bloque de conversion con boton
- `pricing` — tabla de precios / paquetes
- `comparativa` — antes/despues, nosotros vs competencia

**Reglas SEO:**
- Un solo H1 por landing (= titulo)
- `<title>`: "{titulo} | {nombre del sitio}"
- `meta description`: descripcion (max 160 chars)
- Schema.org WebPage
- Open Graph con og_image o imagen del hero
- `noindex` si es campana privada (no indexar en Google)
- Entrada en sitemap.xml (excepto si noindex)

**Contenido MDX:**
- Archivos en `content/landings/[slug].mdx`
- Imagenes en `public/landings/[slug]/`
- Frontmatter con todos los campos del schema
- Cuerpo: markdown plano

**Renderer — requisitos obligatorios:**
- Instalar `remark-gfm` y pasarlo como plugin. El contenido incluye tablas GFM
- Enlaces internos con `<Link>` de Next.js (prefetching). Externos con `target="_blank" rel="noopener"`

---

## Micrositios

No implementado. Bootstrappear cuando Jorge lo pida.

**Rutas:**
- Index: `/m/[slug]` — pagina principal del micrositio con hero y contenido propio
- Sub-paginas: `/m/[slug]/[subpage]` — paginas internas opcionales

**Schema del micrositio:**

| Campo | Tipo | Requerido |
|---|---|---|
| titulo | string | si |
| slug | string (kebab-case, sin acentos, inmutable) | si |
| descripcion | string (max 200, usado como meta description) | si |
| og_image | image | no |
| nav_items | array de {label, subpage_slug} | no |
| cta_principal | string (texto del boton principal) | si |
| fecha_publicacion | date | si |

**Schema de sub-pagina:**

| Campo | Tipo | Requerido |
|---|---|---|
| titulo | string | si |
| slug | string (kebab-case) | si |
| descripcion | string | si |

**Diferencia con landing page:**
- El micrositio tiene layout propio (`MicrositeLayout.tsx`) con nav simplificado
  y puede tener multiples sub-paginas
- La landing es una sola pagina de conversion sin nav propio
- El micrositio hereda tokens (paleta, tipografia, radius) pero el layout
  (header, footer, nav) puede ser distinto al del sitio principal

**Reglas SEO:**
- Un solo H1 por pagina (= titulo)
- `<title>`: "{titulo de pagina} | {titulo de micrositio} | {nombre del sitio}"
- `meta description`: descripcion de cada pagina
- Schema.org WebPage para index, WebPage para sub-paginas
- Open Graph por pagina
- Sitemap entries para index + todas las sub-paginas
- Canonical apuntando al dominio principal (no subdominios)

**Contenido MDX:**
- Index en `content/microsites/[slug]/index.mdx`
- Sub-paginas en `content/microsites/[slug]/[subpage].mdx`
- Imagenes en `public/microsites/[slug]/`
- Frontmatter con todos los campos del schema

**Renderer — requisitos obligatorios:**
- Instalar `remark-gfm` y pasarlo como plugin. El contenido incluye tablas GFM
- Enlaces internos con `<Link>` de Next.js (prefetching). Externos con `target="_blank" rel="noopener"`
