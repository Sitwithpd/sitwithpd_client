"use client";

import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainer,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export function CampDifference() {


  const stats = [
    {
      value: "3",
      label: "Days Immersive",
    },
    {
      value: "Small",
      label: "Group Setting",
    },
    {
      value: "500++",
      label: "Lives Touched",
    },
  ];

  return (
    <section>
      <div className="container  mx-auto py-20 lg:py-24  flex flex-col lg:flex-row-reverse lg:items-center  justify-between gap-10  max-w-7xl">
        {/* Left Content */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1"
        >
          <motion.p
            variants={fadeInUp}
            className="bg-[#EEF7E6] lg:hidden mx-auto text-regular-button w-fit font-semibold text-sm tracking-[1.8px] mb-4 py-2 px-3 rounded-full flex items-center justify-center uppercase"
          >
            why choose us
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className=" text-[1.5rem]  lg:text-[1.8rem] xl:text-[2rem] lg:leading-9.5 text-[#131313] xl:leading-11 font-medium text-center lg:text-start mb-4 "
          >
            We believe real transformation begins with stillness.
          </motion.h2>
          <div className="space-y-4 text-center lg:text-start my-3">
            <motion.p
              variants={fadeInUp}
              className="text-base  text-[#606060] mb-4   "
            >
              Most development happens in a rush. Our camps are different. They create deliberate space away from noise, pressure, and expectation  so you can finally hear yourself think.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base  text-[#606060] mb-4 "
            >
              Every moment at camp is intentionally designed: the sessions, the environment, the facilitators, and even the silences. You won't just gain insights you'll experience a shift that stays with you long after you return home.
            </motion.p>
          </div>
          <motion.div
            variants={staggerContainerDelayed}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="  flex flex-col md:flex-row md:justify-center lg:justify-start gap-x-4 mt-12 gap-y-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInRight}
                className="py-2 min-w-[140.1875px] flex flex-col  items-start justify-center"
              >
                <h3 className="text-[#004617] font-bold lg:text-4xl text-3xl mb-2 ">
                  {stat.value}
                </h3>
                <span className="text-[#606060] text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Grid */}
        <div className="  w-full lg:w-[40%]  ">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-1 h-full "
          >
            <p className="bg-[#EEF7E6] hidden  text-regular-button w-fit font-semibold text-sm tracking-[1.8px] mb-4 py-2 px-3 rounded-full lg:flex items-center justify-center uppercase">
              why choose us
            </p>
            <div className=" relative w-full lg:h-full lg:w-full aspect-square  h-[400px] rounded-[10px] overflow-hidden lg:rounded-[20px] p-7 text-white">
              <Image
                src="/images/Image.webp"
                alt=""
                fill
                className="object-cover "
              />

              <motion.div
                variants={fadeInUp}
                className="absolute left-0 top-0 w-full h-full bg-linear-to-b from [#00000000] to-[#1F4842B2] p-5 flex flex-col justify-end"
              >
                <span className="text-[#A8D675] text-sm font-semibold uppercase mb-2">
                  Our Promise
                </span>
                <p className="text-white font-medium text-lg">
                 "A retreat designed to help you stop, breathe, and finally listen to yourself."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
