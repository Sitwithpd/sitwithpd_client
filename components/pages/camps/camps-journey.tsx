"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export function CampsJourney() {
  const deliveryWays = [
    "Day 1 - Arrive & Unwind: settle in, breathe, release",
    "Day 2 morning - Morning circle: guided reflection & connection",
    "Day 2 afternoon - Deep-dive sessions & journaling practice",
    "Day 2 evening - Mindful nature walk & group conversations",
    "Day 3 morning - Personal breakthroughs & intention-setting",
    "Day 3 afternoon - Closing ritual & farewell celebration",
    "Held at Gardenia Tropicana, Lagos, Nigeria",
    "Intimate small-group format - intentional & safe",
  ];

  return (
    <section className="w-full bg-[#1F4842]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px]">
        

        {/* Right Column: Text and Details Container */}
        <div className="bg-[#1F4842] flex flex-col justify-center py-16 overflow-hidden lg:py-24 w-10/12 mx-auto text-white">
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-xl flex flex-col gap-4"
          >
            {/* Subtitle */}
            <motion.span
              variants={fadeInUp}
              className="text-[#A8D675] font-semibold text-xs md:text-sm tracking-[2.5px] uppercase block "
            >
              The Camp Journey
            </motion.span>

            {/* Main Heading */}
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-white mb-2"
            >
              Three Days. One Story.
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-[#FFFFFF99] text-sm md:text-base leading-relaxed"
            >
              Each day is intentionally crafted to move you gently from arrival
              and openness to deep reflection and confident forward momentum.
            </motion.p>

            {/* Delivery Bullet Points */}
            <motion.ul
              variants={staggerContainerDelayed}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-y-4 gap-x-6 mt-4"
            >
              {deliveryWays.map((item, index) => (
                <motion.li
                  variants={fadeInRight}
                  viewport={{ once: true, amount: 0.4 }}
                  key={index}
                  className="flex items-center gap-3 text-white text-sm md:text-base"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8D675] shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Bottom Accent Quote */}
            <p className="italic text-[#A8D675] text-sm md:text-base mt-6">
              Wherever you are in life, meaningful change is within reach..
            </p>
          </motion.div>
        </div>

        {/* Left Column: Image Container (height stretches to match text details) */}
        <div className="relative w-full min-h-[350px] lg:min-h-full">
          <Image
            src="/images/camp-story.png"
            alt="How Our Programs Are Delivered"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover md:object-[center_40%] lg:object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1F48424D]" />
        </div>
      </div>
    </section>
  );
}
