"use client";

import React from "react";
import { ArrowDown, ArrowUp, Plus, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const MAX_VIDEO_LINKS = 12;

/**
 * Mirrors the server-side parser in src/lib/youtubeLinks.ts so the admin gets
 * inline feedback. The server still validates — this is a convenience, not the
 * gate.
 */
export function extractYouTubeId(raw: string): string | null {
  let url: URL;
  try {
    url = new URL(raw.trim());
  } catch {
    return null;
  }
  const host = url.hostname.toLowerCase();
  const isYouTube =
    host.endsWith("youtube.com") ||
    host.endsWith("youtu.be") ||
    host.endsWith("youtube-nocookie.com");
  if (!isYouTube) return null;

  const ID = /^[A-Za-z0-9_-]{11}$/;

  if (host.endsWith("youtu.be")) {
    const id = url.pathname.split("/").filter(Boolean)[0];
    return id && ID.test(id) ? id : null;
  }

  const v = url.searchParams.get("v");
  if (v && ID.test(v)) return v;

  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length >= 2) {
    const [prefix, candidate] = segments;
    if (["embed", "shorts", "live", "v"].includes(prefix.toLowerCase())) {
      return ID.test(candidate) ? candidate : null;
    }
  }
  return null;
}

interface VideoLinksInputProps {
  value: string[];
  onChange: (next: string[]) => void;
  max?: number;
}

/**
 * Ordered list of YouTube links. Position in the list IS the display order, so
 * the move up/down controls are the reorder mechanism — the whole array is sent
 * on save and replaces the stored one.
 */
export function VideoLinksInput({
  value,
  onChange,
  max = MAX_VIDEO_LINKS,
}: VideoLinksInputProps) {
  const rows = value.length > 0 ? value : [""];

  const update = (index: number, next: string) => {
    const copy = [...rows];
    copy[index] = next;
    onChange(copy);
  };

  const remove = (index: number) => {
    onChange(rows.filter((_, i) => i !== index));
  };

  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= rows.length) return;
    const copy = [...rows];
    [copy[index], copy[target]] = [copy[target], copy[index]];
    onChange(copy);
  };

  return (
    <div className="space-y-3">
      {rows.map((row, index) => {
        const trimmed = row.trim();
        const videoId = trimmed ? extractYouTubeId(trimmed) : null;
        const invalid = trimmed.length > 0 && !videoId;

        return (
          <div key={index} className="space-y-1">
            <div className="flex items-start gap-2">
              <span className="mt-3 w-5 shrink-0 text-xs text-muted-foreground tabular-nums">
                {index + 1}.
              </span>

              <div className="flex-1">
                <Input
                  value={row}
                  onChange={(e) => update(index, e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  aria-invalid={invalid}
                  className="border-input h-11 focus-visible:ring-0"
                />
              </div>

              <div className="flex items-center gap-1 mt-1.5">
                <button
                  type="button"
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  aria-label="Move up"
                  className="text-muted-foreground hover:text-primary-text disabled:opacity-30 p-1"
                >
                  <ArrowUp size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => move(index, 1)}
                  disabled={index === rows.length - 1}
                  aria-label="Move down"
                  className="text-muted-foreground hover:text-primary-text disabled:opacity-30 p-1"
                >
                  <ArrowDown size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  disabled={rows.length === 1 && !rows[0]}
                  aria-label="Remove video"
                  className="text-muted-foreground hover:text-red-500 disabled:opacity-30 p-1"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Echo the parsed id so the admin can confirm the paste landed. */}
            {videoId && (
              <p className="pl-7 text-xs text-muted-foreground inline-flex items-center gap-1.5">
                <Youtube size={13} className="text-red-500" />
                Video ID: <span className="font-mono">{videoId}</span>
              </p>
            )}
            {invalid && (
              <p className="pl-7 text-xs text-red-500">
                Not a recognisable YouTube video link.
              </p>
            )}
          </div>
        );
      })}

      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={rows.length >= max}
        onClick={() => onChange([...rows, ""])}
        className="text-sm"
      >
        <Plus size={16} className="mr-1" />
        {rows.length >= max ? `Limit of ${max} reached` : "Add video"}
      </Button>
    </div>
  );
}

/** Drops blanks before submit — the editor keeps an empty row for usability. */
export function cleanVideoLinks(value: string[] | undefined): string[] {
  return (value ?? []).map((v) => v.trim()).filter(Boolean);
}
