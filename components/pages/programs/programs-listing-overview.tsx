"use client";
import React from "react";
import ProgramsListingCard from "./programs-listing-card";
import { ReusableCta } from "@/components/shared/reusable-cta";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProgramsListingOverview() {
  const programsData = [
    {
      id: "undergraduates",
      tag: {
        label: "For Students",
        bg: "bg-regular-button",
        text: "text-white",
      },
      subtitle: "6-week cohort programme",
      title: "Transition for Undergraduates",
      slogan: "Find yourself. Own your story. Step into your future.",
      description:
        "A presence-based programme supporting students navigating identity, pressure, and life transitions with clarity and emotional stability. University life comes with extraordinary opportunity and extraordinary pressure. This programme creates a safe and structured space for undergraduates to explore who they are, build emotional intelligence, and transition into adulthood with confidence and purpose.",
      image: {
        src: "/images/Image.webp",
        position: "left",
        overlayPrimary: "IDENTITY · EMOTIONAL CLARITY · SELF-AWARENESS",
        overlaySecondary: ["Identity", "Emotional clarity", "Self-awareness"],
      },
      whatYoullCover: [
        "Understanding your identity beyond grades and performance",
        "Discovering your values and what truly matters to you",
        "Managing academic pressure and emotional burnout",
        "Developing resilience and a growth mindset",
        "Building healthy relationships with peers and mentors",
        "Preparing for life after university with intention",
      ],
      details: {
        duration: "6 weeks · 2 sessions per week · 90 mins each",
        investment: "$27 per participant",
        nextCohort: "September 2026",
      },
      whoThisIsFor: [
        "Undergraduates in their 1st–3rd year",
        "Students feeling lost, overwhelmed, or unfocused",
        "Those navigating major life transitions",
        "Students seeking purpose beyond their degree",
      ],
    },
    {
      id: "professionals",
      tag: {
        label: "For Professionals",
        bg: "bg-[#FA9874]",
        text: "text-white",
      },
      subtitle: "8-week executive cohort",
      title: "Marketplace Talents Programme",
      slogan: "Thrive at work. Lead with purpose. Live with intention.",
      description:
        "A structured programme offering guided support, emotional awareness, and clarity in navigating work and personal growth. Designed for ambitious professionals who are achieving results but feel something is still missing this programme bridges the gap between professional success and personal fulfilment, helping you lead well at work and live well at home.",
      image: {
        src: "/images/Image.webp",
        position: "right",
        overlayPrimary: "WORK-LIFE BALANCE · RESILIENCE · PURPOSE",
        overlaySecondary: ["Work-life balance", "Resilience", "Purpose"],
      },
      whatYoullCover: [
        "Redefining success on your own terms",
        "Communicating with confidence and clarity",
        "Building sustainable work-life rhythms",
        "Discovering your unique professional contribution",
        "Developing emotional resilience under pressure",
        "Leading teams with authenticity and influence",
      ],
      details: {
        duration: "8 weeks · Weekly sessions · 2 hours each",
        investment: "$27 per participant",
        nextCohort: "October 2026",
      },
      whoThisIsFor: [
        "Mid-career professionals and managers",
        "Entrepreneurs balancing growth with life",
        "Those feeling unfulfilled despite external success",
        "Professionals ready for their next level of impact",
      ],
    },
    {
      id: "leaders",
      tag: { label: "For Leaders", bg: "bg-[#3D89DF]", text: "text-white" },
      subtitle: "10-week fellowship programme",
      title: "Global Stewardship Fellowship",
      slogan: "Lead beyond your title. Steward beyond your role.",
      description:
        "A structured programme offering guided support, emotional awareness, and clarity in leadership, responsibility, and purposeful impact. This fellowship is for those who understand that true leadership is about service and who are ready to lead organisations, communities, and causes with wisdom, integrity, and global perspective.",
      image: {
        src: "/images/Image.webp",
        position: "left",
        overlayPrimary: "LEADERSHIP · STEWARDSHIP · IMPACT",
        overlaySecondary: ["Leadership", "Stewardship", "Impact"],
      },
      whatYoullCover: [
        "The philosophy of servant leadership",
        "Sustainable impact across generations",
        "Global responsibility and ethical decision-making",
        "Navigating complex stakeholder relationships",
        "Building organisational culture and legacy",
        "Developing the next generation of leaders",
      ],
      details: {
        duration: "10 weeks · Bi-weekly intensive sessions",
        investment: "$27 per participant",
        nextCohort: "January 2027",
      },
      whoThisIsFor: [
        "Senior leaders and executives",
        "Founders and visionary entrepreneurs",
        "Community, ministry and government leaders",
        "Those called to lead with legacy in mind",
      ],
    },
  ];
  return (
    <section className="relative">
      <div className="h-20 bg-[#1A2E1A] w-full fixed top-0" />
      <div className=" overflow-x-auto scrollbar-hide sticky top-20 z-20 bg-white py-5 space-y-3">
        <div className="w-11/12 mx-auto">
<Link href={"/programs"} className="flex items-center gap-2 text-regular-button font-medium text-sm">
  <ArrowLeft size={20} color="#60935D" /> Back to Programs
</Link>
        <div className="flex items-center gap-6">
         {programsData.map((program) => (
          <Button variant="outline" className="text-[#121212] hover:bg-white/80 border-none px-0  font-semibold text-sm " key={program.title} onClick={() => {document.getElementById(program.title)?.scrollIntoView({ behavior: "smooth" })}}>
           {program.title}
          </Button>
         ))}

        </div>
        </div>

      </div>
      <div className="w-o mb-10 py-10">
        {programsData.map((program) => (
          <div key={program.title} id={program.title}>
            <ProgramsListingCard program={program} />
          </div>
        ))}
      </div>
      <ReusableCta
        subtitle="Not Sure Which Path Is Right?"
        title="Speak to someone who can help you decide.."
        description="Every journey is different. Book a free 30-minute discovery call with a member of our team  we'll listen, understand your goals, and point you to the right programme."
        buttons={[
          {
            text: "Book a Free Discovery Call",
            href: "/programs/programs-listing",
          },
          {
            text: "Register Today",
            href: "/",
          },
        ]}
      />
    </section>
  );
}
