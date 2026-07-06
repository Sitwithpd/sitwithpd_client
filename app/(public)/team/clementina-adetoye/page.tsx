import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Clementina Adetoye — Director of Transformational Experiences | Sit With PD",
  description:
    "Clementina Adetoye is an accomplished educationist, transformational leader, and entrepreneur with nearly two decades of distinguished service in human development. Director of Transformational Experiences at Sit With PD.",
  openGraph: {
    title:
      "Clementina Adetoye — Director of Transformational Experiences | Sit With PD",
    description:
      "Nearly two decades in education and human development. Clementina Adetoye designs and curates impactful experiences that inspire growth, foster meaningful connections, and guide individuals toward Purpose, Direction, and Personal Discovery.",
    url: "https://sitwithpd.com/team/clementina-adetoye",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clementina Adetoye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Clementina Adetoye — Director of Transformational Experiences | Sit With PD",
    description:
      "Educationist, transformational leader, and entrepreneur helping individuals navigate their journey towards greater purpose, direction, and personal discovery at Sit With PD.",
    images: ["/images/og-image.png"],
  },
};

export default function ClementinaAdetoyePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Clementina Adetoye",
            url: "https://sitwithpd.com/team/clementina-adetoye",
            jobTitle: "Director of Transformational Experiences",
            worksFor: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
            },
            description:
              "Accomplished educationist, transformational leader, and entrepreneur with nearly two decades of distinguished service in human development. Designs and curates impactful experiences that inspire growth, foster meaningful connections, and guide individuals toward Purpose, Direction, and Personal Discovery.",
            knowsAbout: [
              "Human Development",
              "Transformational Leadership",
              "Education",
              "Entrepreneurship",
              "Personal Growth",
            ],
          }),
        }}
      />
      <div className="w-11/12 max-w-5xl mx-auto py-16 lg:py-24">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row gap-8 mb-10">
          {/* Photo */}
          <div className="shrink-0">
            <div className="w-[220px] sm:w-[280px] aspect-square relative overflow-hidden rounded-md border border-[#DEDEDE]">
              <Image
                src="/images/tina.png"
                alt="Clementina Adetoye"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Name, Role & Intro */}
          <div className="flex flex-col justify-end gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#181D27]">
                Clementina Adetoye
              </h1>
              <p className="text-[#649351] text-base font-medium">
                Director of Transformational Experiences, Sit With PD
              </p>
            </div>

            <p className="text-[#444444] text-base leading-relaxed">
              Clementina Adetoye is an accomplished educationist,
              transformational leader, entrepreneur, and passionate advocate for
              human development. As the Director of Transformational Experiences
              at Sit With PD, she is responsible for designing and curating
              impactful experiences that inspire growth, foster meaningful
              connections, and help individuals navigate their journey towards
              greater purpose, direction, and personal discovery.
            </p>
          </div>
        </div>

        {/* Bio Body */}
        <div className="flex flex-col gap-6 text-[#333333] text-base leading-relaxed">
          <p>
            With nearly two decades of distinguished service in the education
            sector, Clementina has dedicated her career to nurturing potential,
            developing people, and creating environments where individuals can
            learn, grow, and thrive. Her wealth of experience, combined with her
            deep understanding of human development, enables her to create
            transformative experiences that leave lasting impact on individuals,
            families, and communities.
          </p>

          <p>
            Beyond her educational leadership, Clementina is a versatile
            entrepreneur and serves as the Chief Executive Officer of Aclem
            Sparkles Ltd, where she continues to demonstrate excellence,
            innovation, and visionary leadership. Her ability to combine
            strategic thinking with genuine care for people has earned her the
            respect of colleagues, clients, and the many lives she has
            positively influenced throughout her professional journey.
          </p>

          <p>
            A committed humanist and lifelong advocate for personal growth, she
            believes that transformation becomes possible when people are given
            the right environment, guidance, and support to discover their
            strengths and unlock their potential. Through her leadership,
            mentorship, and service, she continues to inspire individuals to
            pursue meaningful growth and purposeful living.
          </p>

          <p>
            At the heart of her work is a firm conviction that every individual
            possesses untapped potential waiting to be awakened. Through Sit
            With PD, she remains dedicated to creating experiences that empower
            people to embrace possibility, build resilience, and become the best
            versions of themselves.
          </p>
        </div>
      </div>
    </div>
  );
}
