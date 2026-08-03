import axios from "axios";
import { getActiveCurrency } from "@/store/use-currency-store";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach JWT token + active currency to every outgoing request
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("sit-with-token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Admin screens manage the catalogue in the currency prices are entered in,
    // so they ask for base pricing rather than the visitor-facing presentment
    // currency. Transaction figures are unaffected: a payment's amount is
    // recorded on the row, not converted per request.
    if (window.location.pathname.startsWith("/admin")) {
      config.headers["x-price-context"] = "base";
    }

    // Attach user's active currency so the backend can localise prices
    try {
      config.headers["x-req-currency"] = getActiveCurrency();
    } catch {
      // Store not yet initialised — omit header
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isLoginRequest = error.config?.url?.includes("/login");

    if (error.response?.status === 401 && !isLoginRequest) {
      if (
        typeof window !== "undefined" &&
        window.location.pathname !== "/login"
      ) {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);
