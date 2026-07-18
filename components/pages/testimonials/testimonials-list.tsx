"use client";

import { useGetAllTestimonials } from "@/lib/api/hooks/testimonials/testimonials.hooks";
import CardSkeletons from "@/components/skeletons/card-skeletons";
import { Pill } from "@/components/ui/pill";
import { motion } from "motion/react";
import { useState } from "react";
import { Testimonial } from "@/lib/api/services/testimonials/testimonials.services";

export function TestimonialsList() {
  const { data, isLoading, error } = useGetAllTestimonials();
  const testimonials = data?.data ?? [];

  if (isLoading) {
    return (
      <section
        id="testimonials-list"
        className="py-20 bg-slate-50 min-h-[50vh]"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <CardSkeletons />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="testimonials-list"
        className="py-20 bg-slate-50 min-h-[50vh] flex items-center justify-center"
      >
        <p className="text-xl text-red-500">
          Error loading testimonies. Please try again later.
        </p>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section
        id="testimonials-list"
        className="py-20 bg-slate-50 min-h-[50vh] flex items-center justify-center"
      >
        <p className="text-xl text-[#697586]">
          No stories have been shared yet.
        </p>
      </section>
    );
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  } as const;

  return (
    <section id="testimonials-list" className="py-20 bg-[#F9FBFA] w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <Pill text="Client Stories" className="mb-4" />
          <h2 className="heading-2 max-w-2xl">In Their Own Words</h2>
          <p className="paragraph mt-2 max-w-2xl text-[#4A5565]">
            Every story represents a unique path towards presence, clarity, and
            growth. We are honored to be a part of their journey.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <motion.div
      variants={cardVariants}
      layout
      id={`testimonial-${testimonial.id}`}
      className="flex flex-col bg-white rounded-2xl p-4  border border-[#EEF2F6] hover:border-brand-green/20  shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]  transition-all duration-300 relative overflow-hidden h-full min-h-[380px]"
    >
      <div className="flex flex-col items-center text-center mb-6 w-full">
        <img
          src={testimonial.avatarUrl ?? "/images/testimonials/ada.png"}
          alt={testimonial.name}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover bg-gray-50 border-4 border-[#EBFDF3] shadow-md mb-4 shrink-0 transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col items-center text-center">
          <h3 className="font-bold text-[#202939] text-base sm:text-lg">
            {testimonial.name}
          </h3>
          <span className="text-[#697586] text-xs sm:text-sm font-medium mb-2.5">
            {testimonial.role}
          </span>
          {testimonial.camp?.title && (
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-100">
              {testimonial.camp.title}
            </span>
          )}
        </div>
      </div>

      <div className="relative flex-1">
        <span className="absolute -top-4 -left-2 text-6xl text-[#EBFDF3] font-serif select-none pointer-events-none">
          “
        </span>
        <p
          className={`relative z-10 text-[#4A5565] text-base leading-relaxed ${isExpanded ? "" : "line-clamp-6"}`}
        >
          {testimonial.quote}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#F3F4F6] flex justify-end">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          id={`btn-toggle-${testimonial.id}`}
          className="text-brand-green font-semibold text-sm hover:text-brand-green/80 transition-colors flex items-center gap-1 cursor-pointer"
        >
          {isExpanded ? (
            <>
              See Less <span className="text-xs">▲</span>
            </>
          ) : (
            <>
              Read More <span className="text-xs">▼</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
