"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

export interface VideoItem {
  url: string;
  /** Label shown below the thumbnail (e.g. community or program name) */
  sourceName: string;
  /** Optional: subtitle / tag line */
  sourceSubtitle?: string;
}

// ── helpers ───────────────────────────────────────────────────────────────────

/**
 * Extracts a YouTube video ID from any supported URL format:
 *   https://www.youtube.com/watch?v=ID
 *   https://youtu.be/ID
 *   https://www.youtube.com/embed/ID
 * Returns null if no ID found.
 */
export function extractYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    // youtu.be/ID
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1).split("?")[0] || null;
    }
    // youtube.com/watch?v=ID
    const v = parsed.searchParams.get("v");
    if (v) return v;
    // youtube.com/embed/ID
    const embedMatch = parsed.pathname.match(/\/embed\/([^/?]+)/);
    if (embedMatch) return embedMatch[1];
  } catch {
    // url may be an incomplete string — ignore
  }
  return null;
}

export function youtubeThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// ── Thumbnail card ────────────────────────────────────────────────────────────

function VideoThumb({
  item,
  index,
  onClick,
}: {
  item: VideoItem;
  index: number;
  onClick: (index: number) => void;
}) {
  const videoId = extractYouTubeId(item.url);
  if (!videoId) return null;

  return (
    <motion.button
      onClick={() => onClick(index)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.07,
        duration: 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
      className="relative group flex-none w-60 sm:w-72 rounded-[16px] overflow-hidden shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#60935D]"
    >
      {/* Thumbnail image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={youtubeThumbnail(videoId)}
        alt={`${item.sourceName} — video ${index + 1}`}
        className="w-full aspect-video object-cover"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/35 transition-all duration-200">
          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
        </span>
      </div>

      {/* Source label */}
      <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
        <p className="text-white font-semibold text-sm leading-snug line-clamp-1">
          {item.sourceName}
        </p>
        {item.sourceSubtitle && (
          <p className="text-white/70 text-[11px] leading-snug mt-0.5 line-clamp-1">
            {item.sourceSubtitle}
          </p>
        )}
      </div>
    </motion.button>
  );
}

// ── Lightbox modal ─────────────────────────────────────────────────────────────

function VideoLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: {
  items: VideoItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const item = items[activeIndex];
  const videoId = item ? extractYouTubeId(item.url) : null;
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < items.length - 1;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(activeIndex - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(activeIndex + 1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, hasPrev, hasNext, activeIndex, onNavigate]);

  if (!videoId) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-9999 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          key={`lightbox-${activeIndex}`}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center hover:bg-white/25 transition-colors"
            aria-label="Close video"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Source info */}
          <div className="mb-3 flex items-center gap-2">
            <span className="text-white font-semibold text-sm">
              {item.sourceName}
            </span>
            {item.sourceSubtitle && (
              <span className="text-white/50 text-xs">
                · {item.sourceSubtitle}
              </span>
            )}
            <span className="ml-auto text-white/40 text-xs">
              {activeIndex + 1} / {items.length}
            </span>
          </div>

          {/* Iframe */}
          <div className="relative w-full aspect-video rounded-[16px] overflow-hidden bg-black shadow-2xl">
            <iframe
              key={videoId}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              title={`${item.sourceName} video`}
            />
          </div>

          {/* Prev / Next controls */}
          {items.length > 1 && (
            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                onClick={() => hasPrev && onNavigate(activeIndex - 1)}
                disabled={!hasPrev}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-medium disabled:opacity-30 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {/* Dot indicators */}
              <div className="flex gap-1.5">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => onNavigate(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeIndex ? "bg-white w-4" : "bg-white/35"}`}
                    aria-label={`Go to video ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => hasNext && onNavigate(activeIndex + 1)}
                disabled={!hasNext}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-medium disabled:opacity-30 hover:bg-white/20 transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Public API ────────────────────────────────────────────────────────────────

interface VideoHighlightsProps {
  items: VideoItem[];
  /** Show skeleton placeholders while data loads */
  isLoading?: boolean;
  /** called when no items found (allows parent to hide section entirely) */
  emptySlot?: React.ReactNode;
}

export function VideoHighlights({
  items,
  isLoading,
  emptySlot,
}: VideoHighlightsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleOpen = useCallback((index: number) => setActiveIndex(index), []);
  const handleClose = useCallback(() => setActiveIndex(null), []);
  const handleNavigate = useCallback(
    (index: number) => setActiveIndex(index),
    [],
  );

  // Filter to only items that have a valid video ID
  const validItems = items.filter((item) => extractYouTubeId(item.url));

  if (isLoading) {
    return (
      <div className="flex gap-4 overflow-x-hidden">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex-none w-60 sm:w-72 aspect-video rounded-[16px] bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (validItems.length === 0) {
    return emptySlot ? <>{emptySlot}</> : null;
  }

  return (
    <>
      {/* Scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {validItems.map((item, i) => (
          <div key={`${item.url}-${i}`} className="snap-start">
            <VideoThumb item={item} index={i} onClick={handleOpen} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <VideoLightbox
          items={validItems}
          activeIndex={activeIndex}
          onClose={handleClose}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
}
