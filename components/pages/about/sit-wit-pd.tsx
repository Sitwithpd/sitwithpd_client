"use client";

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

      text: "Personal Discovery ",
    },
  ];

  return (
    <section className="container  bg-[#F7FBF6]  py-10 lg:py-20 ">
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-10 w-11/12 mx-auto max-7xl "
      >
        {/* Subtitle */}
        <motion.span
          variants={fadeInUp}
          className="text-regular-button font-semibold text-xs bg-[#60935D1A] w-fit px-3 py-1 rounded-full  tracking-[2.5px] uppercase block "
        >
          Our Story
        </motion.span>

        {/* Main Heading */}
        <motion.h2 variants={fadeInUp} className="heading-2 mt-3 mb-2">
          Sit With PD - Purpose. Direction. Personal Discovery.
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-[#606060] text-sm md:text-base leading-relaxed "
        >
          We're a transformational platform dedicated to helping individuals
          gain clarity, build resilience, and live with greater purpose.
        </motion.p>
      </motion.div>
      <div className="mx-auto flex flex-col lg:flex-row gap-10 md:gap-16  max-w-7xl w-11/12">
        {/* Left Content */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 "
        >
          <motion.p
            variants={fadeInUp}
            className="text-black text-sm  leading-[140%]"
          >
            Sit With PD Global Therapeutic Network is a transformational
            platform dedicated to helping individuals gain clarity, build
            resilience, and live with greater purpose. Through reflective
            conversations, therapeutic experiences, guided programmes, and
            meaningful community, we empower people to reconnect with
            themselves, navigate life's challenges with confidence, and create
            lives aligned with what truly matters.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-black text-sm  leading-[140%] my-5"
          >
            At the heart of our work is PD — Purpose, Direction, and Personal
            Discovery the three pillars that guide every journey we facilitate.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-black text-sm  leading-[140%] mb-10"
          >
            We believe that when people discover their purpose, gain clear
            direction, and deepen their understanding of themselves, they are
            better equipped to thrive, grow, and make a meaningful impact in the
            world around them.
          </motion.p>

          <motion.div
            variants={staggerContainerDelayed}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                variants={fadeInRight}
                key={index}
                className="flex items-center bg-[#EBECEB33] px-2 py-1 gap-2"
              >
    
                <span className="text-sm font-semibold text-[#344054]">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Placeholder */}
        <div className="flex-1 w-full ">
          {/* Using the join-us image as a placeholder since it features people connecting */}
          <div className="w-full h-[300px] md:h-[400px] aspect-square rounded-[16px] border-[#DEDEDE] overflow-hidden relative border">
            <Image
              src="/images/join-us.webp"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
