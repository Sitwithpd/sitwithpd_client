"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export function HowDelivered() {
  const deliveryWays = [
    "Live in-person workshops",
    "Interactive online sessions",
    "One-day masterclasses",
    "Multi-week learning cohorts",
    "Executive coaching programmes",
    "Corporate training",
    "Community outreach initiatives",
    "Conferences and seminars",
    "Retreats and immersive camps",
    "Custom organisational programmes",
  ];

  return (
    <section className="w-full bg-[#1F4842]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px]">
        {/* Left Column: Image Container (height stretches to match text details) */}
        <div className="relative w-full min-h-[350px] lg:min-h-full">
          <Image
            src="/images/Image.webp"
            alt="How Our Programs Are Delivered"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover md:object-[center_40%] lg:object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1F48424D]" />
        </div>

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
              Flexible Learning
            </motion.span>

            {/* Main Heading */}
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-white mb-2"
            >
              How Our Programs Are Delivered
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-[#FFFFFF99] text-sm md:text-base leading-relaxed"
            >
              We recognise that every learner is different, so we offer flexible
              learning experiences that fit your schedule and goals.
            </motion.p>

            {/* Delivery Bullet Points */}
            <motion.ul
              variants={staggerContainerDelayed}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              className="flex flex-col gap-y-4 gap-x-6 mt-4"
            >
              {deliveryWays.map((item, index) => (
                <motion.li
                  variants={fadeInRight}
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
              Wherever you are, meaningful learning is within reach.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
