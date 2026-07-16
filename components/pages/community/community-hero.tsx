"use client";

import {
  fadeInUp,
  fadeInUpSlower,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function CommunityHero() {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-svh md:min-h-[60dvh] lg:min-h-[80dvh] flex items-center justify-center  py-24">
        <Image
          src={"/images/community-bg.png"}
          alt={"Camp page background image"}
          fill
          className="object-cover object-[70%_center] md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
        <motion.div  variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }} className="relative h-full w-[90%] lg:w-[80%] mx-auto flex flex-col gap-6 justify-center items-start max-w-6xl">
          <div className="space-y-4 lg:text-center ">
            <motion.h1
              variants={fadeInUp}
              className={`text-[#F9FDF9] heading-1 leading-[1.05] sm:text-center `}
            >
              Join Our Community
            </motion.h1>
            <motion.p variants={fadeInUpSlower} className="text-[#F7FBF6] text-xl lg:w-[80%] mx-auto md:text-center">
              Our community is diverse, dynamic, and purpose-driven, designed to
              welcome individuals from all walks of life who are passionate
              about growth, impact, and transformation.
            </motion.p>
          </div>

          <motion.div variants={fadeInUpSlower} className="flex flex-col sm:flex-row justify-start sm:justify-center w-full gap-4 mt-2">
            <Button
              onClick={() =>
                document
                  .getElementById("communities")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant={"regular"}
            >
              Explore commnunities
              </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
