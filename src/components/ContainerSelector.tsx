"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface ContainerSize {
  id: string;
  label: string;
  feet: number;
  length: number;
  width: number;
  height: number;
  image: string;
  capacity: string;
}

const CONTAINERS: ContainerSize[] = [
  {
    id: "10ft",
    label: "10 pies",
    feet: 10,
    length: 2.99,
    width: 2.44,
    height: 2.6,
    image: "/images/container-10ft.webp",
    capacity: "Ideal para herramientas y equipo menor",
  },
  {
    id: "20ft",
    label: "20 pies",
    feet: 20,
    length: 6.09,
    width: 2.44,
    height: 2.6,
    image: "/images/container-20ft.webp",
    capacity: "El mas solicitado para obras medianas",
  },
  {
    id: "40ft",
    label: "40 pies",
    feet: 40,
    length: 12.19,
    width: 2.44,
    height: 2.6,
    image: "/images/container-40ft.webp",
    capacity: "Capacidad para almacenar hasta 600 llantas",
  },
];

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function ContainerSelector() {
  const [activeIndex, setActiveIndex] = useState(1);
  const reducedMotion = useReducedMotion();

  const lengthRef = useRef<HTMLSpanElement>(null);
  const widthRef = useRef<HTMLSpanElement>(null);
  const heightRef = useRef<HTMLSpanElement>(null);
  const scaleBarRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const animateValue = useCallback(
    (
      ref: React.RefObject<HTMLSpanElement | null>,
      from: number,
      to: number,
      suffix: string
    ) => {
      if (!ref.current) return;
      if (reducedMotion) {
        ref.current.textContent = `${to.toFixed(2)}${suffix}`;
        return;
      }
      const obj = { val: from };
      gsap.to(obj, {
        val: to,
        duration: 0.8,
        ease: "back.out(1.4)",
        snap: { val: 0.01 },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${obj.val.toFixed(2)}${suffix}`;
          }
        },
      });
    },
    [reducedMotion]
  );

  const handleSelect = useCallback(
    (index: number) => {
      if (index === activeIndex) return;

      const prev = CONTAINERS[activeIndex];
      const next = CONTAINERS[index];

      animateValue(lengthRef, prev.length, next.length, "m");
      animateValue(widthRef, prev.width, next.width, "m");
      animateValue(heightRef, prev.height, next.height, "m");

      if (scaleBarRef.current) {
        const maxLength = CONTAINERS[2].length;
        const pct = (next.length / maxLength) * 100;
        if (reducedMotion) {
          scaleBarRef.current.style.width = `${pct}%`;
        } else {
          gsap.to(scaleBarRef.current, {
            width: `${pct}%`,
            duration: 0.8,
            ease: "back.out(1.4)",
          });
        }
      }

      if (imageContainerRef.current) {
        const images =
          imageContainerRef.current.querySelectorAll<HTMLDivElement>(
            "[data-container-image]"
          );
        images.forEach((img, i) => {
          if (reducedMotion) {
            img.style.opacity = i === index ? "1" : "0";
          } else {
            gsap.to(img, {
              opacity: i === index ? 1 : 0,
              duration: 0.4,
              ease: "power2.inOut",
            });
          }
        });
      }

      setActiveIndex(index);
    },
    [activeIndex, animateValue, reducedMotion]
  );

  const active = CONTAINERS[activeIndex];
  const maxLength = CONTAINERS[2].length;
  const initialPct = (active.length / maxLength) * 100;

  return (
    <section
      id="contenedores"
      className="relative py-20 md:py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)]">
        <h2
          className="text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)] mb-12"
          style={{ color: "var(--color-text)" }}
        >
          Contenedores disponibles
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image stack - Double-Bezel */}
          <div
            className="p-1.5"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              borderRadius: "calc(var(--radius) + 6px)",
              border: "var(--border-width) solid var(--color-border)",
            }}
          >
          <div
            ref={imageContainerRef}
            className="relative aspect-[4/3] overflow-hidden"
            style={{
              backgroundColor: "var(--color-surface)",
              borderRadius: "var(--radius)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)",
            }}
          >
            {CONTAINERS.map((container, i) => (
              <div
                key={container.id}
                data-container-image
                className="absolute inset-0"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
              >
                <Image
                  src={container.image}
                  alt={`Contenedor maritimo de ${container.label}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
          </div>

          {/* Right: Data panel */}
          <div className="flex flex-col justify-between gap-8">
            {/* Tabs */}
            <div
              className="flex gap-2 p-1"
              style={{
                backgroundColor: "var(--color-surface)",
                borderRadius: "var(--radius)",
                border: "var(--border-width) solid var(--color-border)",
              }}
              role="tablist"
              aria-label="Tamano de contenedor"
            >
              {CONTAINERS.map((container, i) => (
                <button
                  key={container.id}
                  role="tab"
                  aria-selected={i === activeIndex}
                  onClick={() => handleSelect(i)}
                  className="flex-1 py-3 px-4 text-center transition-colors"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    borderRadius: "calc(var(--radius) - 4px)",
                    backgroundColor:
                      i === activeIndex
                        ? "var(--color-primary)"
                        : "transparent",
                    color:
                      i === activeIndex
                        ? "var(--color-on-primary)"
                        : "var(--color-text-muted)",
                    transitionDuration: "var(--duration-max)",
                    transitionTimingFunction: "var(--easing)",
                  }}
                >
                  {container.label}
                </button>
              ))}
            </div>

            {/* Dimensions */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Largo
                  </p>
                  <span
                    ref={lengthRef}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-3xl)",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {active.length.toFixed(2)}m
                  </span>
                </div>
                <div>
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Ancho
                  </p>
                  <span
                    ref={widthRef}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-3xl)",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {active.width.toFixed(2)}m
                  </span>
                </div>
                <div>
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Alto
                  </p>
                  <span
                    ref={heightRef}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-3xl)",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {active.height.toFixed(2)}m
                  </span>
                </div>
              </div>

              {/* Scale bar */}
              <div>
                <div
                  className="w-full h-1 overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-border)",
                    borderRadius: "var(--radius)",
                  }}
                >
                  <div
                    ref={scaleBarRef}
                    className="h-full"
                    style={{
                      width: `${initialPct}%`,
                      backgroundColor: "var(--color-primary)",
                      borderRadius: "var(--radius)",
                    }}
                  />
                </div>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Escala relativa de largo
                </p>
              </div>

              {/* Capacity note */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                }}
              >
                {active.capacity}
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-on-primary)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                fontWeight: 600,
                padding: "0.875rem 1.75rem",
                borderRadius: "var(--radius)",
                transitionDuration: "var(--duration-max)",
                transitionTimingFunction: "var(--easing)",
              }}
            >
              Solicitar este contenedor
              <span
                className="flex items-center justify-center"
                style={{
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
