export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sitwithpd.com";

export const DEFAULT_OG_IMAGE = "/images/og-image.png";

/**
 * Collapses rich-text/markdown descriptions into a single plain-text line and
 * trims it at a word boundary so search engines and social cards do not cut a
 * sentence mid-word.
 */
export function toMetaDescription(
  input: string | null | undefined,
  fallback: string,
  maxLength = 160,
): string {
  const text = (input ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/[#*_>`~\[\]]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return fallback;
  if (text.length <= maxLength) return text;

  const clipped = text.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${(lastSpace > 80 ? clipped.slice(0, lastSpace) : clipped).trimEnd()}…`;
}

/** Formats a camp's date span for titles and descriptions. */
export function formatDateRange(
  start: string | null | undefined,
  end: string | null | undefined,
): string {
  if (!start) return "";
  const from = new Date(start);
  if (Number.isNaN(from.getTime())) return "";

  const to = end ? new Date(end) : null;
  const opts: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };

  if (!to || Number.isNaN(to.getTime()) || to.getTime() === from.getTime()) {
    return from.toLocaleDateString("en-GB", opts);
  }

  const sameMonth =
    from.getUTCFullYear() === to.getUTCFullYear() &&
    from.getUTCMonth() === to.getUTCMonth();

  const fromLabel = sameMonth
    ? from.toLocaleDateString("en-GB", { day: "numeric", timeZone: "UTC" })
    : from.toLocaleDateString("en-GB", opts);

  return `${fromLabel}–${to.toLocaleDateString("en-GB", opts)}`;
}
