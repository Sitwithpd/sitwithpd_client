"use client";

import { Pill } from "@/components/ui/pill";
import { useGetAllTestimonials } from "@/lib/api/hooks/testimonials/testimonials.hooks";
import CardSkeletons from "@/components/skeletons/card-skeletons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";
import { motion } from "motion/react";

export function Testimonials() {
  const { data, isLoading, error } = useGetAllTestimonials();

  const testimonials = data?.data ?? [];

  if (isLoading) return <CardSkeletons />;
  if (error)
    return (
      <p className="text-center min-h-[40vh] flex items-center justify-center text-xl">
        Error fetching testimonials
      </p>
    );
  if (data?.data?.length === 0)
    return (
      <p className="text-center min-h-[40vh] flex items-center justify-center text-xl">
        No testimonials yet
      </p>
    );

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="container mx-auto px-4 md:px-8 py-24 flex flex-col items-center"
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-2">
        <Pill text="Testimonial" />
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className="heading-2 text-center mb-5 lg:mb-16 max-w-225"
      >
        Real experiences from people we've supported, stories of growth, healing
        and meaningful changes.
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        {testimonials.slice(0, 6).map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              delay: i * 0.15,
              duration: 0.55,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="bg-white rounded-[16px] p-5 lg:p-8 border-[0.67px] border-[#EEF2F6] hover:border-brand-green/20 shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] min-h-[280px]  group flex flex-col"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="flex flex-col flex-1">
              <p className="text-[#697586] text-sm md:text-base leading-relaxed mb-6 line-clamp-5 flex-1 group-hover:text-primary-text transition-colors duration-300">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.avatarUrl ?? "/images/testimonials/ada.png"}
                  alt={t.name}
                  className="w-[48px] h-[48px] rounded-full object-cover bg-gray-100 shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-[#202939] text-base group-hover:text-brand-green transition-colors duration-300">
                    {t.name}
                  </span>
                  <span className="text-[#697586] text-sm">{t.role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/testimonials">
          <Button variant="regular" className="px-8 py-3">
            Read More Testimonials
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}
