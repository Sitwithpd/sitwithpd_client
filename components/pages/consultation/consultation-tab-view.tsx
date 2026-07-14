"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

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
};

const TABS_LIST = [
  { id: "one-on-one", label: "One-to-One Consultation" },
  { id: "executive", label: "Executive Consultation" },
  { id: "business-strategy", label: "Business Strategy" },
  { id: "teams", label: "Team & Organisational Consultation" },
];

const TABS_CONTENT: Record<string, TabContentType> = {
  "one-on-one": {
    badgeLabel: "Most Popular",
    badgeBg: "bg-[#678b6d]",
    badgeText: "Online or In-Person",
    title: "One-to-One Consultation",
    subtitle: "Individuals, professionals, students",
    image: "/images/Image.webp", // placeholder
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
    badgeLabel: "Leadership",
    badgeBg: "bg-[#3D89DF]",
    badgeText: "Online or In-Person",
    title: "Executive Consultation",
    subtitle: "Executives, senior managers, founders",
    image: "/images/Image.webp", // placeholder
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
    badgeLabel: "Business",
    badgeBg: "bg-[#EE7424]",
    badgeText: "Online or In-Person",
    title: "Business Strategy Session",
    subtitle: "Entrepreneurs, business owners, SMEs",
    image: "/images/Image.webp", // placeholder
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
    badgeLabel: "Organisation",
    badgeBg: "bg-[#9E3BE7]",
    badgeText: "In-Person (preferred)",
    title: "Team & Organisational Consultation",
    subtitle: "Teams, organisations, institutions, charities",
    image: "/images/Image.webp", // placeholder
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
  if (!content) return null;

  const otherTabs = TABS_LIST.filter((t) => t.id !== currentTab);

  return (
    <div className="w-full flex flex-col pt-20 lg:pt-[100px]">
      {/* Top Navbar Tabs */}
      <div className="w-full border-b border-[#EAECF0]">
        <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center">
          <Link
            href="/consultation"
            className="flex items-center gap-2 text-[#567F57] hover:text-[#324414] text-[13px] font-medium py-4 md:border-r border-[#EAECF0] md:pr-8 md:mr-8 transition-colors shrink-0"
          >
            <ChevronLeft size={16} /> Back to Consultation
          </Link>
          <div className="flex items-center overflow-x-auto w-full scrollbar-hide gap-8">
            {TABS_LIST.map((tab) => (
              <Link
                key={tab.id}
                href={`/consultation/${tab.id}`}
                className={`whitespace-nowrap py-4 md:py-6 text-[13px] font-medium transition-colors border-b-2 relative -mb-[1px] ${
                  currentTab === tab.id
                    ? "border-[#567F57] text-[#131313]"
                    : "border-transparent text-[#606060] hover:text-[#131313]"
                }`}
              >
                {tab.label === "Team & Organisational Consultation"
                  ? "Team &"
                  : tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="w-11/12 max-w-[900px] mx-auto py-12 md:py-20 lg:py-24">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-medium text-white ${content.badgeBg}`}
          >
            {content.badgeLabel}
          </span>
          <span className="text-[#606060] text-sm">{content.badgeText}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#131313] mb-4">
          {content.title}
        </h1>
        <p className="text-[#567F57] text-base md:text-[20px] font-medium italic mb-10 md:mb-14">
          {content.subtitle}
        </p>

        {/* Image Banner */}
        <div className="relative w-full aspect-[21/9] md:aspect-[24/9] rounded-[24px] overflow-hidden mb-12 bg-[#F5F7F5]">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 md:p-10">
            <p className="text-[#A8D675] tracking-[2px] text-[11px] font-semibold mb-4">
              {content.overlayPrimary}
            </p>
            <div className="flex flex-wrap gap-3">
              {content.overlaySecondary.map((tag, i) => (
                <span
                  key={i}
                  className="px-5 py-1.5 rounded-full border-[0.67px] border-white/40 text-white text-[12px] bg-white/10 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Details List */}
        <div className="flex flex-col border-[0.67px] border-[#EAECF0] rounded-[16px] mb-14 divide-y divide-[#EAECF0]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:px-8 bg-white rounded-t-[16px] gap-2">
            <span className="text-[11px] font-semibold text-[#606060] uppercase tracking-[1.5px]">
              Duration
            </span>
            <span className="text-[15px] font-bold text-[#131313]">
              {content.duration}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:px-8 bg-white gap-2">
            <span className="text-[11px] font-semibold text-[#606060] uppercase tracking-[1.5px]">
              Format
            </span>
            <span className="text-[15px] font-bold text-[#131313]">
              {content.format}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:px-8 bg-white rounded-b-[16px] gap-2">
            <span className="text-[11px] font-semibold text-[#606060] uppercase tracking-[1.5px]">
              Investment
            </span>
            <span className="text-[15px] font-bold text-[#131313]">
              {content.investment}
            </span>
          </div>
        </div>

        <p className="text-[#606060] text-base leading-[1.7] mb-12 max-w-4xl">
          {content.description}
        </p>

        {/* What's Included */}
        <h3 className="text-[12px] font-bold text-[#1F4842] tracking-[1.5px] uppercase mb-6">
          What's Included
        </h3>
        <ul className="flex flex-col gap-4">
          {content.whatsIncluded.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-[#475467] text-[15px]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8D675] mt-[7px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Explore Other Sessions */}
      <div className="w-full bg-[#F9FAFB] py-16 md:py-24 border-t border-[#EAECF0]">
        <div className="w-11/12 max-w-7xl mx-auto">
          <h4 className="text-[11px] font-bold text-[#567F57] uppercase tracking-[2px] mb-3">
            Explore other sessions
          </h4>
          <h2 className="text-2xl md:text-[34px] font-semibold text-[#131313] mb-12">
            Other consultation options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTabs.map((tab) => {
              const tabContent = TABS_CONTENT[tab.id];
              return (
                <Link
                  key={tab.id}
                  href={`/consultation/${tab.id}`}
                  className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#EAECF0] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-transparent transition-all group flex flex-col h-full"
                >
                  <div className="mb-5">
                    <span
                      className={`px-3.5 py-1 rounded-full text-[10px] font-medium text-white ${tabContent.badgeBg}`}
                    >
                      {tabContent.badgeLabel}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#131313] mb-2 group-hover:text-[#567F57] transition-colors leading-snug">
                    {tabContent.title}
                  </h3>
                  <p className="text-[#606060] text-[13px] mb-10 font-medium">
                    {tabContent.duration} · {tabContent.investment}
                  </p>

                  <div className="mt-auto flex items-center text-[#567F57] text-[13px] font-medium">
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
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
