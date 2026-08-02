"use client";

import React from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BulletListInputProps {
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  addLabel?: string;
  max?: number;
}

/**
 * Editor for full-sentence bullet fields — "Who's this for", "What's included",
 * "What you'll gain". Distinct from TagInput: these are per-item prose, not a
 * shared vocabulary, so there is no autocomplete and no dedupe.
 */
export function BulletListInput({
  value,
  onChange,
  placeholder = "Write a full sentence…",
  addLabel = "Add item",
  max = 20,
}: BulletListInputProps) {
  const rows = value.length > 0 ? value : [""];

  const update = (index: number, next: string) => {
    const copy = [...rows];
    copy[index] = next;
    onChange(copy);
  };

  const remove = (index: number) => {
    const copy = rows.filter((_, i) => i !== index);
    onChange(copy);
  };

  return (
    <div className="space-y-3">
      {rows.map((row, index) => (
        <div key={index} className="flex items-start gap-2">
          <textarea
            value={row}
            onChange={(e) => update(index, e.target.value)}
            placeholder={placeholder}
            rows={2}
            /* Mirrors the ui/Input surface so it themes with the rest of the form. */
            className="flex-1 border border-input bg-transparent dark:bg-input/30 rounded-[5px] text-sm text-primary-text placeholder:text-muted-foreground py-2.5 px-3 outline-none resize-none focus-visible:ring-0"
          />
          <button
            type="button"
            onClick={() => remove(index)}
            aria-label="Remove item"
            disabled={rows.length === 1 && !rows[0]}
            className="mt-2 text-muted-foreground hover:text-red-500 disabled:opacity-30 disabled:hover:text-muted-foreground"
          >
            <X size={18} />
          </button>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={rows.length >= max}
        onClick={() => onChange([...rows, ""])}
        className="text-sm"
      >
        <Plus size={16} className="mr-1" />
        {rows.length >= max ? `Limit of ${max} reached` : addLabel}
      </Button>
    </div>
  );
}

/** Drops blanks before submit — the editor keeps an empty row for usability. */
export function cleanBulletList(value: string[] | undefined): string[] {
  return (value ?? []).map((v) => v.trim()).filter(Boolean);
}
