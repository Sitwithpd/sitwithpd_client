import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Oluwafunmike SAM-ABEREOLA — Co-Founder & Chief Finance Officer | Sit With PD",
  description:
    "Oluwafunmike SAM-ABEREOLA is a visionary business leader, accomplished accountant, prolific writer, and passionate advocate for purposeful living and thriving families. Co-Founder & CFO of Sit With PD with 13+ years of distinguished banking experience.",
  openGraph: {
    title: "Oluwafunmike SAM-ABEREOLA — Co-Founder & CFO | Sit With PD",
    description:
      "Co-Founder of Sit With PD. Visionary business leader and financial expert helping individuals discover clarity, resilience, and meaningful direction in life.",
    url: "https://sitwithpd.com/team/oluwafunmike-sam-abereola",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oluwafunmike SAM-ABEREOLA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwafunmike SAM-ABEREOLA — Co-Founder & CFO | Sit With PD",
    description:
      "Co-Founder & CFO of Sit With PD. Advocate for purposeful living, thriving families, and intentional personal growth.",
    images: ["/images/og-image.png"],
  },
};

export default function OluwafunmikePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Oluwafunmike SAM-ABEREOLA",
            url: "https://sitwithpd.com/team/oluwafunmike-sam-abereola",
            jobTitle: "Co-Founder & Chief Finance Officer",
            worksFor: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
            },
            description:
              "Visionary business leader, accomplished accountant, prolific writer, and passionate advocate for purposeful living and thriving families. Co-Founder & CFO of Sit With PD, helping individuals discover clarity, resilience, and meaningful direction in life.",
            knowsAbout: [
              "Financial Leadership",
              "Purposeful Living",
              "Personal Development",
              "Entrepreneurship",
              "Family Values",
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
                src="/images/sam-wife.png"
                alt="Oluwafunmike SAM-ABEREOLA"
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
                Oluwafunmike SAM-ABEREOLA
              </h1>
              <p className="text-[#649351] text-base font-medium">
                Co-Founder &amp; Chief Finance Officer, Sit With PD
              </p>
            </div>

            <p className="text-[#444444] text-base leading-relaxed">
              Oluwafunmike SAM-ABEREOLA is a visionary business leader,
              accomplished accountant, prolific writer, and passionate advocate
              for purposeful living and thriving families. As the Co-Founder and
              Chief Finance Officer of Sit With PD, she brings a unique blend of
              financial expertise, entrepreneurial insight, and lived experience
              to the mission of helping individuals discover clarity,
              resilience, and meaningful direction in life.
            </p>
          </div>
        </div>

        {/* Bio Body */}
        <div className="flex flex-col gap-6 text-[#333333] text-base leading-relaxed">
          <p>
            Inspired by her own personal journey and experiences, she co-founded
            Sit With PD with a deep conviction that transformation begins when
            people are given the opportunity to pause, reflect, and reconnect
            with what truly matters. Drawing from over thirteen years of
            distinguished service in the banking sector, she has built a
            reputation for excellence, integrity, leadership, and people-centred
            impact.
          </p>

          <p>
            Following a successful banking career, Oluwafunmike transitioned
            into entrepreneurship and now serves as the Chief Executive Officer
            of Trendies Depot Ltd, where she continues to lead with innovation,
            vision, and purpose. Her ability to combine business acumen with
            genuine compassion has enabled her to influence and empower
            countless individuals across professional, personal, and community
            spaces.
          </p>

          <p>
            An inspirational communicator and respected voice on personal
            growth, family values, and purposeful living, Oluwafunmike is deeply
            committed to helping people build stronger foundations for success
            and fulfilment. Through her leadership, writing, and advocacy, she
            continues to inspire individuals to live intentionally, strengthen
            their relationships, and create lives aligned with their values.
          </p>

          <p>
            At the heart of everything she does is a steadfast belief that when
            people gain clarity, embrace purpose, and nurture meaningful
            connections, they are empowered to transform their lives, strengthen
            their families, and positively impact the world around them.
          </p>
        </div>
      </div>
    </div>
  );
}
