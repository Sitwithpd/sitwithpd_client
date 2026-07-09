"use client";

import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export default function WhySitWithPd() {
  return (
    <section className="container mx-auto   pt-15  ">
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="">
          <Pill text="Why Sit With PD" />
        </motion.div>
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="container mx-auto   flex flex-col lg:flex-row gap-5   max-w-6xl"
        >
          <motion.div
            variants={fadeInRight}
            className="flex-1 bg-[#CBD4DB66] p-6 rounded-[10px] text-base leading-6 text-[#14312D]"
          >
            <div className="h-10 relative p-1 text-[#14312D]  w-10 rounded-full mb-8 flex items-center justify-center bg-[#25756A1A] ">
              <Image
                src="/images/green-flower.png"
                alt="Why Sit With PD"
                width={40}
                height={40}
                className="object-contain "
              />
            </div>
            <p className="mb-6">
              We believe lasting change begins not with doing more, but with
              understanding yourself more deeply. Through guided reflection,
              transformative experiences, and meaningful community, we help
              people move from overwhelm and uncertainty to clarity, resilience,
              and purposeful living. <br /> While others help people stay afloat
              in life's waters, Sit With PD helps them find their compass,
              reclaim their direction, and sail toward a more purposeful future.
            </p>

            <p>
              We create space to reconnect with who you are, discover where
              you're going, and live with greater intention and purpose.
            </p>
          </motion.div>

          <motion.div variants={fadeInRight} className="flex-1 relative">
            <div className="w-full h-[300px] md:h-[400px] lg:min-h-[410px] rounded-[10px] border-[#DEDEDE] overflow-hidden relative border">
              <Image
                src="/images/home-page-girl.png"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <motion.p 
            initial={{y: 10, opacity: 0}}  
            transition={{duration: 0.5, ease: "easeOut", delay: 2}}  
            whileInView={{y: 0, opacity: 1}}  
            className="text-base text-[#14312D] leading-6 bg-[#ECFCEB] p-4 rounded-[10px] flex flex-col gap-4 max-w-75 absolute bottom-2.5 left-2.5">
              <span>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.86 14.7502C6.742 12.6432 8.918 8.28918 8.74 5.19918C8.518 2.06218 6.476 0.704177 4.701 0.751177C2.837 0.704177 1.327 2.24918 1.327 4.21618C1.327 5.66718 2.17 7.44618 5.056 7.68018C4.257 9.88018 2.747 11.7072 0.75 12.8302L1.86 14.7502Z"
                    stroke="#60935D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.86 14.7502C16.743 12.6432 18.918 8.28918 18.74 5.19918C18.518 2.06218 16.476 0.704177 14.701 0.751177C12.837 0.704177 11.327 2.24918 11.327 4.21618C11.327 5.66718 12.17 7.44618 15.056 7.68018C14.257 9.88018 12.748 11.7072 10.75 12.8302L11.86 14.7502Z"
                    stroke="#60935D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              "The breakthrough you're searching for doesn't begin with finding
              all the answers; it begins with sitting with yourself long enough
              to hear them."
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
