import { api } from "@/lib/axios";
import { getApiError } from "@/lib/utils";

export interface RecentPayment {
  id: string;
  userId: string;
  type: string;
  /** Presentment: what the customer was actually charged. */
  amount: number;
  currency: string;
  /** Base-currency equivalent locked at checkout. */
  baseAmount: number;
  baseCurrency: string;
  status: string;
  providerRef: string;
}

export interface CurrencyRevenue {
  currency: string;
  amount: number;
  amountMinor: number;
  payments: number;
}

export interface AdminStats {
  totalUsers: number;
  totalPrograms: number;
  totalCamps: number;
  totalConsultations: number;
  /** Summed from each payment's locked base amount, so history never drifts. */
  totalRevenue: number;
  totalRevenueMinor: number;
  currency: string;
  revenueByCurrency: CurrencyRevenue[];
  recentPayments: RecentPayment[];
}

export interface AdminStatsResponse {
  success: boolean;
  message: string;
  data: AdminStats;
}

export const getAdminStats = async (): Promise<AdminStatsResponse> => {
  try {
    const res = await api.get("/admin/stats");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};
