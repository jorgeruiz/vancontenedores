const NAV_LINKS = [
  { label: "Contenedores", href: "#contenedores" },
  { label: "Almacenaje en obra", href: "#construccion" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-16 md:py-20"
      style={{
        backgroundColor: "var(--color-bg)",
        borderTop: "var(--border-width) solid var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Company info */}
          <div className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-lg)",
                fontWeight: 700,
                color: "var(--color-text)",
                letterSpacing: "var(--heading-tracking)",
              }}
            >
              VAN Contenedores
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
              }}
            >
              Empresa mexicana fundada en 2014. Renta de contenedores maritimos para almacenaje temporal y transporte con cobertura nacional.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted)",
              }}
            >
              Empresa 100% mexicana
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Navegacion
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Contacto
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+528184692252"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text)",
                }}
              >
                (81) 8469 2252
              </a>
              <a
                href="mailto:ventas@vancontenedores.com"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text)",
                }}
              >
                ventas@vancontenedores.com
              </a>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                  marginTop: "0.5rem",
                }}
              >
                Monterrey, Nuevo Leon, Mexico
              </p>
            </div>

            {/* Coverage cities in footer for AEO */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted)",
                lineHeight: 1.6,
                marginTop: "0.5rem",
              }}
            >
              Cobertura: Monterrey, Queretaro, Guadalajara, Veracruz, Altamira, Merida, Tijuana, San Luis Potosi
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          style={{
            borderTop: "var(--border-width) solid var(--color-border)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
            }}
          >
            {new Date().getFullYear()} VAN Contenedores. Todos los derechos reservados.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
            }}
          >
            vancontenedores.com
          </p>
        </div>
      </div>
    </footer>
  );
}
