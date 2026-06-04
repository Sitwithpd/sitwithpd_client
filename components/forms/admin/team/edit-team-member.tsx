"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TeamFormValues, teamSchema } from "@/schemas/team-schema";
import TeamForm from "./team-form";
import { useUpdateTeamMember } from "@/lib/api/hooks/team/team.hooks";
import { useModalStore } from "@/components/store/use-modal-store";
import { useEffect } from "react";
import { Spinner } from "@/components/spinner";
import { TeamMember } from "@/lib/api/services/team/team.services";

interface EditTeamMemberModalProps {
  member: TeamMember;
}

export default function EditTeamMemberModal({
  member,
}: EditTeamMemberModalProps) {
  const { mutate, isPending } = useUpdateTeamMember(member.id);
  const closeModal = useModalStore((state) => state.closeModal);
  const openModal = useModalStore((state) => state.openModal);

  const methods = useForm<TeamFormValues>({
    resolver: zodResolver(teamSchema),
    defaultValues: {
      name: member.name,
      role: member.role,
      order: String(member.order),
      isPublished: member.isPublished,
      image: member.photoUrl, // Pass current image URL as initial value
    },
  });

  const onSubmit = (data: TeamFormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("role", data.role);
    formData.append("order", String(data.order));
    formData.append("isPublished", String(data.isPublished));

    // Only append if it's a new file
    if (data.image instanceof File) {
      formData.append("photoUrl", data.image);
    }

    mutate(formData, {
      onSuccess: () => {
        closeModal("team-modal");
        closeModal("loading");
      },
      onError: () => {
        closeModal("loading");
      },
    });
  };

  useEffect(() => {
    if (isPending) {
      openModal(
        "loading",
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-10 rounded-lg min-w-50">
          <Spinner size={40} />
        </div>,
        { isMutation: true },
      );
    }
  }, [isPending, openModal]);

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h2 className="text-xl font-semibold text-primary-text mb-1">
          Edit Team Member
        </h2>
        <p className="text-sm text-secondary-text">
          Update team member details.
        </p>
      </div>

      <FormProvider {...methods}>
        <TeamForm
          onSubmit={onSubmit}
          isLoading={isPending}
          submitLabel="Update Member"
        />
      </FormProvider>
    </div>
  );
}
