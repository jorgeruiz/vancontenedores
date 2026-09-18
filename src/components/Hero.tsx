"use client";

import Image from "next/image";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useQuote } from "./QuoteProvider";

interface HeroProps {
  city?: string;
  subtitle?: string;
}

export default function Hero({ city, subtitle }: HeroProps) {
  const reduce = useReducedMotion();
  const { openQuote } = useQuote();

  const heading = city
    ? `Renta de Contenedores Marítimos en ${city}`
    : "Renta de Contenedores Marítimos";

  const desc = subtitle
    || "Almacenaje temporal en sitio para constructoras y empresas. Cobertura nacional desde 6 sucursales.";

  return (
    <section id="hero">
      {/* Block 1: Solid dark background with content */}
      <div
        className="relative flex flex-col justify-center"
        style={{
          backgroundColor: "var(--color-bg)",
          minHeight: "55dvh",
          paddingTop: "5rem",
        }}
      >
        {/* Large display number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
          <motion.span
            initial={reduce ? false : { opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(12rem, 22vw, 20rem)",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,255,255,0.15)",
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
            }}
          >
            24h
          </motion.span>
        </div>

        <div className="relative z-10 mx-auto max-w-[var(--content-width)] px-[var(--gutter)] w-full py-10 md:py-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="inline-flex items-center gap-2.5 mb-6 px-5 py-2.5"
              style={{
                borderRadius: "var(--radius)",
                border: "1px solid rgba(255,255,255,0.15)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text)",
                  letterSpacing: "0.06em",
                }}
              >
                Entrega en menos de 24 horas
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
              maxWidth: "18ch",
            }}
          >
            {city ? (
              <>
                Renta de Contenedores Marítimos en{" "}
                <span style={{ color: "var(--color-primary)" }}>{city}</span>
              </>
            ) : (
              "Renta de Contenedores Marítimos"
            )}
          </motion.h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16"
          >
            <p
              className="max-w-[38ch]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-lg)",
                color: "var(--color-text-muted)",
                lineHeight: 1.6,
              }}
            >
              {desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
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
                Cotiza en línea
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
              <button
                onClick={openQuote}
                className="inline-flex items-center justify-center gap-3"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  padding: "1rem 1.5rem",
                  borderRadius: "var(--radius)",
                  border: "var(--border-width) solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  cursor: "pointer",
                }}
              >
                <WhatsappLogo size={18} weight="fill" style={{ color: "#25D366" }} />
                WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Block 2: Image cropped to focus on containers */}
      <div
        className="relative"
        style={{ height: "clamp(300px, 45vw, 550px)" }}
      >
        <Image
          src="/images/client-m1.webp"
          alt={city
            ? `Contenedores marítimos VAN Contenedores en ${city}`
            : "Fila de contenedores marítimos VAN Contenedores en patio industrial"}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-bg) 0%, rgba(10,15,20,0.6) 15%, rgba(10,15,20,0.1) 40%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
