"use client";

import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import type { ProgramFormSchema } from "@/schemas/programs-schema";
import { FieldError } from "@/components/ui/field";
import clsx from "clsx";

export default function LearningObjectivesField() {
  const {
    control,
    formState: { errors },
  } = useFormContext<ProgramFormSchema>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "learningObjectives",
  });

  const [objectiveInput, setObjectiveInput] = useState("");

  const handleAddObjective = () => {
    const trimmed = objectiveInput.trim();
    if (!trimmed) return;
    append({ text: trimmed });
    setObjectiveInput("");
  };

  const handleObjectiveKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddObjective();
    }
  };

  const fieldError = errors.learningObjectives;

  const errorMessage =
    fieldError?.message ||
    (fieldError as any)?.root?.message ||
    (Array.isArray(fieldError)
      ? fieldError
          .map((e: any) => e?.text?.message || e?.message)
          .filter(Boolean)[0]
      : undefined);

  return (
    <div className="flex flex-col gap-3">
      {/* Rendered objective list */}
      {fields.length > 0 && (
        <ul className="space-y-1.5 mb-2">
          {fields.map((field, index) => (
            <li
              key={field.id}
              className="flex items-center justify-between text-sm text-primary-text bg-dash-secondary-bg rounded-md px-3 py-2"
            >
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-regular-button" />
                {field.text}
              </span>
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Input row */}
      <div className="flex items-center gap-2">
        <Input
          value={objectiveInput}
          onChange={(e) => setObjectiveInput(e.target.value)}
          onKeyDown={handleObjectiveKeyDown}
          aria-invalid={!!errorMessage}
          placeholder="Add a learning objective..."
          className={clsx(
            "border-[0.67px] border-[#D0D5DD] dark:border-border bg-white rounded-[5px] flex-1 text-[12px] font-medium text-primary-text placeholder:text-[#98A2B3] placeholder:text-[12px] py-4 h-11 focus-visible:border-none focus-visible:ring-0",
            errorMessage && "border-destructive ring-1 ring-destructive",
          )}
        />
        <Button
          type="button"
          variant="outline"
          onClick={handleAddObjective}
          className="border border-regular-button text-regular-button font-medium "
        >
          Add
        </Button>
      </div>
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </div>
  );
}
