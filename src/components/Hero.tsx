import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-end pt-16 pb-12 md:pb-20 overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-home.webp"
          alt="Contenedor maritimo de acero en terreno industrial"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-bg) 0%, rgba(10,15,20,0.85) 40%, rgba(10,15,20,0.4) 70%, rgba(10,15,20,0.6) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[var(--content-width)] px-[var(--gutter)] w-full">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5"
            style={{
              borderRadius: "var(--radius)",
              border: "var(--border-width) solid var(--color-border)",
              backgroundColor: "rgba(10,15,20,0.6)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted)",
                letterSpacing: "0.06em",
              }}
            >
              Entrega en menos de 24 horas
            </span>
          </div>

          <h1
            className="text-[length:2.75rem] sm:text-[length:3.5rem] md:text-[length:4.5rem] lg:text-[length:5rem] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
            }}
          >
            Renta de
            <br />
            Contenedores
            <br />
            <span style={{ color: "var(--color-primary)" }}>Maritimos</span>
          </h1>

          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-lg)",
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
              maxWidth: "42ch",
            }}
          >
            Almacenaje temporal en sitio para constructoras y empresas. Cobertura nacional desde 5 sucursales estrategicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
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
                padding: "1rem 1.5rem",
                borderRadius: "var(--radius)",
                border: "var(--border-width) solid var(--color-border)",
                backgroundColor: "rgba(10,15,20,0.4)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
            >
              (81) 8469 2252
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              letterSpacing: "0.02em",
            }}
          >
            <span>Fundada en 2014</span>
            <span
              className="hidden sm:inline-block w-px h-3"
              style={{ backgroundColor: "var(--color-border)" }}
            />
            <span>Estandares ISO</span>
            <span
              className="hidden sm:inline-block w-px h-3"
              style={{ backgroundColor: "var(--color-border)" }}
            />
            <span>Certificacion cargoworthy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
