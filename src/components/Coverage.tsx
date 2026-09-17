"use client";

import { MapPin } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const CITIES_LIST = [
  { name: "Monterrey", region: "Nuevo León" },
  { name: "Querétaro", region: "Querétaro" },
  { name: "Guadalajara", region: "Jalisco" },
  { name: "San Luis Potosí", region: "SLP" },
  { name: "Altamira", region: "Tamaulipas" },
  { name: "Mérida", region: "Yucatán" },
];

const MEXICO_PATH =
  "M 620.2,255 L 608.9,280.5 L 603.8,301.4 L 601.7,340.2 L 598.9,354.4 L 604,370.2 L 613,384.4 L 618.8,406.9 L 638,428.5 L 644.8,445.1 L 656.1,459.4 L 687,467.1 L 699,479.2 L 724.4,471.1 L 746.6,468.2 L 768.3,463 L 786.6,458 L 805,446.1 L 811.9,429.2 L 814.3,404.8 L 819.3,396.3 L 839,388.7 L 869.7,382 L 895.4,383 L 913,380.6 L 919.9,386.7 L 919,400.7 L 903.4,417.9 L 896.5,435.6 L 901.8,440.7 L 897.5,453.2 L 890.2,475.9 L 882.8,468.4 L 876.8,468.9 L 871.2,469.3 L 860.8,486.8 L 855.6,483.4 L 852.1,484.7 L 852.3,489 L 825.4,488.6 L 798.3,488.7 L 798.3,505 L 785.2,505.1 L 796,514.8 L 806.8,521.5 L 810,527.8 L 814.7,529.5 L 813.9,539.4 L 776.7,539.5 L 762.7,563.2 L 766.8,568.6 L 763.5,575.4 L 762.8,583.9 L 729.9,552.6 L 714.9,543.2 L 691.2,535.6 L 675,537.7 L 651.7,548.6 L 637.1,551.5 L 616.6,543.9 L 594.8,538.3 L 567.7,525 L 546,521 L 513.1,507.5 L 488.8,493.6 L 481.5,485.8 L 465.3,484.1 L 435.6,474.9 L 423.5,461.7 L 392.3,445.2 L 377.7,426.9 L 370.8,412.8 L 380.5,409.9 L 377.5,401.6 L 384.2,394.1 L 384.3,384.1 L 374.6,371 L 371.9,359.5 L 362.2,344.9 L 336.6,316 L 307.4,293.3 L 293.3,275.2 L 268.4,263.4 L 263.1,256.3 L 267.5,238.4 L 252.7,231.6 L 235.6,217.5 L 228.3,197.2 L 212.7,194.9 L 195.9,179.6 L 182.3,165.5 L 181,156.4 L 165.4,134.5 L 155.1,112.3 L 155.6,101.1 L 134.6,89.6 L 124.9,90.9 L 108.3,82.9 L 103.7,94.7 L 108.5,108.6 L 111.3,130.4 L 121.2,142.4 L 142.8,162.4 L 147.6,169.2 L 152,171.3 L 155.8,181.2 L 161,180.8 L 166.8,199.5 L 175.6,206.9 L 181.8,217.2 L 200,232 L 209.7,259 L 218.3,271.7 L 226.3,285.3 L 227.9,300.6 L 241.9,301.6 L 253.6,314.7 L 264.1,327.7 L 263.4,332.9 L 251.2,343.6 L 246,343.4 L 238.4,325.8 L 219.4,309.2 L 198.5,295.2 L 183.6,287.8 L 184.6,266.6 L 180.2,250.9 L 166.3,241.9 L 146.4,228.9 L 142.5,232.7 L 135.2,225.1 L 117.3,218.1 L 100.2,201.2 L 102.3,199 L 114.3,200.7 L 125.1,189.8 L 126.1,176.7 L 103.8,156 L 86.8,148 L 76.1,129.9 L 65.3,110.8 L 51.9,87.6 L 40.1,61.5 L 73,59.3 L 109.9,56.2 L 107.2,61.8 L 151,75.9 L 217.2,96.4 L 274.9,96.2 L 298,96.2 L 298,84.2 L 348.3,84.2 L 358.9,94.5 L 373.7,103.7 L 391,116.4 L 400.6,131.6 L 407.8,147.5 L 422.8,156.3 L 446.9,165 L 465.2,142.1 L 488.9,141.5 L 509.4,153.1 L 523.9,173 L 534,190 L 551.1,206.5 L 557.5,226.8 L 565.6,240.5 L 588.3,249.5 L 608.9,255.9 Z";

const MAP_CITIES = [
  { name: "MONTERREY", x: 528, y: 260, anchor: "start" as const, dx: 16, dy: 5 },
  { name: "ALTAMIRA", x: 597, y: 356, anchor: "start" as const, dx: 16, dy: 5 },
  { name: "SAN LUIS POTOSÍ", x: 509, y: 363, anchor: "end" as const, dx: -16, dy: 5 },
  { name: "QUERÉTARO", x: 526, y: 408, anchor: "start" as const, dx: 16, dy: 5 },
  { name: "GUADALAJARA", x: 440, y: 406, anchor: "end" as const, dx: -16, dy: 5 },
  { name: "MÉRIDA", x: 839, y: 397, anchor: "start" as const, dx: 16, dy: 5 },
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

      {/* Mexico outline */}
      <path
        d={MEXICO_PATH}
        stroke="var(--color-border)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Connection lines from Monterrey hub */}
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
        {MAP_CITIES.filter((c) => c.name !== "MONTERREY").map((c) => (
          <line key={c.name} x1={528} y1={260} x2={c.x} y2={c.y} />
        ))}
      </g>
      <g stroke="var(--color-primary)" strokeWidth="1" opacity="0.25">
        {MAP_CITIES.filter((c) => c.name !== "MONTERREY").map((c) => (
          <line key={c.name} x1={528} y1={260} x2={c.x} y2={c.y} />
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
