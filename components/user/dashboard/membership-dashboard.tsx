"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, AlertCircle, CalendarClock } from "lucide-react";
import { formatCurrency, formatAppDate } from "@/lib/utils";
import { openCheckout } from "@/lib/checkout";
import {
  useMembershipPlans,
  useMySubscription,
  useSubscribeToPlan,
  useChangeMyPlan,
  useCancelScheduledChange,
  useCancelMySubscription,
  useResumeMySubscription,
} from "@/lib/api/hooks/memberships/memberships.hooks";
import type {
  BillingInterval,
  MembershipPlan,
  Subscription,
} from "@/lib/api/services/memberships/memberships.services";

const STATUS_VARIANT: Record<string, string> = {
  ACTIVE: "success",
  PAST_DUE: "warning",
  CANCELLED: "warning",
  EXPIRED: "destructive",
  PENDING_PAYMENT: "warning",
};

const STATUS_COPY: Record<string, string> = {
  ACTIVE: "Active",
  PAST_DUE: "Payment overdue",
  CANCELLED: "Cancelling",
  EXPIRED: "Expired",
  PENDING_PAYMENT: "Awaiting payment",
};

/** Monthly-equivalent base price, so MONTHLY and ANNUAL are comparable. */
function perMonthMinor(plan: MembershipPlan, interval: BillingInterval) {
  return interval === "ANNUAL"
    ? Math.round(plan.annualPriceMinor / 12)
    : plan.monthlyPriceMinor;
}

