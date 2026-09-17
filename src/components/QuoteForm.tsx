"use client";

import { useState, type FormEvent } from "react";
import { X, WhatsappLogo, ArrowRight, ArrowLeft } from "@phosphor-icons/react";

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function trackConversion(type: "form_submit" | "whatsapp_click") {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_cotizacion",
    form_type: "whatsapp_popup",
    conversion_type: type,
  });
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      event_category: "lead",
      event_label: type,
      value: 1,
    });
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact");
  }
}

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

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState("");
  const [size, setSize] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  if (!isOpen) return null;

  const step1Valid = interest && size && city;
  const step2Valid = name && phone;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!step2Valid) return;
    trackConversion("form_submit");

    const msg = encodeURIComponent(
      `Hola, me interesa ${interest.toLowerCase()} un contenedor.\n\n` +
      `Nombre: ${name}\n` +
      `Empresa: ${company || "N/A"}\n` +
      `Teléfono: ${phone}\n` +
      `Tamaño: ${size}\n` +
      `Ciudad: ${city}`
    );

    trackConversion("whatsapp_click");
    window.open(`https://wa.me/528184692252?text=${msg}`, "_blank");
    onClose();
    setStep(1);
    setInterest("");
    setSize("");
    setCity("");
    setName("");
    setPhone("");
    setCompany("");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-[480px] overflow-hidden"
        style={{
          backgroundColor: "var(--color-bg-light)",
          borderRadius: "calc(var(--radius) + 4px)",
          border: "var(--border-width) solid var(--color-border-light)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{
            borderBottom: "var(--border-width) solid var(--color-border-light)",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-lg)",
                fontWeight: 700,
                color: "var(--color-text-dark)",
                letterSpacing: "var(--heading-tracking)",
              }}
            >
              Cotiza por WhatsApp
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted-dark)",
                marginTop: "2px",
              }}
            >
              {step === 1
                ? "Configura tu cotización"
                : "Completa tus datos de contacto"}
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted-dark)",
              }}
            >
              Paso {step} de 2
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8"
            style={{ color: "var(--color-text-muted-dark)", cursor: "pointer" }}
            aria-label="Cerrar"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {step === 1 ? (
              <>
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
              </>
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* Footer */}
          <div
            className="px-6 py-4 flex gap-3"
            style={{
              borderTop: "var(--border-width) solid var(--color-border-light)",
            }}
          >
            {step === 2 && (
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
            )}

            {step === 1 ? (
              <button
                type="button"
                disabled={!step1Valid}
                onClick={() => setStep(2)}
                className="flex-1 py-3 inline-flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                style={{
                  borderRadius: "var(--radius)",
                  backgroundColor: step1Valid ? "var(--color-primary)" : "var(--color-border-light)",
                  color: step1Valid ? "var(--color-on-primary)" : "var(--color-text-muted-dark)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  cursor: step1Valid ? "pointer" : "not-allowed",
                }}
              >
                Siguiente
                <ArrowRight size={14} weight="bold" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!step2Valid}
                className="flex-1 py-3 inline-flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                style={{
                  borderRadius: "var(--radius)",
                  backgroundColor: step2Valid ? "#25D366" : "var(--color-border-light)",
                  color: step2Valid ? "#FFFFFF" : "var(--color-text-muted-dark)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  cursor: step2Valid ? "pointer" : "not-allowed",
                }}
              >
                <WhatsappLogo size={18} weight="fill" />
                Enviar por WhatsApp
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
