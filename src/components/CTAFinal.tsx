"use client";

import Image from "next/image";
import { ArrowRight, Phone, Envelope } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

export default function CTAFinal() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-light)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left content - 7 cols */}
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                color: "var(--color-text-dark)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              Solicita tu contenedor{" "}
              <span style={{ color: "var(--color-primary)" }}>hoy</span>
            </h2>

            <p
              className="mb-10 max-w-[40ch]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-lg)",
                color: "var(--color-text-muted-dark)",
                lineHeight: 1.7,
              }}
            >
              Cotizacion inmediata, entrega en menos de 24 horas. Resuelve tu necesidad de almacenaje hoy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+528184692252"
                className="inline-flex items-center gap-3 transition-transform active:scale-[0.98]"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-on-primary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  padding: "1rem 2rem",
                  borderRadius: "var(--radius)",
                }}
              >
                <Phone size={18} weight="bold" />
                (81) 8469 2252
                <span
                  className="flex items-center justify-center"
                  style={{
                    width: "1.75rem",
                    height: "1.75rem",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                >
                  <ArrowRight size={14} weight="bold" />
                </span>
              </a>

              <a
                href="mailto:ventas@vancontenedores.com"
                className="inline-flex items-center gap-3"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-muted-dark)",
                  padding: "1rem 1.5rem",
                  borderRadius: "var(--radius)",
                  border: "var(--border-width) solid var(--color-border-light)",
                }}
              >
                <Envelope size={18} weight="regular" />
                ventas@vancontenedores.com
              </a>
            </div>
          </motion.div>

          {/* Right image - 5 cols, clean no overlay */}
          <motion.div
            className="lg:col-span-5"
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative aspect-[4/3] overflow-hidden"
              style={{
                borderRadius: "var(--radius)",
                border: "var(--border-width) solid var(--color-border-light)",
              }}
            >
              <Image
                src="/images/container-delivery-truck.webp"
                alt="Camion con grua entregando contenedor maritimo en obra"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
