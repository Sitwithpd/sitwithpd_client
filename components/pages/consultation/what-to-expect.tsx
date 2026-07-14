"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

interface ExpectStep {
  number: string;
  phase: string;
  title: string;
  description: string;
}

const steps: ExpectStep[] = [
  {
    number: "01",
    phase: "Before Your Session",
    title: "We prepare together",
    description:
      "You'll complete a brief consultation form to help us understand your goals and priorities so we can make the most of every minute.",
  },
  {
    number: "02",
    phase: "During Your Session",
    title: "We explore and plan",
    description:
      "We'll explore your current situation, identify key opportunities and challenges, and develop practical strategies tailored to your needs.",
  },
  {
    number: "03",
    phase: "After Your Session",
    title: "You move forward",
    description:
      "You'll leave with greater clarity, actionable recommendations, and next steps. Ongoing support may also be recommended where appropriate.",
  },
];

export function WhatToExpect() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="w-11/12 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-14 lg:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="text-regular-button font-semibold text-sm tracking-[2.5px] uppercase block mb-3"
          >
            What to Expect
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="heading-2 font-bold"
          >
            Professional, confidential, and practical.
          </motion.h2>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-0 max-w-6xl mx-auto"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="flex flex-col items-center text-center border-r-[0.67px] lg:py-10  border-[#E8E8E8] last:border-r-0 "
            >
              {/* Large faded number */}
              <span className="text-4xl lg:text-5xl font-bold text-[#C8D8C8] leading-none mb-4 select-none">
                {step.number}
              </span>

              {/* Phase label */}
              <span className="text-regular-button font-semibold text-[10px] tracking-[2px] uppercase mb-2">
                {step.phase}
              </span>

              {/* Step title */}
              <h3 className="text-lg lg:text-xl font-semibold text-[#131313] mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#606060] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
