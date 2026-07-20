"use client";

import DashboardHeaderText from "@/components/dashboard/dashboard-header";
import {
  handleAddTeamMember,
  handleEditTeamMember,
} from "@/components/modal-helper";
import QueryStateHandler from "@/components/query-state-handler";
import { Spinner } from "@/components/spinner";
import { useModalStore } from "@/components/store/use-modal-store";
import TeamMemberCard from "./team-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  useDeleteTeamMember,
  useGetAllAdminTeam,
} from "@/lib/api/hooks/team/team.hooks";
import Pagination from "@/components/pagination";
import { TeamMember } from "@/lib/api/services/team/team.services";
import DeleteConfirmationModal from "@/components/forms/admin/team/delete-confirmation";

const LIMIT = 10;

export default function TeamOverview() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const [search, setSearch] = useState("");

  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const params = {
    page,
    limit: LIMIT,
    search,
  };

  const {
    data: teamData,
    isLoading,
    isError,
    isFetching,
  } = useGetAllAdminTeam(params);

  const { mutate: deleteMember, isPending: isDeleting } = useDeleteTeamMember();

  const handleDelete = (id: string) => {
    openModal(
      "delete-confirmation",
      <DeleteConfirmationModal
        title="Delete Team Member"
        message="Are you sure you want to delete this team member? This action cannot be undone."
        onConfirm={() => {
          deleteMember(id, {
            onSuccess: () => {
              closeModal("loading");
            },
            onError: () => {
              closeModal("loading");
            },
          });
        }}
      />,
    );
  };

  useEffect(() => {
    if (isDeleting) {
      openModal(
        "loading",
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-10 rounded-lg min-w-50">
          <Spinner size={40} />
        </div>,
        { isMutation: true },
      );
    }
  }, [isDeleting, openModal]);

  const handleEdit = (member: TeamMember) => {
    handleEditTeamMember(member);
  };

  return (
    <div className="space-y-15">
      <div className="flex justify-between items-center ">
        <DashboardHeaderText
          header="Team Members"
          subtext="Manage the professional team displayed on the platform"
        />
        <Button
          variant={"regular"}
          className="font-normal hidden sm:flex"
          onClick={handleAddTeamMember}
        >
          <Plus /> <span>New Member</span>
        </Button>
      </div>

      <div className="space-y-4">
        <div className="w-full">
          <QueryStateHandler
            data={teamData?.data}
            isLoading={isLoading}
            isError={isError}
            loadingMessage="Loading Team Members"
            fetchingMessage="Fetching Latest Team Members"
            errorMessage="Error loading team members. Please try again"
            emptyMessage="No team members found"
            isFetching={isFetching}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
              {teamData?.data?.map((member: TeamMember) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </QueryStateHandler>
        </div>

        {teamData?.meta?.totalPages > 1 && (
          <Pagination totalPages={teamData.meta.totalPages} />
        )}
      </div>

      {/* Mobile Floating Action Button */}
      <div className="md:hidden fixed bottom-10 right-10 z-40 pointer-events-auto">
        <button
          onClick={handleAddTeamMember}
          className="w-14 h-14 bg-regular-button rounded-full flex items-center justify-center text-white shadow-lg hover:bg-brand-green transition-all duration-300"
          aria-label="New Team Member"
        >
          <Plus size={28} />
        </button>
      </div>
    </div>
  );
}
