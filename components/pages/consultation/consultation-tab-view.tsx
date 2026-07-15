"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import {
  fadeInUp,
  fadeInRight,
  staggerContainerSlow,
  staggerContainerDelayed,
  staggerContainer,
  fadeInUpSlower,
} from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import { handleBookingClick } from "@/lib/utils";

export type TabContentType = {
  badgeLabel: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  subtitle: string;
  image: string;
  overlayPrimary: string;
  overlaySecondary: string[];
  duration: string;
  format: string;
  investment: string;
  description: string;
  whatsIncluded: string[];
  calLink: string;
};

const TABS_LIST = [
  { id: "one-on-one", label: "One-to-One Consultation" },
  { id: "executive", label: "Executive Consultation" },
  { id: "business-strategy", label: "Business Strategy" },
  { id: "teams", label: "Team & Organisational Consultation" },
];

const TABS_CONTENT: Record<string, TabContentType> = {
  "one-on-one": {
    calLink: "sitwithpd/one-on-one-consultations",
    badgeLabel: "Most Popular",
    badgeBg: "bg-[#60935D]",
    badgeText: "Online or In-Person",
    title: "One-to-One Consultation",
    subtitle: "Individuals, professionals, students",
    image: "/images/tab1.png", 
    overlayPrimary: "IDENTITY · EMOTIONAL CLARITY · SELF-AWARENESS",
    overlaySecondary: ["Confidential", "Solution-focused", "Tailored"],
    duration: "60 minutes",
    format: "Online or In-Person",
    investment: "£99 per session",
    description:
      "A focused, confidential conversation tailored entirely to your situation. Ideal for individuals navigating personal decisions, career transitions, or seeking clarity on a specific challenge.",
    whatsIncluded: [
      "Pre-session consultation form",
      "60-minute guided session",
      "Key insights and action summary",
      "One follow-up email within 48 hours",
    ],
  },
  executive: {
    calLink: "sitwithpd/executive-consultations",
    badgeLabel: "Leadership",
    badgeBg: "bg-[#3D89DF]",
    badgeText: "Online or In-Person",
    title: "Executive Consultation",
    subtitle: "Executives, senior managers, founders",
    image: "/images/tab2.png", 
    overlayPrimary: "IDENTITY · EMOTIONAL CLARITY · SELF-AWARENESS",
    overlaySecondary: ["Confidential", "Solution-focused", "Tailored"],
    duration: "90 minutes",
    format: "Online or In-Person",
    investment: "£179 per session",
    description:
      "A strategic, high-value session designed for senior leaders and executives. Focused on leadership effectiveness, decision-making, organisational challenges, and executive presence.",
    whatsIncluded: [
      "Pre-session leadership brief",
      "90-minute deep-dive session",
      "Strategic recommendations document",
      "Two follow-up touchpoints",
    ],
  },
  "business-strategy": {
    calLink: "sitwithpd/business-strategy-consultations ",
    badgeLabel: "Business",
    badgeBg: "bg-[#E17100]",
    badgeText: "Online or In-Person",
    title: "Business Strategy Session",
    subtitle: "Entrepreneurs, business owners, SMEs",
    image: "/images/tab4.png", 
    overlayPrimary: "IDENTITY · EMOTIONAL CLARITY · SELF-AWARENESS",
    overlaySecondary: ["Confidential", "Solution-focused", "Tailored"],
    duration: "Half-day (3 hours)",
    format: "Online or In-Person",
    investment: "£349 per session",
    description:
      "An intensive working session for entrepreneurs and business owners. We'll explore your business challenges, growth opportunities, strategy, and build a clear action plan together.",
    whatsIncluded: [
      "Detailed pre-session business brief",
      "3-hour strategy working session",
      "Customised strategy document",
      "30-day follow-up call",
    ],
  },
  teams: {
    calLink: "sitwithpd/teams-org.-consultations",
    badgeLabel: "Organisation",
    badgeBg: "bg-[#9810FA]",
    badgeText: "In-Person (preferred)",
    title: "Team & Organisational Consultation",
    subtitle: "Teams, organisations, institutions, charities",
    image: "/images/tab3.png", 
    overlayPrimary: "IDENTITY · EMOTIONAL CLARITY · SELF-AWARENESS",
    overlaySecondary: ["Confidential", "Solution-focused", "Tailored"],
    duration: "Full-day advisory",
    format: "In-Person (preferred)",
    investment: "From £599",
    description:
      "Comprehensive advisory support for organisations seeking to improve culture, leadership, collaboration, and performance. Tailored to your organisation's unique context and goals.",
    whatsIncluded: [
      "Organisational needs assessment",
      "Full-day consultation and workshop",
      "Detailed advisory report",
      "Implementation roadmap and follow-up",
    ],
  },
};

