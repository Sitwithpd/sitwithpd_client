"use client";
import { Pill } from "@/components/ui/pill";
import { motion } from "motion/react";

const areas = [
  {
    title: "Clarity",
    description:
      "Understand where you are in life and what you actually need right now  without the noise.",
    icon: (
      <div className="bg-[#EFF6FF] h-10 w-10 flex justify-center items-center rounded-[10px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0008 5.00005C12.002 4.60008 11.9232 4.20391 11.769 3.83485C11.6148 3.46579 11.3884 3.13128 11.1031 2.851C10.8177 2.57072 10.4792 2.35032 10.1075 2.20278C9.7357 2.05524 9.33819 1.98353 8.9383 1.99186C8.53842 2.0002 8.14424 2.08841 7.77894 2.25132C7.41365 2.41422 7.08462 2.64853 6.81121 2.94045C6.53779 3.23238 6.32552 3.57604 6.18686 3.9512C6.0482 4.32637 5.98596 4.72548 6.00381 5.12505C5.41601 5.27619 4.87031 5.5591 4.40804 5.95236C3.94577 6.34562 3.57905 6.83892 3.33565 7.3949C3.09225 7.95087 2.97857 8.55494 3.0032 9.16136C3.02782 9.76778 3.19013 10.3606 3.47781 10.8951C2.97199 11.306 2.57423 11.8343 2.31915 12.434C2.06406 13.0337 1.95936 13.6866 2.01417 14.336C2.06898 14.9854 2.28162 15.6116 2.63361 16.1601C2.9856 16.7085 3.46627 17.1627 4.03381 17.4831C3.96372 18.0253 4.00555 18.5761 4.15669 19.1016C4.30784 19.627 4.5651 20.1159 4.91259 20.538C5.26008 20.9601 5.69042 21.3065 6.17703 21.5558C6.66364 21.8051 7.19618 21.952 7.74178 21.9874C8.28738 22.0228 8.83445 21.946 9.34919 21.7617C9.86394 21.5774 10.3354 21.2895 10.7346 20.9158C11.1337 20.5421 11.452 20.0906 11.6698 19.5891C11.8876 19.0876 12.0002 18.5468 12.0008 18V5.00005Z"
            stroke="#155DFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5.00005C11.9988 4.60008 12.0776 4.20391 12.2318 3.83485C12.386 3.46579 12.6124 3.13128 12.8977 2.851C13.1831 2.57072 13.5216 2.35032 13.8934 2.20278C14.2651 2.05524 14.6626 1.98353 15.0625 1.99186C15.4624 2.0002 15.8566 2.08841 16.2219 2.25132C16.5872 2.41422 16.9162 2.64853 17.1896 2.94045C17.463 3.23238 17.6753 3.57604 17.814 3.9512C17.9526 4.32637 18.0149 4.72548 17.997 5.12505C18.5848 5.27619 19.1305 5.5591 19.5928 5.95236C20.0551 6.34562 20.4218 6.83892 20.6652 7.3949C20.9086 7.95087 21.0223 8.55494 20.9976 9.16136C20.973 9.76778 20.8107 10.3606 20.523 10.8951C21.0288 11.306 21.4266 11.8343 21.6817 12.434C21.9368 13.0337 22.0415 13.6866 21.9867 14.336C21.9318 14.9854 21.7192 15.6116 21.3672 16.1601C21.0152 16.7085 20.5345 17.1627 19.967 17.4831C20.0371 18.0253 19.9953 18.5761 19.8441 19.1016C19.693 19.627 19.4357 20.1159 19.0882 20.538C18.7407 20.9601 18.3104 21.3065 17.8238 21.5558C17.3372 21.8051 16.8046 21.952 16.259 21.9874C15.7134 22.0228 15.1664 21.946 14.6516 21.7617C14.1369 21.5774 13.6654 21.2895 13.2663 20.9158C12.8671 20.5421 12.5488 20.0906 12.331 19.5891C12.1133 19.0876 12.0006 18.5468 12 18V5.00005Z"
            stroke="#155DFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 13C14.1604 12.7047 13.4273 12.167 12.8933 11.455C12.3593 10.743 12.0485 9.88867 12 9C11.9515 9.88867 11.6407 10.743 11.1067 11.455C10.5727 12.167 9.83956 12.7047 9 13"
            stroke="#155DFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5996 6.5C17.8416 6.08059 17.9785 5.60882 17.9986 5.125"
            stroke="#155DFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.00391 5.125C6.02368 5.60873 6.16024 6.0805 6.40191 6.5"
            stroke="#155DFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.47656 10.896C3.6595 10.747 3.85527 10.6145 4.06156 10.5"
            stroke="#155DFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.9375 10.5C20.1438 10.6145 20.3396 10.747 20.5225 10.896"
            stroke="#155DFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.0002 18.0004C5.31103 18.0007 4.63347 17.823 4.0332 17.4844"
            stroke="#155DFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.967 17.4844C19.3667 17.823 18.6892 18.0007 18 18.0004"
            stroke="#155DFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    bgColor: "bg-[#EBFDF3]",
  },
  {
    title: "Connection",
    description:
      "Share space with people who get it. Real, unhurried conversations that go beneath the surface.",
    icon: (
      <div className="bg-[#FAF5FF] h-10 w-10 flex justify-center items-center rounded-[10px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
            stroke="#9810FA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            stroke="#9810FA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299"
            stroke="#9810FA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799"
            stroke="#9810FA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    bgColor: "bg-[#EBFDF3]",
  },
  {
    title: "Growth",
    description:
      "Guided tools, quiet reflection, and breakthroughs that actually stay with you afterwards.",
    icon: (
      <div className="bg-[#F0FDF4] h-10 w-10 flex justify-center items-center rounded-[10px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 20H17"
            stroke="#00A63E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 20C15.5 17.5 10.8 13.6 13 10"
            stroke="#00A63E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 9.3996C10.6 10.1996 11.3 11.5996 11.8 13.0996C9.8 13.4996 8.3 13.4996 7 12.7996C5.8 12.1996 4.7 10.8996 4 8.59961C6.8 8.09961 8.4 8.5996 9.5 9.3996Z"
            stroke="#00A63E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0998 6C13.3374 7.19156 12.9539 8.58615 12.9998 10C14.8998 9.9 16.2998 9.4 17.2998 8.6C18.2998 7.6 18.8998 6.3 18.9998 4C16.2998 4.1 14.9998 5 14.0998 6Z"
            stroke="#00A63E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    bgColor: "bg-[#EFF8FF]",
  },
];

export function WhatTheCampIs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="py-10 lg:py-24">
      <div className="container mx-auto  flex flex-col items-center text-center">
        <Pill text="What this camp is" className="mb-4" />
        <h2 className="heading-2  max-w-2xl">Not just an event. A pause.</h2>
        <p className="paragraph mt-2 max-w-2xl">
          Most of life asks you to keep moving. This is the rare space that
          invites you to stop and finally listen to yourself.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col text-left p-8 rounded-[10px] border-[0.87px] border-[##C7CAC6]  bg-white"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${area.bgColor}`}
              >
                {area.icon}
              </div>
              <h3 className="text-[#101828] font-medium text-lg mb-3">
                {area.title}
              </h3>
              <p className="text-[#4A5565] text-base leading-[1.425rem]">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
