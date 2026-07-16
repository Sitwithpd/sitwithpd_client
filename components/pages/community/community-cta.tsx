"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";
import Link from "next/link";

export function CommunityCta() {
  const deliveryWays = ["Integrity", "Empathy", "Wisdom"];

  return (
    <section className="w-full bg-[#1F4842]">
      <div className="flex flex-col-reverse md:flex-row-reverse items-stretch min-h-[500px]">
        {/* Left Column: Image Container (height stretches to match text details) */}
        <div className="relative w-full min-h-[350px] flex-1 lg:min-h-full">
          <Image
            src="/images/card conatiner.png"
            alt="How Our Programs Are Delivered"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover md:object-[center_40%] lg:object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1F48424D]" />
        </div>

        {/* Right Column: Text and Details Container */}
        <div className="flex-1  flex flex-col justify-center py-16 overflow-hidden lg:py-24 lg:w-11/12 mx-auto text-white">
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="md:w-10/12 w-11/12 mx-auto flex flex-col gap-4"
          >
            {/* Main Heading */}
            <motion.h2
              variants={fadeInUp}
              className="heading-2  text-white mb-2"
            >
              Not Sure Where to Start?
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-[#F7FBF6] text-sm md:text-base leading-relaxed"
            >
              Reach out to us and we'll help you find the perfect community that
              aligns with your goals and passions.
            </motion.p>

            <motion.div className="mt-6" variants={fadeInUp}>
              <Link href={"/contact"}>
                <Button className="px-4" variant={"regular"}>
                  Cotact us <CaretRight />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
