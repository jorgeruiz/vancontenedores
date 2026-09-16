"use client";

import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const BENEFITS = [
  "Se instala directo en tu obra, sin construcción permanente",
  "Acero de alta resistencia con cierre reforzado",
  "Protege herramientas, materiales y maquinaria",
  "Renta mensual sin inversión en infraestructura fija",
];

export default function Construction() {
  const reduce = useReducedMotion();

  return (
    <section
      id="construccion"
      className="relative py-20 md:py-28"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        {/* Full-width image with floating text panel */}
        <div className="relative">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[21/9] md:aspect-[2.8/1] overflow-hidden"
            style={{
              borderRadius: "var(--radius)",
              border: "var(--border-width) solid var(--color-border)",
            }}
          >
            <Image
              src="/images/client-f1.webp"
              alt="Contenedor marítimo abierto en obra de construcción con materiales almacenados"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(10,15,20,0.75) 0%, rgba(10,15,20,0.25) 45%, transparent 100%)",
              }}
            />

            {/* Overlay content on the left side of the image */}
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 md:p-12 max-w-[520px]">
                <h2
                  className="text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)] mb-4"
                  style={{
                    color: "var(--color-text)",
                    lineHeight: 1.1,
                  }}
                >
                  Almacenaje temporal en obra
                </h2>
                <p
                  className="hidden md:block mb-6"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  Bodega temporal en sitio para guardar herramientas, materiales de construcción, maquinaria y documentos directamente en la obra.
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                  }}
                >
                  Cotizar para mi obra
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Floating specs bar below image - negative margin overlap */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-4 md:mx-12 -mt-8 md:-mt-10 p-5 md:p-6"
            style={{
              backgroundColor: "var(--color-surface)",
              borderRadius: "var(--radius)",
              border: "var(--border-width) solid var(--color-border)",
              boxShadow: "0 24px 48px rgba(0,0,0,0.3)",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-primary)" }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text)",
                      lineHeight: 1.5,
                    }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
