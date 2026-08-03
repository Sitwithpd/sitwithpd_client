import FormFieldComp from "@/components/formfield";
import { Controller, useFormContext, SubmitHandler } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/image-upload";
import { CampFormSchema } from "@/schemas/camps-schema";
import SelectDateComp from "@/components/date-selector";

export default function CampForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: SubmitHandler<CampFormSchema>;
  onCancel: () => void;
}) {
  const form = useFormContext<CampFormSchema>();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
      {/* basic information */}
      <div className="bg-transparent  rounded-[12px]">
        <header className="text-primary-text font-semibold text-base mb-4">
          Camp Details
        </header>
        <div className="space-y-6">
          <FormFieldComp
            name="title"
            control={form.control}
            label="Camp Name *"
            placeholder="E.g. Summer Code Camp"
            className="bg-white"
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:gap-y-10 md:grid-cols-2">
            <FormFieldComp
              name="location"
              control={form.control}
              label="Location *"
              placeholder="Yankari Game Reserve"
              className="bg-white"
            />
            {/* <Controller
              control={form.control}
              name="price"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="">
                  <FieldLabel className="text-[#344054] dark:text-secondary-text text-sm mb-2">
                    Price (GBP) *
                  </FieldLabel>
                  <Input
                    {...field}
                    type="text"
                    inputMode="decimal"
                    autoComplete="one-time-code"
                    onChange={(e) => {
                      const formatted = formatAmount(e.target.value);
                      field.onChange(formatted);
                    }}
                    placeholder="0.00"
                    className="pr-10 border-[0.75px] border-[#EAECF0] dark:border-border bg-white rounded-[5px] w-full text-[12px] font-medium text-primary-text placeholder:text-[#98A2B3] placeholder:text-[12px] placeholder:font-normal py-4 h-[54px] focus-visible:border-none focus-visible:ring-0"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            /> */}
            <FormFieldComp
              name="category"
              control={form.control}
              label="Category *"
              placeholder="E.g. Wellness Retreat"
              className="bg-white"
            />
            <FormFieldComp
              name="capacity"
              control={form.control}
              label="Capacity *"
              placeholder="E.g. 50"
              className="bg-white"
            />
            <SelectDateComp
              control={form.control}
              name="startDate"
              label="Start Date *"
              placeholder="Select start date"
              disablePastDates={true}
            />
            <SelectDateComp
              control={form.control}
              name="endDate"
              label="End Date *"
              placeholder="Select end date"
              disablePastDates={true}
            />
          </div>

          <Controller
            control={form.control}
            name="description"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="mt-4">
                <div className="flex flex-col">
                  <FieldLabel
                    className="text-[#344054] dark:text-secondary-text  text-[14px] mb-2"
                    htmlFor="description"
                  >
                    Description *
                  </FieldLabel>
                  <textarea
                    id="description"
                    {...field}
                    placeholder="Describe the camp, activities, and what to expect..."
                    className="border-[0.75px] border-[#EAECF0] dark:border-input bg-transparent dark:bg-input/30 rounded-[5px] w-full text-[12px] font-medium text-primary-text placeholder:text-[#98A2B3] py-4 min-h-30 outline-none px-3 resize-none"
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      </div>

      {/* thumbnail — transparent like the section above it; a filled card here
          reads as a separate form against the modal surface. */}
      <div className="bg-transparent rounded-[12px]">
        <Controller
          control={form.control}
          name="thumbnail"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="mt-4">
              <FieldLabel className="text-primary-text dark:text-secondary-text font-semibold text-base ">
                Thumbnail
              </FieldLabel>
              <ImageUpload value={field.value} onChange={field.onChange} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <div className="flex items-center justify-end w-full mt-10 gap-3">
        <Button variant={"outline"} type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          variant={"regular"}
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting..." : "Save Camp"}
        </Button>
      </div>
    </form>
  );
}
