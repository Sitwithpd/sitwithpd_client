"use client";

import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export function ProgramHero() {

  const slides = [
    {
      id: 1,
      imageSrc: "/images/programs-hero-1.png",
      alt: "Healing Through Presence",
      title: <p>Where Growth<br className=""/>Becomes a Lifestyle</p>,
      description:
        "Transformation doesn't happen by chance  it happens through intentional learning, practical action, and consistent personal development.",
      imageClass: "object-cover object-center",
    },
    // {
    //   id: 2,
    //   imageSrc: "/images/programs-hero-2.png",
    //   alt: "Structured Growth Roadmap",
    //   title: <p>Understand<br className="hidden lg:block"/> Your Emotions.</p>,
    //   description:
    //     "Step-by-step programs to help you identify, process, and respond to what you feel with greater clarity and self-awareness, every week.",
    //   imageClass: "object-cover object-center",
    //   titleWidth: "w-full sm:w-[60%] md:w-[50%] lg:w-[60%]",
    // },
    // {
    //   id: 3,
    //   imageSrc: "/images/programs-hero-3.png",
    //   alt: "Presence in Daily Life",
    //   title: <p>Find Stability<br className="hidden lg:block"/> Through Change.</p>,
    //   description:
    //     "Navigate uncertainty, new life phases, and personal growth with structured support from experienced facilitators who walk the journey with you.",
    //   imageClass: "object-cover object-center",
    //   titleWidth: "w-full sm:w-[70%] md:w-[55%] lg:w-[65%]",
    // },
  ];

  return (
    <section className="w-full">
     
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full min-h-svh sm:h-svh pb-10 sm:pb-0  flex items-end lg:items-center justify-center">
                <Image
                  src={slide.imageSrc}
                  alt={slide.alt}
                  fill
                  className={slide.imageClass}
                  priority
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative  w-full  mx-auto flex flex-col gap-6 h-full justify-center items-center max-w-7xl">
                  <div className="space-y-4  flex flex-col  w-11/12 mx-auto ">
                  <h5 className="text-[#A8D675] text-base font-medium uppercase tracking-[3px] mb-4"> Sit With PD · Programs</h5>
                    <h1
                      className={`text-[#F9FDF9] font-semibold text-[3.125rem] lg:text-[4rem]  leading-[100%] `}
                    >
                      {slide.title}
                    </h1>
                    <p className="text-[1.125rem] md:text-lg text-[#F7FBF6] opacity-90 leading-relaxed md:w-8/12">
                      {slide.description}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:justify-start  w-11/12 mx-auto ">
                    <Button
                      variant="regular"
                      className=""
                      onClick={() =>
                        document
                          .getElementById("program-growth")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Browse Programs <CaretRight className="ml-2" />
                    </Button>
                    <Link href="/consultation#consultation-cta">
                      <Button variant="outline" className="w-full text-[#A8D675]">
                        Register Today
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

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
