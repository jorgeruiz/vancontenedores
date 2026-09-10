"use client";

import { motion, useReducedMotion } from "motion/react";

const ITEMS = [
  { value: "24h", label: "Entrega tras completar el proceso de renta", sup: "horas" },
  { value: "5", label: "Sucursales estrategicas con cobertura nacional", sup: "sucursales" },
  { value: "10+", label: "Anos de operacion continua desde 2014", sup: "anos" },
  { value: "ISO", label: "Estandares de calidad con certificacion cargoworthy", sup: "certificado" },
];

export default function Differentiators() {
  const reduce = useReducedMotion();

  return (
    <section
      id="diferenciadores"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg)",
        borderTop: "var(--border-width) solid var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderLeft: "var(--border-width) solid var(--color-border)" }}
        >
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.value}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between gap-6 p-6 md:p-8"
              style={{
                borderRight: "var(--border-width) solid var(--color-border)",
                borderBottom: "var(--border-width) solid var(--color-border)",
                minHeight: "220px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {item.sup}
              </span>

              <div>
                <span
                  className="block mb-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    letterSpacing: "-0.04em",
                    lineHeight: 0.9,
                  }}
                >
                  {item.value}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
