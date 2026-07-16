"use client"
import { motion } from "motion/react";
import {
  fadeInUp,
  fadeInRight,
  staggerContainerSlow,
  staggerContainerDelayed,
  staggerContainer,
  fadeInUpSlower,
} from "@/lib/motion-variants";
export default function WhoWeWelcome() {
  return (
    <section className="lg:py-20 py-10">
      <motion.div
        variants={staggerContainerDelayed}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="w-11/12 sm:10/12 lg:w-11/12 text-lg text-[#667085] mx-auto py-10 lg:px-12 text-center bg-[#A8D6751A] border-[0.67px] rounded-[16px] border-[#EAECF0]"
      >
        <motion.h2 variants={fadeInUp} className="heading-2 mb-5">Who We Welcome</motion.h2>
        <motion.p variants={fadeInUp} className="">
          Whether you are{" "}
          <span className="text-[#60935D] font-semibold ">
            seeking internship or volunteering opportunities,{" "}
          </span>{" "}
          a <span className="text-[#60935D] font-semibold ">professional </span>{" "}
          eager to share knowledge and build capacity, a leader committed to
          inspiring and empowering others, or a{" "}
          <span className="text-[#60935D] font-semibold ">kindhearted</span>{" "}
          individual passionate about creating meaningful change, there is a
          place for you here.
        </motion.p>

        <motion.p variants={fadeInUp} className="my-5">
          At Sit-With-PD, we believe in building a community where{" "}
          <span className="text-[#60935D] font-semibold ">
            purpose meets opportunity{" "}
          </span>{" "}
          and every contribution creates lasting impact.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-semibold text-[#344054] ">
          Join us today and become part of a movement dedicated to growth,
          leadership, service, and transformation.
        </motion.p>
      </motion.div>
    </section>
  );
}
