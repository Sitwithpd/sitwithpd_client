"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommunityFormValues, communitySchema } from "@/schemas/community-schema";
import CommunityForm from "./community-form";
import { useCreateCommunity } from "@/lib/api/hooks/communities/communities.hooks";
import { useModalStore } from "@/components/store/use-modal-store";
import { useEffect } from "react";
import { Spinner } from "@/components/spinner";
import { cleanBulletList } from "@/components/shared/bullet-list-input";

export default function AddCommunityModal() {
  const { mutate, isPending } = useCreateCommunity();
  const closeModal = useModalStore((state) => state.closeModal);
  const openModal = useModalStore((state) => state.openModal);

  const methods = useForm<CommunityFormValues>({
    resolver: zodResolver(communitySchema),
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      whatsappLink: "",
      iconKey: "",
      gains: [],
      tags: [],
      order: "0",
      isPublished: true,
    },
  });

  const onSubmit = (data: CommunityFormValues) => {
    mutate(
      {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        whatsappLink: data.whatsappLink,
        iconKey: data.iconKey || null,
        gains: cleanBulletList(data.gains),
        tags: data.tags ?? [],
        order: Number(data.order),
        isPublished: data.isPublished,
      },
      {
        onSuccess: () => {
          closeModal("community-modal");
          closeModal("loading");
        },
        onError: () => {
          closeModal("loading");
        },
      },
    );
  };

  useEffect(() => {
    if (isPending) {
      openModal(
        "loading",
        <div className="flex flex-col items-center justify-center gap-4 bg-dash-secondary-bg p-10 rounded-lg min-w-50">
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
          Add Community
        </h2>
        <p className="text-sm text-secondary-text">
          Create a WhatsApp community people can apply to join.
        </p>
      </div>

      <FormProvider {...methods}>
        <CommunityForm
          onSubmit={onSubmit}
          isLoading={isPending}
          submitLabel="Create Community"
        />
      </FormProvider>
    </div>
  );
}
