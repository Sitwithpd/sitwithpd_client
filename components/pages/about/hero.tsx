"use client";
import Image from "next/image";

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
        <div className="relative h-full w-[90%] lg:w-11/12 mx-auto flex flex-col gap-6 justify-center items-start max-w-6xl">
          <div className="space-y-4 lg:text-center ">
            <h1
              className={`text-[#F9FDF9] font-semibold text-[3.125rem] lg:text-[4rem] xl:text-[5rem] leading-[1.05]  `}
            >
              About Sit-With-PD
            </h1>
          </div>
          <p className="text-[#F9FDF9] text-lg  lg:max-w-3xl font-medium">
            A transformational platform born from personal experience dedicated
            to helping individuals reconnect with themselves and live with
            greater purpose. .
          </p>
       
        </div>
      </div>
    </section>
  );
}
