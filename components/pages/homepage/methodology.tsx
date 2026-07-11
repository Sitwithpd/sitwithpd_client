"use client";

import {
  fadeInRight,
  fadeInUp,
  staggerContainer,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { motion } from "motion/react";

export default function Methodology() {
  const PauseIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
        stroke="#864E13"
        strokeWidth="1.75"
      />
      <path
        d="M14 9.33301V13.9997L17.5 17.4997"
        stroke="#864E13"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );

  const DiscoverIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3.5C8.2005 3.5 3.5 8.2005 3.5 14C3.5 19.7995 8.2005 24.5 14 24.5C19.7995 24.5 24.5 19.7995 24.5 14"
        stroke="#864E13"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M18.667 3.5L21.0003 5.83333M21.0003 5.83333L15.167 11.6667M21.0003 5.83333L24.5003 4.66667L23.3337 8.16667"
        stroke="#864E13"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const TransformIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 24.5V14M17.5 17.5L14 14L10.5 17.5"
        stroke="#864E13"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83301 9.33301C5.83301 5.46667 9.48934 2.33301 13.9997 2.33301C18.51 2.33301 22.1663 5.46667 22.1663 9.33301C22.1663 11.6663 20.9997 13.4163 19.2497 14.583"
        stroke="#864E13"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <section className="w-full bg-[#EDE8D9] mt-20 lg:mb-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto py-16   px-6 flex flex-col items-center text-center"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="heading-2 font-semibold text-[#6B2D0E] mb-6"
        >
          Our Methodology
        </motion.h2>

        {/* Icons row */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex  items-center gap-3 mb-8"
        >
          <motion.div
            variants={fadeInRight}
            className="flex items-center gap-2"
          >
            <PauseIcon />
            <span
              className="font-semibold text-base"
              style={{ color: "#4A2009" }}
            >
              Pause
            </span>
          </motion.div>
          <span className="text-[#864E13] font-light text-lg">→</span>
          <motion.div
            variants={fadeInRight}
            className="flex items-center gap-2"
          >
            <DiscoverIcon />
            <span
              className="font-semibold text-base"
              style={{ color: "#4A2009" }}
            >
              Discover
            </span>
          </motion.div>
          <span className="text-[#864E13] font-light text-lg">→</span>
          <motion.div
            variants={fadeInRight}
            className="flex items-center gap-2"
          >
            <TransformIcon />
            <span
              className="font-semibold text-base"
              style={{ color: "#4A2009" }}
            >
              Transform
            </span>
          </motion.div>
        </motion.div>

        {/* Description paragraphs */}
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl flex flex-col gap-5"
        >
          <motion.p
            variants={fadeInUp}
            className="text-base leading-relaxed"
            style={{ color: "#4A2009" }}
          >
            Every Sit With PD experience is guided by a simple yet powerful
            journey: Pause. Discover. Transform. Like a seed taking root before
            it blooms, lasting transformation begins with stillness, grows
            through self-discovery, and flourishes through intentional action.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-base leading-relaxed"
            style={{ color: "#4A2009" }}
          >
            We help individuals step back from life&apos;s noise to gain
            clarity, develop deeper self-awareness, and uncover the patterns,
            beliefs, and possibilities shaping their journey. From there, we
            turn insight into intentional action, building the resilience,
            confidence, and purpose needed to navigate life&apos;s challenges
            and create meaningful, lasting transformation.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
