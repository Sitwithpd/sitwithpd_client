"use client";

import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";
import Image from "next/image";

import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  fadeInUpSlower,
  staggerContainer,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export function ProgramHero() {
  const slides = [
    {
      id: 1,
      imageSrc: "/images/programs-hero-1.png",
      alt: "Healing Through Presence",
      title: (
        <p>
          Where Growth
          <br className="" />
          Becomes a Lifestyle
        </p>
      ),
      description:
        "Transformation doesn't happen by chance  it happens through intentional learning, practical action, and consistent personal development.",
      imageClass: "object-cover object-center",
    },
  ];

  return (
    <section className="w-full">
      <div className="w-full">
        {slides.map((slide) => {
          return (
            <div key={slide.id}>
              <div className="relative w-full min-h-svh md:min-h-[60svh] lg:h-svh pb-10 sm:pb-0 md:pb-16 lg:pb-0  flex items-end lg:items-center justify-center">
                <Image
                  src={slide.imageSrc}
                  alt={slide.alt}
                  fill
                  className={slide.imageClass}
                  priority
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative  w-full  mx-auto flex flex-col gap-6 h-full  justify-center items-center max-w-7xl">
                  <motion.div
                    variants={staggerContainerSlow}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    className="space-y-4  flex flex-col  w-11/12 mx-auto "
                  >
                    <motion.h5
                      variants={fadeInUpSlower}
                      className="text-[#A8D675] text-sm font-semibold uppercase tracking-[2.5px] mb-4"
                    >
                      {" "}
                      Sit With PD · Programs
                    </motion.h5>
                    <motion.h1
                      variants={fadeInUpSlower}
                      className={`text-[#F9FDF9] font-semibold text-[2.5rem] sm:text-[3.125rem] lg:text-[4rem] xl:text-[4.25rem]  leading-[100%] `}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      variants={fadeInUpSlower}
                      className="text-[1.125rem] md:text-lg text-[#F7FBF6] opacity-90 leading-relaxed md:w-8/12"
                    >
                      {slide.description}
                    </motion.p>
                  </motion.div>
                  <motion.div
                    variants={staggerContainerDelayed}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 sm:justify-start  w-11/12 mx-auto "
                  >
                    <motion.div variants={fadeInRight} className="">
                      <Link href="/programs/programs-listing" className=" w-full">
                        <Button variant="regular" className="w-full">
                          Browse Programs <CaretRight className="ml-2" />
                      </Button>
                    </Link>
                    </motion.div>
                    <motion.div variants={fadeInRight}>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="w-full text-[#A8D675]"
                      >
                        Register Today
                      </Button>
                    </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

 
    </section>
  );
}
