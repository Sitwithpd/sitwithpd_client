"use client";

import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion-variants";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  href: string;
  intro: string[];
  
  bio: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Oluwatosin SAM-ABEREOLA(PD).",
    role: "Founder & CEO",
    image: "/images/sam-hus.png",
    href: "/team/oluwatosin-sam-abereola",
    intro: [
      "Oluwatosin SAM-ABEREOLA is a transformational architect, serial entrepreneur, prolific writer, keynote speaker, and passionate advocate for human potential.",
      "As the Founder and Chief Purpose Officer of Sit With PD, he is committed to helping individuals discover clarity, build resilience, and live purposefully through transformative experiences centred on Purpose, Direction, and Personal Discovery.",
    ],
    bio: [
      "Born out of profound personal experiences and life-defining challenges, Sit With PD reflects Oluwatosin's own journey of rediscovery, resilience, and transformation. Drawing from more than twenty-six years of leadership, mentorship, entrepreneurship, and personal development, he has dedicated his life to empowering others to navigate uncertainty, unlock their potential, and create meaningful lives aligned with their values and purpose.",
      "Beyond Sit With PD, Oluwatosin serves as the Chairman of Gardenia Tropicana Group, the parent organisation overseeing his diverse business interests and ventures. He is also a highly accomplished technology professional, holding prestigious credentials as an AWS Certified Solutions Architect – Professional and AWS Certified Solutions Architect – Associate. Widely respected for his expertise, he is sought after for his contributions within the technology sector as well as his insights on leadership, growth, resilience, and personal transformation.",
      "A confident communicator and compelling keynote speaker, Oluwatosin has inspired audiences across conferences, leadership forums, and professional platforms. His ability to connect lived experience with practical wisdom has impacted countless individuals, helping them move from uncertainty to clarity, from limitation to possibility, and from merely existing to truly living.",
      "At the heart of everything he does is a simple conviction: when people discover their purpose, gain direction, and deepen their understanding of themselves, they become empowered to transform not only their own lives, but also the lives of those around them.",
    ],
  },
  {
    name: "Oluwafunmike SAM-ABEREOLA",
    role: "Co-Founder/CFO",
    image: "/images/sam-wife.png",
    href: "/team/oluwafunmike-sam-abereola",
    intro: [
      "Oluwafunmike SAM-ABEREOLA is a visionary business leader, accomplished accountant, prolific writer, and passionate advocate for purposeful living and thriving families. As the Co-Founder and Chief Finance Officer of Sit With PD, she brings a unique blend of financial expertise, entrepreneurial insight, and lived experience to the mission of helping individuals discover clarity, resilience, and meaningful direction in life.",
    ],
    bio: [
      "Inspired by her own personal journey and experiences, she co-founded Sit With PD with a deep conviction that transformation begins when people are given the opportunity to pause, reflect, and reconnect with what truly matters. Drawing from over thirteen years of distinguished service in the banking sector, she has built a reputation for excellence, integrity, leadership, and people-centred impact.",
      "Following a successful banking career, Oluwafunmike transitioned into entrepreneurship and now serves as the Chief Executive Officer of Trendies Depot Ltd, where she continues to lead with innovation, vision, and purpose. Her ability to combine business acumen with genuine compassion has enabled her to influence and empower countless individuals across professional, personal, and community spaces.",
      "An inspirational communicator and respected voice on personal growth, family values, and purposeful living, Oluwafunmike is deeply committed to helping people build stronger foundations for success and fulfilment. Through her leadership, writing, and advocacy, she continues to inspire individuals to live intentionally, strengthen their relationships, and create lives aligned with their values.",
      "At the heart of everything she does is a steadfast belief that when people gain clarity, embrace purpose, and nurture meaningful connections, they are empowered to transform their lives, strengthen their families, and positively impact the world around them.",
    ],
  },
  {
    name: "Kola OLAJIDE",
    role: "Director of Execution & Integration",
    image: "/images/kola.png",
    href: "/team/kola-olajide",
    intro: [
      "Kola OLAJIDE is a distinguished engineering professional, strategic operations leader, leadership trainer, and renewable energy expert with a passion for transforming vision into meaningful impact.",
      "As the Director of Execution & Integration at Sit With PD, he plays a vital role in translating purpose into action, ensuring that the organisation's vision is supported by effective systems, operational excellence, and transformational experiences that empower individuals to live with greater clarity, direction, and purpose.",
    ],
    bio: [
      "With a strong academic background in Electrical and Electronics Engineering, complemented by Postgraduate Diplomas in Electrical Engineering and Christian Education, Kola brings a rare combination of technical expertise, strategic thinking, and people-centred leadership. His career has been shaped by a commitment to innovation, service, and creating sustainable solutions that improve lives and drive positive change.",
      "Widely respected within the renewable energy sector, Kola has established himself as a trusted authority in solar energy design, auditing, and energy systems implementation. His reputation for excellence, integrity, and results-driven leadership has earned him the confidence of clients, organisations, and industry professionals, while enabling him to contribute to impactful projects and initiatives across diverse sectors.",
      "Having previously served as a Lift and Escalator Engineer and currently serving as Chief Technical Officer at Timtech Electric-Solar, Kola continues to demonstrate exceptional leadership, technical proficiency, and a dedication to developing people and systems. Through his mentoring, training, and professional engagements, he has inspired numerous individuals to pursue excellence, embrace innovation, and maximise their potential.",
      "At the core of his philosophy is the belief that vision alone is never enough; lasting impact is created when purpose is supported by strategy, execution, and intentional action. Through Sit With PD, he remains committed to helping individuals and communities move beyond aspiration, unlock their potential, and transform purpose into meaningful achievement.",
    ],
  },
  {
    name: "Temitope BAMIDELE.",
    role: "Public Relation/CTO",
    image: "/images/bami.png",
    href: "/team/temitope-bamidele",
    intro: [
      "Temitope BAMIDELE is a distinguished technology leader, cybersecurity specialist, DevOps engineer, and innovation strategist with a passion for building systems that drive efficiency, scalability, and meaningful impact. As the Director of Technology & Innovation at Sit With PD, he leads the development and integration of technology solutions that support the organisation's mission of empowering individuals through Purpose, Direction, and Personal Discovery.",
    ],
    bio: [
      "A First-Class graduate in Cybersecurity, Temitope brings more than a decade of experience within the telecommunications and technology sectors, where he has consistently demonstrated excellence in infrastructure management, digital transformation, and operational innovation. His ability to bridge technical expertise with strategic thinking has positioned him as a trusted leader in designing and implementing solutions that enable organisations to grow, adapt, and thrive in an evolving digital landscape.",
      "In addition to his extensive industry experience, Temitope is a certified DevOps Engineer and currently serves as Director of Technology Infrastructure and Management, where he oversees critical technology operations and drives the delivery of robust, secure, and high-performing systems. His commitment to excellence, innovation, and continuous improvement has earned him recognition among colleagues, clients, and industry professionals alike.",
      "Beyond his corporate accomplishments, Temitope is an entrepreneur with a deep appreciation for technology's role in unlocking potential and creating opportunities. He is widely respected for his forward-thinking approach, problem-solving capabilities, and unwavering belief that successful organisations are built on strong systems, seamless execution, and a culture of innovation.",
      "At the heart of his work is a conviction that technology should not merely support progress; it should accelerate it. Through Sit With PD, he remains committed to leveraging innovation, digital transformation, and strategic execution to create impactful experiences that empower people, strengthen communities, and inspire lasting transformation.",
    ],
  },
  {
    name: "Clementina B. ADETOYE",
    role: "Camp Director/COO",
    image: "/images/tina.png",
    href: "/team/clementina-adetoye",
    intro: [
      "Clementina Adetoye is an accomplished educationist, transformational leader, entrepreneur, and passionate advocate for human development. As the Director of Transformational Experiences at Sit With PD, she is responsible for designing and curating impactful experiences that inspire growth, foster meaningful connections, and help individuals navigate their journey towards greater purpose, direction, and personal discovery.",
    ],
    bio: [
      "With nearly two decades of distinguished service in the education sector, Clementina has dedicated her career to nurturing potential, developing people, and creating environments where individuals can learn, grow, and thrive. Her wealth of experience, combined with her deep understanding of human development, enables her to create transformative experiences that leave lasting impact on individuals, families, and communities.",
      "Beyond her educational leadership, Clementina is a versatile entrepreneur and serves as the Chief Executive Officer of Aclem Sparkles Ltd, where she continues to demonstrate excellence, innovation, and visionary leadership. Her ability to combine strategic thinking with genuine care for people has earned her the respect of colleagues, clients, and the many lives she has positively influenced throughout her professional journey.",
      "A committed humanist and lifelong advocate for personal growth, she believes that transformation becomes possible when people are given the right environment, guidance, and support to discover their strengths and unlock their potential. Through her leadership, mentorship, and service, she continues to inspire individuals to pursue meaningful growth and purposeful living.",
      "At the heart of her work is a firm conviction that every individual possesses untapped potential waiting to be awakened. Through Sit With PD, she remains dedicated to creating experiences that empower people to embrace possibility, build resilience, and become the best versions of themselves.",
    ],
  },
];

