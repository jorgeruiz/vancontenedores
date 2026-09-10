"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";

const FAQS = [
  {
    q: "Para que sirve rentar un contenedor maritimo en una obra?",
    a: "Un contenedor maritimo rentado funciona como bodega temporal en sitio para guardar herramientas, materiales de construccion, maquinaria, documentos y mobiliario directamente en la obra, sin necesidad de construir un cuarto de bodega permanente.",
  },
  {
    q: "Cuanto tardan en entregar el contenedor?",
    a: "VAN Contenedores entrega el contenedor en menos de 24 horas despues de completar el proceso de renta. La cotizacion se genera de forma inmediata tras el primer contacto.",
  },
  {
    q: "Que tamanos de contenedores estan disponibles?",
    a: "Rentamos contenedores de 10, 20 y 40 pies. El de 20 pies mide 6.09 m x 2.44 m x 2.60 m de alto; el de 40 pies mide 12.19 m x 2.44 m x 2.60 m.",
  },
  {
    q: "Cual es el tiempo minimo de renta?",
    a: "El tiempo minimo de renta es un mes. Si el proyecto requiere menos tiempo, evaluamos soluciones caso por caso.",
  },
  {
    q: "Que documentos se necesitan para rentar?",
    a: "Identificacion oficial, constancia de situacion fiscal, comprobante de domicilio, y acta constitutiva en caso de persona moral.",
  },
  {
    q: "El contenedor es seguro para guardar material de valor?",
    a: "Si. Acero de alta resistencia con estandares ISO y certificacion cargoworthy. Cierre reforzado, estructura practicamente inviolable sin equipo especializado.",
  },
  {
    q: "En que ciudades entregan?",
    a: "Cobertura nacional: Monterrey, Veracruz, Altamira, Merida, Tijuana, Queretaro, San Luis Potosi y Guadalajara.",
  },
  {
    q: "Se puede rentar para transporte ademas de almacenaje?",
    a: "Si. Rentamos para almacenaje temporal y transporte de mercancias. Certificacion cargoworthy habilitada para rutas nacionales.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        borderBottom: "var(--border-width) solid var(--color-border-light)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors"
        aria-expanded={isOpen}
        style={{ cursor: "pointer" }}
      >
        <span
          className="flex items-center gap-4"
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--color-primary)",
              minWidth: "1.75rem",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-base)",
              fontWeight: 600,
              color: "var(--color-text-dark)",
              lineHeight: 1.4,
              letterSpacing: "var(--heading-tracking)",
            }}
          >
            {faq.q}
          </span>
        </span>
        <span
          className="shrink-0 flex items-center justify-center w-8 h-8 transition-transform"
          style={{
            borderRadius: "50%",
            backgroundColor: isOpen ? "var(--color-primary)" : "var(--color-border-light)",
            color: isOpen ? "var(--color-on-primary)" : "var(--color-text-muted-dark)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transitionDuration: "var(--duration-max)",
            transitionTimingFunction: "var(--easing)",
          }}
        >
          <CaretDown size={14} weight="bold" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 pl-[calc(1.75rem+1rem)]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--color-text-muted-dark)",
                lineHeight: 1.7,
                maxWidth: "60ch",
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--color-bg-light)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: sticky heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <motion.h2
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)] mb-4"
                style={{ color: "var(--color-text-dark)", lineHeight: 1.1 }}
              >
                Preguntas frecuentes
              </motion.h2>
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  color: "var(--color-text-muted-dark)",
                  lineHeight: 1.7,
                }}
              >
                Todo lo que necesitas saber sobre la renta de contenedores maritimos.
              </motion.p>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
