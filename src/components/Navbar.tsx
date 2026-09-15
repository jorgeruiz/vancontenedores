"use client";

import { useState } from "react";
import { List, X, WhatsappLogo, Phone } from "@phosphor-icons/react";
import Image from "next/image";
import { useQuote } from "./QuoteProvider";

const NAV_ITEMS = [
  { label: "Contenedores", href: "#contenedores" },
  { label: "Almacenaje en obra", href: "#construccion" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openQuote } = useQuote();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40"
      style={{ backgroundColor: "rgba(10, 15, 20, 0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "var(--border-width) solid var(--color-border)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)] flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-van.webp"
            alt="VAN Contenedores"
            width={160}
            height={34}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors"
              style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", transitionDuration: "var(--duration-max)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
            >
              {item.label}
            </a>
          ))}

          {/* WhatsApp */}
          <a
            href="https://wa.me/528184692252"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 transition-colors"
            style={{
              borderRadius: "50%",
              border: "var(--border-width) solid var(--color-border)",
              color: "var(--color-text-muted)",
            }}
            aria-label="WhatsApp"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >
            <WhatsappLogo size={18} weight="fill" />
          </a>

          {/* Phone */}
          <a
            href="tel:+528184692252"
            className="inline-flex items-center gap-2 transition-colors"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >
            <Phone size={14} weight="bold" />
            (81) 8469 2252
          </a>

          {/* CTA */}
          <button
            onClick={openQuote}
            className="inline-flex items-center transition-transform active:scale-[0.98]"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-on-primary)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              padding: "0.5rem 1.25rem",
              borderRadius: "var(--radius)",
              cursor: "pointer",
            }}
          >
            Cotiza!
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          style={{ color: "var(--color-text)" }}
        >
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden"
          style={{ backgroundColor: "var(--color-surface)", borderTop: "var(--border-width) solid var(--color-border)" }}
        >
          <div className="px-[var(--gutter)] py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--color-text)", padding: "0.5rem 0" }}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-4 pt-2" style={{ borderTop: "var(--border-width) solid var(--color-border)" }}>
              <a
                href="https://wa.me/528184692252"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "#25D366" }}
              >
                <WhatsappLogo size={20} weight="fill" />
                WhatsApp
              </a>
              <a
                href="tel:+528184692252"
                className="flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--color-text)" }}
              >
                <Phone size={16} weight="bold" />
                (81) 8469 2252
              </a>
            </div>

            <button
              onClick={() => { setOpen(false); openQuote(); }}
              className="inline-flex items-center justify-center mt-2 transition-transform active:scale-[0.98]"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-on-primary)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                fontWeight: 600,
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius)",
                cursor: "pointer",
              }}
            >
              Cotiza!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
