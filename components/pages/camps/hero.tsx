"use client"

import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";
import Image from "next/image";
import Link from "next/link";


const options = [
  {
    title: "3 days",
    description: "Immersive retreat"
  },
  {
    title: "Lagos, NG",
    description: "Gardenia Tropicana"
  },
  {
    title: "Small group",
    description: "Intentional & safe"
  }
]

export function CampHero() {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-svh lg:min-h-dvh flex items-center justify-center  py-24">
        <Image
          src={"/images/camp-hero.webp"}
          alt={"Camp page background image"}
          fill
          className="object-cover object-[70%_center] md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative h-full w-[90%] ] mx-auto  flex flex-col gap-6 justify-center items-start max-w-7xl">
          <div className="space-y-4 lg:text-center  ">
            <h1
              className={`text-[#F9FDF9] font-semibold text-[3.125rem] lg:text-[4rem] xl:text-[5rem] leading-[1.05] lg:text-center `}
            >
              A space to pause, reflect, and reconnect with yourself.
            </h1>
            <p className="lg:text-[1.25rem] text-xl text-[#F7FBF6] lg:text-center md:text-start lg:mx-auto sm:w-10/12 md:w-9/12 ">
              Three days away from the noise. In nature, with people on the same journey — guided by those who have walked it too.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-start md:justify-start lg:justify-center w-full gap-4 mt-4">
            <Button onClick={() => document.getElementById("camp-services")?.scrollIntoView({behavior: "smooth"})} variant={"regular"}>
              Apply Now <CaretRight />
            </Button>
            <Link href={"/about"}>
            <Button variant={"outline"} className="w-full ">
              Learn More
            </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 lg:w-8/12 w-full mx-auto">
        <div className="flex items-center justify-center">
          {options.map((option, index) => (
            <div key={index} className="py-2 text-center flex-1 border-r border-[#C7CAC6] px-2">
              <h3 className="text-[#E7F6EC] lg:text-2xl text-xl font-semibold">
                {option.title}
              </h3>
              <p className="text-[#E7F6EC] lg:text-base text-sm mt-1.5">{option.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
