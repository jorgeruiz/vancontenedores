"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone, Envelope, PaperPlaneTilt, ArrowLeft } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const LANDING_LABELS: Record<string, string> = {
  "renta-contenedores-monterrey": "Landing Monterrey",
  "renta-contenedores-queretaro": "Landing Querétaro",
  "renta-contenedores-guadalajara": "Landing Guadalajara",
  "renta-contenedores-san-luis-potosi": "Landing San Luis Potosí",
  "renta-contenedores-altamira": "Landing Altamira",
  "renta-contenedores-merida": "Landing Mérida",
};

function pushEvent(eventName: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName });
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}

export default function CTAFinal() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState("");
  const [size, setSize] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const step1Valid = interest && size && city;
  const step2Valid = name && phone;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!step2Valid || sending) return;

    setSending(true);
    pushEvent("cotizador_enviado");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, company, size, use: interest, city, interest, message, landing: LANDING_LABELS[pathname.replace(/^\//, "")] || "Home" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Error al enviar. Intenta de nuevo o llámanos al (81) 8469 2252.");
      }
    } catch {
      alert("Error de conexión. Intenta de nuevo o llámanos al (81) 8469 2252.");
    } finally {
      setSending(false);
    }
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
    marginBottom: "0.5rem",
    display: "block",
  } as const;

  const optionBtn = (selected: boolean) => ({
    borderRadius: "var(--radius)",
    border: `2px solid ${selected ? "var(--color-primary)" : "var(--color-border-light)"}`,
    backgroundColor: selected ? "rgba(36,122,76,0.08)" : "var(--color-surface-light)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-sm)",
    fontWeight: 600,
    color: selected ? "var(--color-primary)" : "var(--color-text-dark)",
    cursor: "pointer" as const,
    padding: "0.75rem 1rem",
    textAlign: "center" as const,
  });

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
                Cotiza en línea y recibe tu contenedor{" "}
                <span style={{ color: "var(--color-primary)" }}>mañana</span>
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
                Llena el formulario y nuestro equipo te contactará con tu cotización. Entrega en menos de 24 horas.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+528184692252"
                  className="inline-flex items-center gap-3"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--color-text-dark)" }}
                >
                  <Phone size={18} weight="bold" style={{ color: "var(--color-primary)" }} />
                  (81) 8469 2252
                </a>
                <a
                  href="mailto:ventas@vancontenedores.com"
                  className="inline-flex items-center gap-3"
                  style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--color-text-muted-dark)" }}
                >
                  <Envelope size={18} weight="regular" style={{ color: "var(--color-primary)" }} />
                  ventas@vancontenedores.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: multi-step form */}
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="p-6 md:p-8"
              style={{
                backgroundColor: "var(--color-surface-light)",
                borderRadius: "calc(var(--radius) + 4px)",
                border: "var(--border-width) solid var(--color-border-light)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-lg)",
                    fontWeight: 700,
                    color: "var(--color-text-dark)",
                    letterSpacing: "var(--heading-tracking)",
                  }}
                >
                  {submitted ? "Solicitud enviada" : step === 1 ? "Configura tu cotización" : "Tus datos de contacto"}
                </p>
                {!submitted && (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-muted-dark)",
                    }}
                  >
                    Paso {step} de 2
                  </span>
                )}
              </div>

              {submitted ? (
                <div className="py-8 text-center">
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-lg)",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Recibimos tu solicitud
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-muted-dark)",
                    }}
                  >
                    Nuestro equipo te contactará en breve con tu cotización.
                  </p>
                </div>
              ) : step === 1 ? (
                <div className="flex flex-col gap-5">
                  <div>
                    <label style={labelStyle}>Me interesa</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Comprar", "Rentar"].map((opt) => (
                        <button key={opt} type="button" onClick={() => setInterest(opt)} className="transition-colors" style={optionBtn(interest === opt)}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Tamaño del contenedor</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["20 pies", "40 pies"].map((opt) => (
                        <button key={opt} type="button" onClick={() => setSize(opt)} className="transition-colors" style={optionBtn(size === opt)}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Ciudad de entrega</label>
                    <select value={city} onChange={(e) => setCity(e.target.value)} style={inputStyle}>
                      <option value="">Selecciona una ciudad</option>
                      <option>Monterrey</option>
                      <option>Querétaro</option>
                      <option>Guadalajara</option>
                      <option>San Luis Potosí</option>
                      <option>Altamira</option>
                      <option>Mérida</option>
                      <option>Otra ciudad</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    disabled={!step1Valid}
                    onClick={() => setStep(2)}
                    className="w-full py-3 inline-flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                    style={{
                      borderRadius: "var(--radius)",
                      backgroundColor: step1Valid ? "var(--color-primary)" : "var(--color-border-light)",
                      color: step1Valid ? "var(--color-on-primary)" : "var(--color-text-muted-dark)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-base)",
                      fontWeight: 600,
                      cursor: step1Valid ? "pointer" : "not-allowed",
                      marginTop: "0.5rem",
                    }}
                  >
                    Siguiente
                    <ArrowRight size={16} weight="bold" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Summary */}
                  <div
                    className="p-4"
                    style={{
                      borderRadius: "var(--radius)",
                      backgroundColor: "rgba(36,122,76,0.06)",
                      border: "var(--border-width) solid rgba(36,122,76,0.15)",
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--color-text-muted-dark)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                      Tu selección
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--color-text-dark)" }}>
                      {interest} contenedor de {size} en {city}
                    </p>
                  </div>

                  <div>
                    <label style={labelStyle}>Nombre completo *</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>Teléfono *</label>
                    <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(81) 1234 5678" style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>Empresa (opcional)</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Nombre de tu empresa" style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>Mensaje adicional (opcional)</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Cuéntanos más sobre lo que necesitas..." rows={3} style={{ ...inputStyle, resize: "vertical" as const }} />
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-5 inline-flex items-center gap-2 transition-colors"
                      style={{
                        borderRadius: "var(--radius)",
                        border: "var(--border-width) solid var(--color-border-light)",
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-sm)",
                        fontWeight: 600,
                        color: "var(--color-text-muted-dark)",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <ArrowLeft size={14} weight="bold" />
                      Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={!step2Valid || sending}
                      className="flex-1 py-3 inline-flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                      style={{
                        borderRadius: "var(--radius)",
                        backgroundColor: step2Valid && !sending ? "var(--color-primary)" : "var(--color-border-light)",
                        color: step2Valid ? "var(--color-on-primary)" : "var(--color-text-muted-dark)",
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-base)",
                        fontWeight: 600,
                        cursor: step2Valid && !sending ? "pointer" : "not-allowed",
                      }}
                    >
                      <PaperPlaneTilt size={18} weight="fill" />
                      {sending ? "Enviando..." : "Enviar cotización"}
                    </button>
                  </div>

                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--color-text-muted-dark)", lineHeight: 1.5, textAlign: "center" }}>
                    Te enviaremos tu cotización por correo electrónico.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
