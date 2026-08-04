"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { useGetAllTestimonials } from "@/lib/api/hooks/testimonials/testimonials.hooks";
import CardSkeletons from "@/components/skeletons/card-skeletons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";

export function ConsultationTestimonials() {
  const { data, isLoading, error } = useGetAllTestimonials();
  const testimonials = data?.data ?? [];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="w-11/12 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-8"
        >
          <motion.span
            variants={fadeInUp}
            className="text-regular-button font-semibold text-sm tracking-[2.5px] uppercase block mb-3"
          >
            What People Say
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="heading-2 font-semibold"
          >
            Real conversations. Meaningful outcomes.
          </motion.h2>
        </motion.div>

        {/* Cards */}
        {isLoading ? (
          <CardSkeletons />
        ) : error ? (
          <p className="text-center text-brand-red py-10">
            Unable to load testimonials right now.
          </p>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-[#606060] py-10">
            No testimonials yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
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
        )}

        {
          testimonials.length > 3 && (
            <div className="flex justify-center mt-12">
              <Link
                href="/testimonials"
              >
                <Button variant="regular">
                  View All Testimonials <CaretRight />
                </Button>
              </Link>
            </div>
          )
        }
      </div>
    </section>
  );
}
