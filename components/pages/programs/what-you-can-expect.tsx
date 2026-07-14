"use client";

import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export function WhatYouCanExpect() {
  const deliveryWays = [
    "Greater self-awareness",
    "Clearer decision-making",
    "Improved confidence",
    "Increased resilience",
    "Stronger leadership capabilities",
    "Practical strategies for personal and professional success",
    "Better communication skills",
    "Meaningful relationships and collaborative networks",
    "Enhanced emotional intelligence",
    "A personalised action plan for continued growth",
  ];

  return (
    <section className="w-full bg-[#0F2318]">
      <div className=" flex flex-col py-20 overflow-hidden lg:py-24 w-11/12 mx-auto gap-5 lg:gap-10">
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1 flex flex-col gap-4 lg:w-1/2"
        >
          {/* Subtitle */}
          <motion.span
            variants={fadeInUp}
            className="text-[#A8D675] font-semibold text-xs  tracking-[2.5px] uppercase block "
          >
            What You Can Expect
          </motion.span>

          {/* Main Heading */}
          <motion.h2 variants={fadeInUp} className="heading-2 text-white  ">
            Practical value that extends far beyond the session.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-[#FFFFFFB2] text-sm md:text-base leading-relaxed mb-2"
          >
            Every program is designed to deliver practical value that extends
            far beyond the classroom. Participants consistently gain real,
            measurable results not just knowledge, but the confidence and
            capacity to apply it.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-3   w-full"
        >
          {deliveryWays.map((item, index) => (
            <motion.li
              variants={fadeInRight}
              key={index}
              className="flex items-center gap-3 text-[#FFFFFF] text-sm e "
            >
              <span className="w-1 h-1 rounded-full bg-[#A8D675]" />

              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
