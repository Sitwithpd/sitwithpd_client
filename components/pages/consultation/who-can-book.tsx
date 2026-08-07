"use client";

import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { handleBookingClick } from "@/lib/utils";

export function WhoCanBook() {
  const deliveryWays = [
    "One-to-one consultations",
    "Executive consultations",
    "Business strategy sessions",
    "Team and organisational consultations",
    "Online consultations",
    "In-person consultations",
    "Half-day strategy sessions",
    "Full-day advisory engagements",
  ];

  return (
    <section className="w-full bg-[#0F2318]">
      <div className=" flex flex-col lg:flex-row py-20 overflow-hidden lg:py-24 w-11/12 mx-auto gap-20 lg:gap-10">
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1 flex flex-col gap-5 lg:pr-10"
        >
          {/* Subtitle */}
          <motion.span
            variants={fadeInUp}
            className="text-[#A8D675] font-semibold text-xs  tracking-[2.5px] uppercase block "
          >
            Who Can Book?
          </motion.span>

          {/* Main Heading */}
          <motion.h2 variants={fadeInUp} className="heading-2 text-white lg:w-10/12  ">
            No matter where you are in your journey, you're welcome here.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-[#FFFFFFB2] text-sm md:text-base leading-relaxed mb-2 lg:w-11/12"
          >
            Our consultation services are available to individuals, couples,
            families, entrepreneurs, business owners, corporate professionals,
            executives, ministry leaders, educational institutions, churches,
            corporate teams, government agencies, and non-profit organisations.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-">
            <Button onClick={() =>  document
                  .getElementById("consultation-services")
                  ?.scrollIntoView({ behavior: "smooth" })} variant="regular">Book your sesion </Button>
          </motion.div>
        </motion.div>

            {/* right hand side  */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className=" flex-1 space-y-5  w-full"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#A8D675] font-semibold text-xs  tracking-[2.5px] uppercase block "
          >
            Consultation Formats
          </motion.span>

          {/* Main Heading */}
          <motion.h2 variants={fadeInUp} className="heading-2 text-white  ">
            Choose the format that works best for you.
          </motion.h2>
          <motion.div
            variants={staggerContainerDelayed}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4 pt-4"
          >
            {deliveryWays.map((item, index) => (
              <motion.p
                variants={fadeInRight}
                key={index}
                className="flex items-center gap-3 text-[#FFFFFF] text-sm e "
              >
                <span className="w-1 h-1 rounded-full bg-[#A8D675]" />

                <span>{item}</span>
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
