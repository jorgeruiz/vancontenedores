"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { useQuote } from "./QuoteProvider";

export default function WhatsAppBubble() {
  const { openQuote } = useQuote();

  return (
    <button
      onClick={openQuote}
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex items-center justify-center w-14 h-14 transition-transform active:scale-[0.92] hover:scale-105"
      style={{
        backgroundColor: "#25D366",
        borderRadius: "50%",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        cursor: "pointer",
        color: "#FFFFFF",
      }}
    >
      <WhatsappLogo size={28} weight="fill" />
    </button>
  );
}
