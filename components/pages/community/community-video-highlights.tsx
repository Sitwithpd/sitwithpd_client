"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import {
  VideoHighlights,
  type VideoItem,
} from "@/components/shared/video-highlights";
import { useGetCommunities } from "@/lib/api/hooks/communities/communities.hooks";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion-variants";

export default function CommunityVideoHighlights() {
  const { data, isLoading } = useGetCommunities();
  const communities = data?.data ?? [];

  // Flatten all videoLinks across every community, tagging each with community info
  const videoItems: VideoItem[] = useMemo(() => {
    return communities.flatMap(
      (
        community: import("@/lib/api/services/communities/communities.services").Community,
      ) =>
        (community.videoLinks ?? []).map((url: string) => ({
          url,
          sourceName: community.title,
          sourceSubtitle: community.subtitle,
        })),
    );
  }, [communities]);

  // Don't render the section at all if there are no videos (once loaded)
  if (!isLoading && videoItems.length === 0) return null;

  return (
    <section className="w-full py-16 lg:py-20 bg-white overflow-hidden">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8"
        >
          <motion.div variants={fadeInUp}>
            <Pill text="Video Highlights" />
          </motion.div>
          <div className="flex items-end justify-between gap-4">
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-[#101828] max-w-lg"
            >
              See Our Communities in Action
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="hidden sm:flex items-center gap-1.5 text-[#60935D] text-sm font-medium shrink-0 pb-1"
            >
              <Play className="w-4 h-4 fill-[#60935D]" />
              Click any video to watch
            </motion.div>
          </div>
          <motion.p
            variants={fadeInUp}
            className="text-[#475467] text-base mt-2 max-w-xl"
          >
            Real moments from our vibrant communities — shared openly so you can
            see exactly what you'd be joining.
          </motion.p>
        </motion.div>

        {/* Horizontal video strip */}
        <VideoHighlights items={videoItems} isLoading={isLoading} />

        {/* Mobile hint */}
        <p className="flex sm:hidden items-center gap-1.5 text-[#60935D] text-xs font-medium mt-4">
          <Play className="w-3.5 h-3.5 fill-[#60935D]" />
          Tap any video to watch
        </p>
      </div>
    </section>
  );
}
