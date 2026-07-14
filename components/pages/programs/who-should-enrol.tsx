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

export function WhoShouldEnrol() {
  const deliveryWays = [
    "Students preparing for the future",
    "Young professionals building their careers",
    "Entrepreneurs growing their businesses",
    "Corporate executives",
    "Managers and team leaders",
    "Ministry and community leaders",
    "Couples and families",
    "Educational institutions",
    "Churches and faith-based organisations",
    "Businesses and corporate teams",
    "Government and non-profit organisations",
    "Anyone committed to lifelong growth",
    "Government and non-profit organisations",
    "Anyone committed to lifelong growth",
  ];

  return (
    <section className="w-full bg-white">
      <div className=" flex flex-col lg:flex-row items-center py-15 overflow-hidden lg:py-24 gap-2 lg:gap-20">
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1 flex flex-col gap-4"
        >
          {/* Subtitle */}
          <motion.span
            variants={fadeInUp}
            className="text-regular-button font-semibold text-xs  tracking-[2.5px] uppercase block "
          >
            Who Should Enrol?
          </motion.span>

          {/* Main Heading */}
          <motion.h2 variants={fadeInUp} className="heading-2  ">
            Designed for people who <br className="hidden lg:block" /> refuse to
            settle.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-[#606060] text-sm md:text-base leading-relaxed mb-2"
          >
            If you're ready to grow, you belong here. Our programs serve a wide
            range of individuals, organisations, and communities committed to
            growth and meaningful impact.
          </motion.p>

          <Link href="/programs#program-growth" className="hidden lg:block">
            <Button variant="regular">
              Find your program <CaretRight />
            </Button>
          </Link>
        </motion.div>

        <motion.ul
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.3}}
          className="flex flex-col gap-y-4 lg:gap-y-6 flex-1 w-full   mt-4"
        >
          {deliveryWays.map((item, index) => (
            <motion.li
              variants={fadeInRight}
              key={index}
              className="flex  items-center gap-3 text-[#344054] text-sm md:text-base lg:mx-auto lg:w-10/12"
            >
              <svg
                width="7"
                height="25"
                viewBox="0 0 7 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.2017 18.5938L3.65625 14.6307H5.11364V14.7585L2.53125 18.5938H1.2017ZM1.2017 10.7443H2.53125L5.11364 14.5795V14.7074H3.65625L1.2017 10.7443Z"
                  fill="#A8D675"
                />
              </svg>

              <span>{item}</span>
            </motion.li>
          ))}

          <Link href="/programs/program-listing" className="lg:hidden mt-10">
            <Button variant="regular">
              Find your program <CaretRight />
            </Button>
          </Link>
        </motion.ul>
      </div>
    </section>
  );
}
