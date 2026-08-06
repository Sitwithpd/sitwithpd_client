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
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { useModalStore } from "@/components/store/use-modal-store";
import { useGetCommunities } from "@/lib/api/hooks/communities/communities.hooks";
import type { Community } from "@/lib/api/services/communities/communities.services";
import { getCommunityIcon, COMMUNITY_ICON_OPTIONS } from "./icon-map";
import CommunityJoinModal, {
  COMMUNITY_JOIN_MODAL_ID,
} from "./community-join-modal";

export default function DiscoverCommunity() {
  const openModal = useModalStore((state) => state.openModal);
  const { data, isLoading, isError } = useGetCommunities();

  const communities: Community[] = data?.data ?? [];

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

        {isLoading ? (
          <div className="w-11/12 mx-auto space-y-5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-[16px] p-5 sm:p-7 bg-white flex flex-col gap-5"
                style={{ boxShadow: "0px 8px 24px -8px rgba(0,0,0,0.0392)" }}
              >
                <div className="flex items-center gap-4">
                  <Skeleton className="w-17 h-17 rounded-[10px] shrink-0" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-5 w-2/3" />
                    <Skeleton className="h-4 w-full max-w-md" />
                  </div>
                </div>
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-10 w-40 rounded-md" />
              </div>
            ))}
          </div>
        ) : isError || communities.length === 0 ? (
          <div className="w-11/12 mx-auto text-center py-20 bg-white rounded-[16px] border border-dashed border-slate-200">
            <p className="text-lg text-[#667085] max-w-xl mx-auto">
              {isError
                ? "We couldn't load our communities just now. Please refresh the page or try again shortly."
                : "No communities are open at the moment. Please check back soon."}
            </p>
          </div>
        ) : (
          <div className="w-11/12 mx-auto space-y-5">
            {communities.map((community, index) => (
              <motion.div
                key={community.id}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUpSlower}
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-[16px] p-5 sm:p-7 flex flex-col gap-5 transition-all"
                style={{
                  // Alternating stripe, derived from position rather than stored.
                  backgroundColor: index % 2 === 0 ? "#A8D6751A" : "#ffffff",
                  boxShadow: "0px 8px 24px -8px rgba(0,0,0,0.0392)",
                }}
              >
                {/* Header: icon + title + subtitle */}
                <div className="flex items-center gap-4">
                  <div
                    className="shrink-0 w-17 h-17 rounded-[10px] flex items-center justify-center"
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? "#ffffff" : "#A8D6751A",
                    }}
                  >
                    {getCommunityIcon(
                      COMMUNITY_ICON_OPTIONS[
                        index % COMMUNITY_ICON_OPTIONS.length
                      ].value,
                    )}
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
                <p className="text-[#344054] whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
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
                    {community.tags.map((topic) => (
                      <motion.span
                        key={topic.id}
                        variants={fadeInUp}
                        className="px-3 py-1 text-[#344054] font-semibold rounded-full border border-[#D1D5DB] text-sm bg-white"
                      >
                        {topic.name}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* CTA */}
                <div>
                  <Button
                    variant="regular"
                    className="px-6 py-2.5"
                    onClick={() =>
                      openModal(
                        COMMUNITY_JOIN_MODAL_ID,
                        <CommunityJoinModal community={community} />,
                      )
                    }
                  >
                    Join Community
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
