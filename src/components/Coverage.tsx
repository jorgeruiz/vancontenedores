import Image from "next/image";
import { MapPin } from "@phosphor-icons/react/dist/ssr";

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
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[50ch]">
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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Map - 3/5 */}
            <div
              className="lg:col-span-3 relative aspect-[3/2] overflow-hidden"
              style={{
                borderRadius: "var(--radius)",
                border: "var(--border-width) solid var(--color-border)",
                backgroundColor: "var(--color-bg)",
              }}
            >
              <Image
                src="/images/coverage-map.webp"
                alt="Mapa de Mexico con las 8 ciudades de cobertura de VAN Contenedores"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Cities grid - 2/5 */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-x-6 gap-y-5 content-start">
              {CITIES.map((city) => (
                <div key={city.name} className="flex items-start gap-2">
                  <MapPin
                    size={16}
                    weight="fill"
                    className="mt-1 shrink-0"
                    style={{ color: "var(--color-primary)" }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-sm)",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        lineHeight: 1.4,
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
