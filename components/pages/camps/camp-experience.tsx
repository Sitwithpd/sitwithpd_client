"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion-variants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useGetCamps } from "@/lib/api/hooks/camps/camps.hooks";
import { Camp } from "@/types/camps.types";
import { CampExperienceSkeleton } from "@/components/skeletons/camp-card-skeleton";

function getCampDate(startDate: string, endDate: string) {
  return {
    startDate: new Date(startDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    endDate: new Date(endDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  }
}

export function CampExperience() {
  const { data: campsData, isLoading, isError } = useGetCamps();

  const camps =
    campsData?.data?.filter(
      (camp) =>
        camp?.tiers && camp?.tiers?.length > 0 && camp.status === "UPCOMING",
    ) ||
    campsData?.data ||
    [];

  return (
    <section id="camp-services" className="w-full bg-[#0F2318] py-16 lg:py-24">
      <div className="w-11/12 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-10 max-w-2xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#A8D675] bg-[#1F4842] rounded-full px-2.5 py-1 font-semibold text-sm tracking-[1.5px] uppercase"
          >
            Choose Your Experience
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="heading-2 text-white font-bold mt-5 mb-4"
          >
            Three camps. One mission.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#FFFFFF80]">
            Each camp is crafted around a different season of life. Find the one
            that speaks to where you are right now.
          </motion.p>
        </motion.div>

        {/* Cards grid / Skeleton / Error handling */}
        {isLoading ? (
          <CampExperienceSkeleton />
        ) : isError ? (
          <div className="text-center py-16">
            <p className="text-[#FFFFFF80] text-lg">
              Failed to load camps. Please try again later.
            </p>
          </div>
        ) : camps.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#FFFFFF80] text-lg">
              No upcoming camps available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {camps.map((camp, i: number) => {
              const dates = getCampDate(camp.startDate, camp.endDate);

              return (
                <motion.div
                  key={camp.id || i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.55,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex flex-col rounded-[16px] overflow-hidden bg-[#1A3D36]"
                >
                  {/* Card image */}
                  <div className="relative w-full aspect-video shrink-0">
                    <Image
                      src={camp.thumbnail || "/images/therapeutic-camps.webp"}
                      alt={camp.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-7 gap-3">
                    {/* Category badge (dummy data until API updated) */}
                  { camp.category &&  <span className="inline-flex w-fit items-center rounded-full bg-[#A8D67520] text-[#A8D675] text-xs font-semibold tracking-[1px] uppercase px-2.5 py-1">
                      {camp.category}
                    </span>}

                    {/* Title */}
                    <h3 className="text-white font-bold text-xl lg:text-2xl leading-tight">
                      {camp.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#FFFFFFB2] text-sm lg:text-base leading-relaxed flex-1 line-clamp-4">
                      {camp.description}
                    </p>

                    {/* Bullet points: Days first, Location second */}
                    <ul className="space-y-1.5 mt-1">
                      <li className="flex items-center gap-2 text-[#FFFFFFB2] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A8D675] shrink-0" />
                        <span>From {dates.startDate}{" - "}{dates.endDate}</span>
                      </li>
                      <li className="flex items-center gap-2 text-[#FFFFFFB2] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A8D675] shrink-0" />
                        <span>{camp.location}</span>
                      </li>
                    </ul>

                    {/* CTA Button */}
                    <Link href={`/camps/${camp.id}`} className="mt-4">
                      <Button variant="regular" className="w-full">
                        Apply for This Camp
                        <span>→</span>
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
