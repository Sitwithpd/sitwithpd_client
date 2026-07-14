"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export function Learning() {
  const deliveryWays = [
    {
      text: "Reflection",
      image: "/images/reflection.png",
    },
    {
      text: "Discussion",
      image: "/images/discussion.png",
    },
    {
      text: "Practical exercises",
      image: "/images/exercices.png",
    },
    {
      text: "Accountability",
      image: "/images/accountability.png",
    },
    {
      text: "Measurable progress",
      image: "/images/progress.png",
    },
  ];

  return (
    <section className="w-full bg-[#F0F4F0]">
      <div className=" flex flex-col items-center text-center py-20 overflow-hidden lg:py-24 w-11/12 mx-auto gap-5 max-w-3xl lg:gap-10">
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1 flex flex-col gap-4 "
        >
          {/* Subtitle */}
          <motion.span
            variants={fadeInUp}
            className="text-[#606060] w-fit mx-auto font-semibold py-2 px-3 text-xs bg-white border-[0.67px] border-[#E8E8E8] rounded-full  tracking-[2.5px] uppercase  "
          >
            Learning That Leads to Action
          </motion.span>

          {/* Main Heading */}
          <motion.h2 variants={fadeInUp} className="heading-2   ">
            Information alone does not change lives.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className=" text-sm md:text-base leading-relaxed text-[#606060] mb-2"
          >
            Transformation happens when learning is applied consistently. That's
            why every Sit With PD program encourages reflection, discussion,
            practical exercises, accountability, and measurable progress helping
            you turn ideas into lasting habits and meaningful results.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-between w-full flex-wrap gap-y-6"
        >
          {deliveryWays.map((item, index) => (
            <motion.li
              variants={fadeInRight}
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col w-[50%] md:w-auto items-center gap-3 text-sm cursor-pointer group"
            >
              <div className="shrink-0 flex justify-center items-center w-14 h-14 rounded-full bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] transition-all duration-300 group-hover:shadow-[0px_10px_15px_-3px_#0000001A,0px_4px_6px_-2px_#0000001A] group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.text}
                  width={30}
                  height={30}
                />
              </div>

              <span className="transition-colors duration-300 group-hover:font-medium text-[#344054] font-medium text-sm group-hover:text-black">
                {item.text}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
