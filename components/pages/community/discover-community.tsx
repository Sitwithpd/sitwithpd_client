"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  fadeInRight,
  staggerContainerSlow,
  staggerContainerDelayed,
  staggerContainer,
  fadeInUpSlower,
} from "@/lib/motion-variants";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GeneralistPathfindersIcon from "@/pd-icons/generalist-pathfinders-icon";
import ImpactVolunteersIcon from "@/pd-icons/impact-volunteers-icon";
import InternshipHubIcon from "@/pd-icons/internship-hub-icon";
import PhilanthropyIcon from "@/pd-icons/philanthropy-icon";
import { Sparkles } from "lucide-react";
import StewardshipIcon from "@/pd-icons/stewardship-icon";
import React from "react";

const COMMUNITIES = [
  {
    title: "The Generalist Pathfinders",
    subtitle:
      "A supportive space for multi-passionate individuals exploring diverse career paths and interests.",
    description:
      "Discover your strengths across multiple disciplines, connect with fellow generalists, and build a portfolio career that reflects your full range of talents and curiosities.",
    gains: [
      "Weekly exploration sessions across different career paths and disciplines",
      "Strength-mapping workshops to identify your transferable skills",
      "Peer coaching circles for navigating career transitions",
      "Monthly guest speakers who built successful portfolio careers",
      "Resource library with guides on multi-disciplinary growth",
      "Accountability partnerships for personal development goals",
    ],
    topics: [
      "Career Exploration",
      "Portfolio Careers",
      "Self-Discovery",
      "Skill Mapping",
      "Life Design",
    ],
    link: "https://chat.whatsapp.com/LAOVNyQho0HKzPX8Vw6l9e?mode=gi_t",
    icon: <GeneralistPathfindersIcon />,
    bgColor: "#A8D6751A",
  },
  {
    title: "The Impact Volunteers Network",
    subtitle:
      "For passionate individuals dedicated to creating positive change through meaningful volunteer work.",
    description:
      "Connect with vetted volunteer opportunities worldwide, collaborate on impact projects, and build a community of changemakers who believe in giving back.",
    gains: [
      "Curated volunteer opportunities across local and global organizations",
      "Impact project planning and collaboration workshops",
      "Skills-based volunteering matchmaking with nonprofits",
      "Monthly impact storytelling sessions to share your journey",
      "Training in community organizing and grassroots leadership",
      "Certificates and endorsements for completed volunteer projects",
    ],
    topics: [
      "Community Service",
      "Social Impact",
      "Nonprofit Work",
      "Fundraising",
      "Global Outreach",
    ],
    link: "https://chat.whatsapp.com/EBw3foMpCv76zGCSB6b3v8?mode=gi_t",
    icon: <ImpactVolunteersIcon />,
    bgColor: "#ffffff",
  },
  {
    title: "The Internship Knowledge Hub",
    subtitle:
      "A dedicated space for students and early-career professionals seeking meaningful internship experiences.",
    description:
      "Access curated internship resources, get application support, and learn from peers who have navigated the internship landscape successfully.",
    gains: [
      "Curated internship listings across industries and regions",
      "Resume and cover letter review sessions with mentors",
      "Interview preparation workshops and mock interviews",
      "Insider tips from past interns at top organizations",
      "Networking events connecting interns with hiring managers",
      "Post-internship reflection and career planning sessions",
    ],
    topics: [
      "Internship Search",
      "Resume Building",
      "Interview Prep",
      "Career Planning",
      "Professional Growth",
    ],
    link: "https://chat.whatsapp.com/IFhNQtUjiQdHCubNPTycgI?mode=gi_t",
    icon: <InternshipHubIcon />,
    bgColor: "#A8D6751A",
  },
  {
    title: "The Global Philanthropy Partners Network",
    subtitle:
      "Connecting philanthropists, donors, and social entrepreneurs committed to strategic giving.",
    description:
      "Engage in meaningful discussions about effective philanthropy, share giving strategies, and collaborate on initiatives that create lasting social impact across communities.",
    gains: [
      "Monthly roundtables on effective giving strategies and trends",
      "Grant-writing workshops and funding opportunity alerts",
      "Impact measurement frameworks and evaluation training",
      "Collaborative giving circles for pooled philanthropic projects",
      "Connections with foundations, NGOs, and social enterprises",
      "Annual philanthropy summit with global thought leaders",
    ],
    topics: [
      "Effective Giving",
      "Grant Writing",
      "Social Enterprise",
      "Impact Investing",
      "Community Development",
    ],
    link: "https://chat.whatsapp.com/HoKUdHMQ5CpHkTUSNBzm38?mode=gi_t",
    icon: <PhilanthropyIcon />,
    bgColor: "#ffffff",
  },
  {
    title: "Thrive Uniquely Mentorship Community",
    subtitle:
      "A nurturing space where mentors and mentees connect to unlock individual potential and personal growth.",
    description:
      "Experience transformative mentorship through structured pairings, group coaching, and holistic development programs designed to help every member thrive in their own unique way.",
    gains: [
      "One-on-one mentorship matching based on goals and values",
      "Group coaching sessions on personal and professional development",
      "Monthly wellness and mindfulness workshops for balanced growth",
      "Goal-setting retreats and quarterly progress check-ins",
      "Peer support circles for sharing challenges and breakthroughs",
      "Access to curated personal development resources and tools",
    ],
    topics: [
      "Mentorship",
      "Personal Growth",
      "Wellness",
      "Goal Setting",
      "Self-Care",
    ],
    link: "https://chat.whatsapp.com/JbWQGJkawUnFmjtx2FYMdQ?mode=gi_t",
    icon: <Sparkles size={24} color="#60935D" />,
    bgColor: "#A8D6751A",
  },
  {
    title: "The Global Stewardship Halls",
    subtitle:
      "For visionary leaders committed to responsible stewardship of resources, communities, and the environment.",
    description:
      "Join a community of stewards dedicated to sustainable leadership, ethical governance, and leaving a positive legacy for future generations through collaborative action.",
    gains: [
      "Leadership forums on ethical governance and sustainability practices",
      "Environmental stewardship projects and community clean-up drives",
      "Workshops on responsible resource management and budgeting",
      "Cross-cultural dialogue sessions on global stewardship challenges",
      "Mentorship from experienced stewards in nonprofit and public sectors",
      "Annual stewardship awards recognizing outstanding community impact",
    ],
    topics: [
      "Sustainability",
      "Ethical Leadership",
      "Environmental Care",
      "Governance",
      "Legacy Building",
    ],
    link: "https://chat.whatsapp.com/CkUSlamx0Cr5k9itH1nbJQ?mode=gi_t",
    icon: <StewardshipIcon />,
    bgColor: "#ffffff",
  },
];

