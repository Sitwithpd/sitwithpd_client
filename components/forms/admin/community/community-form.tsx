import { useFormContext, Controller } from "react-hook-form";
import { CommunityFormValues } from "@/schemas/community-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TagInput } from "@/components/shared/tag-input";
import { BulletListInput } from "@/components/shared/bullet-list-input";
import { VideoLinksInput } from "@/components/shared/video-links-input";
import { COMMUNITY_ICON_OPTIONS } from "@/components/pages/community/icon-map";
import { useModalStore } from "@/components/store/use-modal-store";

interface CommunityFormProps {
  onSubmit: (data: CommunityFormValues) => void;
  isLoading: boolean;
  submitLabel: string;
}

export default function CommunityForm({
  onSubmit,
  isLoading,
  submitLabel,
}: CommunityFormProps) {
  const { control, handleSubmit } = useFormContext<CommunityFormValues>();
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6">
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="title">Community Name *</FieldLabel>
              <Input
                {...field}
                id="title"
                placeholder="e.g. The Generalist Pathfinders"
                className="border-input h-11 focus-visible:ring-0"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="subtitle"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="subtitle">Subtitle *</FieldLabel>
              <Input
                {...field}
                id="subtitle"
                placeholder="One line shown under the community name"
                className="border-input h-11 focus-visible:ring-0"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="description">Description *</FieldLabel>
              <textarea
                {...field}
                id="description"
                rows={4}
                placeholder="What this community is about"
                className="border border-input bg-transparent dark:bg-input/30 rounded-[5px] w-full text-sm text-primary-text placeholder:text-muted-foreground py-3 px-3 outline-none resize-none"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Group link — emailed to applicants, never shown publicly. */}
        <Controller
          control={control}
          name="whatsappLink"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="whatsappLink">
                WhatsApp Group Link *
              </FieldLabel>
              <Input
                {...field}
                id="whatsappLink"
                placeholder="https://chat.whatsapp.com/…"
                className="border-input h-11 focus-visible:ring-0"
              />
              <p className="text-xs text-secondary-text">
                Emailed automatically to each applicant. It is never shown on the
                public site.
              </p>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="iconKey"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="iconKey">Card Icon</FieldLabel>
              <Select value={field.value || ""} onValueChange={field.onChange}>
                <SelectTrigger
                  id="iconKey"
                  className="h-11"
                >
                  <SelectValue placeholder="Select an icon" />
                </SelectTrigger>
                <SelectContent>
                  {COMMUNITY_ICON_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="gains"
          render={({ field }) => (
            <Field>
              <FieldLabel>What You&apos;ll Gain</FieldLabel>
              <BulletListInput
                value={field.value ?? []}
                onChange={field.onChange}
                placeholder="e.g. Weekly exploration sessions across career paths"
                addLabel="Add benefit"
              />
            </Field>
          )}
        />

        <Controller
          control={control}
          name="videoLinks"
          render={({ field }) => (
            <Field>
              <FieldLabel>Videos</FieldLabel>
              <VideoLinksInput
                value={field.value ?? []}
                onChange={field.onChange}
              />
              <p className="text-xs text-secondary-text">
                YouTube links only. The order here is the order they appear.
              </p>
            </Field>
          )}
        />

        <Controller
          control={control}
          name="tags"
          render={({ field }) => (
            <Field>
              <FieldLabel htmlFor="tags">Popular Topics</FieldLabel>
              <TagInput
                id="tags"
                value={field.value ?? []}
                onChange={field.onChange}
                type="TOPIC"
                placeholder="e.g. Career Exploration"
              />
            </Field>
          )}
        />

        <Controller
          control={control}
          name="order"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="order">Display Order *</FieldLabel>
              <Input
                {...field}
                id="order"
                type="text"
                inputMode="numeric"
                placeholder="0"
                onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ""))}
                className="border-input h-11 focus-visible:ring-0"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
          <div className="space-y-0.5">
            <FieldLabel className="text-base font-semibold">
              Published Status
            </FieldLabel>
            <p className="text-sm text-secondary-text">
              Show this community on the public community page.
            </p>
          </div>
          <Controller
            control={control}
            name="isPublished"
            render={({ field }) => (
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            )}
          />
        </div>
      </div>

      <div className="flex gap-3 justify-end pt-4 border-t border-border">
        <Button
          type="button"
          variant="outline"
          onClick={() => closeModal("community-modal")}
          disabled={isLoading}
          className="px-6"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="regular"
          disabled={isLoading}
          className="w-full sm:w-auto px-8"
        >
          {isLoading ? "Saving..." : submitLabel}
        </Button>
      </div>
    </form>
  );
}
