import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    q: "Para que sirve rentar un contenedor maritimo en una obra?",
    a: "Un contenedor maritimo rentado funciona como bodega temporal en sitio para guardar herramientas, materiales de construccion, maquinaria, documentos y mobiliario directamente en la obra, sin necesidad de construir un cuarto de bodega permanente. Se instala el mismo dia o al dia siguiente de firmar el contrato y se retira cuando el proyecto termina.",
  },
  {
    q: "Cuanto tardan en entregar el contenedor?",
    a: "VAN Contenedores entrega el contenedor en menos de 24 horas despues de completar el proceso de renta. La cotizacion se genera de forma inmediata tras el primer contacto con el equipo comercial.",
  },
  {
    q: "Que tamanos de contenedores estan disponibles?",
    a: "VAN Contenedores renta contenedores de 10, 20 y 40 pies. El de 20 pies mide 6.09 m x 2.44 m x 2.60 m de alto; el de 40 pies mide 12.19 m x 2.44 m x 2.60 m (o 2.90 m en version High Cube).",
  },
  {
    q: "Cual es el tiempo minimo de renta?",
    a: "El tiempo minimo de renta es un mes. Si el proyecto requiere menos tiempo, VAN Contenedores evalua soluciones caso por caso a traves de su equipo comercial.",
  },
  {
    q: "Que documentos se necesitan para rentar?",
    a: "Se requiere identificacion oficial del contratante o representante legal, constancia de situacion fiscal, comprobante de domicilio, y acta constitutiva en caso de persona moral. El proceso esta disenado para no generar demoras en la entrega.",
  },
  {
    q: "El contenedor es seguro para guardar material de valor?",
    a: "Si. Los contenedores estan fabricados en acero de alta resistencia con estandares de calidad ISO y certificacion cargoworthy. Sus puertas tienen mecanismos de cierre reforzado y la estructura es practicamente inviolable sin equipo especializado.",
  },
  {
    q: "En que ciudades entregan?",
    a: "VAN Contenedores tiene cobertura nacional con operaciones activas en Monterrey, Veracruz, Altamira, Merida, Tijuana, Queretaro, San Luis Potosi y Guadalajara.",
  },
  {
    q: "Se puede rentar para transporte ademas de almacenaje?",
    a: "Si. VAN Contenedores renta unidades tanto para almacenaje temporal en sitio como para transporte de mercancias entre ciudades y regiones. Al tratarse de contenedores con certificacion cargoworthy, estan habilitados para uso logistico en rutas nacionales.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <ScrollReveal>
          <h2
            className="text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)] mb-14"
            style={{ color: "var(--color-text)", lineHeight: 1.1 }}
          >
            Preguntas frecuentes
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <article
                className="flex gap-5 py-7"
                style={{
                  borderBottom:
                    "var(--border-width) solid var(--color-border)",
                }}
              >
                {/* Editorial number */}
                <span
                  className="shrink-0 mt-0.5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-3xl)",
                    fontWeight: 700,
                    color: "var(--color-border)",
                    lineHeight: 1,
                    minWidth: "2.5rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-3">
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--text-lg)",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      lineHeight: 1.3,
                      letterSpacing: "var(--heading-tracking)",
                    }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
