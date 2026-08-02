"use client";

import React from "react";
import { useModalStore } from "@/components/store/use-modal-store";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import FormFieldComp from "@/components/formfield";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { X } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useJoinCommunity } from "@/lib/api/hooks/communities/communities.hooks";
import type { Community } from "@/lib/api/services/communities/communities.services";

export const COMMUNITY_JOIN_MODAL_ID = "community-join-modal";

interface CommunityJoinModalProps {
  community: Pick<Community, "id" | "slug" | "title" | "tags">;
}

type CommunityJoinFormValues = {
  fullName: string;
  email: string;
  phone?: string;
  reason?: string;
  agreedToPolicy: boolean;
  /** Hidden honeypot — bots fill it, humans never see it. */
  website?: string;
};

const communityJoinSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  phone: z.string().optional(),
  reason: z.string().optional(),
  agreedToPolicy: z
    .boolean()
    .refine((val) => val === true, "You must agree to the privacy policy"),
  website: z.string().optional(),
});

export default function CommunityJoinModal({
  community,
}: CommunityJoinModalProps) {
  const closeModal = useModalStore((state) => state.closeModal);
  const { mutate: joinCommunity, isPending: isSubmitting } = useJoinCommunity(
    community.slug || community.id,
  );

  const form = useForm<CommunityJoinFormValues>({
    resolver: zodResolver(communityJoinSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      reason: "",
      agreedToPolicy: false,
      website: "",
    },
  });

  const agreedToPolicy = form.watch("agreedToPolicy");

  const onSubmit = (data: CommunityJoinFormValues) => {
    joinCommunity(
      {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || undefined,
        reason: data.reason || undefined,
        agreedToPolicy: data.agreedToPolicy,
        website: data.website || undefined,
      },
      {
        onSuccess: (response) => {
          closeModal(COMMUNITY_JOIN_MODAL_ID);
          // The API saves the application either way; `emailed` says whether
          // the invite actually went out, so don't promise an inbox blindly.
          const emailed = response?.data?.emailed !== false;
          toast.success("Application submitted!", {
            description: (
              <span style={{ color: "#344054" }}>
                {emailed
                  ? `Your invite to ${community.title} is on its way — check your email (including spam) for the group link.`
                  : `Your request to join ${community.title} has been registered. We'll send your group link shortly.`}
              </span>
            ),
            duration: 6000,
          });
        },
      },
    );
  };

  return (
    <div className="-m-6 relative flex flex-col sm:overflow-hidden rounded-t-[inherit]">
      {/* Header */}
      <div className="bg-[#1F4842] px-4 py-10 lg:px-10 lg:py-12 relative z-10 shrink-0 text-white rounded-t-sm">
        <h4 className="text-[11px] text-[#A8D675] font-semibold tracking-[1.5px] uppercase mb-4 opacity-90">
          COMMUNITY APPLICATION
        </h4>
        <h2 className="text-2xl md:text-[30px] font-semibold mb-5 leading-snug">
          {community.title}
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {community.tags.map((topic) => (
            <span
              key={topic.id}
              className="px-4 py-1.5 rounded-full border-[0.67px] border-[#A8D6754D] text-[#A8D675] text-[12.5px] bg-transparent"
            >
              {topic.name}
            </span>
          ))}
        </div>
        <div className="absolute top-6 right-6 bg-white rounded-full p-0.5 md:h-10 md:w-10 transition-all flex items-center justify-center cursor-pointer md:hover:shadow-lg">
          <X
            onClick={() => closeModal(COMMUNITY_JOIN_MODAL_ID)}
            color="black"
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="px-4 py-8 lg:px-10 bg-white">
        <p className="text-[#606060] text-sm md:text-[15px] leading-relaxed mb-8 max-w-xl">
          Fill out the application form below to apply for membership in this
          community. We&apos;ll review your application and get back to you
          shortly.
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Honeypot: hidden from users, bots fill it and the server discards
              the submission silently. Not `type="hidden"` so scripted fillers
              still see it as a normal text input. */}
          <input
            {...form.register("website")}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          {/* Full Name */}
          <FormFieldComp
            name="fullName"
            control={form.control}
            label="Full Name"
            placeholder="e.g. Jane Doe"
            className="bg-white flex-1"
          />

          {/* Email Address */}
          <FormFieldComp
            name="email"
            control={form.control}
            label="Email Address"
            placeholder="e.g. jane@example.com"
            className="bg-white flex-1"
          />

          {/* Phone Number */}
          <FormFieldComp
            name="phone"
            control={form.control}
            label="Phone Number"
            placeholder="e.g. +1 (555) 000-0000"
            className="bg-white flex-1"
          />

          {/* Why do you want to join */}
          <Controller
            control={form.control}
            name="reason"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex flex-col">
                  <FieldLabel
                    className="text-[#344054] dark:text-secondary-text text-[14px] mb-2"
                    htmlFor="reason"
                  >
                    Why do you want to join?
                  </FieldLabel>
                  <textarea
                    id="reason"
                    {...field}
                    placeholder="Tell us about your goals, interests, or what you hope to contribute..."
                    className="border-[0.75px] border-[#EAECF0] bg-white rounded-[5px] w-full text-[12px] font-medium text-primary-text placeholder:text-[#98A2B3] py-4 min-h-28 outline-none px-3 resize-none"
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Privacy Policy Checkbox */}
          <Controller
            control={form.control}
            name="agreedToPolicy"
            rules={{ required: "You must agree to the privacy policy" }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    id="agreedToPolicy"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    className="mt-1 shrink-0 accent-[#567F57] w-4 h-4 cursor-pointer"
                  />
                  <span className="text-xs text-[#606060] leading-relaxed">
                    I agree to the privacy policy and consent to receiving
                    communications regarding community selection and upcoming
                    activities.
                  </span>
                </label>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Actions */}
          <div className="flex items-center gap-4 mt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-[52px] shadow-none border-[#EAECF0] text-[#344054] hover:bg-gray-50 text-[15px] font-medium"
              onClick={() => closeModal(COMMUNITY_JOIN_MODAL_ID)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !agreedToPolicy}
              className="flex-1 h-[52px] shadow-none bg-[#567F57] hover:bg-[#466947] text-white text-[15px] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
