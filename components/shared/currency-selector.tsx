"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactCountryFlag from "react-country-flag";
import {
  SUPPORTED_CURRENCIES,
  CURRENCY_META,
  SupportedCurrency,
} from "@/lib/currency/country-currency-map";
import { useCurrencyStore } from "@/store/use-currency-store";

interface CurrencySelectorProps {
  /** Called after the currency changes, before the reload. */
  onCurrencyChange?: (currency: SupportedCurrency) => void;
  /** Optional additional CSS classes for the trigger */
  className?: string;
  /** Compact mode — only shows flag + code, no label text */
  compact?: boolean;
  /** Styled for the dark footer bar rather than a light page surface. */
  variant?: "default" | "footer";
}

export function CurrencySelector({
  onCurrencyChange,
  className = "",
  compact = false,
  variant = "default",
}: CurrencySelectorProps) {
  const setUserCurrency = useCurrencyStore((s) => s.setUserCurrency);
  const activeCurrency = useCurrencyStore(
    (s) => s.userCurrency ?? s.detectedCurrency ?? "GBP",
  );

  const handleChange = (value: string) => {
    const currency = value as SupportedCurrency;
    if (currency === activeCurrency) return;

    setUserCurrency(currency);
    onCurrencyChange?.(currency);

    // Prices are resolved server-side from the X-Req-Currency header, and
    // cached query data still holds the old currency. A full reload is the
    // only way to guarantee every subsequent request and every rendered price
    // agree on the new one. The choice is persisted, so it survives.
    window.location.reload();
  };

  return (
    <Select value={activeCurrency} onValueChange={handleChange}>
      <SelectTrigger
        aria-label="Change currency"
        className={`${
          compact ? "w-auto min-w-25 h-9 text-xs gap-1.5" : "w-35 h-10"
        } ${
          variant === "footer"
            ? "bg-white/10 border-white/20 text-[#F2F8EC] hover:bg-white/15 transition-colors"
            : "bg-white border-[#EAECF0]"
        } ${className}`}
      >
        <SelectValue>
          <span className="flex items-center gap-1.5">
            <ReactCountryFlag
              countryCode={CURRENCY_META[activeCurrency]?.flagCode}
              svg
              style={{
                width: "1.2em",
                height: "1.2em",
              }}
            />
            <span className="font-medium">{activeCurrency}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_CURRENCIES.map((code) => {
          const meta = CURRENCY_META[code];
          return (
            <SelectItem key={code} value={code}>
              <span className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={meta.flagCode}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                  }}
                />
                <span className="font-medium">{code}</span>
                <span className="text-[#606060] text-xs">({meta.symbol})</span>
              </span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
