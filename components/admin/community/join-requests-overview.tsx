"use client";

import DashboardHeaderText from "@/components/dashboard/dashboard-header";
import QueryStateHandler from "@/components/query-state-handler";
import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, CheckCircle2, RefreshCw } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  useGetCommunityJoinRequests,
  useResendCommunityInvite,
} from "@/lib/api/hooks/communities/communities.hooks";
import type { CommunityJoinRequest } from "@/lib/api/services/communities/communities.services";
import { useDebounce } from "@/hooks/use-debounce";
import { formatAppDate } from "@/lib/utils";

const LIMIT = 20;

export default function JoinRequestsOverview() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const [searchInput, setSearchInput] = useState("");
  const search = useDebounce(searchInput, 400);

  const { data, isLoading, isError, isFetching } = useGetCommunityJoinRequests({
    page,
    limit: LIMIT,
    ...(search ? { search } : {}),
  });

  const { mutate: resend, isPending: isResending } = useResendCommunityInvite();

  return (
    <div className="space-y-10">
      <DashboardHeaderText
        header="Community Join Requests"
        subtext="Everyone who has applied. Invites are emailed automatically — resend any that failed."
      />

      <div className="space-y-4">
        <Input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search by name, email or phone"
          className="border-input h-11 max-w-sm focus-visible:ring-0"
        />

        <QueryStateHandler
          data={data?.data}
          isLoading={isLoading}
          isError={isError}
          loadingMessage="Loading Join Requests"
          fetchingMessage="Fetching Latest Join Requests"
          errorMessage="Error loading join requests. Please try again"
          emptyMessage="No one has applied yet"
          isFetching={isFetching}
        >
          <div className="overflow-x-auto rounded-[12px] border border-border bg-dash-secondary-bg">
            <table className="w-full text-sm min-w-[820px]">
              <thead className="bg-muted text-left text-secondary-text">
                <tr>
                  <th className="py-3 px-4 font-medium">Applicant</th>
                  <th className="py-3 px-4 font-medium">Community</th>
                  <th className="py-3 px-4 font-medium">Reason</th>
                  <th className="py-3 px-4 font-medium">Invite</th>
                  <th className="py-3 px-4 font-medium">Applied</th>
                  <th className="py-3 px-4 font-medium" />
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((req: CommunityJoinRequest) => (
                  <tr key={req.id} className="border-t border-border">
                    <td className="py-3 px-4">
                      <div className="font-medium text-primary-text">
                        {req.fullName}
                      </div>
                      <div className="text-secondary-text">{req.email}</div>
                      {req.phone && (
                        <div className="text-secondary-text">{req.phone}</div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-secondary-text">
                      {req.community?.title ?? "—"}
                    </td>
                    <td className="py-3 px-4 max-w-xs">
                      <p className="line-clamp-2 text-secondary-text">
                        {req.reason || "—"}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      {req.linkEmailedAt ? (
                        <span className="inline-flex items-center gap-1.5 text-green-700 dark:text-green-400">
                          <CheckCircle2 className="h-4 w-4" /> Sent
                        </span>
                      ) : (
                        <span
                          className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400"
                          title={req.emailError ?? "Not sent yet"}
                        >
                          <AlertTriangle className="h-4 w-4" /> Not sent
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-secondary-text whitespace-nowrap">
                      {formatAppDate(req.createdAt)}
                    </td>
                    <td className="py-3 px-4">
                      {/* Resending is only meaningful when delivery failed. */}
                      {!req.linkEmailedAt && (
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={isResending}
                          onClick={() => resend(req.id)}
                        >
                          <RefreshCw className="h-4 w-4 mr-1" /> Resend
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </QueryStateHandler>

        {data?.meta?.totalPages > 1 && (
          <Pagination totalPages={data.meta.totalPages} />
        )}
      </div>
    </div>
  );
}
