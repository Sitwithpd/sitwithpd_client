"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  fadeInRight,
  staggerContainerSlow,
  staggerContainerDelayed,
} from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { handleBookingClick } from "@/lib/utils";

const benefits = [
  "Gain clarity on complex decisions",
  "Identify practical solutions to current challenges",
  "Develop realistic action plans",
  "Strengthen leadership and decision-making",
  "Improve personal and professional performance",
  "Navigate transitions with confidence",
  "Build resilience during difficult seasons",
  "Unlock new opportunities for growth and impact",
];

export function WhyBookConsultation() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="w-11/12 mx-auto max-w-7xl flex flex-col lg:flex-row gap-5 lg:gap-20 items-start">
        {/* Left column */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex flex-col gap-3 lg:max-w-[420px]"
        >
          <motion.span
            variants={fadeInUp}
            className="text-regular-button font-semibold text-sm tracking-[2.5px] uppercase block "
          >
            Why Book a Consultation?
          </motion.span>

          <motion.h2 variants={fadeInUp} className="heading-2">
            Every challenge carries an opportunity for growth.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base text-[#606060] leading-relaxed lg:mb-5"
          >
            A single conversation can provide the perspective that changes your
            direction. Our consultations are a confidential, thoughtful, and
            solution-focused space to explore challenges, uncover opportunities,
            and develop practical strategies.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button
              onClick={() =>
                document
                  .getElementById("consultation-services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="regular"
              className="lg:flex hidden  items-center gap-2"
            >
              Book Your Consultation Today
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right column — benefit list */}
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex flex-col divide-y divide-[#EEF2F6] overflow-hidden mb-6 lg:mb-0"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={fadeInRight}
              className="flex items-start gap-2 py-4 first:pt-0 last:pb-0 group"
            >
              <ChevronRight className="w-4 h-4 mt-0.5 text-regular-button shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              <span className="text-sm text-[#344054] leading-relaxed">
                {benefit}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Button
            onClick={() =>
              document
                .getElementById("consultation-services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="regular"
            className="flex lg:hidden items-center gap-2"
          >
            Book Your Consultation Today
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
