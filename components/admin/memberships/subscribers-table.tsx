"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import ReuseableTable from "@/components/tables/reuseable-table";
import QueryStateHandler from "@/components/query-state-handler";
import Pagination from "@/components/pagination";
import { ColumnDef } from "@tanstack/react-table";
import { formatCurrency, formatAppDate } from "@/lib/utils";
import { useMembershipSubscribers } from "@/lib/api/hooks/memberships/memberships.hooks";
import type {
  MembershipPlan,
  Subscription,
} from "@/lib/api/services/memberships/memberships.services";
import { useSearchParams } from "next/navigation";

const STATUS_VARIANT: Record<string, string> = {
  ACTIVE: "success",
  PAST_DUE: "warning",
  CANCELLED: "warning",
  PENDING_PAYMENT: "warning",
  EXPIRED: "secondary",
};

const STATUS_OPTIONS = [
  "",
  "ACTIVE",
  "PAST_DUE",
  "CANCELLED",
  "PENDING_PAYMENT",
  "EXPIRED",
];

const columns: ColumnDef<Subscription>[] = [
  {
    accessorKey: "user",
    header: "Subscriber",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-xs font-medium text-primary-text">
          {row.original.user
            ? `${row.original.user.firstName} ${row.original.user.lastName}`.trim()
            : "—"}
        </span>
        <span className="text-[10px] text-secondary-text">
          {row.original.user?.email}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "plan",
    header: "Plan",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-xs text-primary-text">{row.original.plan.name}</span>
        <span className="text-[10px] text-secondary-text">
          {row.original.interval === "ANNUAL" ? "Annual" : "Monthly"}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Billed",
    // Presentment currency: what this member is actually charged.
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-xs font-medium">
          {formatCurrency(row.original.amount, row.original.currency)}
        </span>
        {row.original.currency !== row.original.baseCurrency && (
          <span className="text-[10px] text-secondary-text">
            {formatCurrency(
              row.original.baseAmountMinor / 100,
              row.original.baseCurrency,
            )}
          </span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1 items-start">
        <Badge variant={(STATUS_VARIANT[row.original.status] ?? "default") as never}>
          {row.original.status.replace("_", " ")}
        </Badge>
        {row.original.pendingChange && (
          <span className="text-[10px] text-secondary-text">
            → {row.original.pendingChange.planName}
          </span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "currentPeriodEnd",
    header: "Renews / Ends",
    cell: ({ row }) => (
      <span className="text-xs text-secondary-text">
        {row.original.currentPeriodEnd
          ? formatAppDate(row.original.currentPeriodEnd)
          : "—"}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Joined",
    cell: ({ row }) => (
      <span className="text-xs text-secondary-text">
        {formatAppDate(row.original.createdAt)}
      </span>
    ),
  },
];

export default function SubscribersTable({ plans }: { plans: MembershipPlan[] }) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const [status, setStatus] = useState("");
  const [planId, setPlanId] = useState("");

  const { data, isLoading, isError, isFetching } = useMembershipSubscribers({
    page,
    limit: 10,
    status,
    planId,
  });

  return (
    <div className="space-y-4">
      <div className="flex gap-3 flex-wrap">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-10 rounded-md border border-border bg-transparent px-3 text-xs text-primary-text"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s || "all"} value={s}>
              {s ? s.replace("_", " ") : "All statuses"}
            </option>
          ))}
        </select>
        <select
          value={planId}
          onChange={(e) => setPlanId(e.target.value)}
          className="h-10 rounded-md border border-border bg-transparent px-3 text-xs text-primary-text"
        >
          <option value="">All plans</option>
          {plans.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <QueryStateHandler
        isLoading={isLoading}
        isError={isError}
        data={data?.data ?? []}
        loadingMessage="Loading Subscribers"
        fetchingMessage="Fetching Latest Subscribers"
        errorMessage="Error loading subscribers. Please try again"
        emptyMessage="No subscribers yet"
        isFetching={isFetching}
      >
        <ReuseableTable columns={columns} tableData={data?.data ?? []} />
        {data?.meta?.totalPages ? (
          <Pagination totalPages={data.meta.totalPages} />
        ) : null}
      </QueryStateHandler>
    </div>
  );
}
