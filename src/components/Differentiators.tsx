import { Timer, Buildings, ShieldCheck, CalendarCheck } from "@phosphor-icons/react/dist/ssr";

const ITEMS = [
  {
    icon: Timer,
    value: "24h",
    label: "Entrega en menos de 24 horas tras completar el proceso de renta",
  },
  {
    icon: Buildings,
    value: "5",
    label: "Sucursales estrategicas con cobertura nacional",
  },
  {
    icon: ShieldCheck,
    value: "ISO",
    label: "Estandares de calidad ISO con certificacion cargoworthy",
  },
  {
    icon: CalendarCheck,
    value: "+10",
    label: "Anos operando en el mercado mexicano desde 2014",
  },
];

export default function Differentiators() {
  return (
    <section
      id="diferenciadores"
      className="py-20 md:py-24"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "var(--border-width) solid var(--color-border)",
        borderBottom: "var(--border-width) solid var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ITEMS.map((item) => (
            <div key={item.value} className="flex flex-col gap-3">
              <item.icon
                size={24}
                weight="regular"
                style={{ color: "var(--color-primary)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-3xl)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  letterSpacing: "-0.02em",
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
                  maxWidth: "28ch",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
