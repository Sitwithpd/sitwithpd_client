"use client"

import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";
import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export function CtaBanner() {
  return (
    <section className="container mx-auto  mt-5">
      <div className="w-full bg-footer-bg rounded-[10px] lg:rounded-[20px] px-5 md:px-12 md:py-20 lg:py-5 py-10 flex flex-col lg:flex-row gap-6 overflow-hidden border border-[#2A5A51]">
        {/* Left Content */}
        <motion.div 
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex-1  flex flex-col items-center lg:items-start text-center lg:text-left  justify-center">
          <motion.h2
          variants={fadeInUp}
          className="text-[#EBECEB] heading-2 mb-4 max-w-md">
            You Were Never Meant To Do Life Alone.
          </motion.h2>
          <motion.p
          variants={fadeInUp}
          className="text-[#F7FBF6] text-base leading-relaxed  mb-5 t">
            <span className="text-[#A8D675]">
              The journey becomes lighter when it's shared with fellow
              travellers.
            </span>{" "}
            <br />
            The Sit With PD Community is more than a network. It's a place of
            belonging where healing happens in connection and transformation
            grows together.
          </motion.p>
          <motion.div
          variants={fadeInRight}
          >
            <Link href={"/community"}>
              <Button
                variant="regular"
                className="bg-[#60935D] hover:bg-[#4E7D4C] text-white border-none h-11 px-6 text-sm font-medium gap-2"
              >
                Join our community <CaretRight />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <div className="w-full flex-1">
          <div className="w-full md:w-[507px]  md:mx-auto relative min-h-[300px] md:min-h-[446px]">
            <div
              className="absolute  inset-0 bg-gray-300 border border-[#DEDEDE] rounded-[16px]"
              style={{
                backgroundImage: "url('/images/join-us.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