function CurrentPlanCard({ sub }: { sub: Subscription }) {
  const cancel = useCancelMySubscription();
  const resume = useResumeMySubscription();
  const dropChange = useCancelScheduledChange();

  return (
    <Card className="border-none rounded-[12px] bg-dash-secondary-bg">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs text-secondary-text uppercase tracking-wide">
              Current plan
            </p>
            <h3 className="text-2xl font-semibold text-primary-text mt-1">
              {sub.plan.name}
            </h3>
            {sub.plan.tagline && (
              <p className="text-sm text-secondary-text mt-1">{sub.plan.tagline}</p>
            )}
          </div>
          <Badge variant={(STATUS_VARIANT[sub.status] ?? "default") as never}>
            {STATUS_COPY[sub.status] ?? sub.status}
          </Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-xs text-secondary-text">Billed</p>
            <p className="font-medium text-primary-text">
              {formatCurrency(sub.amount, sub.currency)}{" "}
              {sub.interval === "ANNUAL" ? "/year" : "/month"}
            </p>
          </div>
          <div>
            <p className="text-xs text-secondary-text">
              {sub.cancelAtPeriodEnd ? "Access until" : "Renews on"}
            </p>
            <p className="font-medium text-primary-text">
              {sub.currentPeriodEnd ? formatAppDate(sub.currentPeriodEnd) : "—"}
            </p>
          </div>
          <div>
            <p className="text-xs text-secondary-text">Started</p>
            <p className="font-medium text-primary-text">
              {sub.currentPeriodStart ? formatAppDate(sub.currentPeriodStart) : "—"}
            </p>
          </div>
        </div>

        {sub.status === "PAST_DUE" && (
          <div className="flex gap-3 items-start p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
            <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-800 dark:text-amber-200">
              We haven&apos;t been able to take your latest payment. Your benefits
              continue for a short grace period while we retry.
            </p>
          </div>
        )}

        {sub.pendingChange && (
          <div className="flex gap-3 items-start justify-between p-3 rounded-lg bg-muted/40">
            <div className="flex gap-3 items-start">
              <CalendarClock className="w-4 h-4 text-secondary-text mt-0.5 shrink-0" />
              <p className="text-xs text-secondary-text">
                Moving to <strong>{sub.pendingChange.planName}</strong>
                {sub.pendingChange.effectiveAt
                  ? ` on ${formatAppDate(sub.pendingChange.effectiveAt)}`
                  : " at the end of this period"}
                . Nothing is charged until then.
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              disabled={dropChange.isPending}
              onClick={() => dropChange.mutate(undefined as never)}
            >
              Undo
            </Button>
          </div>
        )}

        <div className="flex gap-3 pt-1">
          {sub.cancelAtPeriodEnd ? (
            <Button
              variant="regular"
              disabled={resume.isPending}
              onClick={() => resume.mutate(undefined as never)}
            >
              Resume membership
            </Button>
          ) : (
            <Button
              variant="outline"
              className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
              disabled={cancel.isPending || sub.status === "PENDING_PAYMENT"}
              onClick={() => cancel.mutate(undefined as never)}
            >
              Cancel membership
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function MembershipDashboard() {
  const searchParams = useSearchParams();
  const [interval, setInterval] = useState<BillingInterval>(
    searchParams.get("interval") === "ANNUAL" ? "ANNUAL" : "MONTHLY",
  );

  const { data: plansRes, isLoading: plansLoading } = useMembershipPlans();
  const { data: subRes, isLoading: subLoading } = useMySubscription();
  const subscribe = useSubscribeToPlan();
  const changePlan = useChangeMyPlan();

  const plans = plansRes?.data ?? [];
  const sub = subRes?.data ?? null;
  const entitled = !!sub?.isEntitled;

  const currentPerMonth = useMemo(() => {
    if (!sub || !entitled) return null;
    const plan = plans.find((p) => p.id === sub.plan.id);
    return plan ? perMonthMinor(plan, sub.interval) : null;
  }, [sub, entitled, plans]);

  // Arriving from the public pricing page with a plan pre-selected.
  const preselected = searchParams.get("plan");
  useEffect(() => {
    if (!preselected) return;
    const el = document.getElementById(`plan-${preselected}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [preselected, plansLoading]);

  const startCheckout = (planId: string) => {
    subscribe.mutate(
      { planId, interval },
      {
        onSuccess: (data: { data?: { authorizationUrl?: string } }) =>
          openCheckout(data?.data?.authorizationUrl),
      },
    );
  };

  const actionFor = (plan: MembershipPlan) => {
    if (!entitled || !sub) {
      return { label: `Subscribe`, onClick: () => startCheckout(plan.id), disabled: false };
    }
    if (sub.plan.id === plan.id && sub.interval === interval) {
      return { label: "Current plan", onClick: () => {}, disabled: true };
    }
    const target = perMonthMinor(plan, interval);
    const isUpgrade = currentPerMonth !== null && target > currentPerMonth;

    return isUpgrade
      ? {
          label: "Upgrade now",
          onClick: () => startCheckout(plan.id),
          disabled: false,
        }
      : {
          label: "Schedule downgrade",
          onClick: () => changePlan.mutate({ planId: plan.id, interval }),
          disabled: changePlan.isPending || sub.cancelAtPeriodEnd,
        };
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-primary-text">Membership</h1>
        <p className="text-sm text-secondary-text mt-1">
          {entitled
            ? "Manage your plan, billing cadence and renewal."
            : "Choose a plan to unlock member benefits."}
        </p>
      </div>

      {subLoading ? (
        <Skeleton className="h-52 w-full rounded-[12px]" />
      ) : sub && entitled ? (
        <CurrentPlanCard sub={sub} />
      ) : (
        <Card className="border-none rounded-[12px] bg-dash-secondary-bg">
          <CardContent className="p-6">
            <p className="text-sm text-secondary-text">
              You don&apos;t have an active membership.
              {sub?.status === "EXPIRED" &&
                " Your previous membership has ended — subscribe again below."}
            </p>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-lg font-semibold text-primary-text">
          {entitled ? "Change plan" : "Available plans"}
        </h2>
        <div className="inline-flex items-center gap-1 rounded-full border border-border p-1">
          {(["MONTHLY", "ANNUAL"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setInterval(value)}
              aria-pressed={interval === value}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                interval === value
                  ? "bg-regular-button text-white"
                  : "text-secondary-text hover:bg-muted"
              }`}
            >
              {value === "MONTHLY" ? "Monthly" : "Annual"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {plansLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-80 rounded-[12px]" />
            ))
          : plans.map((plan) => {
              const action = actionFor(plan);
              const price = interval === "ANNUAL" ? plan.annualPrice : plan.monthlyPrice;
              return (
                <Card
                  key={plan.id}
                  id={`plan-${plan.id}`}
                  className={`border rounded-[12px] ${
                    sub?.plan.id === plan.id && entitled
                      ? "border-regular-button"
                      : "border-border"
                  }`}
                >
                  <CardContent className="p-6 flex flex-col h-full gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-primary-text">{plan.name}</h3>
                      {plan.isFeatured && <Badge variant="success">Popular</Badge>}
                    </div>

                    <div>
                      <p className="text-2xl font-bold text-primary-text">
                        {formatCurrency(price, plan.currency)}
                        <span className="text-sm font-normal text-secondary-text">
                          {interval === "ANNUAL" ? "/yr" : "/mo"}
                        </span>
                      </p>
                      {interval === "ANNUAL" && (
                        <p className="text-[11px] text-secondary-text">
                          {formatCurrency(plan.annualPricePerMonth, plan.currency)}/mo,
                          billed annually
                        </p>
                      )}
                    </div>

                    <ul className="space-y-2 flex-1">
                      {plan.benefits.map((b, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <Check className="w-3.5 h-3.5 text-regular-button mt-0.5 shrink-0" />
                          <span className="text-xs text-secondary-text">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={action.disabled ? "outline" : "regular"}
                      disabled={action.disabled || subscribe.isPending}
                      onClick={action.onClick}
                      className="w-full"
                    >
                      {action.label}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
      </div>
    </div>
  );
}
