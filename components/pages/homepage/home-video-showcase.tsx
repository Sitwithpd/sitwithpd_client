"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import {
  VideoHighlights,
  type VideoItem,
} from "@/components/shared/video-highlights";
import { useGetCommunities } from "@/lib/api/hooks/communities/communities.hooks";
import { useGetPrograms } from "@/lib/api/hooks/programs/programs.hooks";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion-variants";

export function HomeVideoShowcase() {
  const { data: communitiesData, isLoading: communitiesLoading } =
    useGetCommunities();
  const { data: programsData, isLoading: programsLoading } = useGetPrograms();

  const communities = communitiesData?.data ?? [];
  const programs = programsData?.data ?? [];

  const communityVideos: VideoItem[] = useMemo(
    () =>
      communities.flatMap((c) =>
        (c.videoLinks ?? []).map((url: string) => ({
          url,
          sourceName: c.title,
          sourceSubtitle: c.subtitle,
        })),
      ),
    [communities],
  );

  const programVideos: VideoItem[] = useMemo(
    () =>
      programs.flatMap((p) =>
        (p.videoLinks ?? []).map((url: string) => ({
          url,
          sourceName: p.title,
          sourceSubtitle: p.facilitatorName
            ? `Facilitated by ${p.facilitatorName}`
            : undefined,
        })),
      ),
    [programs],
  );

  const hasCommunityVideos = communitiesLoading || communityVideos.length > 0;
  const hasProgramVideos = programsLoading || programVideos.length > 0;

  // Don't render section at all if there's nothing to show
  if (!hasCommunityVideos && !hasProgramVideos) return null;

  return (
    <section className="w-full py-16 lg:py-24 overflow-hidden bg-[#F9FAFB]">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col gap-14">
        {/* Programme Videos */}
        {hasProgramVideos && (
          <div>
            <motion.div
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-6"
            >
              <motion.div variants={fadeInUp}>
                <Pill text="Programme Videos" />
              </motion.div>
              <div className="flex items-end justify-between gap-4">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl lg:text-3xl font-bold text-[#101828] leading-snug"
                >
                  Inside Our Programmes
                </motion.h2>
                <motion.div variants={fadeInUp}>
                  <Link
                    href="/programs/programs-listing"
                    className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#60935D] hover:underline shrink-0 pb-0.5"
                  >
                    View all programmes
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
              <motion.p
                variants={fadeInUp}
                className="text-[#475467] text-sm mt-1.5 max-w-lg"
              >
                Get a real look at what our guided programmes involve before you
                commit.
              </motion.p>
            </motion.div>

            <VideoHighlights
              items={programVideos}
              isLoading={programsLoading}
            />

            <Link
              href="/programs/programs-listing"
              className="flex sm:hidden items-center gap-1.5 text-sm font-semibold text-[#60935D] mt-3"
            >
              View all programmes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Divider (only if both sections show) */}
        {hasCommunityVideos && hasProgramVideos && (
          <hr className="border-[#EAECF0]" />
        )}

        {/* Community Videos */}
        {hasCommunityVideos && (
          <div>
            <motion.div
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-6"
            >
              <motion.div variants={fadeInUp}>
                <Pill text="Community Highlights" />
              </motion.div>
              <div className="flex items-end justify-between gap-4">
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl lg:text-3xl font-bold text-[#101828] leading-snug"
                >
                  Our Community in Real Life
                </motion.h2>
                <motion.div variants={fadeInUp}>
                  <Link
                    href="/community"
                    className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#60935D] hover:underline shrink-0 pb-0.5"
                  >
                    Explore communities
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
              <motion.p
                variants={fadeInUp}
                className="text-[#475467] text-sm mt-1.5 max-w-lg"
              >
                Real moments from our WhatsApp communities — see the kind of
                space you'd be stepping into.
              </motion.p>
            </motion.div>

            <VideoHighlights
              items={communityVideos}
              isLoading={communitiesLoading}
            />

            <Link
              href="/community"
              className="flex sm:hidden items-center gap-1.5 text-sm font-semibold text-[#60935D] mt-3"
            >
              Explore communities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Click hint on mobile */}
        <p className="flex items-center gap-1.5 text-[#60935D] text-xs font-medium -mt-8 sm:hidden">
          <Play className="w-3.5 h-3.5 fill-[#60935D]" />
          Tap any video to watch
        </p>
      </div>
    </section>
  );
}
