"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion-variants";

const coreValues = [
  {
    label: "REFLECTION",
    title: "Reflection",
    description:
      "We believe clarity begins with reflection. By creating space to pause, think and listen, we gain a deeper understanding of ourselves and the direction we are called to pursue.",
    image: "/images/about-reflection.png",
  },
  {
    label: "AUTHENTICITY",
    title: "Authenticity",
    description:
      "We encourage people to show up as they are, not as they think they should be. Genuine transformation begins when we embrace our true selves with honesty, courage, & self-awareness.",
    image: "/images/about-authenticity.png",
  },
  {
    label: "COMPASSION",
    title: "Compassion",
    description:
      "Every person carries a unique story. We lead with empathy, understanding and kindness, creating safe spaces where people feel seen, heard, valued and supported.",
    image: "/images/about-compassion.png",
  },
  {
    label: "RESILIENCE",
    title: "Resilience",
    description:
      "Life's challenges do not define us, they refine us. We believe adversity can become a catalyst for growth, helping individuals develop the strength and confidence to move forward with purpose.",
    image: "/images/resillience.png",
  },
  {
    label: "PURPOSE",
    title: "Purpose",
    description:
      "We believe every person has the capacity to live a meaningful and impactful life. Our mission is to help people discover what truly matters and align their lives with greater intention and purpose.",
    image: "/images/about-core-values.png",
  },
  {
    label: "COMMUNITY",
    title: "Community",
    description:
      "We grow stronger together by building meaningful relationships, encouraging one another, and creating a genuine sense of belonging.",
    image: "/images/about-community.png",
  },
];

function ValueImageCard({
  label,
  title,
  description,
  image,
  index,
}: {
  label: string;
  title: string;
  description: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.12,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="flex flex-col bg-white rounded-[20px] overflow-hidden border border-[#EAECF0]"
    >
      {/* Image with label overlay */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Label pill overlay */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#00000066]  text-white text-[10px] font-semibold tracking-widest uppercase">
            {label}
          </span>
        </div>
      </div>

      {/* Text content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-[#131313] mb-2">{title}</h3>
        <p className="text-sm text-[#344054] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function CoreValuesNew() {
  return (
    <section className="w-full  py-16 lg:py-24 bg-gradient-to-r from-[#F7FBF6] to-[#EAF7F0]">
      <div className="w-11/12 md:w-[90%] max-w-7xl mx-auto ">
        {/* Header */}
         <motion.div
          variants={staggerContainerSlow}
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
           Core Values
          </motion.span>

          {/* Main Heading */}
          <motion.h2 variants={fadeInUp} className="heading-2 mt-3 mb-2">
           What Guides Everything We Do
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-[#606060] text-sm md:text-base leading-relaxed "
          >
          We pause with intention, live authentically, lead with compassion, grow through resilience, and pursue purpose in all that we do.
          </motion.p>


        </motion.div>

        {/* Cards Grid — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7  ">
          {coreValues.map((value, i) => (
            <ValueImageCard
              key={`${value.title}-${i}`}
              label={value.label}
              title={value.title}
              description={value.description}
              image={value.image}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
