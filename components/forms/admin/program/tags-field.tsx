"use client";

import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import type { ProgramFormSchema } from "@/schemas/programs-schema";
import { FieldError } from "@/components/ui/field";

export default function TagsField() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<ProgramFormSchema>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags" as any,
  });

  const [inputValue, setInputValue] = useState("");
  const values = watch("tags") || [];

  const handleAddTag = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    if (fields.length >= 6) return;
    append(trimmed as any);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const fieldError = errors.tags;
  const errorMessage =
    typeof fieldError?.message === "string"
      ? fieldError.message
      : Array.isArray(fieldError)
        ? fieldError.find((e) => typeof e?.message === "string")?.message
        : undefined;

  return (
    <div className="flex flex-col gap-3">
      {/* Rendered tags list */}
      {fields.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {fields.map((field, index) => {
            const tagText =
              typeof values[index] === "string"
                ? values[index]
                : (field as any).value || "";
            return (
              <span
                key={field.id}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-regular-button text-white border border-[#A8D6754D]"
              >
                {tagText}
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="hover:text-red-600 cursor-pointer ml-1"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            );
          })}
        </div>
      )}

      {/* Input row */}
      <div className="flex items-center gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a tag (max 6)..."
          disabled={fields.length >= 6}
          className="border-[0.67px] border-[#D0D5DD] dark:border-border bg-white rounded-[5px] flex-1 text-[12px] font-medium text-primary-text placeholder:text-[#98A2B3] placeholder:text-[12px] py-4 h-11 focus-visible:border-none focus-visible:ring-0"
        />
        <Button
          type="button"
          variant="outline"
          onClick={handleAddTag}
          disabled={fields.length >= 6}
          className="border border-regular-button text-regular-button font-medium"
        >
          Add Tag
        </Button>
      </div>
      {errorMessage && <FieldError errors={[errorMessage]} />}
    </div>
  );
}
