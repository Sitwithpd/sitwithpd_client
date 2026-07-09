"use client";

import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import useMobile from "@/hooks/use-mobile-breakpoint";
import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeInRight,
  fadeInUp,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";

export function Hero() {
  const { isMobile } = useMobile();

  const slides = [
    {
      id: 1,
      mobileSrc: "/images/home-hero-1.png",
      desktopSrc: "/images/homepage-bg.webp",
      alt: "Presence changes everything hero background",
      pillColor: "text-[#F7C164]",
      description:
        "Helping individuals gain clarity, build resilience, and live with greater purpose  through reflective conversations, therapeutic experiences, and meaningful community. ",
      titleWidth: "w-full sm:w-[40%] md:w-[40%] lg:w-[50%]",
    },
    {
      id: 2,
      mobileSrc: "/images/home-hero-2.png",
      desktopSrc: "/images/desktop-hero-2.png",
      alt: "Guided programs hero background",
      pillColor: "text-[#A8D675]",
      description:
        "Create space to pause, reflect, and reconnect with yourself. Through our presence-based approach, we help you gain clarity, strengthen resilience, and turn self-awareness into meaningful action.",
      imageClass: "object-cover object-[75%_center] md:object-center",
      titleWidth: "w-full sm:w-[70%] md:w-[45%] lg:w-[60%]",
    },
    {
      id: 3,
      mobileSrc: "/images/home-hero-3.png",
      desktopSrc: "/images/desktop-hero-3.png",
      alt: "Therapeutic camp hero background",
      pillColor: "text-[#F7C164]",
      description:
        "Whether you're seeking personal guidance, structured growth, immersive therapeutic experiences, or a supportive community, Sit With PD offers pathways designed to help you move forward with confidence and purpose..",
      imageClass: "object-cover  object-[75%_center] md:object-center",
      titleWidth: "w-full sm:w-[80%] md:w-[60%] lg:w-[70%]",
    },
  ];

  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((slide) => {
          const src = isMobile ? slide.mobileSrc : slide.desktopSrc;

          return (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full min-h-svh h-svh lg:min-h-dvh lg:h-dvh flex items-center justify-center  pt-24">
                <Image
                  src={src}
                  alt={slide.alt}
                  fill
                  className={slide.imageClass}
                  priority
                />
                <div className="absolute inset-0 bg-black/25" />
                <motion.div
                  variants={staggerContainerSlow}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="relative h-full w-[90%] mx-auto  flex flex-col gap-6 justify-center items-start max-w-7xl"
                >
                  <div className="space-y-4  ">
                    <motion.p
                      variants={fadeInUp}
                      className={`xl:text-x  l text-base ${slide.pillColor} transition-colors duration-300  font-extralight`}
                    >
                      Purpose · Direction · Personal Discovery
                    </motion.p>
                    <motion.h1
                      variants={fadeInUp}
                      className={`text-[#F9FDF9] font-semibold text-[3.125rem] lg:text-[4rem] xl:text-[5rem] leading-[100%]  `}
                    >
                      Sit With PD
                    </motion.h1>
                    <motion.p
                      variants={fadeInUp}
                      className="lg:text-[1.25rem] text-xl text-[#F7FBF6]  md:text-start  sm:w-10/12 md:w-2/3 lg:w-full max-w-[812px]"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.h2
                      variants={fadeInUp}
                      className="font-light text-[#F9FDF9] text-2xl xl:text-[3.125rem] "
                    >
                      Global{" "}
                      <span className="italic text-[#A8D675] ">
                        Therapeutic{" "}
                      </span>{" "}
                      Network
                    </motion.h2>
                  </div>
                  <motion.div
                    variants={staggerContainerDelayed}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col sm:flex-row justify-start md:justify-start w-full gap-4 mt-4"
                  >
                    <motion.div variants={fadeInRight}>
                      <Link href="/contact#contact">
                        <Button
                          variant={"regular"}
                          className="w-full lg:w-auto"
                        >
                          Book a discovery call <CaretRight />
                        </Button>
                      </Link>
                    </motion.div>

                    <motion.div variants={fadeInRight}>
                      <Link href="/about">
                        <Button
                          variant={"outline"}
                          className="w-full lg:w-auto"
                        >
                          Our Story
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* make pagination dots white */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 1 !important;
          width: 0.75rem !important;
          height: 0.75rem !important;
        }
        .swiper-pagination-bullet-active {
          background: #ffffff !important;
          width: 2rem !important;
          border-radius: 1rem !important;
        }
      `}</style>
    </section>
  );
}
