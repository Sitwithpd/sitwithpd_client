"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TeamFormValues, teamSchema } from "@/schemas/team-schema";
import TeamForm from "./team-form";
import { useCreateTeamMember } from "@/lib/api/hooks/team/team.hooks";
import { useModalStore } from "@/components/store/use-modal-store";
import { useEffect } from "react";
import { Spinner } from "@/components/spinner";

export default function AddTeamMemberModal() {
  const { mutate, isPending } = useCreateTeamMember();
  const closeModal = useModalStore((state) => state.closeModal);
  const openModal = useModalStore((state) => state.openModal);

  const methods = useForm<TeamFormValues>({
    resolver: zodResolver(teamSchema),
    defaultValues: {
      name: "",
      role: "",
      bio: "",
      order: "0",
      isPublished: false,
      image: undefined,
    },
  });

  const onSubmit = (data: TeamFormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("role", data.role);
    formData.append("bio", data.bio ?? "");
    formData.append("order", String(data.order));
    formData.append("isPublished", String(data.isPublished));
    if (data.image instanceof File) {
      formData.append("photo", data.image);
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
          Add Team Member
        </h2>
        <p className="text-sm text-secondary-text">
          Add a new member to the team.
        </p>
      </div>

      <FormProvider {...methods}>
        <TeamForm
          onSubmit={onSubmit}
          isLoading={isPending}
          submitLabel="Add Member"
        />
      </FormProvider>
    </div>
  );
}
