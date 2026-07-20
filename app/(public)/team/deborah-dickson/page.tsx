import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Deborah Dickson — Director of Franchise & Partnerships, USA | Sit With PD",
  description:
    "Deborah Dickson is a trained psychologist, accomplished educationist, and strategic partnerships leader. As Director of Franchise & Partnerships for Sit With PD in the USA, she leads the organisation’s efforts to build strategic alliances and expand its global footprint.",
  openGraph: {
    title:
      "Deborah Dickson — Director of Franchise & Partnerships, USA | Sit With PD",
    description:
      "Trained psychologist and accomplished educationist leading Sit With PD's franchise expansion and strategic partnerships in the United States.",
    url: "https://sitwithpd.com/team/deborah-dickson",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deborah Dickson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Deborah Dickson — Director of Franchise & Partnerships, USA | Sit With PD",
    description:
      "Trained psychologist and strategic partnerships leader expanding Sit With PD's global footprint and impact in the USA.",
    images: ["/images/og-image.png"],
  },
};

export default function DeborahDicksonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Deborah Dickson",
            url: "https://sitwithpd.com/team/deborah-dickson",
            jobTitle: "Director of Franchise & Partnerships, USA",
            worksFor: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
            },
            description:
              "Trained psychologist, accomplished educationist, and strategic partnerships leader serving as Director of Franchise & Partnerships for Sit With PD in the USA. Fosters strategic alliances and global expansion.",
            knowsAbout: [
              "Psychology",
              "Education",
              "Strategic Partnerships",
              "Franchise Management",
              "Leadership Development",
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
                src="/images/deborah-dickson.png"
                alt="Deborah Dickson"
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
                Deborah Dickson
              </h1>
              <p className="text-[#649351] text-base font-medium">
                Director of Franchise &amp; Partnerships, USA, Sit With PD
              </p>
            </div>

            <p className="text-[#444444] text-base leading-relaxed">
              Deborah Dickson is a trained psychologist, accomplished
              educationist, and strategic partnerships leader with a deep
              passion for empowering individuals, strengthening communities, and
              fostering meaningful collaboration. As the Director of Franchise
              &amp; Partnerships for Sit With PD in the United States, she leads
              the organisation’s efforts to build strategic alliances, expand
              its global footprint, and cultivate partnerships that advance its
              mission of transforming lives through Purpose, Direction, and
              Personal Discovery.
            </p>
          </div>
        </div>

        {/* Bio Body */}
        <div className="flex flex-col gap-6 text-[#333333] text-base leading-relaxed">
          <p>
            Drawing upon her background in psychology and education, Deborah
            brings a unique understanding of human behaviour, personal
            development, and lifelong learning. Her ability to connect with
            people from diverse backgrounds enables her to build authentic
            relationships, develop impactful partnerships, and create
            opportunities that extend the reach and influence of Sit With PD
            across communities and organisations.
          </p>

          <p>
            Known for her warmth, professionalism, and collaborative leadership,
            Deborah is passionate about helping individuals unlock their
            potential while fostering partnerships that create lasting social
            impact. She believes that meaningful transformation happens when
            people are empowered with the right support, opportunities, and
            environments to grow.
          </p>

          <p>
            Through her leadership, advocacy, and commitment to excellence,
            Deborah continues to champion the vision of Sit With PD by
            connecting people, organisations, and communities to a shared
            purpose of inspiring personal transformation, strengthening human
            connection, and building a future where individuals are empowered to
            live with clarity, resilience, and intention.
          </p>
        </div>
      </div>
    </div>
  );
}
