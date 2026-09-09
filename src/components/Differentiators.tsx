import { Timer, Buildings, ShieldCheck, CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "./ScrollReveal";

const ITEMS = [
  {
    icon: Timer,
    value: "24h",
    label: "Entrega tras completar el proceso de renta",
    detail: "Menos de 24 horas",
  },
  {
    icon: Buildings,
    value: "5",
    label: "Sucursales con cobertura nacional",
    detail: "Monterrey, Queretaro, Guadalajara y mas",
  },
  {
    icon: ShieldCheck,
    value: "ISO",
    label: "Estandares de calidad y certificacion",
    detail: "Cargoworthy certificado",
  },
  {
    icon: CalendarCheck,
    value: "+10",
    label: "Anos de operacion continua",
    detail: "Desde 2014 en el mercado",
  },
];

export default function Differentiators() {
  return (
    <section
      id="diferenciadores"
      className="py-20 md:py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {ITEMS.map((item, i) => (
            <ScrollReveal key={item.value} delay={i * 100}>
              {/* Double-bezel outer shell */}
              <div
                className="h-full p-[5px]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "calc(var(--radius) + 5px)",
                  border: "var(--border-width) solid var(--color-border)",
                }}
              >
                {/* Inner core */}
                <div
                  className="h-full flex flex-col gap-4 p-6"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderRadius: "var(--radius)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <item.icon
                      size={22}
                      weight="regular"
                      style={{ color: "var(--color-primary)" }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--color-text-muted)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.detail}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-4xl)",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {item.value}
                  </span>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.label}
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
