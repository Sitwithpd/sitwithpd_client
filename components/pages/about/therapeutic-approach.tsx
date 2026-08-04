"use client";
import { motion } from "motion/react";
import { fadeInUp, staggerContainerDelayed, staggerContainerSlow } from "@/lib/motion-variants";

export function TherapeuticApproach() {
  const healingPoints = [
    "Building awareness of one's body, mind, and spirit",
    "Embracing present-moment awareness, letting go of future and past anxiety",
    "Fostering emotional regulation through grounding techniques",
    "Creating safe space for processing deep-seated trauma",
  ];

  const developmentPoints = [
    "Building emotional intelligence and self awareness",
    "Developing authentic leadership and relationship skills",
    "Clarifying values and aligning life goals with purpose",
    "Creating sustainable practices for health and growth",
    "Building capacity for deeper, more meaningful connection",
  ];

  return (
    <section className="container bg-[#F7FBF6] mx-auto  py-18 ">
      <div className="flex flex-col items-center w-11/12 mx-auto">
      <motion.div
        variants={staggerContainerDelayed}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-10"
      >
        {/* Subtitle */}
        <motion.span
          variants={fadeInUp}
          className="text-regular-button font-semibold text-xs bg-[#60935D1A] w-fit px-3 py-1 rounded-full  tracking-[2.5px] uppercase block "
        >
          Mission & Vision
        </motion.span>

        {/* Main Heading */}
        <motion.h2 variants={fadeInUp} className="heading-2 mt-3 mb-2">
          Our North Star
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-[#606060] text-sm md:text-base leading-relaxed "
        >
          A world where more people live with clarity, resilience, and purpose -
          empowered to navigate life's challenges, embrace personal growth, and
          become the fullest expression of who they are.
        </motion.p>
      </motion.div>

       <motion.div variants={staggerContainerDelayed} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Left Card */}
        <motion.div variants={fadeInUp} className="bg-white   shadow-[0px_12px_28px_-14px_rgba(0,0,0,0.051)] rounded-[24px] p-5">
          <h3 className="text-[#131313] text-xl font-semibold  mb-4">Our Vision</h3>
          <div className="text-black text-sm space-y-5">
            <p className="">
              Our vision is to build a world where more people live with
              clarity, resilience, and purpose; empowered to navigate life's
              challenges, embrace personal growth, and become the fullest
              expression of who they are.
            </p>
            <p>
              We envision Sit With PD as a transformative global movement that
              inspires individuals to pause, reconnect with themselves, and
              create lives of meaning, impact, and intentional living.
            </p>
            <p>
              We aspire to be a trusted catalyst for personal discovery and
              human transformation, helping generations of people move beyond
              uncertainty and limitation into lives marked by self-awareness,
              fulfilment, authentic connection, and purposeful contribution to
              the world around them.
            </p>
          </div>
        </motion.div>

        {/* right side  */}
        <motion.div variants={fadeInUp} className="bg-[#634005]  rounded-[24px] p-5">
          <h3 className="text-[#FEF6E7] text-xl font-semibold  mb-4">Our Mission</h3>
          <div className="text-[#FFECE5] text-sm space-y-5">
            <p className="">
              At Sit With PD, our mission is to create transformative spaces
              where people can pause, reflect, and reconnect with themselves
              amidst the noise of everyday life. Through purposeful
              conversations, therapeutic experiences, guided growth, and
              meaningful community, we empower individuals to discover clarity
              in uncertainty, resilience in adversity, and purpose in every
              season of life.
            </p>
            <p>
              We exist to help people move beyond merely surviving and into
              intentional living thereby unlocking their potential, embracing
              their journey, and becoming the person they were created to be.
              Because we believe that when people understand themselves more
              deeply, they gain the confidence, direction, and courage to
              transform their lives and positively impact the world around them.
            </p>
          </div>
        </motion.div>
      </motion.div>
      </div>


     
    </section>
  );
}
