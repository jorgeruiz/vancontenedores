import Image from "next/image";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "./ScrollReveal";

const CITIES = [
  { name: "Monterrey", region: "Nuevo Leon" },
  { name: "Queretaro", region: "Queretaro" },
  { name: "Guadalajara", region: "Jalisco" },
  { name: "San Luis Potosi", region: "San Luis Potosi" },
  { name: "Veracruz", region: "Veracruz" },
  { name: "Altamira", region: "Tamaulipas" },
  { name: "Merida", region: "Yucatan" },
  { name: "Tijuana", region: "Baja California" },
];

export default function Coverage() {
  return (
    <section
      id="cobertura"
      className="py-20 md:py-24"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "var(--border-width) solid var(--color-border)",
        borderBottom: "var(--border-width) solid var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <ScrollReveal>
          <div className="flex flex-col gap-4 max-w-[50ch] mb-12">
            <h2
              className="text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)]"
              style={{ color: "var(--color-text)", lineHeight: 1.1 }}
            >
              Cobertura nacional
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
              }}
            >
              5 sucursales estrategicas que cubren las principales zonas industriales de Mexico. Entrega directa en tu obra o instalacion.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {/* Full-width map with double-bezel */}
          <div
            className="p-1.5 mb-10"
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
              borderRadius: "calc(var(--radius) + 6px)",
              border: "var(--border-width) solid var(--color-border)",
            }}
          >
            <div
              className="relative aspect-[2.4/1] overflow-hidden"
              style={{
                borderRadius: "var(--radius)",
                backgroundColor: "var(--color-bg)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <Image
                src="/images/coverage-map.webp"
                alt="Mapa de Mexico con las 8 ciudades de cobertura de VAN Contenedores"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1280px"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Cities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CITIES.map((city, i) => (
            <ScrollReveal key={city.name} delay={200 + i * 60}>
              <div
                className="flex items-center gap-3 p-4"
                style={{
                  borderRadius: "var(--radius)",
                  border: "var(--border-width) solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <MapPin
                  size={16}
                  weight="fill"
                  className="shrink-0"
                  style={{ color: "var(--color-primary)" }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      lineHeight: 1.3,
                    }}
                  >
                    {city.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {city.region}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
