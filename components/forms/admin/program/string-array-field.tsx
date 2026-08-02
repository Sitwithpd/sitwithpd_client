"use client";

import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import type { ProgramFormSchema } from "@/schemas/programs-schema";
import { FieldError } from "@/components/ui/field";

type ArrayFieldName = "whoThisIsFor" | "tags";

interface Props {
  name: ArrayFieldName;
  placeholder?: string;
  maxItems?: number;
  label?: string;
}

export default function StringArrayField({
  name,
  placeholder = "Type and press Add…",
  maxItems,
  label,
}: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext<ProgramFormSchema>();

  const { fields, append, remove } = useFieldArray({ control, name });
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    if (maxItems && fields.length >= maxItems) return;
    append({ text: trimmed });
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const fieldError = errors[name] as any;
  const rootError =
    fieldError && !Array.isArray(fieldError) ? [fieldError] : [];

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <p className="text-secondary-text text-sm font-medium">{label}</p>
      )}

      {/* Chip list */}
      {fields.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {fields.map((field, index) => (
            <li
              key={field.id}
              className="flex items-center gap-1.5 bg-[#EEF5E8] text-brand-green text-xs font-medium px-3 py-1.5 rounded-full"
            >
              {field.text}
              <button
                type="button"
                onClick={() => remove(index)}
                className="hover:text-brand-red transition-colors"
                aria-label={`Remove ${field.text}`}
              >
                <X className="h-3 w-3" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Input row */}
      <div className="flex items-center gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            maxItems && fields.length >= maxItems
              ? `Max ${maxItems} items reached`
              : placeholder
          }
          disabled={!!(maxItems && fields.length >= maxItems)}
          className="border-[0.67px] border-[#D0D5DD] bg-white rounded-[5px] flex-1 text-[12px] font-medium text-primary-text placeholder:text-[#98A2B3] placeholder:text-[12px] py-4 h-11 focus-visible:border-none focus-visible:ring-0"
        />
        <Button
          type="button"
          variant="outline"
          onClick={handleAdd}
          disabled={!!(maxItems && fields.length >= maxItems)}
          className="border border-regular-button text-regular-button font-medium"
        >
          Add
        </Button>
      </div>

      {rootError.length > 0 && <FieldError errors={rootError} />}
    </div>
  );
}
