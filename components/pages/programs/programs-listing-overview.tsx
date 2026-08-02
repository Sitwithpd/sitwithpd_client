"use client";
import React, { useEffect } from "react";
import ProgramsListingCard from "./programs-listing-card";
import { ReusableCta } from "@/components/shared/reusable-cta";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useGetPrograms } from "@/lib/api/hooks/programs/programs.hooks";
import { Program } from "@/types/programs.types";
import { ProgramsListingOverviewSkeleton } from "@/components/skeletons/programs-listing-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProgramsListingOverview() {
  const { data: programs, isLoading, isError } = useGetPrograms();

  useEffect(() => {
    if (!isLoading && programs?.data?.length && typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setTimeout(() => {
          const element =
            document.getElementById(hash) ||
            document.getElementById(decodeURIComponent(hash));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    }
  }, [isLoading, programs]);

  return (
    <section className="relative">
      <div className="h-20 bg-[#1A2E1A] w-full fixed top-0" />
      <div className="  sticky  top-20 z-20 bg-white pt-5 pb-0 space-y-3">
        <div className="w-11/12 mx-auto">
          <Link
            href={"/programs"}
            className="flex items-center gap-2 text-regular-button font-medium text-sm"
          >
            <ArrowLeft size={20} color="#60935D" /> Back to Programs
          </Link>
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {isLoading
              ? [1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-8 w-36 rounded-md" />
                ))
              : programs?.data?.map((program: Program) => (
                  <Button
                    variant="outline"
                    className="text-[#121212] hover:bg-white/80 border-none px-0  font-semibold text-sm "
                    key={program.id}
                    onClick={() => {
                      document
                        .getElementById(program.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {program.title}
                  </Button>
                ))}
          </div>
        </div>
      </div>
      <div className="w-full mb-10 py-10">
        {isLoading ? (
          <ProgramsListingOverviewSkeleton />
        ) : isError ? (
          <p className="text-center text-[#606060] py-20 text-base">
            Failed to load programmes. Please try again later.
          </p>
        ) : (
          programs?.data?.map((program: Program) => (
            <div key={program.id} id={program.id}>
              <ProgramsListingCard program={program} />
            </div>
          ))
        )}
      </div>
      <ReusableCta
        subtitle="Not Sure Which Path Is Right?"
        title="Speak to someone who can help you decide.."
        description="Every journey is different. Book a free 30-minute discovery call with a member of our team  we'll listen, understand your goals, and point you to the right programme."
        buttons={[
          {
            text: "Contact Us",
            href: "/contact",
          },
          {
            text: "Book Consultation",
            href: "/consultation",
          },
        ]}
      />
    </section>
  );
}
