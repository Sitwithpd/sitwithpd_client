"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetAllConsultationServices } from "@/lib/api/hooks/consultations/consultation-services.hooks";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Pill } from "@/components/ui/pill";
import CaretRight from "@/pd-icons/caret-right";
import { formatCurrency } from "@/lib/utils";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion-variants";

export function ConsultationServices() {
  const { data, isLoading } = useGetAllConsultationServices();

  if (isLoading) {
    return (
      <section className="py-20 bg-white" id="consultation-services">
        <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-12">
            <Skeleton className="h-6 w-32 rounded-full mb-4" />
            <Skeleton className="h-10 w-3/4 lg:w-1/2 mb-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-[20px] w-full overflow-hidden border border-slate-100 bg-[#A8D6751A] shadow-sm flex flex-col"
              >
                <Skeleton className="h-52 w-full" />
                <div className="p-6 flex flex-col flex-1">
                  <Skeleton className="h-8 w-12 mb-3" />
                  <Skeleton className="h-6 w-28 rounded-full mb-4" />
                  <Skeleton className="h-7 w-3/4 mb-3" />
                  <Skeleton className="h-12 w-full mb-6" />
                  <Skeleton className="h-10 w-full rounded-xl mt-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const services =
    data?.data?.filter((service) => service.calBookingUrl !== null) || [];

  return (
    <section
      className="py-20 bg-white overflow-hidden w-full "
      id="consultation-services"
    >
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <motion.span
            variants={fadeInUp}
            className="text-regular-button font-semibold text-sm tracking-[2.5px] uppercase block "
          >
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="heading-2 max-w-2xl text-[#131313]"
          >
            Choose a consultation package that fits your needs
          </motion.h2>
        </motion.div>

        {services.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl w-full border border-dashed border-slate-200">
            <p className="heading-2 mb-4 max-w-2xl text-center mx-auto text-[#606060]">
              No consultation services are available at the moment. Please check
              back later.
            </p>
          </div>
        ) : (
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={services.length > 1}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 1.2,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 32,
                },
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="w-full consultation-swiper pb-14!"
            >
              {services.map((service, index) => {
                const formattedNumber = (index + 1).toString().padStart(2, "0");

                const badgeText =
                  service.format?.name ||
                  service.tags?.[0]?.name ||
                  "CONSULTATION";

                const bullets =
                  service.whatsIncluded && service.whatsIncluded.length > 0
                    ? service.whatsIncluded
                    : service.audience && service.audience.length > 0
                      ? service.audience
                      : service.tags?.map((t) => t.name) || [];

                return (
                  <SwiperSlide key={service.id} className="h-auto! flex">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="flex flex-col flex-1 rounded-[20px] overflow-hidden shadow-sm border border-[#E8E8E8] transition-all duration-300 hover:shadow-md group"
                    >
                      <div className="relative w-full aspect-video bg-slate-100 overflow-hidden shrink-0">
                        <Image
                          src={
                            service.coverImageUrl || "/images/contact-image.png"
                          }
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex flex-col flex-1 p-6 lg:p-8 bg-[#A8D6751A] justify-between">
                        <div>
                          <div className="text-4xl lg:text-5xl font-extrabold text-[#60935D]/30 mb-3 tracking-tight select-none">
                            {formattedNumber}
                          </div>

                          <div className="mb-3">
                            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-[#1F4842] bg-[#60935D]/20 uppercase">
                              {badgeText}
                            </span>
                          </div>

                          <h3 className="text-xl lg:text-2xl font-bold text-[#131313] mb-3 leading-snug">
                            {service.title}
                          </h3>

                          <p className="text-[#475467] text-sm lg:text-base line-clamp-2 leading-relaxed mb-6">
                            {service.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#60935D]/15 mt-4">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs lg:text-sm text-[#606060]">
                              Duration: {service.duration} mins
                            </span>
                            <span className="text-base lg:text-lg font-bold text-[#1F4842]">
                              {formatCurrency(service.price, service.currency)}
                            </span>
                          </div>

                          <Link
                            href={`/consultation/${service.id}`}
                            className="w-full block"
                          >
                            <Button
                              variant="regular"
                              className="w-full rounded-[10px]! font-medium py-3 flex items-center justify-center gap-2 group/btn"
                            >
                              View more details
                              <CaretRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>

      {/* make pagination dots white */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #eee !important;
          opacity: 1 !important;
          width: 0.75rem !important;
          height: 0.75rem !important;
        }
        .swiper-pagination-bullet-active {
          background: #60935d !important;
          width: 2rem !important;
          border-radius: 1rem !important;
        }
      `}</style>
    </section>
  );
}
