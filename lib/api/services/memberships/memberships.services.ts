import { api } from "@/lib/axios";
import { buildQueryString, getApiError } from "@/lib/utils";

export type BillingInterval = "MONTHLY" | "ANNUAL";

export type SubscriptionStatus =
  | "PENDING_PAYMENT"
  | "ACTIVE"
  | "PAST_DUE"
  | "CANCELLED"
  | "EXPIRED";

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string | null;
  benefits: string[];
  isActive: boolean;
  isFeatured: boolean;
  order: number;
  /** Presentment currency, from X-Req-Currency. Admin views get base (GBP). */
  currency: string;
  monthlyPrice: number;
  monthlyPriceMinor: number;
  annualPrice: number;
  annualPriceMinor: number;
  /** Annual price divided by 12, for "£x/mo billed annually". */
  annualPricePerMonth: number;
  annualSavingsMinor: number;
  createdAt: string;
  updatedAt: string;
  /** Admin list only. */
  activeSubscribers?: number;
  totalSubscriptions?: number;
  baseMonthlyPriceMinor?: number;
  baseAnnualPriceMinor?: number;
}

export interface Subscription {
  id: string;
  status: SubscriptionStatus;
  interval: BillingInterval;
  /** True while the paid period is still running, cancelled or not. */
  isEntitled: boolean;
  plan: { id: string; name: string; tagline: string | null; benefits: string[] };
  amount: number;
  amountMinor: number;
  currency: string;
  baseAmountMinor: number;
  baseCurrency: string;
  currentPeriodStart: string | null;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean;
  cancelledAt: string | null;
  pendingChange: {
    planId: string;
    planName: string;
    interval: BillingInterval;
    effectiveAt: string | null;
  } | null;
  createdAt: string;
  user?: { id: string; firstName: string; lastName: string; email: string };
}

export interface MembershipStats {
  activeSubscribers: number;
  cancelling: number;
  pastDue: number;
  mrr: number;
  mrrMinor: number;
  currency: string;
  byPlan: Array<{ planId: string; subscribers: number }>;
}

export interface CreatePlanPayload {
  name: string;
  tagline?: string;
  monthlyPrice: string | number;
  annualPrice: string | number;
  benefits: string[];
  isActive?: boolean;
  isFeatured?: boolean;
  order?: number;
}

// ── Public ───────────────────────────────────────────────────────────────────

export const getMembershipPlans = async (): Promise<{ data: MembershipPlan[] }> => {
  try {
    const res = await api.get("/memberships/plans");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

// ── Member ───────────────────────────────────────────────────────────────────

export const getMySubscription = async (): Promise<{ data: Subscription | null }> => {
  try {
    const res = await api.get("/memberships/me");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const subscribeToPlan = async (payload: {
  planId: string;
  interval: BillingInterval;
}) => {
  try {
    const res = await api.post("/memberships/subscribe", payload);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const changeMyPlan = async (payload: {
  planId: string;
  interval: BillingInterval;
}): Promise<{ data: Subscription; message: string }> => {
  try {
    const res = await api.post("/memberships/me/change", payload);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const cancelScheduledChange = async () => {
  try {
    const res = await api.delete("/memberships/me/change");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const cancelMySubscription = async () => {
  try {
    const res = await api.post("/memberships/me/cancel");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const resumeMySubscription = async () => {
  try {
    const res = await api.post("/memberships/me/resume");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

// ── Admin ────────────────────────────────────────────────────────────────────

export const getAdminMembershipPlans = async (): Promise<{ data: MembershipPlan[] }> => {
  try {
    const res = await api.get("/memberships/admin/plans");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const createMembershipPlan = async (payload: CreatePlanPayload) => {
  try {
    const res = await api.post("/memberships/admin/plans", payload);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const updateMembershipPlan = async (
  id: string,
  payload: Partial<CreatePlanPayload>,
) => {
  try {
    const res = await api.patch(`/memberships/admin/plans/${id}`, payload);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const deleteMembershipPlan = async (id: string) => {
  try {
    const res = await api.delete(`/memberships/admin/plans/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const getMembershipSubscribers = async (params: {
  page?: number;
  limit?: number;
  status?: string;
  planId?: string;
} = {}): Promise<{
  data: Subscription[];
  meta: { total: number; page: number; limit: number; totalPages: number };
}> => {
  const qs = buildQueryString(
    Object.fromEntries(
      Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== "")
        .map(([k, v]) => [k, String(v)]),
    ),
  );
  try {
    const res = await api.get(`/memberships/admin/subscribers${qs ? `?${qs}` : ""}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const getMembershipStats = async (): Promise<{ data: MembershipStats }> => {
  try {
    const res = await api.get("/memberships/admin/stats");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};
