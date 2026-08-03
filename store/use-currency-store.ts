import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  SupportedCurrency,
  resolveCurrency,
} from "@/lib/currency/country-currency-map";

interface CurrencyState {
  /** Currency auto-detected from user's IP/geolocation */
  detectedCurrency: SupportedCurrency;
  /** Currency explicitly chosen by the user (overrides detection) */
  userCurrency: SupportedCurrency | null;
  /** The detected country code (e.g. "NG", "GB") */
  detectedCountry: string | null;
}

interface CurrencyActions {
  /** Set the detected currency from geolocation (called once on page load) */
  setDetectedCurrency: (countryCode: string) => void;
  /** User explicitly selects a currency — this takes priority */
  setUserCurrency: (currency: SupportedCurrency) => void;
  /** Clear user's manual selection, revert to detected */
  clearUserCurrency: () => void;
}

export type CurrencyStore = CurrencyState & CurrencyActions;

const initialState: CurrencyState = {
  detectedCurrency: "GBP",
  userCurrency: null,
  detectedCountry: null,
};

export const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set) => ({
      ...initialState,

      setDetectedCurrency: (countryCode: string) =>
        set(() => ({
          detectedCountry: countryCode.toUpperCase(),
          detectedCurrency: resolveCurrency(countryCode),
        })),

      setUserCurrency: (currency: SupportedCurrency) =>
        set(() => ({
          userCurrency: currency,
        })),

      clearUserCurrency: () =>
        set(() => ({
          userCurrency: null,
        })),
    }),
    {
      name: "sit-with-currency",
      storage: createJSONStorage(() => localStorage),
      // Only persist the user's explicit choice — re-detect on each visit
      partialize: (state) => ({
        userCurrency: state.userCurrency,
      }),
    },
  ),
);

/**
 * Returns the active currency to use across the app.
 * Priority: user's explicit choice > detected currency > GBP (platform default)
 */
export function getActiveCurrency(): SupportedCurrency {
  const state = useCurrencyStore.getState();
  return state.userCurrency ?? state.detectedCurrency ?? "GBP";
}
