"use client";

import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export default function WhoWeAre() {
  return (
    <section className="container mx-auto   pt-15  flex flex-col items-center">
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="flex items-center justify-center">
        {/* Badge */}
        <Pill text="Who We Are" />

        </motion.div>

        {/* Heading */}
        <motion.h2 variants={fadeInUp} className=" text-center heading-2 ">
          <span className="text-[#AD6F07]"> Sit With PD</span>-Purpose.
          Direction. Personal Discovery.
        </motion.h2>

        <motion.section
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="container mx-auto  py-10 lg:py-20 flex flex-col lg:flex-row-reverse gap-5 md:gap-16 items-center max-w-6xl"
        >
          {/* Left Content */}
          <div className="flex-1  ">
            <motion.h3 variants={fadeInUp} className="text-black text-xl xl:text-[2rem] llg:eading-10 mb-3 lg:mb-4 ">
              {" "}
              A Transformational Platform for Purposeful Living
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-[#606060] text-base  leading-[140%] lg:mb-6 mb-3 ">
              Sit With PD Global Therapeutic Network is dedicated to helping
              individuals gain clarity, build resilience, and live with greater
              purpose. At the heart of our work is{" "}
              <span className="font-bold text-[#60935D]">
                {" "}
                PD—Purpose, Direction, and Personal Discovery
              </span>{" "}
              the three pillars that guide every journey we facilitate.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-[#606060] text-base  leading-[140%] ">
              We believe that when people discover their purpose, gain clear
              direction, and deepen their understanding of themselves, they are
              better equipped to thrive, grow, and make a meaningful impact in
              the world around them.
            </motion.p>
          </div>

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
        </motion.section>
      </motion.div>
    </section>
  );
}
