"use client"

import Image from "next/image";
import {
  fadeInRight,
  fadeInUp,
  fadeInUpSlower,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { motion } from "motion/react";

export function SitWithPD() {
  const highlights = [
    {
      icon: (
        <Image
          src="/images/green-heart-no-overlay.png"
          alt="Emotional Healing"
          width={24}
          height={24}
          className="w-6 h-6 object-contain bg-[#EBECEB33]"
        />
      ),
      text: "Purpose",
    },
    {
      icon: (
        <Image
          src="/images/award-no-overlay.png"
          alt="Community Connection"
          width={24}
          height={24}
          className="w-6 h-6 object-contain bg-[#EBECEB33]"
        />
      ),
      text: "Direction",
    },
    {
      icon: (
        <Image
          src="/images/connection-no-overlay.png"
          alt="Community Connection"
          width={24}
          height={24}
          className="w-6 h-6 object-contain bg-[#EBECEB33]"
        />
      ),

      text: "Personal Discovery (PD)",
    },
  ];

  return (
    <section className="container mx-auto  py-10 lg:py-20 flex flex-col lg:flex-row gap-10 md:gap-16 items-center max-w-7xl">
      {/* Left Content */}
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        animate="visible"
        viewport={{ once: true,amount: 0.5 }}
        className="flex-1 "
      >
        <motion.h2 variants={fadeInUp} className="heading-2 mb-6">
          Sit With PD — Purpose. Direction. Personal Discovery
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-black text-base  leading-[140%]">
          Sit With PD Global Therapeutic Network is a transformational platform
          dedicated to helping individuals gain clarity, build resilience, and
          live with greater purpose. Through reflective conversations,
          therapeutic experiences, guided programmes, and meaningful community,
          we empower people to reconnect with themselves, navigate life's
          challenges with confidence, and create lives aligned with what truly
          matters.
        </motion.p>

        <motion.p variants={fadeInUp} className="text-black text-base  leading-[140%] my-5">
          At the heart of our work is PD — Purpose, Direction, and Personal
          Discovery the three pillars that guide every journey we facilitate.
        </motion.p>
        <motion.p variants={fadeInUp} className="text-black text-base  leading-[140%] mb-10">
          We believe that when people discover their purpose, gain clear
          direction, and deepen their understanding of themselves, they are
          better equipped to thrive, grow, and make a meaningful impact in the
          world around them.
        </motion.p>

        <motion.div variants={staggerContainerDelayed}
         initial="hidden"
        animate="visible"
        viewport={{ once: true,amount: 0.5 }}
        className="flex flex-wrap gap-6">
          {highlights.map((item, index) => (
            <motion.div
            variants={fadeInRight}
              key={index}
              className="flex items-center bg-[#EBECEB33] px-2 py-1 gap-2"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-[#344054]0">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Image Placeholder */}
      <div className="flex-1 w-full ">
        {/* Using the join-us image as a placeholder since it features people connecting */}
        <div className="w-full h-[300px] md:h-[400px] lg:min-h-[446px] rounded-[16px] border-[#DEDEDE] overflow-hidden relative border">
          <Image
            src="/images/join-us.webp"
            alt="Our Mission"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
