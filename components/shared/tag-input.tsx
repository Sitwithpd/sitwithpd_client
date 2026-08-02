"use client";

import React, { useMemo, useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useGetTags } from "@/lib/api/hooks/tags/tags.hooks";
import type { Tag, TagType } from "@/lib/api/services/tags/tags.services";
import { cn } from "@/lib/utils";

interface TagInputProps {
  value: string[];
  onChange: (next: string[]) => void;
  type?: TagType;
  placeholder?: string;
  max?: number;
  id?: string;
}

/**
 * Chip input over the shared tag vocabulary. Existing tags are suggested, but
 * typing a brand-new name is allowed — the API creates it on save.
 */
export function TagInput({
  value,
  onChange,
  type = "TOPIC",
  placeholder = "Type a tag and press Enter",
  max = 20,
  id,
}: TagInputProps) {
  const [draft, setDraft] = useState("");
  const { data } = useGetTags(type);

  const allTags: Tag[] = data?.data ?? [];

  const suggestions = useMemo(() => {
    const q = draft.trim().toLowerCase();
    const chosen = new Set(value.map((v) => v.toLowerCase()));
    return allTags
      .filter((t) => !chosen.has(t.name.toLowerCase()))
      .filter((t) => (q ? t.name.toLowerCase().includes(q) : true))
      .slice(0, 8);
  }, [allTags, draft, value]);

  const add = (name: string) => {
    const clean = name.trim();
    if (!clean) return;
    // Case-insensitive guard so the chip list can't show the same tag twice.
    if (value.some((v) => v.toLowerCase() === clean.toLowerCase())) {
      setDraft("");
      return;
    }
    if (value.length >= max) return;
    onChange([...value, clean]);
    setDraft("");
  };

  const remove = (name: string) => {
    onChange(value.filter((v) => v !== name));
  };

  return (
    <div className="space-y-2">
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-input bg-transparent dark:bg-input/30 text-sm text-primary-text"
            >
              {tag}
              <button
                type="button"
                onClick={() => remove(tag)}
                aria-label={`Remove ${tag}`}
                className="text-muted-foreground hover:text-primary-text"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      )}

      <Input
        id={id}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === ",") {
            // Enter would otherwise submit the surrounding form.
            e.preventDefault();
            add(draft);
          } else if (e.key === "Backspace" && !draft && value.length > 0) {
            remove(value[value.length - 1]);
          }
        }}
        onBlur={() => add(draft)}
        placeholder={value.length >= max ? `Limit of ${max} reached` : placeholder}
        disabled={value.length >= max}
        className="border-input h-11 focus-visible:ring-0"
      />

      {suggestions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => add(tag.name)}
              className={cn(
                "px-3 py-1 rounded-full border border-dashed border-input",
                "text-sm text-secondary-text hover:border-regular-button hover:text-regular-button transition-colors",
              )}
            >
              + {tag.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface SingleTagInputProps {
  value: string;
  onChange: (next: string) => void;
  type?: TagType;
  placeholder?: string;
  id?: string;
}

/** Single-value variant, used for a consultation's delivery format. */
export function SingleTagInput({
  value,
  onChange,
  type = "FORMAT",
  placeholder = "e.g. 1-on-1 video call",
  id,
}: SingleTagInputProps) {
  const { data } = useGetTags(type);
  const allTags: Tag[] = data?.data ?? [];

  const suggestions = allTags
    .filter((t) => t.name.toLowerCase() !== value.trim().toLowerCase())
    .slice(0, 8);

  return (
    <div className="space-y-2">
      <Input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border-input h-11 focus-visible:ring-0"
      />
      {suggestions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => onChange(tag.name)}
              className="px-3 py-1 rounded-full border border-dashed border-input text-sm text-secondary-text hover:border-regular-button hover:text-regular-button transition-colors"
            >
              {tag.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
