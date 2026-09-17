"use client";

import { useRef } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const PHOTOS = [
  { src: "/images/client-m1.webp", alt: "Fila de contenedores en patio industrial" },
  { src: "/images/client-cargando-1.webp", alt: "Contenedor siendo transportado en camión" },
  { src: "/images/client-f1.webp", alt: "Contenedor en sitio de construcción" },
  { src: "/images/client-f2.webp", alt: "Contenedor en terreno con montañas" },
  { src: "/images/client-f4.webp", alt: "Contenedores en zona industrial" },
  { src: "/images/client-f5.webp", alt: "Contenedor en obra con vista lateral" },
  { src: "/images/client-f6.webp", alt: "Contenedor largo en área industrial" },
  { src: "/images/client-f9.webp", alt: "Contenedor en sitio con grúa" },
  { src: "/images/client-f10.webp", alt: "Contenedor con trabajador en obra" },
  { src: "/images/client-f11.webp", alt: "Contenedores en parque industrial" },
  { src: "/images/client-f12.webp", alt: "Contenedor siendo descargado con cadenas" },
  { src: "/images/client-f97.webp", alt: "Dos contenedores en construcción de nave" },
  { src: "/images/client-f98.webp", alt: "Contenedor en terreno de obra con vegetación" },
  { src: "/images/client-f99.webp", alt: "Contenedor con calcomanía de renta" },
  { src: "/images/client-img-20231122-wa0010.webp", alt: "Contenedor abierto en bodega" },
  { src: "/images/client-img-20250818-wa0019.webp", alt: "Contenedor dentro de nave industrial con montacargas" },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: reduce ? "auto" : "smooth",
    });
  };

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
        <div className="flex items-end justify-between mb-6">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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

          {/* Nav arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-9 h-9 transition-colors"
              style={{
                borderRadius: "50%",
                border: "var(--border-width) solid var(--color-border)",
                color: "var(--color-text-muted)",
                cursor: "pointer",
              }}
              aria-label="Anterior"
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center w-9 h-9 transition-colors"
              style={{
                borderRadius: "50%",
                border: "var(--border-width) solid var(--color-border)",
                color: "var(--color-text-muted)",
                cursor: "pointer",
              }}
              aria-label="Siguiente"
            >
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-[var(--gutter)] pb-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Left spacer for max-width alignment */}
        <div className="shrink-0" style={{ width: "max(0px, calc((100vw - var(--content-width)) / 2 - var(--gutter)))" }} />

        {PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: i * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative shrink-0 aspect-[3/2] overflow-hidden"
            style={{
              width: "min(380px, 75vw)",
              borderRadius: "var(--radius)",
              border: "var(--border-width) solid var(--color-border)",
              scrollSnapAlign: "start",
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="380px"
            />
          </motion.div>
        ))}

        {/* Right spacer */}
        <div className="shrink-0 w-4" />
      </div>
    </section>
  );
}
