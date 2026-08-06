"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CommunityFormValues,
  communitySchema,
} from "@/schemas/community-schema";
import CommunityForm from "./community-form";
import { useUpdateCommunity } from "@/lib/api/hooks/communities/communities.hooks";
import { useModalStore } from "@/components/store/use-modal-store";
import { useEffect } from "react";
import { Spinner } from "@/components/spinner";
import { cleanBulletList } from "@/components/shared/bullet-list-input";
import { cleanVideoLinks } from "@/components/shared/video-links-input";
import type { AdminCommunity } from "@/lib/api/services/communities/communities.services";

export default function EditCommunityModal({
  community,
}: {
  community: AdminCommunity;
}) {
  const { mutate, isPending } = useUpdateCommunity(community.id);
  const closeModal = useModalStore((state) => state.closeModal);
  const openModal = useModalStore((state) => state.openModal);

  const methods = useForm<CommunityFormValues>({
    resolver: zodResolver(communitySchema),
    defaultValues: {
      title: community.title,
      subtitle: community.subtitle,
      description: community.description,
      whatsappLink: community.whatsappLink,
      gains: community.gains ?? [],
      videoLinks: community.videoLinks ?? [],
      tags: (community.tags ?? []).map((t) => t.name),
      order: String(community.order ?? 0),
      isPublished: community.isPublished,
    },
  });

  const onSubmit = (data: CommunityFormValues) => {
    mutate(
      {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        whatsappLink: data.whatsappLink,
        gains: cleanBulletList(data.gains),
        videoLinks: cleanVideoLinks(data.videoLinks),
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
          Edit Community
        </h2>
        <p className="text-sm text-secondary-text">
          Update the details shown on the public community page.
        </p>
      </div>

      <FormProvider {...methods}>
        <CommunityForm
          onSubmit={onSubmit}
          isLoading={isPending}
          submitLabel="Save Changes"
        />
      </FormProvider>
    </div>
  );
}
