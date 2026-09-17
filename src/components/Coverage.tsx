"use client";

import { MapPin } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { MEXICO_STATES_PATH } from "@/lib/mexico-map";

const CITIES_LIST = [
  { name: "Monterrey", region: "Nuevo León" },
  { name: "Querétaro", region: "Querétaro" },
  { name: "Guadalajara", region: "Jalisco" },
  { name: "San Luis Potosí", region: "SLP" },
  { name: "Altamira", region: "Tamaulipas" },
  { name: "Mérida", region: "Yucatán" },
];

const MAP_CITIES = [
  { name: "MONTERREY", x: 542, y: 263, anchor: "start" as const, dx: 16, dy: 5 },
  { name: "ALTAMIRA", x: 608, y: 354, anchor: "start" as const, dx: 16, dy: 5 },
  { name: "SAN LUIS POTOSÍ", x: 523, y: 361, anchor: "end" as const, dx: -16, dy: 5 },
  { name: "QUERÉTARO", x: 540, y: 404, anchor: "start" as const, dx: 16, dy: 5 },
  { name: "GUADALAJARA", x: 458, y: 403, anchor: "end" as const, dx: -16, dy: 5 },
  { name: "MÉRIDA", x: 840, y: 394, anchor: "start" as const, dx: 16, dy: 5 },
];

function MexicoMap() {
  return (
    <svg
      viewBox="0 0 960 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mapa de México con las 6 ciudades de cobertura de VAN Contenedores"
      style={{ width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="city-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* State borders */}
      <path
        d={MEXICO_STATES_PATH}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="0.75"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Country outline (same path, thicker) */}
      <path
        d={MEXICO_STATES_PATH}
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="rgba(255,255,255,0.03)"
      />

      {/* Connection lines from Monterrey hub */}
      <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
        {MAP_CITIES.filter((c) => c.name !== "MONTERREY").map((c) => (
          <line key={c.name} x1={542} y1={263} x2={c.x} y2={c.y} />
        ))}
      </g>
      <g stroke="var(--color-primary)" strokeWidth="1" opacity="0.35">
        {MAP_CITIES.filter((c) => c.name !== "MONTERREY").map((c) => (
          <line key={c.name} x1={542} y1={263} x2={c.x} y2={c.y} />
        ))}
      </g>

      {/* City markers */}
      {MAP_CITIES.map((city) => (
        <g key={city.name}>
          <circle cx={city.x} cy={city.y} r="22" fill="url(#city-glow)" />
          <circle cx={city.x} cy={city.y} r="5" fill="var(--color-primary)" />
          <circle cx={city.x} cy={city.y} r="2.5" fill="#3AAF6C" />
          <text
            x={city.x + city.dx}
            y={city.y + city.dy}
            textAnchor={city.anchor}
            fill="var(--color-text)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fontWeight="600"
            letterSpacing="0.08em"
          >
            {city.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Coverage() {
  const reduce = useReducedMotion();

  return (
    <section
      id="cobertura"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2
            className="text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)] mb-4"
            style={{
              color: "var(--color-text)",
              lineHeight: 1.1,
            }}
          >
            Cobertura nacional
          </h2>
          <p
            className="max-w-[50ch]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-base)",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
            }}
          >
            6 sucursales estratégicas cubriendo las principales zonas industriales de México
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[2.2/1] mb-10"
          style={{
            borderRadius: "var(--radius)",
            border: "var(--border-width) solid var(--color-border)",
            backgroundColor: "var(--color-surface)",
          }}
        >
          <MexicoMap />
        </motion.div>

        {/* Cities in a single horizontal row with dividers */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
          style={{
            border: "var(--border-width) solid var(--color-border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          }}
        >
          {CITIES_LIST.map((city, i) => (
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
                  i < CITIES_LIST.length - 1
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
