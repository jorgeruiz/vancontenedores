"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const PHOTOS = [
  { src: "/images/client-f2.webp", alt: "Contenedor maritimo en terreno con montanas" },
  { src: "/images/client-f4.webp", alt: "Contenedores en zona industrial" },
  { src: "/images/client-f5.webp", alt: "Contenedor en obra con sombras" },
  { src: "/images/client-f9.webp", alt: "Contenedor en sitio industrial con grua" },
  { src: "/images/client-f10.webp", alt: "Contenedor en obra con trabajador" },
  { src: "/images/client-f11.webp", alt: "Contenedores en parque industrial" },
];

export default function Gallery() {
  const reduce = useReducedMotion();

  return (
    <section
      className="py-16 md:py-20 overflow-hidden"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "var(--border-width) solid var(--color-border)",
        borderBottom: "var(--border-width) solid var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            color: "var(--color-text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Nuestros contenedores en campo
        </motion.p>
      </div>

      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative aspect-[4/3] overflow-hidden"
              style={{
                borderRadius: "var(--radius)",
                border: "var(--border-width) solid var(--color-border)",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
