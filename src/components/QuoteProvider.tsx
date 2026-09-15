"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import QuoteForm from "./QuoteForm";

const QuoteContext = createContext<{ openQuote: () => void }>({
  openQuote: () => {},
});

export function useQuote() {
  return useContext(QuoteContext);
}

export default function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuoteContext.Provider value={{ openQuote: () => setIsOpen(true) }}>
      {children}
      <QuoteForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </QuoteContext.Provider>
  );
}
