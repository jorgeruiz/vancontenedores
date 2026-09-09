import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-16"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Text - 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h1
              className="text-[length:var(--text-4xl)] md:text-[length:3.5rem] lg:text-[length:4rem]"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--color-text)",
              }}
            >
              Renta de Contenedores
              <br />
              <span style={{ color: "var(--color-primary)" }}>Maritimos</span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-lg)",
                color: "var(--color-text-muted)",
                lineHeight: 1.6,
                maxWidth: "45ch",
              }}
            >
              Almacenaje temporal en sitio con entrega en menos de 24 horas. Cobertura nacional desde 5 sucursales estrategicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
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
                Solicitar un contenedor hoy
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
                href="tel:+528184692252"
                className="inline-flex items-center justify-center transition-colors"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-muted)",
                  padding: "0.875rem 1.5rem",
                  borderRadius: "var(--radius)",
                  border: "var(--border-width) solid var(--color-border)",
                }}
              >
                (81) 8469 2252
              </a>
            </div>

            {/* Trust data strip */}
            <div
              className="flex flex-wrap gap-x-6 gap-y-2 mt-4"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted)",
                letterSpacing: "0.02em",
              }}
            >
              <span>Fundada en 2014</span>
              <span>Estandares ISO</span>
              <span>Certificacion cargoworthy</span>
            </div>
          </div>

          {/* Image - 3/5 */}
          <div className="lg:col-span-3 relative">
            <div
              className="relative aspect-[16/9] overflow-hidden"
              style={{
                borderRadius: "var(--radius)",
                border: "var(--border-width) solid var(--color-border)",
              }}
            >
              <Image
                src="/images/hero-home.webp"
                alt="Contenedor maritimo de acero en terreno industrial"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
