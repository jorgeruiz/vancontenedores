"use client";

import Image from "next/image";
import { MapPin } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const CITIES = [
  { name: "Monterrey", region: "Nuevo Leon" },
  { name: "Queretaro", region: "Queretaro" },
  { name: "Guadalajara", region: "Jalisco" },
  { name: "San Luis Potosi", region: "SLP" },
  { name: "Veracruz", region: "Veracruz" },
  { name: "Altamira", region: "Tamaulipas" },
  { name: "Merida", region: "Yucatan" },
  { name: "Tijuana", region: "Baja California" },
];

export default function Coverage() {
  const reduce = useReducedMotion();

  return (
    <section
      id="cobertura"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Background map - full width, faded */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-[1400px] aspect-[2/1] opacity-30">
          <Image
            src="/images/coverage-map.webp"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2
            className="text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)] lg:text-[length:4.5rem] mb-4"
            style={{
              color: "var(--color-text)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Cobertura nacional
          </h2>
          <p
            className="mx-auto max-w-[45ch]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-lg)",
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
            }}
          >
            5 sucursales estrategicas cubriendo las principales zonas industriales de Mexico
          </p>
        </motion.div>

        {/* Cities in a single horizontal row with dividers */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8"
          style={{
            border: "var(--border-width) solid var(--color-border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          }}
        >
          {CITIES.map((city, i) => (
            <motion.div
              key={city.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center gap-2 py-6 px-3"
              style={{
                backgroundColor: "var(--color-surface)",
                borderRight:
                  i < CITIES.length - 1
                    ? "var(--border-width) solid var(--color-border)"
                    : "none",
              }}
            >
              <MapPin
                size={16}
                weight="fill"
                style={{ color: "var(--color-primary)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  textAlign: "center",
                }}
              >
                {city.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-text-muted)",
                }}
              >
                {city.region}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
