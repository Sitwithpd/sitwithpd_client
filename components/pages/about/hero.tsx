"use client";
import Image from "next/image";
import {
  
  fadeInUpSlower,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { motion } from "motion/react";

export function AboutHero() {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-[60svh] lg:min-h-[70svh] flex items-center justify-start  lg:py-24">
        <Image
          src={"/images/camp-hero.webp"}
          alt={"Camp page background image"}
          fill
          className="object-cover object-[70%_center] md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="relative h-full w-[90%] lg:w-11/12 mx-auto flex flex-col gap-6 justify-center items-start max-w-7xl"
        >
          <motion.div
            variants={fadeInUpSlower}
            className="space-y-4 lg:text-center "
          >
            <h1
              className={`text-[#F9FDF9] font-bold heading-1 leading-[1.05]  `}
            >
              About Sit-With-PD
            </h1>
          </motion.div>
          <motion.p
            variants={fadeInUpSlower}
            className="text-[#F9FDF9] text-lg  lg:max-w-3xl font-medium"
          >
            A transformational platform born from personal experience dedicated
            to helping individuals reconnect with themselves and live with
            greater purpose. .
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
