import Image from "next/image";
import { ArrowRight, Phone, Envelope } from "@phosphor-icons/react/dist/ssr";

export default function CTAFinal() {
  return (
    <section
      id="contacto"
      className="py-20 md:py-24"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "var(--border-width) solid var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left content - 3/5 */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h2
              className="text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)]"
              style={{ color: "var(--color-text)", lineHeight: 1.1 }}
            >
              Solicita tu contenedor hoy
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
              Cotizacion inmediata, entrega en menos de 24 horas. Contacta a nuestro equipo comercial y resuelve tu necesidad de almacenaje hoy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="tel:+528184692252"
                className="inline-flex items-center gap-3 transition-transform active:scale-[0.98]"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-on-primary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  padding: "0.875rem 1.75rem",
                  borderRadius: "var(--radius)",
                }}
              >
                <Phone size={18} weight="bold" />
                (81) 8469 2252
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
                href="mailto:ventas@vancontenedores.com"
                className="inline-flex items-center gap-3 transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  color: "var(--color-text-muted)",
                  padding: "0.875rem 1.5rem",
                  borderRadius: "var(--radius)",
                  border: "var(--border-width) solid var(--color-border)",
                }}
              >
                <Envelope size={18} weight="regular" />
                ventas@vancontenedores.com
              </a>
            </div>
          </div>

          {/* Right image - 2/5 */}
          <div className="lg:col-span-2">
            <div
              className="relative aspect-[4/3] overflow-hidden"
              style={{
                borderRadius: "var(--radius)",
                border: "var(--border-width) solid var(--color-border)",
              }}
            >
              <Image
                src="/images/container-delivery-truck.webp"
                alt="Camion con grua entregando contenedor maritimo en obra"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
