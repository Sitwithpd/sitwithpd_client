"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Users } from "lucide-react";
import DashboardHeaderText from "@/components/dashboard/dashboard-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useModalStore } from "@/components/store/use-modal-store";
import { formatCurrency } from "@/lib/utils";
import {
  useAdminMembershipPlans,
  useMembershipStats,
  useDeleteMembershipPlan,
} from "@/lib/api/hooks/memberships/memberships.hooks";
import MembershipPlanForm, {
  MEMBERSHIP_PLAN_MODAL,
} from "./membership-plan-form";
import SubscribersTable from "./subscribers-table";
import type { MembershipPlan } from "@/lib/api/services/memberships/memberships.services";

export default function MembershipsOverview() {
  const [tab, setTab] = useState<"plans" | "subscribers">("plans");
  const openModal = useModalStore((state) => state.openModal);

  const { data, isLoading, isError } = useAdminMembershipPlans();
  const { data: statsRes } = useMembershipStats();
  const deletePlan = useDeleteMembershipPlan();

  const plans = data?.data ?? [];
  const stats = statsRes?.data;

  const openForm = (plan?: MembershipPlan) =>
    openModal(MEMBERSHIP_PLAN_MODAL, <MembershipPlanForm plan={plan} />);

  const summary = [
    { label: "Active subscribers", value: stats?.activeSubscribers ?? 0 },
    { label: "Cancelling", value: stats?.cancelling ?? 0 },
    { label: "Payment overdue", value: stats?.pastDue ?? 0 },
    {
      label: "MRR",
      value: stats ? formatCurrency(stats.mrr, stats.currency) : "—",
    },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <DashboardHeaderText
          header="Memberships"
          subtext="Manage subscription plans and see who is subscribed"
        />
        {tab === "plans" && (
          <Button variant="regular" onClick={() => openForm()}>
            <Plus className="w-4 h-4 mr-1" /> New Plan
          </Button>
        )}
      </div>

      {/* Annual plans count as a twelfth of their charge, so MRR is comparable. */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summary.map((s) => (
          <Card key={s.label} className="border-none rounded-[10px] bg-dash-secondary-bg">
            <CardContent className="p-5 flex flex-col gap-2">
              <h6 className="text-primary-text text-xs md:text-sm">{s.label}</h6>
              <h3 className="text-secondary-text text-2xl font-semibold">{s.value}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-1 border-b border-border">
        {(["plans", "subscribers"] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={`px-4 py-2 text-sm font-medium capitalize border-b-2 -mb-px transition-colors cursor-pointer ${
              tab === value
                ? "border-regular-button text-regular-button"
                : "border-transparent text-secondary-text hover:text-primary-text"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {tab === "subscribers" ? (
        <SubscribersTable plans={plans} />
      ) : isError ? (
        <p className="text-sm text-secondary-text">
          Could not load membership plans. Please try again.
        </p>
      ) : isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-72 rounded-[12px]" />
          ))}
        </div>
      ) : plans.length === 0 ? (
        <p className="text-sm text-secondary-text">
          No membership plans yet. Create one to start selling memberships.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {plans.map((plan) => {
            // The API refuses the delete too; disabling here just avoids a
            // pointless round trip and explains why.
            const locked = (plan.totalSubscriptions ?? 0) > 0;
            return (
              <Card key={plan.id} className="border border-border rounded-[12px]">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-primary-text">{plan.name}</h3>
                      {plan.tagline && (
                        <p className="text-xs text-secondary-text mt-1">{plan.tagline}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant={plan.isActive ? "success" : "secondary"}>
                        {plan.isActive ? "Active" : "Inactive"}
                      </Badge>
                      {plan.isFeatured && <Badge variant="warning">Popular</Badge>}
                    </div>
                  </div>

                  <div className="text-sm">
                    <p className="font-semibold text-primary-text">
                      {formatCurrency(plan.monthlyPrice, plan.currency)}
                      <span className="font-normal text-secondary-text">/mo</span>
                      <span className="text-secondary-text"> · </span>
                      {formatCurrency(plan.annualPrice, plan.currency)}
                      <span className="font-normal text-secondary-text">/yr</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-secondary-text">
                    <Users className="w-3.5 h-3.5" />
                    {plan.activeSubscribers ?? 0} active
                    {(plan.totalSubscriptions ?? 0) > (plan.activeSubscribers ?? 0) && (
                      <span>· {plan.totalSubscriptions} all time</span>
                    )}
                  </div>

                  <ul className="space-y-1 flex-1">
                    {plan.benefits.slice(0, 4).map((b, i) => (
                      <li key={i} className="text-xs text-secondary-text truncate">
                        • {b}
                      </li>
                    ))}
                    {plan.benefits.length > 4 && (
                      <li className="text-xs text-secondary-text">
                        + {plan.benefits.length - 4} more
                      </li>
                    )}
                  </ul>

                  <div className="flex gap-2 pt-2 border-t border-border">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => openForm(plan)}
                    >
                      <Pencil className="w-3.5 h-3.5 mr-1" /> Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white disabled:opacity-40"
                      disabled={locked || deletePlan.isPending}
                      title={
                        locked
                          ? "This plan has subscribers on record. Deactivate it instead."
                          : "Delete plan"
                      }
                      onClick={() => deletePlan.mutate(plan.id)}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
