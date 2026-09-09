import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - left on desktop */}
          <div
            className="relative aspect-[16/9] overflow-hidden"
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
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text - right on desktop */}
          <div className="flex flex-col gap-6">
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
                maxWidth: "50ch",
              }}
            >
              Un contenedor maritimo rentado funciona como bodega temporal en sitio para guardar herramientas, materiales de construccion, maquinaria y documentos directamente en la obra. Es la solucion mas rapida cuando no hay espacio de almacenaje disponible.
            </p>

            <ul className="flex flex-col gap-3 mt-2">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
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
        </div>
      </div>
    </section>
  );
}
