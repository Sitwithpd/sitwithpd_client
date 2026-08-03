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
import { Skeleton } from "@/components/ui/skeleton";
import QueryStateHandler from "@/components/query-state-handler";
import { formatCurrency } from "@/lib/utils";
import { useCurrencyStore } from "@/store/use-currency-store";
import {
  useGetConsultationServiceById,
  useGetAllConsultationServices,
} from "@/lib/api/hooks/consultations/consultation-services.hooks";

export function ConsultationTabView({ currentTab }: { currentTab: string }) {
  const {
    data: currentServiceRes,
    isLoading,
    isError,
    refetch,
  } = useGetConsultationServiceById(currentTab);
  const { data: allServicesRes } = useGetAllConsultationServices();

  const content = currentServiceRes?.data;
  const otherTabs =
    allServicesRes?.data?.filter((s) => s.id !== currentTab) || [];

  const labelStyle =
    "text-[11px] font-medium text-[#606060] uppercase tracking-[1px]";
  const labelValueStyle = "text-[15px] font-semibold text-[#131313]";

  const activeCurrency = useCurrencyStore(
    (s) => s.userCurrency ?? s.detectedCurrency ?? "GBP",
  );

  return (
    <div className="w-full relative flex flex-col pt-20 lg:pt-20 bg-white">
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
            {allServicesRes?.data?.map((tab) => (
              <Link
                key={tab.id}
                href={`/consultation/${tab.id}`}
                className={`whitespace-nowrap py-3 md:py-4 text-[13px] font-medium transition-colors border-b-2 relative -mb-px ${
                  currentTab === tab.id
                    ? "border-regular-button text-[#131313]"
                    : "border-transparent text-[#606060] hover:text-[#131313]"
                }`}
              >
                {tab.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <QueryStateHandler
        isLoading={isLoading}
        isError={isError}
        data={content ? [content] : undefined}
        onRetry={refetch}
        loadingMessage="Loading consultation details..."
      >
        {content && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-11/12 max-w-5xl mx-auto py-12 mb-0"
          >
            {/* Badges */}
            <motion.div
              variants={fadeInUpSlower}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span
                className={`px-3 py-1 rounded-full text-[11px] font-medium text-white bg-regular-button`}
              >
                Most Popular
              </span>
              <span className="text-[#606060] text-sm">{content?.format?.name}</span>
            </motion.div>
            {/* Title */}
            <motion.h1
              variants={fadeInUpSlower}
              className="lg:text-4xl text-3xl  font-bold text-[#131313] mb-2"
            >
              {content.title}
            </motion.h1>
            <div className="flex gap-1 mb-8">
              {content.audience &&
                content.audience.map((audience: any, index: number) => (
                  <motion.p
                    variants={fadeInUpSlower}
                    className="text-regular-button text-sm md:text-base font-medium italic"
                  >
                    {audience}
                    {index !== content.audience.length - 1 && ","}
                  </motion.p>
                ))}
            </div>
          

            {/* Image Banner */}
            <motion.div
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="relative w-full aspect-video lg:aspect-21/9 lg:rounded-[16px]  rounded-lg overflow-hidden mb-8 bg-[#F5F7F5]"
            >
              <Image
                src={content.coverImageUrl || "/images/tab1.png"}
                alt={content.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0F2318B2]  to-[#00000000] flex flex-col justify-end p-4 md:p-10">
                  {content.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2.5">
                    {content.tags.slice(0, 3).map((tag, i) => (
                      <div className="flex items-center gap-2">
                        <p
                          key={`${tag}-${i}`}
                          className="text-[#A8D675] tracking-[2px] text-xs  "
                        >
                          {tag.name}
                        </p>
                        <span
                          className={`bg-[#A8D675] w-0.5 h-0.5 rounded-full  ${i === content.tags.length - 1 ? "hidden" : ""} `}
                        />
                      </div>
                    ))}
                  </div>
                )}
               
              </div>
            </motion.div>

            {/* Details List */}
            <div className="flex flex-col border-[0.67px] border-[#E8E8E8] p-5 rounded-[12px] mb-14">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-2">
                <span className={labelStyle}>Duration</span>
                <span className={labelValueStyle}>
                  {content.duration} {content.duration === 1 ? "min" : "mins"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-2">
                <span className={labelStyle}>Format</span>
                <span className={labelValueStyle}>
                  {content.format?.name || "Online / In-Person"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-2">
                <span className={labelStyle}>Investment</span>
                <span className={labelValueStyle}>
                  {formatCurrency(content.price, activeCurrency)}
                </span>
              </div>
            </div>

            <p className="text-[#606060] text-base leading-[1.7] mb-6 max-w-4xl whitespace-pre-wrap">
              {content.description}
            </p>

            {/* Audience / Who it is for */}
            {content.audience && content.audience.length > 0 && (
              <>
                <h3 className="text-xs font-semibold text-[#1F4842] tracking-[1.5px] uppercase mb-6 mt-10">
                  Who This Is For
                </h3>
                <motion.ul
                  variants={staggerContainerDelayed}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex flex-col gap-4 mb-6"
                >
                  {content.audience.map((item: any, i: number) => (
                    <motion.li
                      variants={fadeInRight}
                      key={i}
                      className="flex items-start gap-4 text-[#344054] text-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A8D675] mt-[7px] shrink-0" />
                      <span>
                        {typeof item === "string"
                          ? item
                          : item.name || JSON.stringify(item)}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </>
            )}

            {/* What's Included */}
            {content.whatsIncluded && content.whatsIncluded.length > 0 && (
              <>
                <h3 className="text-xs font-semibold text-[#1F4842] tracking-[1.5px] uppercase mb-6 mt-10">
                  What's Included
                </h3>
                <motion.ul
                  variants={staggerContainerDelayed}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex flex-col gap-4"
                >
                  {content.whatsIncluded.map((item: string, i: number) => (
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
              </>
            )}
          </motion.div>
        )}

        <div className="w-11/12 mx-auto mb-15 flex justify-center items-center">
          <Button
            onClick={() =>
              handleBookingClick(
                content?.calBookingUrl?.replace(/^https:\/\/cal\.com\//, "") ||
                  "",
              )
            }
            variant="regular"
            disabled={!content?.calBookingUrl}
          >
            Book Consultation
          </Button>
        </div>

        {/* Explore Other Sessions */}
        {otherTabs.length > 0 && (
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
                {otherTabs.map((tab: any, i: number) => {
                  return (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        delay: i * 0.15,
                        duration: 0.55,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="bg-white rounded-[12px] p-5   border-[0.67px] border-[#E4EBE4]  hover:border-transparent transition-all group flex flex-col h-full"
                    >
                      <h3 className="text-[17px] font-semibold text-[#131313] mb-2 group-hover:text-[#567F57] transition-colors leading-snug">
                        {tab.title}
                      </h3>
                      <p className="text-[#606060] text-sm mb-10 font-medium">
                        {tab.duration} {tab.duration === 1 ? "min" : "mins"} ·{" "}
                        {formatCurrency(tab.price, activeCurrency)}
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
        )}
      </QueryStateHandler>
    </div>
  );
}