export function OurTeam() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const goNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % teamMembers.length : null,
    );
  const goPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + teamMembers.length) % teamMembers.length
        : null,
    );

  const selectedMember =
    selectedIndex !== null ? teamMembers[selectedIndex] : null;

  return (
    <section className="container mx-auto pt-24 lg:py-24 flex flex-col items-center">
      <Pill text="Our Team" />

      <h2 className="heading-2 text-center mb-16 max-w-[900px]">
        A dedicated team, committed to your well-being, here to guide support
        and walk the journey with you.
      </h2>

      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-wrap justify-center gap-x-16 gap-y-14 w-full max-w-7xl"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            variants={fadeInUp}
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

            {/* Know more button */}
            <button
              onClick={() => openModal(index)}
              className="inline-flex items-center gap-1 text-sm font-semibold text-regular-button border border-regular-button rounded-[10px] px-4 py-1.5 hover:border-[#649351] hover:text-[#649351] transition-colors"
            >
              Know more <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember !== null && selectedIndex !== null && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-[960px] max-h-[90vh] overflow-y-auto flex flex-col sm:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left — Photo */}
              <div className="w-full sm:w-[45%] shrink-0 bg-[#EFF5EA] rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none flex items-stretch min-h-[280px] sm:min-h-[500px]">
                <div className="relative w-full h-full min-h-[280px]">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover object-top rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
                  />
                </div>
              </div>

              {/* Right — Content */}
              <div className="flex flex-col flex-1 p-8 sm:p-10">
                {/* Close */}
                <button
                  onClick={closeModal}
                  className="self-end text-gray-400 hover:text-gray-600 transition-colors mb-4"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Pill */}
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#649351] border border-[#649351] rounded-full px-3 py-1 w-fit mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#649351]" />
                  Our Team
                </span>

                {/* Name & Role */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#181D27] leading-tight mb-1">
                  {selectedMember.name}
                </h2>
                <p className="text-[#649351] text-base font-medium mb-5">
                  {selectedMember.role}
                </p>

                {/* Intro */}
                <div className="flex flex-col gap-3 text-[#444444] text-base leading-relaxed overflow-y-auto max-h-[300px] pr-1">
                  {selectedMember.intro.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  {selectedMember.bio.map((para, i) => (
                    <p key={`bio-${i}`}>{para}</p>
                  ))}
                </div>

                {/* Divider + Nav */}
                <div className="mt-auto pt-6 border-t border-[#EFEFEF] flex items-center justify-between">
                  <button
                    onClick={goPrev}
                    className="flex items-center gap-1.5 text-sm font-medium text-[#444444] hover:text-[#649351] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <span className="text-sm text-[#697586]">
                    {selectedIndex + 1} / {teamMembers.length}
                  </span>
                  <button
                    onClick={goNext}
                    className="flex items-center gap-1.5 text-sm font-medium text-[#649351] hover:text-[#3d6b2e] transition-colors"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
