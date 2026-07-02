import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Oluwatosin SAM-ABEREOLA(PD).",
    role: "Founder & CEO",
    image: "/images/sam-hus.png",
    href: "/team/oluwatosin-sam-abereola",
  },
  {
    name: "Oluwafunmike SAM-ABEREOLA",
    role: "Co-Founder/CFO",
    image: "/images/sam-wife.png",
    href: "/team/oluwafunmike-sam-abereola",
  },
  {
    name: "Kola OLAJIDE",
    role: "Director of Execution & Integration",
    image: "/images/kola.png",
    href: "/team/kola-olajide",
  },
  {
    name: "Temitope BAMIDELE.",
    role: "Public Relation/CTO",
    image: "/images/bami.png",
    href: "/team/temitope-bamidele",
  },
  {
    name: "Clementina B. ADETOYE",
    role: "Camp Director/COO",
    image: "/images/tina.png",
    href: "/team/clementina-adetoye",
  },
];

export function OurTeam() {
  return (
    <section className="container mx-auto pt-24 lg:py-24 flex flex-col items-center">
      <Pill text="Our Team" />

      <h2 className="heading-2 text-center mb-16 max-w-[900px]">
        A dedicated team, committed to your well-being, here to guide support
        and walk the journey with you.
      </h2>

      <div className="flex flex-wrap justify-center gap-x-16 gap-y-14 w-full max-w-7xl">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-3rem)]"
          >
            {/* Photo */}
            <div className="w-full lg:w-[384px] aspect-square relative overflow-hidden rounded-md mb-5">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Name & Role */}
            <p className="text-base font-semibold text-[#181D27]">
              {member.name}
            </p>
            <p className="text-[#649351] text-base font-normal mt-1 mb-3">
              {member.role}
            </p>

            {/* Know more link */}
            <Link
              href={member.href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-regular-button border border-regular-button rounded-[10px] px-4 py-1.5 hover:border-[#649351] hover:text-[#649351] transition-colors"
            >
              Know more <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}


// "use client";

// import { Pill } from "@/components/ui/pill";
// import { motion } from "motion/react";
// import Image from "next/image";
// import { useGetPublishedTeam } from "@/lib/api/hooks/team/team.hooks";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import CardSkeletons from "@/components/skeletons/card-skeletons";
// import { TeamMember } from "@/lib/api/services/team/team.services";

// export function OurTeam() {
//   const { data: teamResponse, isLoading, isError } = useGetPublishedTeam();
//   const team: TeamMember[] = teamResponse?.data ?? [];

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.05,
//       },
//     },
//   } as const;

//   const cardVariants = {
//     hidden: { opacity: 0, y: 24, scale: 0.98 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.45, ease: "easeOut" },
//     },
//   } as const;

//   if (isLoading) {
//     return (
//       <section className="container mx-auto pt-24 lg:py-24 flex flex-col items-center">
//         <Pill text="Our Team" />
//         <h2 className="heading-2 text-center mb-16 max-w-[900px]">
//           A dedicated team, committed to your well-being, here to guide support
//           and walk the journey with you.
//         </h2>
//         <CardSkeletons />
//       </section>
//     );
//   }

//   return (
//     <section className="container mx-auto pt-24 lg:py-24 flex flex-col items-center">
//       <Pill text="Our Team" />

//       <h2 className="heading-2 text-center mb-16 max-w-[900px]">
//         A dedicated team, committed to your well-being, here to guide support
//         and walk the journey with you.
//       </h2>

//       {isError ? (
//         <div className="text-center py-20 bg-slate-50 rounded-3xl w-full max-w-7xl border border-dashed border-red-200">
//           <p className="text-base text-red-500 mx-auto max-w-2xl text-center">
//             Something went wrong while fetching the team members. Please try
//             refreshing the page.
//           </p>
//         </div>
//       ) : team.length === 0 ? (
//         <div className="text-center py-20 bg-slate-50 rounded-3xl w-full max-w-7xl border border-dashed border-slate-200">
//           <p className="text-base text-primary-text mx-auto max-w-2xl text-center">
//             No team members are available to display at the moment.
//           </p>
//         </div>
//       ) : (
//         <motion.div
//           className="w-full max-w-7xl px-4"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <Swiper
//             modules={[Autoplay, Pagination, FreeMode]}
//             spaceBetween={24}
//             slidesPerView={1.2}
//             freeMode={true}
//             pagination={{ clickable: true, dynamicBullets: true }}
//             breakpoints={{
//               640: { slidesPerView: 2, freeMode: false },
//               1024: { slidesPerView: 3, freeMode: false },
//               1280: { slidesPerView: 4, freeMode: false },
//             }}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             className="team-swiper pb-16"
//           >
//             {team.map((member) => (
//               <SwiperSlide key={member.id} className="h-auto">
//                 <motion.div
//                   variants={cardVariants}
//                   className="flex flex-col h-full"
//                 >
//                   <div className="w-full aspect-4/5 mb-6 relative overflow-hidden bg-transparent rounded-lg">
//                     <Image
//                       src={member.photoUrl || "/images/placeholder.png"}
//                       alt={member.name}
//                       fill
//                       className="object-cover object-top"
//                     />
//                   </div>
//                   <div className="space-y-1 px-2">
//                     <p className="text-base font-semibold text-[#181D27]">
//                       {member.name}
//                     </p>
//                     <p className="text-[#649351] text-lg lg:text-base xl:text-lg font-normal mb-2">
//                       {member.role}
//                     </p>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>
//       )}

//       <style jsx global>{`
//         .team-swiper .swiper-pagination-bullet-active {
//           background-color: #649351;
//         }
//       `}</style>
//     </section>
//   );
// }
