import React, { useState } from "react";
import { useModalStore } from "@/components/store/use-modal-store";
import { Button } from "@/components/ui/button";
import { useForm, FormProvider, Controller } from "react-hook-form";
import FormFieldComp from "@/components/formfield";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { X } from "lucide-react";

interface ProgramRegistrationModalProps {
  program: {
    title: string;
    image: {
      overlaySecondary: string[];
    };
  };
}

type RegistrationFormValues = {
  fullName: string;
  email: string;
  phone?: string;
  organisation?: string;
  message?: string;
};

export default function ProgramRegistrationModal({
  program,
}: ProgramRegistrationModalProps) {
  const closeModal = useModalStore((state) => state.closeModal);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<RegistrationFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organisation: "",
      message: "",
    },
  });

  const onSubmit = (data: RegistrationFormValues) => {
    setIsSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      console.log("Registration data:", data);
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        closeModal("registration-form");
      }, 2000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center h-[50vh]">
        <div className="w-16 h-16 rounded-full bg-[#E8F3EF] flex items-center justify-center mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#567F57"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-[#131313] mb-3">
          Registration Successful!
        </h3>
        <p className="text-[#606060] max-w-md">
          Thank you for registering. Our team will reach out within 48 hours to
          confirm your place and share onboarding information.
        </p>
      </div>
    );
  }

  return (
    <div className="-m-6 relative flex flex-col sm:overflow-hidden rounded-t-[inherit]">
      {/* Header */}
      <div className="bg-[#1F4842] px-4 py-10 lg:px-10 lg:py-12 relative  z-10 shrink-0 text-white rounded-t-sm">
        <h4 className="text-[11px] text-[#A8D675] font-semibold tracking-[1.5px] uppercase mb-4 opacity-90">
          REGISTER INTEREST
        </h4>
        <h2 className="text-2xl md:text-[34px] font-semibold mb-6">
          {program.title}
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {program.image.overlaySecondary.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full border-[0.67px] border-[#A8D6754D] text-[#A8D675] text-[12.5px] bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>
         <div className="absolute top-6 right-6 bg-white rounded-full p-0.5 md:h-10 md:w-10 transition-all flex items-center justify-center cursor-pointer md:hover:shadow-lg ">
                <X onClick={() => closeModal("registration-form")} color="black" />
              </div>
      </div>

      {/* Form Content */}
      <div className="px-4 py-8 lg:px-10 bg-white">
        <p className="text-[#606060] text-sm md:text-[15px] leading-relaxed mb-8 max-w-xl">
          Fill in your details below and our team will reach out within 48 hours
          to confirm your place and share onboarding information.
        </p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormFieldComp
            name="fullName"
            control={form.control}
            label="Full Name"
            placeholder="Enter your full name"
            className="bg-white flex-1"
          />
          <FormFieldComp
            name="email"
            control={form.control}
            label="Email Address"
            placeholder="[EMAIL_ADDRESS]"
            className="bg-white flex-1"
          />
          <div className="flex flex-col md:flex-row gap-5">
          <FormFieldComp
            name="phone"
            control={form.control}
            label="Phone Number"
            placeholder="+44 7xxx xxxxxx"
            className="bg-white flex-1"
          />
          <FormFieldComp
            name="organisation"
            control={form.control}
            label="Organisation"
            placeholder="Optional"
            className="bg-white flex-1"
          />

          </div>
         
            <Controller
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="mt-4">
                <div className="flex flex-col">
                  <FieldLabel
                    className="text-[#344054] dark:text-secondary-text  text-[14px] mb-2"
                    htmlFor="description"
                  >
                    What brings you to this programme?
                  </FieldLabel>
                  <textarea
                    id="description"
                    {...field}
                    placeholder="Tell us a little about yourself and your goals..."
                    className="border-[0.75px] border-[#EAECF0] bg-white rounded-[5px] w-full text-[12px] font-medium text-primary-text placeholder:text-[#98A2B3] py-4 min-h-30 outline-none px-3 resize-none"
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <div className="flex items-center gap-4 mt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-[52px] shadow-none border-[#EAECF0] text-[#344054] hover:bg-gray-50 text-[15px] font-medium"
              onClick={() => closeModal("registration-form")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 h-[52px] shadow-none bg-[#567F57] hover:bg-[#466947] text-white text-[15px] font-medium"
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