export default function DiscoverCommunity() {
  return (
    <section className="py-20 w-full bg-[#F9FAFB]" id="communities">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl  flex flex-col items-center">
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="flex items-center justify-center">
            <Pill text="Our Community" className="mb-4" />
          </div>
          <motion.h2 variants={fadeInUp} className="heading-2 max-w-2xl mb-4">
            Discover Your Perfect Community
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#667085] max-w-3xl"
          >
            Connect with like-minded individuals in vibrant WhatsApp communities
            tailored to your interests, passions, and professional goals.
          </motion.p>
        </motion.div>

        <div className="w-11/12 mx-auto space-y-5">
          {COMMUNITIES.map((community, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpSlower}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-[16px] p-5 sm:p-7 flex flex-col gap-5 transition-all"
              style={{
                backgroundColor: community.bgColor,
                boxShadow: "0px 8px 24px -8px rgba(0,0,0,0.0392)",
              }}
            >
              {/* Header: icon + title + subtitle */}
              <div className="flex items-center gap-4">
                <div
                  className="shrink-0 w-17 h-17 rounded-[10px] flex items-center justify-center"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#A8D6751A",
                  }}
                >
                  {community.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-[1.125rem] lg:text-xl font-semibold text-[#111827] leading-snug">
                    {community.title}
                  </h3>
                  <p className="text-[#667085] text-sm  leading-snug">
                    {community.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#344054] text-sm sm:text-base leading-relaxed">
                {community.description}
              </p>

              {/* What You'll Gain */}
              <div>
                <p className="text-regular-button text-sm font-bold uppercase tracking-[2%] mb-3">
                  What You&apos;ll Gain
                </p>
                <ul className="flex flex-col gap-2">
                  {community.gains.map((gain, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-[#344054]"
                    >
                      <svg
                        className="shrink-0 mt-0.5"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8L6.5 11.5L13 4.5"
                          stroke="#60935D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {gain}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Topics */}
              <div>
                <p className="text-regular-button text-sm font-bold uppercase tracking-[2%] mb-3">
                  Popular Topics
                </p>
                <motion.div
                  variants={staggerContainerDelayed}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex flex-wrap gap-2"
                >
                  {community.topics.map((topic, i) => (
                    <motion.span
                      key={i}
                      variants={fadeInUp}
                      className="px-3 py-1 text-[#344054] font-semibold rounded-full border border-[#D1D5DB] text-sm bg-white"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* CTA */}
              <div>
                <Link href={community.link} target="_blank">
                  <Button variant="regular" className="px-6 py-2.5">
                    Join Community
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
