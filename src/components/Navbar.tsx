"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const NAV_ITEMS = [
  { label: "Contenedores", href: "#contenedores" },
  { label: "Almacenaje en obra", href: "#construccion" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40"
      style={{ backgroundColor: "rgba(10, 15, 20, 0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "var(--border-width) solid var(--color-border)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)] flex items-center justify-between h-16">
        {/* Logo placeholder */}
        <a
          href="/"
          className="flex items-center gap-2"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--color-text)", letterSpacing: "var(--heading-tracking)" }}
        >
          VAN Contenedores
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
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
          <a
            href="#contacto"
            className="inline-flex items-center transition-transform active:scale-[0.98]"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-on-primary)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              padding: "0.5rem 1.25rem",
              borderRadius: "var(--radius)",
            }}
          >
            Solicitar cotizacion
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
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
          className="md:hidden"
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
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center mt-2 transition-transform active:scale-[0.98]"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-on-primary)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                fontWeight: 600,
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius)",
              }}
            >
              Solicitar cotizacion
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
