import { api } from "@/lib/axios";
import { getApiError } from "@/lib/utils";

export type PaymentStatus = "PENDING" | "SUCCESS" | "FAILED";

export interface Payment {
  id: string;
  userId: string;
  type: "PROGRAM" | "CONSULTATION" | "CAMP";
  status: PaymentStatus;
  provider: "FLUTTERWAVE" | "PAYSTACK";
  /** Flutterwave tx_ref. Named paystackRef before the provider consolidation. */
  providerRef: string;
  /** Presentment amount, serialised from presentmentAmountMinor. */
  amount: number;
  currency: string;
  /** Base-currency equivalent locked at checkout; never re-converted. */
  baseAmount: number;
  baseCurrency: string;
  fxRate: string | null;
  marginBps: number;
  quotedAt: string;
  /** Only known once the webhook lands — the card decides, not the checkout. */
  settlementCurrency: string | null;
  createdAt: string;
  updatedAt: string;
  user: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

/** Presentment currency comes from the X-Req-Currency header, never the body. */
export interface CreatePaymentPayload {
  itemId: string;
  type: "PROGRAM" | "CONSULTATION" | "CAMP";
}

export interface PaymentResponse {
  data: Payment;
  message: string;
}

export interface PaymentsResponse {
  data: Payment[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  message: string;
}

export const getPayments = async (params?: {
  page?: number;
  limit?: number;
}): Promise<PaymentsResponse> => {
  try {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.limit) queryParams.append("limit", params.limit.toString());

    const res = await api.get(`/payments?${queryParams.toString()}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(getApiError(error));
  }
};

export const createPayment = async (payload: CreatePaymentPayload) => {
  try {
    const res = await api.post("/payments/initialize", payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(getApiError(error));
  }
};

// ============== Verify paystack payment ======================
interface verifyPaystackPaymentResponse {
  success: true;
  message: string;
  data: {
    status: "SUCCESS" | "PENDING" | "FAILED";
    type: "PROGRAM" | "CAMP" | "CONSULTATION";
    amount: number;
    currency: string;
  };
}

export const verifyPaystackPayment = async (
  paymentRef: string,
): Promise<verifyPaystackPaymentResponse> => {
  try {
    const res = await api.get(`/payments/verify/${paymentRef}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(getApiError(error));
  }
};
