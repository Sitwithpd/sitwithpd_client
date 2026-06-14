import { useQuery } from "@tanstack/react-query";

export function useGbpToNgn() {
  return useQuery({
    queryKey: ["exchange-rate", "GBP", "NGN"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://api.frankfurter.app/latest?from=GBP&to=NGN",
        );
        const data = await res.json();
        return data.rates.NGN as number;
      } catch (error) {
        console.error("Failed to fetch exchange rate:", error);
        return 2050; // fallback rate if API is down
      }
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
  });
}
