"use client";

import { useState, useRef, type FormEvent } from "react";
import { X, WhatsappLogo, ArrowRight } from "@phosphor-icons/react";

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [size, setSize] = useState("");
  const [use, setUse] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    trackConversion("form_submit");

    const message = encodeURIComponent(
      `Hola, me interesa rentar un contenedor.\n\n` +
      `Nombre: ${name}\n` +
      `Empresa: ${company || "N/A"}\n` +
      `Telefono: ${phone}\n` +
      `Tamano: ${size}\n` +
      `Uso: ${use}\n` +
      `Ciudad: ${city}`
    );

    trackConversion("whatsapp_click");
    window.open(`https://wa.me/528184692252?text=${message}`, "_blank");
    onClose();
    setStep(1);
    setSize("");
    setUse("");
    setCity("");
    setName("");
    setPhone("");
    setCompany("");
  };

  const canAdvance =
    step === 1 ? size && use && city : name && phone;

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
                ? "Llena la siguiente informacion para ofrecerte un mejor servicio"
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
            style={{ color: "var(--color-text-muted-dark)" }}
            aria-label="Cerrar"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {step === 1 ? (
              <>
                {/* Size */}
                <fieldset>
                  <legend
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                      color: "var(--color-text-dark)",
                    }}
                  >
                    Tamano del contenedor
                  </legend>
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
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Use */}
                <fieldset>
                  <legend
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                      color: "var(--color-text-dark)",
                    }}
                  >
                    Uso principal
                  </legend>
                  <div className="grid grid-cols-2 gap-2">
                    {["Almacenaje en obra", "Bodega temporal", "Transporte", "Otro"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setUse(opt)}
                        className="py-3 px-3 text-center transition-colors"
                        style={{
                          borderRadius: "var(--radius)",
                          border: `2px solid ${use === opt ? "var(--color-primary)" : "var(--color-border-light)"}`,
                          backgroundColor: use === opt ? "rgba(36,122,76,0.08)" : "var(--color-surface-light)",
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--text-xs)",
                          fontWeight: 500,
                          color: use === opt ? "var(--color-primary)" : "var(--color-text-dark)",
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* City */}
                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                      color: "var(--color-text-dark)",
                    }}
                  >
                    Ciudad de entrega
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full py-3 px-4 appearance-none"
                    style={{
                      borderRadius: "var(--radius)",
                      border: "var(--border-width) solid var(--color-border-light)",
                      backgroundColor: "var(--color-surface-light)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: city ? "var(--color-text-dark)" : "var(--color-text-muted-dark)",
                    }}
                  >
                    <option value="">Selecciona una ciudad</option>
                    <option>Monterrey</option>
                    <option>Queretaro</option>
                    <option>Guadalajara</option>
                    <option>San Luis Potosi</option>
                    <option>Altamira</option>
                    <option>Merida</option>
                    <option>Otra ciudad</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                      color: "var(--color-text-dark)",
                    }}
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full py-3 px-4"
                    style={{
                      borderRadius: "var(--radius)",
                      border: "var(--border-width) solid var(--color-border-light)",
                      backgroundColor: "var(--color-surface-light)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-dark)",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                      color: "var(--color-text-dark)",
                    }}
                  >
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(81) 1234 5678"
                    className="w-full py-3 px-4"
                    style={{
                      borderRadius: "var(--radius)",
                      border: "var(--border-width) solid var(--color-border-light)",
                      backgroundColor: "var(--color-surface-light)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-dark)",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                      color: "var(--color-text-dark)",
                    }}
                  >
                    Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nombre de tu empresa"
                    className="w-full py-3 px-4"
                    style={{
                      borderRadius: "var(--radius)",
                      border: "var(--border-width) solid var(--color-border-light)",
                      backgroundColor: "var(--color-surface-light)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-dark)",
                    }}
                  />
                </div>

                {/* Summary */}
                <div
                  className="p-4"
                  style={{
                    borderRadius: "var(--radius)",
                    backgroundColor: "rgba(36,122,76,0.06)",
                    border: "var(--border-width) solid rgba(36,122,76,0.15)",
                  }}
                >
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-muted-dark)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Tu cotizacion
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-dark)",
                    }}
                  >
                    Contenedor de {size} para {use.toLowerCase()} en {city}
                  </p>
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
                className="flex-1 py-3 transition-colors"
                style={{
                  borderRadius: "var(--radius)",
                  border: "var(--border-width) solid var(--color-border-light)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  color: "var(--color-text-muted-dark)",
                  backgroundColor: "transparent",
                }}
              >
                Atras
              </button>
            )}

            {step === 1 ? (
              <button
                type="button"
                disabled={!canAdvance}
                onClick={() => setStep(2)}
                className="flex-1 py-3 inline-flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                style={{
                  borderRadius: "var(--radius)",
                  backgroundColor: canAdvance ? "var(--color-primary)" : "var(--color-border-light)",
                  color: canAdvance ? "var(--color-on-primary)" : "var(--color-text-muted-dark)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  cursor: canAdvance ? "pointer" : "not-allowed",
                }}
              >
                Siguiente
                <ArrowRight size={14} weight="bold" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canAdvance}
                className="flex-1 py-3 inline-flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                style={{
                  borderRadius: "var(--radius)",
                  backgroundColor: canAdvance ? "#25D366" : "var(--color-border-light)",
                  color: canAdvance ? "#FFFFFF" : "var(--color-text-muted-dark)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  cursor: canAdvance ? "pointer" : "not-allowed",
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
