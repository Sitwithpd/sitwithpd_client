"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export function ConsultationApproach() {
  const deliveryWays = [
    "Integrity",
    "Empathy",
    "Wisdom",
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
        <div className="  flex flex-col justify-center py-16 overflow-hidden lg:py-24 w-11/12 mx-auto text-white">
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
              Our Consultation Approach
            </motion.span>

            {/* Main Heading */}
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-white mb-2"
            >
              Every consultation is centred on you.
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-[#FFFFFF99] text-sm md:text-base leading-relaxed"
            >
              We take time to understand your goals, listen without judgement, ask meaningful questions, and work collaboratively to identify practical solutions tailored to your unique situation.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-[#FFFFFF99] text-sm md:text-base leading-relaxed"
            >
              Our conversations are guided by integrity, empathy, wisdom, and a genuine commitment to helping you grow. We don't offer one-size-fits-all advice. We help you discover the path that's right for you.
            </motion.p>

            {/* Delivery Bullet Points */}
            <motion.div
              variants={staggerContainerDelayed}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              className="flex flex-row gap-y-4 gap-x-10 pt-7 mt-4 border-t-[0.67px] border-[#FFFFFF33]"
            >
              {deliveryWays.map((item, index) => (
                <motion.p
                  variants={fadeInRight}
                  key={index}
                  className="flex flex-col gap-3 text-white text-sm md:text-base"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8D675] shrink-0" />
                  <span>{item}</span>
                </motion.p>
              ))}
            </motion.div>

          
          </motion.div>
        </div>
      </div>
    </section>
  );
}
