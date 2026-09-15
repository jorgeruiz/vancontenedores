"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Phone, Envelope, PaperPlaneTilt } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

function trackConversion(type: "form_submit" | "whatsapp_click") {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      event_category: "lead",
      event_label: type,
      value: 1,
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", type === "form_submit" ? "Lead" : "Contact");
  }
}

export default function CTAFinal() {
  const reduce = useReducedMotion();
  const [size, setSize] = useState("");
  const [use, setUse] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const allFilled = size && use && city && name && phone;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!allFilled) return;

    trackConversion("form_submit");

    const subject = encodeURIComponent(`Cotizacion - ${name} - ${size} - ${city}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\n` +
      `Empresa: ${company || "N/A"}\n` +
      `Telefono: ${phone}\n` +
      `Tamano: ${size}\n` +
      `Uso: ${use}\n` +
      `Ciudad: ${city}`
    );

    window.location.href = `mailto:ventas@vancontenedores.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle = {
    borderRadius: "var(--radius)",
    border: "var(--border-width) solid var(--color-border-light)",
    backgroundColor: "var(--color-surface-light)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-sm)",
    color: "var(--color-text-dark)",
    padding: "0.75rem 1rem",
    width: "100%",
  } as const;

  const labelStyle = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-xs)",
    fontWeight: 600,
    color: "var(--color-text-dark)",
    marginBottom: "0.375rem",
    display: "block",
  } as const;

  return (
    <section
      id="contacto"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--color-bg-light)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: heading + contact info */}
          <motion.div
            className="lg:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="lg:sticky lg:top-24">
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text-dark)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Cotiza en linea y recibe tu contenedor{" "}
                <span style={{ color: "var(--color-primary)" }}>manana</span>
              </h2>

              <p
                className="mb-8 max-w-[40ch]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  color: "var(--color-text-muted-dark)",
                  lineHeight: 1.7,
                }}
              >
                Llena el formulario y te contactamos por WhatsApp con tu cotizacion inmediata. Entrega en menos de 24 horas.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+528184692252"
                  className="inline-flex items-center gap-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-dark)",
                  }}
                >
                  <Phone size={18} weight="bold" style={{ color: "var(--color-primary)" }} />
                  (81) 8469 2252
                </a>
                <a
                  href="mailto:ventas@vancontenedores.com"
                  className="inline-flex items-center gap-3"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted-dark)",
                  }}
                >
                  <Envelope size={18} weight="regular" style={{ color: "var(--color-primary)" }} />
                  ventas@vancontenedores.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: inline quote form */}
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8"
              style={{
                backgroundColor: "var(--color-surface-light)",
                borderRadius: "calc(var(--radius) + 4px)",
                border: "var(--border-width) solid var(--color-border-light)",
              }}
            >
              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-lg)",
                  fontWeight: 700,
                  color: "var(--color-text-dark)",
                  letterSpacing: "var(--heading-tracking)",
                }}
              >
                Configura tu cotizacion
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {/* Size */}
                <div>
                  <label style={labelStyle}>Tamano del contenedor</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["20 pies", "40 pies"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSize(opt)}
                        className="py-3 px-4 text-center transition-colors"
                        style={{
                          borderRadius: "var(--radius)",
                          border: `2px solid ${size === opt ? "var(--color-primary)" : "var(--color-border-light)"}`,
                          backgroundColor: size === opt ? "rgba(36,122,76,0.08)" : "var(--color-surface-light)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "var(--text-sm)",
                          fontWeight: 600,
                          color: size === opt ? "var(--color-primary)" : "var(--color-text-dark)",
                          cursor: "pointer",
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Use */}
                <div>
                  <label style={labelStyle}>Uso principal</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Almacenaje en obra", "Bodega temporal", "Transporte", "Otro"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setUse(opt)}
                        className="py-2.5 px-2 text-center transition-colors"
                        style={{
                          borderRadius: "var(--radius)",
                          border: `2px solid ${use === opt ? "var(--color-primary)" : "var(--color-border-light)"}`,
                          backgroundColor: use === opt ? "rgba(36,122,76,0.08)" : "var(--color-surface-light)",
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--text-xs)",
                          fontWeight: 500,
                          color: use === opt ? "var(--color-primary)" : "var(--color-text-dark)",
                          cursor: "pointer",
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* City */}
                <div>
                  <label style={labelStyle}>Ciudad de entrega</label>
                  <select value={city} onChange={(e) => setCity(e.target.value)} style={inputStyle}>
                    <option value="">Selecciona</option>
                    <option>Monterrey</option>
                    <option>Queretaro</option>
                    <option>Guadalajara</option>
                    <option>San Luis Potosi</option>
                    <option>Altamira</option>
                    <option>Merida</option>
                    <option>Otra ciudad</option>
                  </select>
                </div>

                {/* Company */}
                <div>
                  <label style={labelStyle}>Empresa (opcional)</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nombre de tu empresa"
                    style={inputStyle}
                  />
                </div>

                {/* Name */}
                <div>
                  <label style={labelStyle}>Nombre completo *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    style={inputStyle}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Telefono *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(81) 1234 5678"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* WhatsApp notice + submit */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-5"
                style={{ borderTop: "var(--border-width) solid var(--color-border-light)" }}
              >
                <p
                  className="flex-1"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-muted-dark)",
                    lineHeight: 1.5,
                  }}
                >
                  {submitted
                    ? "Solicitud enviada. Nuestro equipo te contactara en breve."
                    : "Te enviaremos tu cotizacion por correo electronico."}
                </p>
                <button
                  type="submit"
                  disabled={!allFilled}
                  className="shrink-0 inline-flex items-center gap-2 transition-transform active:scale-[0.98]"
                  style={{
                    backgroundColor: allFilled ? "var(--color-primary)" : "var(--color-border-light)",
                    color: allFilled ? "var(--color-on-primary)" : "var(--color-text-muted-dark)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    fontWeight: 600,
                    padding: "0.875rem 2rem",
                    borderRadius: "var(--radius)",
                    cursor: allFilled ? "pointer" : "not-allowed",
                  }}
                >
                  <PaperPlaneTilt size={18} weight="fill" />
                  Enviar cotizacion
                  <ArrowRight size={14} weight="bold" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
