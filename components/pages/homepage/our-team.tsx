"use client";

import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  fadeInUp,
  fadeInUpSlower,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { useState } from "react";
import {
  useGetPublishedTeam,
  useGetTeamMemberById,
} from "@/lib/api/hooks/team/team.hooks";
import { TeamMember } from "@/lib/api/services/team/team.services";
import { Skeleton } from "@/components/ui/skeleton";

// ─── Modal ─────────────────────────────────────────────────────────────────────
// Fetches member detail data on demand when the modal is open.

interface TeamMemberModalProps {
  members: TeamMember[];
  selectedIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function TeamMemberModal({
  members,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: TeamMemberModalProps) {
  const selectedMember = members[selectedIndex];

  const { data: detailRes, isLoading: detailLoading } = useGetTeamMemberById(
    selectedMember?.id ?? "",
  );

  const detail = detailRes?.data;

  // bio from API can be a string, array, or null — normalise to string[]
  const bioLines: string[] = (() => {
    if (!detail?.bio) return [];
    if (Array.isArray(detail.bio)) return detail.bio as string[];
    if (typeof detail.bio === "string")
      return (detail.bio as string)
        .split(/\n+/)
        .map((s: string) => s.trim())
        .filter(Boolean);
    return [];
  })();

  return (
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-999 flex items-center overflow-hidden justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        key="modal-card"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-[960px] max-h-[90vh] overflow-y-auto flex flex-col sm:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left — Photo */}
        <div className="w-full sm:w-[45%] shrink-0 bg-[#EFF5EA] rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none flex items-stretch min-h-[280px] sm:min-h-[500px]">
          <div className="relative aspect-square lg:aspect-auto w-full h-full min-h-[280px]">
            <Image
              src={selectedMember.photoUrl || "/images/sam-hus.png"}
              alt={selectedMember.name}
              fill
              className="object-cover object-top rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
            />
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex flex-col flex-1 p-8 sm:p-10">
          {/* Close */}
          <button
            onClick={onClose}
            className="self-end text-gray-400 hover:text-gray-600 transition-colors mb-4"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Pill */}
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#649351] border border-[#649351] rounded-full px-3 py-1 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#649351]" />
            Our Team
          </span>

          {/* Name & Role */}
          <h2 className="text-xl sm:text-2xl font-bold text-[#181D27] leading-tight mb-1">
            {selectedMember.name}
          </h2>
          <p className="text-[#649351] text-base font-medium mb-5">
            {selectedMember.role}
          </p>

          {/* Bio content */}
          <div className="flex flex-col gap-3 text-[#444444] text-base leading-relaxed overflow-y-auto max-h-[300px] pr-1">
            {detailLoading ? (
              // Skeleton while fetching detail
              <div className="flex flex-col gap-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : bioLines.length > 0 ? (
              bioLines.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p className="text-[#606060] italic text-sm">Bio coming soon.</p>
            )}
          </div>

          {/* Divider + Nav */}
          <div className="mt-auto pt-6 border-t border-[#EFEFEF] flex items-center justify-between">
            <button
              onClick={onPrev}
              className="flex items-center gap-1.5 text-sm font-medium text-[#444444] hover:text-[#649351] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-sm text-[#697586]">
              {selectedIndex + 1} / {members.length}
            </span>
            <button
              onClick={onNext}
              className="flex items-center gap-1.5 text-sm font-medium text-[#649351] hover:text-[#3d6b2e] transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────

export function OurTeam() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { data, isLoading } = useGetPublishedTeam();
  const members: TeamMember[] = data?.data ?? [];

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % members.length : null,
    );
  const goPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + members.length) % members.length : null,
    );

  return (
    <section className="container mx-auto pt-10 lg:py-24 w-full overflow-hidden flex flex-col items-center">
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-16"
      >
        <motion.div
          variants={fadeInUp}
          className="flex justify-center items-center gap-2"
        >
          <Pill text="Our Team" />
        </motion.div>

        <motion.h2
          variants={fadeInUpSlower}
          className="heading-2 text-center  max-w-225"
        >
          A dedicated team, committed to your well-being, here to guide support
          and walk the journey with you.
        </motion.h2>
      </motion.div>

      {/* Grid */}
      {isLoading ? (
        // Skeleton grid while loading
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-14 w-full max-w-7xl">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-3rem)]"
            >
              <Skeleton className="w-full lg:w-[384px] aspect-square rounded-md mb-5" />
              <Skeleton className="h-4 w-40 mb-2" />
              <Skeleton className="h-4 w-28 mb-3" />
              <Skeleton className="h-8 w-28 rounded-[10px]" />
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap justify-center gap-x-16 gap-y-14 w-full max-w-7xl"
        >
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: index * 0.15,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col items-center text-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-3rem)]"
            >
              {/* Photo */}
              <div className="w-full lg:w-[384px] aspect-square relative overflow-hidden rounded-md mb-5">
                <Image
                  src={member.photoUrl || "/images/sam-hus.png"}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Name & Role */}
              <p className="text-base font-semibold text-[#181D27]">
                {member.name}
              </p>
              <p className="text-[#649351] text-base font-normal mt-1 mb-3">
                {member.role}
              </p>

              {/* Know more button */}
              <button
                onClick={() => openModal(index)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-regular-button border border-regular-button rounded-[10px] px-4 py-1.5 hover:border-[#649351] hover:text-[#649351] transition-colors"
              >
                Know more <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && members.length > 0 && (
          <TeamMemberModal
            members={members}
            selectedIndex={selectedIndex}
            onClose={closeModal}
            onNext={goNext}
            onPrev={goPrev}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
