"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainerDelayed,
  staggerContainer,
  fadeInRight,
} from "@/lib/motion-variants";
import Image from "next/image";
import { CompassIcon, TargetIcon } from "lucide-react";

export function OurStory() {
  const steps = [
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0039 1.00195V5.0018M21.0041 3.00187H17.0037M10.0201 1.81636C10.063 1.58697 10.1847 1.37979 10.3642 1.2307C10.5438 1.08161 10.7698 1 11.0032 1C11.2366 1 11.4626 1.08161 11.6422 1.2307C11.8217 1.37979 11.9434 1.58697 11.9863 1.81636L13.0374 7.37414C13.112 7.76928 13.3041 8.13273 13.5884 8.41707C13.8728 8.70142 14.2363 8.89344 14.6315 8.96808L20.1899 10.019C20.4194 10.0619 20.6266 10.1836 20.7757 10.3631C20.9248 10.5426 21.0064 10.7686 21.0064 11.002C21.0064 11.2354 20.9248 11.4614 20.7757 11.6409C20.6266 11.8204 20.4194 11.9421 20.1899 11.985L14.6315 13.0359C14.2363 13.1106 13.8728 13.3026 13.5884 13.5869C13.3041 13.8713 13.112 14.2347 13.0374 14.6299L11.9863 20.1876C11.9434 20.417 11.8217 20.6242 11.6422 20.7733C11.4626 20.9224 11.2366 21.004 11.0032 21.004C10.7698 21.004 10.5438 20.9224 10.3642 20.7733C10.1847 20.6242 10.063 20.417 10.0201 20.1876L8.96904 14.6299C8.89439 14.2347 8.70234 13.8713 8.41796 13.5869C8.13359 13.3026 7.77009 13.1106 7.37491 13.0359L1.81646 11.985C1.58704 11.9421 1.37984 11.8204 1.23073 11.6409C1.08162 11.4614 1 11.2354 1 11.002C1 10.7686 1.08162 10.5426 1.23073 10.3631C1.37984 10.1836 1.58704 10.0619 1.81646 10.019L7.37491 8.96808C7.77009 8.89344 8.13359 8.70142 8.41796 8.41707C8.70234 8.13273 8.89439 7.76928 8.96904 7.37414L10.0201 1.81636ZM5.00276 19.0012C5.00276 20.1058 4.10726 21.0012 3.0026 21.0012C1.89794 21.0012 1.00244 20.1058 1.00244 19.0012C1.00244 17.8967 1.89794 17.0013 3.0026 17.0013C4.10726 17.0013 5.00276 17.8967 5.00276 19.0012Z"
            stroke="#60935D"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      ),
      title: "Pause & Reflect",
      description: (
        <p>
          <span className=" text-[#60935D] italic">
            {" "}
            Create space for deeper understanding{" "}
          </span>{" "}
          <br />
          Growth begins when we slow down. We encourage individuals to step away
          from life’s noise, reflect on their experiences, and reconnect with
          what truly matters.
        </p>
      ),
    },
    {
      icon: (
  <CompassIcon size={24} className="text-[#60935D]" />


      ),
      title: "Discover What Matters",
      description: (
        <p>
          <span className=" text-[#60935D] italic">
            {" "}
            Gain clarity, direction, and self-awareness{" "}
          </span>{" "}
          <br />
          Through thoughtful conversations and guided reflection, we help people
          better understand their thoughts, emotions, values, and aspirations,
          bringing clarity to where they are and where they want to go.
        </p>
      ),
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13M12 15C13.3967 14.4684 14.7367 13.7984 16 13M12 15L9 12.0002M9 12.0002C9.53214 10.6197 10.2022 9.29631 11 8.05025C12.1652 6.18723 13.7876 4.6533 15.713 3.59434C17.6384 2.53538 19.8027 1.98662 22 2.00025C22 4.72025 21.22 9.5 16 13M9 12.0002L4 11.9996C4 11.9996 4.55 8.9696 6 7.9996C7.62 6.9196 11 8.05025 11 8.05025M4.5 16.5003C3 17.7603 2.5 21.5003 2.5 21.5003C2.5 21.5003 6.24 21.0003 7.5 19.5003C8.21 18.6603 8.2 17.3703 7.41 16.5903C7.02131 16.2193 6.50929 16.005 5.97223 15.9883C5.43516 15.9717 4.91088 16.1541 4.5 16.5003Z"
            stroke="#60935D"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      ),
      title: "Transform Through Action",
      description: (
        <p>
          <span className=" text-[#60935D] italic">
            {" "}
            Turn insight into meaningful change{" "}
          </span>{" "}
          <br />
          Awareness is only the beginning. We support individuals in
          transforming self-discovery into intentional actions that lead to
          sustainable growth and lasting personal development.
        </p>
      ),
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0011 21V19C16.0011 17.9391 15.5797 16.9217 14.8295 16.1716C14.0792 15.4214 13.0618 15 12.0008 15H6.00032C4.93937 15 3.92187 15.4214 3.17167 16.1716C2.42146 16.9217 2 17.9391 2 19V21M16.0011 3.12793C16.8589 3.3503 17.6186 3.85119 18.161 4.55199C18.7033 5.25279 18.9976 6.11382 18.9976 6.99993C18.9976 7.88604 18.7033 8.74707 18.161 9.44787C17.6186 10.1487 16.8589 10.6496 16.0011 10.8719M22.0016 20.9999V18.9999C22.0009 18.1136 21.7059 17.2527 21.1629 16.5522C20.6199 15.8517 19.8596 15.3515 19.0014 15.1299M13.0009 7C13.0009 9.20914 11.2099 11 9.00056 11C6.79124 11 5.00024 9.20914 5.00024 7C5.00024 4.79086 6.79124 3 9.00056 3C11.2099 3 13.0009 4.79086 13.0009 7Z"
            stroke="#60935D"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      ),
      title: "Grow with Support",
      description: (
        <p>
          <span className=" text-[#60935D] italic">
            {" "}
            Build resilience through connection{" "}
          </span>{" "}
          <br />
          Through practical tools, transformative experiences, and a supportive
          community, we help people develop the confidence, resilience, and
          perspective needed to navigate life’s challenges with purpose.
        </p>
      ),
    },
    {
      icon: (
   <TargetIcon size={24} className="text-[#60935D]" />

      ),
      title: "Purpose",
      description: (
        <p>
          We believe every person has the capacity to live a meaningful and
          impactful life. Our mission is to help people discover what truly
          matters and align their lives with greater intention and purpose.
        </p>
      ),
    },
  ];

  return (
    <section className=" py-10 lg:pt-24 w-full">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto  flex flex-col items-center"
      >
        
        <motion.h2 variants={fadeInUp} className="heading-2 text-center ">
          Our Approach
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-base text-[#5A6C8A] mt-2 mb-16 max-w-2xl"
        >
          We guide individuals through a journey of reflection, discovery, and
          intentional growth, creating safe spaces where meaningful and lasting
          transformation can take place.
        </motion.p>

        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 w-full max-w-7xl bg-[#E9EDF0] py-10 border border-[#DEDEDE] rounded-[16px] relative "
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="bg-[#F2F4F7] border-l-4 border-[#649351] rounded-[10px] p-5 md:px-10 md:py-5 w-11/12 sm:w-10/12 mx-auto "
            >
              <div className="flex flex-col   ">
                <span className="bg-[#60935D1A] flex justify-center items-center rounded-full w-12 h-12  ">{step.icon}</span>
                <h3 className="font-semibold text-[#242424] text-xl mt-4 mb-3">
                  {step.title}
                </h3>
                <div className="text-black text-base leading-relaxed">
                  {step.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
