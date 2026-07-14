"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";
import Image from "next/image";
import { useBookConsultation } from "@/lib/api/hooks/consultations/consultations.hooks";
import { formatCurrency, handleBookingClick } from "@/lib/utils";
import Link from "next/link";
import {
  fadeInUp,
  fadeInUpSlower,
  staggerContainerDelayed,
  staggerContainerSlow,
} from "@/lib/motion-variants";
import { motion } from "motion/react";

export function Hero() {
  const { mutate: bookConsultation } = useBookConsultation();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consultation" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      cal("on", {
        action: "bookingSuccessfulV2",
        callback: (e: any) => {
          console.log(e.detail.data.eventTypeId);
          console.log(e);
          // bookConsultation({
          //   serviceId: e.detail.data.eventTypeId,
          //   userId: e.detail.data.eventTypeId,

          // })
        },
      });
    })();
  }, [bookConsultation]);

  // const handleBookingClick = async () => {
  //   const cal = await getCalApi({ namespace: "consultation" });
  //   cal("modal", {
  //     calLink: "shun-evelyn-xvve7u/consultation",
  //     config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
  //   });
  // };

  return (
    <section className="w-full ">
      <div className="relative w-full min-h-svh md:min-h-[60svh]   lg:min-h-dvh flex items-end lg:items-center justify-center lg:justify-start pt-24 pb-10 md:py-30 lg:py-24">
        <Image
          src={"/images/consult-bg.webp"}
          alt={"Camp page background image"}
          fill
          className="object-cover object-[70%_center] md:object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5),transparent )",
          }}
        />
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="relative h-full w-[90%] lg:w-11/12  mx-auto  flex flex-col gap-6 justify-center items-start max-w-7xl"
        >
          <motion.div variants={fadeInUpSlower} className="space-y-4  ">
             <motion.span
            variants={fadeInUp}
            className="text-[#A8D675] font-semibold text-sm tracking-[2.5px] uppercase block "
          >
           Sit With PD · Consultation
          </motion.span>
            <h1
              className={`text-[#F9FDF9] text-center md:text-start  mb-2 font-bold text-[2.5rem] sm:text-[3.125rem] lg:text-[4rem] xl:text-[4.25rem] leading-[1.05]  `}
            >
              One Conversation Can <br className="hidden lg:block" /> Change
              Everything.
            </h1>
          </motion.div>
          <motion.p variants={fadeInUpSlower} className="text-[#F9FDF9] text-lg lg:w-1/2 md:w-9/12 w-full text-center md:text-start  font-medium">
            Gain Clarity. Find Direction. Move Forward with Confidence.
            Sometimes, what you need isn't more information you need the right
            conversation.
          </motion.p>
          <motion.div variants={fadeInUpSlower} className="flex flex-col sm:flex-row justify-start sm:justify-center md:justify-start w-full gap-4 mt-4">
            <Button
              onClick={handleBookingClick}
              variant={"regular"}
            >
              Book a Consultation <CaretRight />
            </Button>
            <Link href="/contact" className="w-full md:w-auto">
              <Button
                variant={"outline"}
                className="text-white w-full hover:text-white bg-transparent hover:bg-transparent border-[0.67px] border-[#FFFFFF66]"
              >
                Start Your Journey <CaretRight />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
