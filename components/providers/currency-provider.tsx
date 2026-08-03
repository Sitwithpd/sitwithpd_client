"use client";

import { useEffect } from "react";
import { useCurrencyStore } from "@/store/use-currency-store";

/**
 * Reads the `user-country` cookie set by the proxy and initialises
 * the currency store's detected currency. Safe to render in the root
 * layout — it is a no-op if the cookie is missing.
 */
export function CurrencyProvider() {
  const setDetectedCurrency = useCurrencyStore((s) => s.setDetectedCurrency);

  useEffect(() => {
    try {
      const cookies = document.cookie.split(";").reduce(
        (acc, c) => {
          const [key, ...vals] = c.trim().split("=");
          acc[key] = vals.join("=");
          return acc;
        },
        {} as Record<string, string>,
      );

      const country = cookies["user-country"];
      if (country) {
        setDetectedCurrency(country);
      }
    } catch {
      // Cookie parsing failed — keep default (GBP)
    }
  }, [setDetectedCurrency]);

  return null; // Renderless provider
}