export function ConsultationTabView({ currentTab }: { currentTab: string }) {
  const content = TABS_CONTENT[currentTab];
  if (!content) return notFound();

  const otherTabs = TABS_LIST.filter((t) => t.id !== currentTab);

  const labelStyle =
    "text-[11px] font-medium text-[#606060] uppercase tracking-[1px]";
  const labelValueStyle = "text-[15px] font-semibold text-[#131313]";

  return (
    <div className="w-full relative flex flex-col pt-20 lg:pt-20">
      <div className="w-full h-20 bg-[#1A2E1A] fixed top-0 z-11" />
      {/* Top Navbar Tabs */}
      <div className="w-full sticky top-20 bg-white z-10 pb-2.1 border-b border-[#EAECF0]">
        <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center">
          <Link
            href="/consultation"
            className="flex items-center gap-2 text-regular-button hover:text-[#324414] text-[13px] font-medium py-4 md:border-r border-[#EAECF0] md:pr-8 md:mr-8 transition-colors shrink-0"
          >
            <ChevronLeft size={16} /> Back to Consultation
          </Link>
          <div className="flex items-center overflow-x-auto w-full scrollbar-hide gap-8">
            {TABS_LIST.map((tab) => (
              <Link
                key={tab.id}
                href={`/consultation/${tab.id}`}
                className={`whitespace-nowrap py-3 md:py-4 text-[13px] font-medium transition-colors border-b-2 relative -mb-px ${
                  currentTab === tab.id
                    ? "border-regular-button text-[#131313]"
                    : "border-transparent text-[#606060] hover:text-[#131313]"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} className="w-11/12 max-w-5xl mx-auto py-12 mb-0">
        {/* Badges */}
        <motion.div variants={fadeInUpSlower} className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-medium text-white ${content.badgeBg}`}
          >
            {content.badgeLabel}
          </span>
          <span className="text-[#606060] text-sm">{content.badgeText}</span>
        </motion.div>

        {/* Title */}
        <motion.h1 variants={fadeInUpSlower} className="lg:text-4xl text-3xl  font-bold text-[#131313] mb-4">
          {content.title}
        </motion.h1>
        <motion.p variants={fadeInUpSlower} className="text-regular-button text-sm md:text-base] font-medium italic mb-5">
          {content.subtitle}
        </motion.p>

        {/* Image Banner */}
        <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full aspect-video lg:aspect-21/9 lg:rounded-[16px]  rounded-lg overflow-hidden mb-8 bg-[#F5F7F5]">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0F2318B2]  to-[#00000000] flex flex-col justify-end p-4 md:p-10">
            <p className="text-[#A8D675] tracking-[2px] text-[11px] font-semibold mb-4">
              {content.overlayPrimary}
            </p>
            <div className="flex flex-wrap gap-3">
              {content.overlaySecondary.map((tag, i) => (
                <span
                  key={i}
                  className="md:px-5 px-3 py-1.5 rounded-full border-[0.67px] border-[#FFFFFF4D] text-white text-[11px] bg-transparent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Details List */}
        <div className="flex flex-col border-[0.67px] border-[#E8E8E8] p-5 rounded-[12px] mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-2">
            <span className={labelStyle}>Duration</span>
            <span className={labelValueStyle}>{content.duration}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-2">
            <span className={labelStyle}>Format</span>
            <span className={labelValueStyle}>{content.format}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-2">
            <span className={labelStyle}>Investment</span>
            <span className={labelValueStyle}>{content.investment}</span>
          </div>
        </div>

        <p className="text-[#606060] text-base leading-[1.7] mb-6 max-w-4xl">
          {content.description}
        </p>

        {/* What's Included */}
        <h3 className="text-xs font-semibold text-[#1F4842] tracking-[1.5px] uppercase mb-6">
          What's Included
        </h3>
        <motion.ul
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-4"
        >
          {content.whatsIncluded.map((item, i) => (
            <motion.li
              variants={fadeInRight}
              key={i}
              className="flex items-start gap-4 text-[#344054] text-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8D675] mt-[7px] shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="w-11/12 mx-auto mb-15 flex justify-center items-center">
        <Button onClick={() => handleBookingClick(content.calLink)} variant="regular">Book Consultation</Button>
      </div>

      {/* Explore Other Sessions */}
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full bg-[#F5F7F5] py-16 md:py-15 border-[0.67px] border-[#E8E8E8]"
      >
        <div className="w-11/12 max-w-7xl mx-auto">
          <motion.h4
            variants={fadeInUp}
            className="text-[11px] font-bold text-[#567F57] uppercase tracking-[2px] mb-3"
          >
            Explore other sessions
          </motion.h4>
          <motion.h2 variants={fadeInUp} className="heading-2 mb-10">
            Other consultation options
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTabs.map((tab, i) => {
              const tabContent = TABS_CONTENT[tab.id];
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.55,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="bg-white rounded-[12px] p-5   border-[0.67px] border-[#E4EBE4]  hover:border-transparent transition-all group flex flex-col h-full"
                >
                  <div className="mb-5">
                    <span
                      className={`px-3.5 py-1 rounded-full text-[10px] font-medium text-white ${tabContent.badgeBg}`}
                    >
                      {tabContent.badgeLabel}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#131313] mb-2 group-hover:text-[#567F57] transition-colors leading-snug">
                    {tabContent.title}
                  </h3>
                  <p className="text-[#606060] text-sm mb-10 font-medium">
                    {tabContent.duration} · {tabContent.investment}
                  </p>

                  <Link
                    href={`/consultation/${tab.id}`}
                    className="mt-auto flex items-center text-regular-button text-xsfont-medium"
                  >
                    Select this session
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1.5 transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M7.4 1.4L13.1 7.1L7.4 12.8M1.1 7.1H13.1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
