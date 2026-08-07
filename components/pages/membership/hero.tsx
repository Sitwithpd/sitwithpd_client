"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUpSlower,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CaretRight from "@/pd-icons/caret-right";

const stats = [
  { value: "3", label: "Membership Tiers" },
  { value: "500+", label: "Active Members" },
  { value: "98%", label: "Satisfaction Rate" },
];

export function MembershipHero() {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-[80svh] lg:min-h-[80dvh] xl:min-h-dvh xl:h-dvh flex items-center justify-center py-24">
        <Image
          src={"/images/membership-bg.webp"}
          alt={"membership hero background"}
          fill
          className="object-cover object-[70%_center] md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Two-column grid on lg */}
        <div className="relative h-full w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl">
          {/* Left column — text & buttons */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Pill badge */}
            <motion.div variants={fadeInUpSlower}>
              <span className="inline-block bg-[#FFFFFF1A] border border-[#FFFFFF33] text-[#A8D675] text-xs font-semibold uppercase tracking-[0.5px] px-3 py-1 rounded-full">
                Membership Plans
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUpSlower}
              className="heading-1 text-white leading-[105%]"
            >
              Choose Your <br /> Membership
            </motion.h1>

            <motion.p
              variants={fadeInUpSlower}
              className="text-lg text-[#F7FBF6] sm:w-10/12 md:w-9/12 lg:w-full"
            >
              Select the membership tier that aligns with your needs and
              commitment to personal growth and healing.
            </motion.p>

            <motion.div
              variants={staggerContainerDelayed}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:justify-start"
            >
              <motion.div variants={fadeInRight}>
                <Button
                className="w-full"
                  onClick={() =>
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  variant="regular"
                >
                  View Plans <CaretRight className="ml-2 " />
                </Button>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <Link href="/about">
                  <Button variant="outline" className="text-[#A8D675] w-full">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column — stats cards (lg only) */}
          <motion.div
            variants={staggerContainerDelayed}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="hidden lg:flex flex-col gap-4 items-end"
          >
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm ml-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInRight}
                  custom={i}
                  className="flex flex-col gap-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 text-center"
                >
                  <span className="text-[#A8D675] text-2xl font-bold leading-none">
                    {stat.value}
                  </span>
                  <span className="text-white/80 text-xs leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
