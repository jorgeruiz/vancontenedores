"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Full-bleed image - cleaner, less overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-home.webp"
          alt="Contenedor maritimo de acero en terreno industrial"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Lighter gradient - only bottom fade for text area */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-bg) 0%, rgba(10,15,20,0.7) 30%, rgba(10,15,20,0.15) 60%, rgba(10,15,20,0.25) 100%)",
          }}
        />
      </div>

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
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
          }}
        >
          24h
        </motion.span>
      </div>

      {/* Content pinned to bottom-left */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-20 pt-24">
        <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)] w-full">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2"
              style={{
                borderRadius: "var(--radius)",
                border: "var(--border-width) solid rgba(255,255,255,0.15)",
                backgroundColor: "rgba(10,15,20,0.5)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
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
            className="mb-8"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.75rem, 7vw, 6rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--color-text)",
              maxWidth: "14ch",
            }}
          >
            Renta de Contenedores{" "}
            <span style={{ color: "var(--color-primary)" }}>Maritimos</span>
          </motion.h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
          >
            <p
              className="max-w-[38ch]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-lg)",
                color: "rgba(232,236,240,0.85)",
                lineHeight: 1.6,
              }}
            >
              Almacenaje temporal en sitio para constructoras y empresas. Cobertura nacional desde 5 sucursales.
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
                Solicitar un contenedor
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
                href="tel:+528184692252"
                className="inline-flex items-center justify-center"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text)",
                  padding: "1rem 1.5rem",
                  borderRadius: "var(--radius)",
                  border: "var(--border-width) solid rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(10,15,20,0.4)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              >
                (81) 8469 2252
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 pt-6 flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{
              borderTop: "var(--border-width) solid rgba(255,255,255,0.1)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "rgba(232,236,240,0.6)",
              letterSpacing: "0.04em",
            }}
          >
            <span>Fundada en 2014</span>
            <span className="hidden sm:inline-block w-px h-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
            <span>Estandares ISO</span>
            <span className="hidden sm:inline-block w-px h-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
            <span>Certificacion cargoworthy</span>
            <span className="hidden sm:inline-block w-px h-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
            <span>Empresa 100% mexicana</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
