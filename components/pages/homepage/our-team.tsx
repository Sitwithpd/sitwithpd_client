"use client";

import { Pill } from "@/components/ui/pill";
import { motion } from "motion/react";
import Image from "next/image";
import { useGetPublishedTeam } from "@/lib/api/hooks/team/team.hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import CardSkeletons from "@/components/skeletons/card-skeletons";
import { TeamMember } from "@/lib/api/services/team/team.services";

export function OurTeam() {
  const { data: teamResponse, isLoading } = useGetPublishedTeam();
  const team: TeamMember[] = teamResponse?.data ?? [];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  } as const;

  if (isLoading) {
    return (
      <section className="container mx-auto pt-24 lg:py-24 flex flex-col items-center">
        <Pill text="Our Team" />
        <h2 className="heading-2 text-center mb-16 max-w-[900px]">
          A dedicated team, committed to your well-being, here to guide support
          and walk the journey with you.
        </h2>
        <CardSkeletons />
      </section>
    );
  }

  if (team.length === 0) return null;

  return (
    <section className="container mx-auto pt-24 lg:py-24 flex flex-col items-center">
      <Pill text="Our Team" />

      <h2 className="heading-2 text-center mb-16 max-w-[900px]">
        A dedicated team, committed to your well-being, here to guide support
        and walk the journey with you.
      </h2>

      <motion.div
        className="w-full max-w-7xl px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Swiper
          modules={[Autoplay, Pagination, FreeMode]}
          spaceBetween={24}
          slidesPerView={1.2}
          freeMode={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2, freeMode: false },
            1024: { slidesPerView: 3, freeMode: false },
            1280: { slidesPerView: 4, freeMode: false },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="team-swiper pb-16"
        >
          {team.map((member) => (
            <SwiperSlide key={member.id} className="h-auto">
              <motion.div
                variants={cardVariants}
                className="flex flex-col h-full"
              >
                <div className="w-full aspect-4/5 mb-6 relative overflow-hidden bg-transparent rounded-lg">
                  <Image
                    src={member.photoUrl || "/images/placeholder.png"}
                    alt={member.name}
                    fill
                    className="object-cover object-top sm:object-center"
                  />
                </div>
                <div className="space-y-1 px-2">
                  <p className="text-base font-semibold text-[#181D27]">
                    {member.name}
                  </p>
                  <p className="text-[#649351] text-lg lg:text-base xl:text-lg font-normal mb-2">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style jsx global>{`
        .team-swiper .swiper-pagination-bullet-active {
          background-color: #649351;
        }
      `}</style>
    </section>
  );
}
