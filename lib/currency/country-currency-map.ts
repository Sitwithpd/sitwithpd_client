/**
 * Country code (ISO 3166-1 alpha-2) → Currency code (ISO 4217)
 * Covers the most common countries; unmapped countries default to GBP.
 */

export type SupportedCurrency = "GBP" | "USD" | "NGN" | "EUR";

export const SUPPORTED_CURRENCIES: SupportedCurrency[] = [
  "GBP",
  "USD",
  "NGN",
  "EUR",
];

/** Maps country codes to their primary currency */
export const COUNTRY_TO_CURRENCY: Record<string, SupportedCurrency> = {
  // GBP
  GB: "GBP",

  // USD
  US: "USD",
  PR: "USD", // Puerto Rico
  GU: "USD", // Guam
  VI: "USD", // US Virgin Islands
  AS: "USD", // American Samoa

  // NGN
  NG: "NGN",

  // EUR
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  ES: "EUR",
  PT: "EUR",
  NL: "EUR",
  BE: "EUR",
  AT: "EUR",
  IE: "EUR",
  FI: "EUR",
  GR: "EUR",
  LU: "EUR",
  MT: "EUR",
  CY: "EUR",
  SK: "EUR",
  SI: "EUR",
  EE: "EUR",
  LV: "EUR",
  LT: "EUR",
  HR: "EUR",
};

/** Flag emoji for a given ISO 3166-1 alpha-2 country code */
export function countryFlag(countryCode: string): string {
  // Regional indicator symbols: each letter is offset by 0x1F1A5
  const codePoints = [...countryCode.toUpperCase()].map(
    (c) => 0x1f1e6 + c.charCodeAt(0) - 65,
  );
  return String.fromCodePoint(...codePoints);
}

/** Currency display metadata */
export const CURRENCY_META: Record<
  SupportedCurrency,
  { symbol: string; flagCode: string; label: string }
> = {
  GBP: { symbol: "£", flagCode: "GB", label: "GBP (£)" },
  USD: { symbol: "$", flagCode: "US", label: "USD ($)" },
  NGN: { symbol: "₦", flagCode: "NG", label: "NGN (₦)" },
  EUR: { symbol: "€", flagCode: "EU", label: "EUR (€)" },
};

/** Resolve a country code to a supported currency, defaulting to GBP */
export function resolveCurrency(
  countryCode?: string | null,
): SupportedCurrency {
  if (!countryCode) return "GBP";
  return COUNTRY_TO_CURRENCY[countryCode.toUpperCase()] ?? "GBP";
}
