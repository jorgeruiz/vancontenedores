import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "./ScrollReveal";

const BENEFITS = [
  "Se instala directo en tu obra, sin construccion permanente",
  "Acero de alta resistencia con cierre reforzado",
  "Protege herramientas, materiales y maquinaria",
  "Renta mensual sin inversion en infraestructura fija",
];

export default function Construction() {
  return (
    <section
      id="construccion"
      className="py-20 md:py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Image - 7 cols with overlay data */}
          <ScrollReveal className="lg:col-span-7 relative">
            <div
              className="relative aspect-[16/10] overflow-hidden"
              style={{
                borderRadius: "var(--radius)",
                border: "var(--border-width) solid var(--color-border)",
              }}
            >
              <Image
                src="/images/container-construction-site.webp"
                alt="Contenedor maritimo abierto en obra de construccion con materiales almacenados"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {/* Bottom overlay with specs */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,15,20,0.95) 0%, rgba(10,15,20,0.7) 60%, transparent 100%)",
                }}
              >
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Material
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-base)",
                        color: "var(--color-text)",
                        fontWeight: 600,
                      }}
                    >
                      Acero corten
                    </p>
                  </div>
                  <div
                    className="hidden sm:block w-px self-stretch"
                    style={{ backgroundColor: "var(--color-border)" }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Cierre
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-base)",
                        color: "var(--color-text)",
                        fontWeight: 600,
                      }}
                    >
                      Reforzado
                    </p>
                  </div>
                  <div
                    className="hidden sm:block w-px self-stretch"
                    style={{ backgroundColor: "var(--color-border)" }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Norma
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-base)",
                        color: "var(--color-text)",
                        fontWeight: 600,
                      }}
                    >
                      ISO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text - 5 cols */}
          <ScrollReveal className="lg:col-span-5" delay={150}>
            <div className="flex flex-col gap-6 lg:pl-4">
              <h2
                className="text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)]"
                style={{
                  color: "var(--color-text)",
                  lineHeight: 1.1,
                }}
              >
                Almacenaje temporal en obra
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
                }}
              >
                Un contenedor maritimo rentado funciona como bodega temporal en sitio para guardar herramientas, materiales de construccion, maquinaria y documentos directamente en la obra. La solucion mas rapida cuando no hay espacio de almacenaje.
              </p>

              <ul className="flex flex-col gap-3 mt-2">
                {BENEFITS.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--color-primary)" }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-sm)",
                        color: "var(--color-text)",
                        lineHeight: 1.5,
                      }}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 mt-2 self-start transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                }}
              >
                Cotizar para mi obra
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
