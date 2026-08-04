"use client";
import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainerDelayed,
  staggerContainer,
} from "@/lib/motion-variants";
import { Briefcase, Users, Star, Heart } from "lucide-react";
import { Pill } from "@/components/ui/pill";

const welcomeCards = [
  {
    icon: Briefcase,
    title: "Interns & Volunteers",
    description: "Seeking meaningful opportunities to grow and contribute.",
    isAccent: false,
  },
  {
    icon: Users,
    title: "Professionals",
    description: "Eager to share expertise and build meaningful capacity.",
    isAccent: false,
  },
  {
    icon: Star,
    title: "Leaders",
    description: "Committed to inspiring, empowering, and guiding others.",
    isAccent: false,
  },
  {
    icon: Heart,
    title: "Changemakers",
    description: "Passionate about creating lasting, meaningful change.",
    isAccent: true,
  },
];

export default function WhoWeWelcome() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#344054" }}>
      <div className="w-11/12 max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          variants={staggerContainerDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <Pill
              text="OUR COMMUNITY"
              className="border-white/20 bg-white/10 text-white text-xs tracking-widest uppercase"
            />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="heading-2 text-white mb-4">
            Who We Welcome
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/70 text-base max-w-xl leading-relaxed"
          >
            Whether you are seeking internship or volunteering opportunities, a
            professional eager to share knowledge, a leader committed to
            inspiring others, or a kindhearted individual passionate about
            meaningful change — there is a place for you here.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-10"
        >
          {welcomeCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col p-6 rounded-[20px] text-left"
                style={{
                  backgroundColor: card.isAccent ? "#60935D" : "#FFFFFF0F",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: card.isAccent ? "#FFFFFF22" : "#60935D22",
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: card.isAccent ? "#ffffff" : "#60935D" }}
                  />
                </div>
                {/* Content */}
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: card.isAccent ? "#ffffff" : "#ffffff" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: card.isAccent
                      ? "rgba(255,255,255,0.85)"
                      : "rgba(255,255,255,0.65)",
                  }}
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full border-l-4 border-[#60935D] pl-6 py-2"
        >
          <p className="text-white/80 text-base lg:text-lg italic leading-relaxed">
            &quot;At Sit-With-PD, we believe in building a community where{" "}
            <span className="text-[#60935D] not-italic font-semibold">
              purpose meets opportunity
            </span>{" "}
            and every contribution creates lasting impact.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
