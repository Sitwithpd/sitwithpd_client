"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/components/store/use-modal-store";
import ProgramRegistrationModal from "./program-registration-modal";

interface IprogramsData {
  id: string;
  tag: {
    label: string;
    bg: string;
    text: string;
  };
  subtitle: string;
  title: string;
  slogan: string;
  description: string;
  image: {
    src: string;
    position: string;
    overlayPrimary: string;
    overlaySecondary: string[];
  };
  whatYoullCover: string[];
  details: {
    duration: string;
    investment: string;
    nextCohort: string;
  };
  whoThisIsFor: string[];
}
[];

export default function ProgramsListingCard({
  program,
}: {
  program: IprogramsData;
}) {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="flex flex-col w-full even:bg-[#F5F7F5] ">
      <section
        key={program.id}
        className="w-full flex flex-col pt-16 lg:pt-24 lg:pb-10  "
      >
        <div className="w-11/12 mx-auto max-w-7xl">
          {/* Header Area */}
          <div className="lg:mb-8  py-4 lg:py-0  sticky top-20 lg:static  z-10 bg-white ">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide ${program.tag.bg} ${program.tag.text}`}
              >
                {program.tag.label}
              </span>
              <span className="text-[#606060] text-sm ">
                {program.subtitle}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold lg:leading-[1.1] mb-2 lg:mb-4 text-[#131313] tracking-tight">
              {program.title}
            </h2>
            <p className="text-regular-button italic text-sm lg:text-base ">
              {program.slogan}
            </p>
          </div>

          {/* Content Area */}
          <div
            className={`flex flex-col gap-5 lg:gap-10 items-start ${
              program.image.position === "right"
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-[40%] shrink-0 relative overflow-hidden rounded-[16px] aspect-4/3 ">
              {/* Fallback color for image loading */}
              <Image
                src={program.image.src || "/images/placeholder.png"}
                alt={program.title}
                fill
                className="object-cover"
              />

              {/* Overlay Tags */}
              <div className="absolute inset-0  bg-linear-to-t from-[#0F2318B2]   to-[#00000000] flex flex-col justify-end p-4">
                <p className="text-[#A8D675] tracking-[2px] text-xs  mb-3">
                  {program.image.overlayPrimary}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {program.image.overlaySecondary.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full border-[0.67px] border-[#FFFFFF4D] text-white text-[11px] bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Text / Details */}
            <div className="w-full lg:flex-1 flex flex-col pt-2 ">
              <p className="text-[#606060] text-base leading-relaxed mb-5">
                {program.description}
              </p>

              <h3 className="text-[13px] font-semibold text-[#1F4842] tracking-[1.5px] uppercase mb-4">
                WHAT YOU'LL COVER
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-[#475467]">
                {program.whatYoullCover.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[#344054] text-sm leading-snug lg:w-10/12"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-regular-button mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full border-t border-gray-100 mt-8" />

              <div className=" flex flex-col lg:grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4 w-full mb-10">
                <div>
                  <h4 className="text-[10px] sm:text-[11px]  text-[#606060] uppercase tracking-[1px] mb-2">
                    DURATION
                  </h4>
                  <p className="text-base font-medium text-[#131313] leading-snug pr-4">
                    {program.details.duration}
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-[11px]  text-[#606060] uppercase tracking-[1px] mb-2">
                    INVESTMENT
                  </h4>
                  <p className="text-base font-medium text-[#131313] leading-snug pr-4">
                    {program.details.investment}
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="text-[10px] sm:text-[11px]  text-[#606060] uppercase tracking-[1px] mb-2">
                    NEXT COHORT
                  </h4>
                  <p className="text-base font-medium text-regular-button leading-snug pr-4">
                    {program.details.nextCohort}
                  </p>
                </div>
              </div>

              <div>
                <Button
                  variant={"regular"}
                  className=""
                  onClick={() =>
                    openModal(
                      "registration-form",
                      <ProgramRegistrationModal program={program} />,
                    )
                  }
                >
                  Register for this Programme
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M7.4 1.4L13.1 7.1L7.4 12.8M1.1 7.1H13.1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Who This Is For Bottom Bar */}
        <div className="w-full bg-[#F5F7F5] border-[0.67px] border-[#E8E8E8] mt-10 py-6">
          <div className=" flex flex-col md:flex-row md:items-center gap-6 md:gap-12 lg:gap-24 w-11/12 mx-auto lg:pr-20">
            <div className="shrink-0">
              <h3 className="text-[11px] font-bold text-[#1F4842] tracking-[1.5px] uppercase ">
                WHO THIS IS FOR
              </h3>
            </div>
            <ul className="flex flex-row flex-wrap gap-x-8 gap-y-4   w-full">
              {program.whoThisIsFor.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[14px] text-[#344054]  w-auto "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8D675] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
