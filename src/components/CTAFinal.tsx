import Image from "next/image";
import { ArrowRight, Phone, Envelope } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "./ScrollReveal";

export default function CTAFinal() {
  return (
    <section
      id="contacto"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(36,122,76,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left content - 7 cols */}
          <ScrollReveal className="lg:col-span-7">
            <div className="flex flex-col gap-6">
              <h2
                className="text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)] lg:text-[length:4rem]"
                style={{ color: "var(--color-text)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                Solicita tu
                <br />
                contenedor <span style={{ color: "var(--color-primary)" }}>hoy</span>
              </h2>

              <p
                className="max-w-[45ch]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-lg)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
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
                    padding: "1rem 2rem",
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
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    padding: "1rem 1.5rem",
                    borderRadius: "var(--radius)",
                    border: "var(--border-width) solid var(--color-border)",
                  }}
                >
                  <Envelope size={18} weight="regular" />
                  ventas@vancontenedores.com
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right image - 5 cols with double-bezel */}
          <ScrollReveal className="lg:col-span-5" delay={150}>
            <div
              className="p-1.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "calc(var(--radius) + 6px)",
                border: "var(--border-width) solid var(--color-border)",
              }}
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{
                  borderRadius: "var(--radius)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <Image
                  src="/images/container-delivery-truck.webp"
                  alt="Camion con grua entregando contenedor maritimo en obra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
