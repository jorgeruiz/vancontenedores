# DESIGN.md - VAN Contenedores

Fuente de verdad del sistema visual. Todos los componentes respetan estos tokens y reglas.

---

## Prohibiciones

- **Hex fuera de tokens:** solo los 7 colores definidos en `tokens.css` + `#DC2626` (error). Cualquier otro hex es violacion.
- **Clases Tailwind default:** `bg-blue-600`, `text-red-500`, `rounded-lg`, `shadow-md`, etc. estan desactivadas por los resets `initial` en `@theme`. No usarlas.
- **font-family directo:** no escribir `font-family: 'Arial'` ni ninguna familia fuera de `var(--font-heading)`, `var(--font-body)`, `var(--font-mono)`.
- **framer-motion:** no importar `framer-motion`. Usar `motion/react` si se necesita Motion, o GSAP + ScrollTrigger para scroll-driven. El budget de motion es CSS-first + GSAP para el momento memorable.
- **Em-dashes:** el caracter `—` esta prohibido en todo el sitio (headlines, body, CTAs, alt text, captions). Usar guion normal `-` o reestructurar la frase.

---

## Tokens

Definidos en `tokens.css`. Importar via `@import './tokens.css'` en `globals.css`.

### Colores

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-bg` | `#0A0F14` | Fondo principal, negro azulado profundo |
| `--color-surface` | `#141B23` | Cards, bloques elevados, areas de contenido |
| `--color-primary` | `#247A4C` | CTAs, indicadores de accion, datos clave |
| `--color-on-primary` | `#FFFFFF` | Texto sobre botones/elementos primary |
| `--color-text` | `#E8ECF0` | Texto principal |
| `--color-text-muted` | `#7A8A9A` | Texto secundario, metadata, etiquetas |
| `--color-border` | `#1E2A36` | Lineas divisorias, separadores, contornos |
| `--color-error` | `#DC2626` | Estados de error |

### Regla de dosificacion del primary

El verde (`--color-primary`) aparece SOLO en:
- Botones CTA (fondo)
- El dato "24 horas" en el hero
- Checkmarks o indicadores de beneficio
- Links de accion

NO usar primary como fondo de seccion, borde decorativo, ni gradiente.

---

## Tipografia

### Familias

| Token | Familia | Uso |
|-------|---------|-----|
| `--font-heading` | Geist | Headlines H1-H4 |
| `--font-body` | Plus Jakarta Sans | Parrafos, listas, UI general |
| `--font-mono` | Geist Mono | Datos numericos, dimensiones, specs |

### Carga de fuentes

Usar `next/font/google` para Plus Jakarta Sans y `next/font/local` para Geist (incluido en Next.js):

```tsx
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
```

### Escala tipografica

| Token | Tamano | Uso tipico |
|-------|--------|-----------|
| `--text-xs` | 0.75rem (12px) | Micro-labels, legal |
| `--text-sm` | 0.875rem (14px) | Captions, metadata |
| `--text-base` | 1rem (16px) | Body text |
| `--text-lg` | 1.125rem (18px) | Body destacado |
| `--text-xl` | 1.25rem (20px) | Subtitulos |
| `--text-2xl` | 1.5rem (24px) | H4, titulos de card |
| `--text-3xl` | 2.5rem (40px) | H2-H3 |
| `--text-4xl` | 3.5rem (56px) | H1, display |

### Heading rules

- `font-family: var(--font-heading)`
- `letter-spacing: var(--heading-tracking)` (-0.02em)
- `font-weight: var(--heading-weight)` (700)
- Color: `var(--color-text)` por default

### Datos numericos

Dimensiones, tiempos, especificaciones se renderizan en `var(--font-mono)` a tamano display cuando son protagonistas (ej. "24h", "6.09m x 2.44m").

---

## Forma

| Propiedad | Valor | Nota |
|-----------|-------|------|
| Border radius | `var(--radius)` = 8px | Unico radio en todo el sitio |
| Border width | `var(--border-width)` = 1px | Para lineas divisorias y contornos |
| Shadows | Ninguna | No se usan sombras. La separacion se logra con bordes y color de surface |
| Glass effects | Ninguno | No glassmorphism en esta direccion |

### Regla de forma

Radio 8px en TODOS los elementos con borde redondeado (buttons, cards, inputs). No mezclar radios. No usar `rounded-full` excepto en badges/pills pequenos de metadata.

---

## Densidad y espaciado

| Contexto | Espaciado |
|----------|-----------|
| Entre secciones | `var(--section-y)` = 5rem (80px) |
| Padding de seccion horizontal | `var(--gutter)` = 1.5rem, dentro de `max-w-[var(--content-width)]` |
| Gap en grids | 1.5rem - 2rem |
| Padding interno de cards | 1.5rem - 2rem |
| Stack vertical (heading + body) | 1rem - 1.5rem |

La densidad es media-alta: no es un sitio "art gallery" con espacio excesivo, ni un cockpit apretado. Las secciones respiran pero la informacion esta compactada dentro de cada bloque.

---

## Motion

| Propiedad | Valor |
|-----------|-------|
| Budget | CSS transitions + GSAP ScrollTrigger para momento memorable |
| Duracion maxima | `var(--duration-max)` = 300ms para micro-interacciones |
| Easing | `var(--easing)` = cubic-bezier(0.4, 0, 0.2, 1) |
| Propiedades animables | Solo `transform` y `opacity` |
| Reduced motion | Obligatorio: `prefers-reduced-motion: reduce` desactiva todo |

### Permitido

- Hover en CTAs: `scale(0.98)` + cambio de opacidad
- Scroll-reveal con `IntersectionObserver` o Motion `whileInView`: fade-up sutil (translate-y-4, opacity 0 a 1)
- GSAP ScrollTrigger para el selector interactivo de contenedores (momento memorable)
- Interpolacion numerica en datos (spring physics para el selector)

### Prohibido

- `framer-motion` como import (usar `motion/react`)
- `window.addEventListener('scroll')` - usar ScrollTrigger o `useScroll`
- Animaciones de `width`, `height`, `top`, `left`
- Loops infinitos (marquees, pulsos perpetuos)
- Parallax generico sin proposito funcional

---

## Accesibilidad

### Contraste (WCAG AA obligatorio)

| Par | Ratio minimo | Estado |
|-----|-------------|--------|
| `--color-text` (#E8ECF0) vs `--color-bg` (#0A0F14) | >= 4.5:1 | DEBE pasar |
| `--color-text-muted` (#7A8A9A) vs `--color-bg` (#0A0F14) | >= 3.0:1 | DEBE pasar |
| `--color-text` (#E8ECF0) vs `--color-surface` (#141B23) | >= 4.5:1 | DEBE pasar |
| `--color-on-primary` (#FFFFFF) vs `--color-primary` (#247A4C) | >= 4.5:1 | DEBE pasar |

### Focus visible

Todos los elementos interactivos deben tener `focus-visible` con outline de 2px en `--color-primary` y offset de 2px.

### Texto sobre imagenes

Cuando haya texto sobre hero con imagen de fondo, DEBE haber un overlay oscuro (`bg-gradient-to-t from-bg/90 to-bg/40` o similar) que garantice el contraste. El verify-design.sh no puede checar esto automaticamente, pero el auditor lo revisa.
