"use client";

import { Control, FieldPath, FieldValues, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import clsx from "clsx";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file" | "number";
  disabled?: boolean;
  label?: string;
  className?: string;
  inputMode?:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  autoComplete?: string;
}

export default function FormFieldComp<T extends FieldValues>({
  control,
  name,
  placeholder,
  type = "text",
  disabled = false,
  label,
  className,
  inputMode,
  autoComplete,
}: FormFieldProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <div>
            {label && (
              <FieldLabel
                className={clsx(
                  "text-secondary-text dark:font-medium text-[14px] mb-2 block",
                )}
                htmlFor={name}
              >
                {label}
              </FieldLabel>
            )}
            <div className="relative flex items-center">
              <Input
                type={isPassword ? (showPassword ? "text" : "password") : type}
                placeholder={placeholder}
                disabled={disabled}
                id={name}
                aria-invalid={fieldState.invalid}
                {...field}
                inputMode={inputMode}
                autoComplete={
                  autoComplete || (isPassword ? "current-password" : undefined)
                }
                className={clsx(
                  "border-[0.75px] border-[#EAECF0] dark:border-input bg-[#F2F4F7] rounded-[5px] w-full text-[12px] font-medium text-primary-text placeholder:text-[#98A2B3] placeholder:text-[12px] placeholder:font-normal py-4 h-11 focus-visible:border-none focus-visible:ring-0",
                  isPassword ? "pr-10" : "",
                  className,
                )}
              />
              {isPassword && (
                <button
                  type="button"
                  tabIndex={-1}
                  disabled={disabled}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2.5 z-10 p-1 text-[#344054] hover:text-[#181D27] focus:outline-none transition-colors cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              )}
            </div>
          </div>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
