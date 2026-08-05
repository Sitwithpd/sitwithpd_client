"use client";

import React from "react";
import { Controller, useFormContext, SubmitHandler } from "react-hook-form";
import FormFieldComp from "@/components/formfield";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { ConsultationServiceFormValues } from "@/schemas/consultation-service-schema";
import CalEventTypeSelect from "./cal-event-type-select";
import ImageUpload from "@/components/image-upload";
import { TagInput, SingleTagInput } from "@/components/shared/tag-input";
import { BulletListInput } from "@/components/shared/bullet-list-input";

interface ConsultationServiceFormProps {
  onSubmit: SubmitHandler<ConsultationServiceFormValues>;
  onCancel: () => void;
  isLoading?: boolean;
}


export default function ConsultationServiceForm({
  onSubmit,
  onCancel,
  isLoading,
}: ConsultationServiceFormProps) {


  const form = useFormContext<ConsultationServiceFormValues>();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
      {/* One continuous form. Sections are plain headed groups on the modal
          surface — a filled card here would read as a second, separate form. */}
      <div className="bg-transparent rounded-[12px]">
        <header className="text-primary-text font-semibold text-base mb-6">Service Details</header>

        <div className="space-y-6">
          <FormFieldComp
            name="title"
            control={form.control}
            label="Service Title *"
            placeholder="e.g. 1-on-1 Wellness Session"
            className="bg-white"
          />

          <FormFieldComp
            name="category"
            control={form.control}
            label="Category *"
            placeholder="e.g. Career Coaching"
            className="bg-white"
          />

          <Controller
            control={form.control}
            name="description"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex flex-col">
                  <FieldLabel className="dark:text-secondary-text text-primary-text text-[14px] mb-2" htmlFor="description">
                    Description *
                  </FieldLabel>
                  <textarea
                    id="description"
                    {...field}
                    placeholder="Describe the service, what to expect, and any requirements..."
                    className="border-[0.75px] border-[#EAECF0] dark:border-input bg-transparent dark:bg-input/30 rounded-[5px] w-full text-[12px] font-medium text-primary-text placeholder:text-[#98A2B3] py-4 min-h-30 outline-none px-3 resize-none"
                  />
                </div>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="coverImage"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="dark:text-secondary-text text-primary-text text-[14px] mb-2">Cover Image</FieldLabel>
                <ImageUpload
                  value={field.value}
                  onChange={(file) => field.onChange(file)}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>
      </div>

      <div className="bg-transparent rounded-[12px]">
        <header className="text-primary-text font-semibold text-base mb-6">Delivery &amp; Booking</header>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              control={form.control}
              name="format"
              render={({ field }) => (
                <Field>
                  <FieldLabel className="dark:text-secondary-text text-primary-text text-[14px] mb-2">Format</FieldLabel>
                  <SingleTagInput
                    value={field.value ?? ""}
                    onChange={field.onChange}
                    type="FORMAT"
                  />
                </Field>
              )}
            />
            <FormFieldComp
              name="duration"
              control={form.control}
              label="Duration (mins) *"
              placeholder="e.g. 60"
              type="text"
              inputMode="numeric"
              className="bg-white"
            />
          </div>

          <Controller
            control={form.control}
            name="calBookingUrl"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="dark:text-secondary-text text-primary-text text-[14px] mb-2">Cal.com Event Type *</FieldLabel>
                <CalEventTypeSelect
                  value={field.value}
                  onChange={field.onChange}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>
      </div>

      <div className="bg-transparent rounded-[12px]">
        <header className="text-primary-text font-semibold text-base mb-6">Pricing</header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormFieldComp
            name="price"
            control={form.control}
            label="Price (GBP) *"
            placeholder="e.g. 150"
            type="text"
            inputMode="numeric"
            className="bg-white"
          />
        </div>
      </div>

      <div className="bg-transparent rounded-[12px]">
        <header className="text-primary-text font-semibold text-base mb-6">Page Content</header>

        <div className="space-y-6">
          <Controller
            control={form.control}
            name="audience"
            render={({ field }) => (
              <Field>
                <FieldLabel className="dark:text-secondary-text text-primary-text text-[14px] mb-2">Who&apos;s It For</FieldLabel>
                <BulletListInput
                  value={field.value ?? []}
                  onChange={field.onChange}
                  placeholder="e.g. Anyone rebuilding confidence after a career break"
                  addLabel="Add audience"
                />
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="whatsIncluded"
            render={({ field }) => (
              <Field>
                <FieldLabel className="dark:text-secondary-text text-primary-text text-[14px] mb-2">What&apos;s Included</FieldLabel>
                <BulletListInput
                  value={field.value ?? []}
                  onChange={field.onChange}
                  placeholder="e.g. Follow-up summary sent within 48 hours"
                  addLabel="Add inclusion"
                />
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="tags"
            render={({ field }) => (
              <Field>
                <FieldLabel className="dark:text-secondary-text text-primary-text text-[14px] mb-2">Topics</FieldLabel>
                <TagInput
                  value={field.value ?? []}
                  onChange={field.onChange}
                  type="TOPIC"
                />
              </Field>
            )}
          />
        </div>
      </div>

      <div className="flex items-center justify-end w-full mt-10 gap-3">
        <Button
          variant={"outline"}
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          className="text-regular-button border border-regular-button"
        >
          Cancel
        </Button>
        <Button
          variant={"regular"}
          disabled={!form.formState.isValid || isLoading}
        >
          {isLoading ? "Submitting..." : "Save Service"}
        </Button>
      </div>
    </form>
  );
}
