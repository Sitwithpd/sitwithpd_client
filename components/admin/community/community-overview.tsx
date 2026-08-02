"use client";

import DashboardHeaderText from "@/components/dashboard/dashboard-header";
import QueryStateHandler from "@/components/query-state-handler";
import { Spinner } from "@/components/spinner";
import { useModalStore } from "@/components/store/use-modal-store";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Users, Link2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Pagination from "@/components/pagination";
import {
  useDeleteCommunity,
  useGetAllAdminCommunities,
} from "@/lib/api/hooks/communities/communities.hooks";
import type { AdminCommunity } from "@/lib/api/services/communities/communities.services";
import DeleteConfirmationModal from "@/components/forms/admin/team/delete-confirmation";
import { addCommunity, editCommunity } from "@/components/modal-helper";
import { getCommunityIcon } from "@/components/pages/community/icon-map";

const LIMIT = 10;

export default function CommunityOverview() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);

  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const { data, isLoading, isError, isFetching } = useGetAllAdminCommunities({
    page,
    limit: LIMIT,
  });

  const { mutate: deleteCommunity, isPending: isDeleting } =
    useDeleteCommunity();

  const handleDelete = (community: AdminCommunity) => {
    openModal(
      "delete-confirmation",
      <DeleteConfirmationModal
        title="Delete Community"
        message={`Delete "${community.title}"? Its join requests will be removed too. This cannot be undone.`}
        onConfirm={() => {
          deleteCommunity(community.id, {
            onSuccess: () => closeModal("loading"),
            onError: () => closeModal("loading"),
          });
        }}
      />,
    );
  };

  useEffect(() => {
    if (isDeleting) {
      openModal(
        "loading",
        <div className="flex flex-col items-center justify-center gap-4 bg-dash-secondary-bg p-10 rounded-lg min-w-50">
          <Spinner size={40} />
        </div>,
        { isMutation: true },
      );
    }
  }, [isDeleting, openModal]);

  return (
    <div className="space-y-15">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <DashboardHeaderText
          header="Communities"
          subtext="Manage WhatsApp communities and review who has applied to join"
        />
        <div className="flex items-center gap-3">
          <Link href="/admin/community/join-requests">
            <Button variant="outline" className="font-normal">
              <Users className="mr-1 h-4 w-4" /> Join Requests
            </Button>
          </Link>
          <Button
            variant="regular"
            className="font-normal hidden sm:flex"
            onClick={addCommunity}
          >
            <Plus /> <span>New Community</span>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <QueryStateHandler
          data={data?.data}
          isLoading={isLoading}
          isError={isError}
          loadingMessage="Loading Communities"
          fetchingMessage="Fetching Latest Communities"
          errorMessage="Error loading communities. Please try again"
          emptyMessage="No communities yet"
          isFetching={isFetching}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {data?.data?.map((community: AdminCommunity) => (
              <div
                key={community.id}
                className="rounded-[12px] border border-border bg-dash-secondary-bg p-5 space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 rounded-[10px] bg-[#A8D6751A] dark:bg-[#A8D67526] flex items-center justify-center">
                    {getCommunityIcon(community.iconKey)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-primary-text truncate">
                        {community.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          community.isPublished
                            ? "bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                            : "bg-slate-100 text-slate-500 dark:bg-muted dark:text-muted-foreground"
                        }`}
                      >
                        {community.isPublished ? "Published" : "Hidden"}
                      </span>
                    </div>
                    <p className="text-sm text-secondary-text line-clamp-2 mt-1">
                      {community.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {community.tags?.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-2.5 py-0.5 text-xs rounded-full border border-border text-primary-text"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-secondary-text">
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {community._count?.joinRequests ?? 0} applied
                    </span>
                    <a
                      href={community.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-regular-button"
                      title="Open the group link (admins only — never shown publicly)"
                    >
                      <Link2 className="h-4 w-4" /> Group link
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => editCommunity(community)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(community)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </QueryStateHandler>

        {data?.meta?.totalPages > 1 && (
          <Pagination totalPages={data.meta.totalPages} />
        )}
      </div>

      <div className="md:hidden fixed bottom-10 right-10 z-40 pointer-events-auto">
        <button
          onClick={addCommunity}
          className="w-14 h-14 bg-regular-button rounded-full flex items-center justify-center text-white shadow-lg hover:bg-brand-green transition-all duration-300"
          aria-label="New Community"
        >
          <Plus size={28} />
        </button>
      </div>
    </div>
  );
}
