import { useFormContext, Controller } from "react-hook-form";
import { TeamFormValues } from "@/schemas/team-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import ImageUpload from "@/components/image-upload";
import { useModalStore } from "@/components/store/use-modal-store";

interface TeamFormProps {
  onSubmit: (data: TeamFormValues) => void;
  isLoading: boolean;
  submitLabel: string;
}

export default function TeamForm({
  onSubmit,
  isLoading,
  submitLabel,
}: TeamFormProps) {
  const { control, handleSubmit, setValue, watch } =
    useFormContext<TeamFormValues>();

  const image = watch("image");
  const isPublished = watch("isPublished");
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6">
        {/* Full Name */}
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Full Name *</FieldLabel>
              <Input
                {...field}
                id="name"
                placeholder="Enter member's name"
                className="bg-white border-[#EAECF0] h-11 focus-visible:ring-0"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Role */}
        <Controller
          control={control}
          name="role"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="role">Role *</FieldLabel>
              <Input
                {...field}
                id="role"
                placeholder="e.g. Founder & CEO"
                className="bg-white border-[#EAECF0] h-11 focus-visible:ring-0"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Display Order */}
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
                onChange={(e) => {
                  // Utility block to ensure only digits
                  const val = e.target.value.replace(/\D/g, "");
                  field.onChange(val);
                }}
                className="bg-white border-[#EAECF0] h-11 focus-visible:ring-0"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Member Photo */}
        <Controller
          control={control}
          name="image"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Member Photo *</FieldLabel>
              <ImageUpload
                value={field.value}
                onChange={(file) => field.onChange(file)}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Published Status */}
        <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-[#EAECF0]">
          <div className="space-y-0.5">
            <FieldLabel className="text-base font-semibold">
              Published Status
            </FieldLabel>
            <p className="text-sm text-secondary-text">
              Make this member visible on the homepage.
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

      <div className="flex gap-3 justify-end pt-4 border-t border-[#EAECF0]">
        <Button
          type="button"
          variant="outline"
          onClick={() => closeModal("team-modal")}
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
