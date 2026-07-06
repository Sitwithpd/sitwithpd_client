import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kola OLAJIDE — Director of Execution & Integration | Sit With PD",
  description:
    "Kola OLAJIDE is a distinguished engineering professional, strategic operations leader, renewable energy expert, and leadership trainer. Director of Execution & Integration at Sit With PD, translating purpose into meaningful impact.",
  openGraph: {
    title: "Kola OLAJIDE — Director of Execution & Integration | Sit With PD",
    description:
      "Engineering professional, solar energy expert, and leadership trainer who ensures Sit With PD's vision is supported by effective systems, operational excellence, and transformational experiences.",
    url: "https://sitwithpd.com/team/kola-olajide",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kola OLAJIDE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kola OLAJIDE — Director of Execution & Integration | Sit With PD",
    description:
      "Director of Execution & Integration at Sit With PD. Engineering leader committed to translating purpose into meaningful achievement.",
    images: ["/images/og-image.png"],
  },
};

export default function KolaOlajidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Kola OLAJIDE",
            url: "https://sitwithpd.com/team/kola-olajide",
            jobTitle: "Director of Execution & Integration",
            worksFor: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
            },
            description:
              "Distinguished engineering professional, strategic operations leader, renewable energy expert, and leadership trainer. Translates purpose into action at Sit With PD through effective systems, operational excellence, and transformational experiences.",
            knowsAbout: [
              "Engineering",
              "Renewable Energy",
              "Operations Leadership",
              "Mentoring",
              "Strategic Execution",
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
                src="/images/kola.png"
                alt="Kola OLAJIDE"
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
                Kola OLAJIDE
              </h1>
              <p className="text-[#649351] text-base font-medium">
                Director of Execution &amp; Integration, Sit With PD
              </p>
            </div>

            <p className="text-[#444444] text-base leading-relaxed">
              Kola OLAJIDE is a distinguished engineering professional,
              strategic operations leader, leadership trainer, and renewable
              energy expert with a passion for transforming vision into
              meaningful impact.
            </p>
            <p className="text-[#444444] text-base leading-relaxed">
              As the Director of Execution &amp; Integration at Sit With PD, he
              plays a vital role in translating purpose into action, ensuring
              that the organisation&apos;s vision is supported by effective
              systems, operational excellence, and transformational experiences
              that empower individuals to live with greater clarity, direction,
              and purpose.
            </p>
          </div>
        </div>

        {/* Bio Body */}
        <div className="flex flex-col gap-6 text-[#333333] text-base leading-relaxed">
          <p>
            With a strong academic background in Electrical and Electronics
            Engineering, complemented by Postgraduate Diplomas in Electrical
            Engineering and Christian Education, Kola brings a rare combination
            of technical expertise, strategic thinking, and people-centred
            leadership. His career has been shaped by a commitment to
            innovation, service, and creating sustainable solutions that improve
            lives and drive positive change.
          </p>

          <p>
            Widely respected within the renewable energy sector, Kola has
            established himself as a trusted authority in solar energy design,
            auditing, and energy systems implementation. His reputation for
            excellence, integrity, and results-driven leadership has earned him
            the confidence of clients, organisations, and industry
            professionals, while enabling him to contribute to impactful
            projects and initiatives across diverse sectors.
          </p>

          <p>
            Having previously served as a Lift and Escalator Engineer and
            currently serving as Chief Technical Officer at Timtech
            Electric-Solar, Kola continues to demonstrate exceptional
            leadership, technical proficiency, and a dedication to developing
            people and systems. Through his mentoring, training, and
            professional engagements, he has inspired numerous individuals to
            pursue excellence, embrace innovation, and maximise their potential.
          </p>

          <p>
            At the core of his philosophy is the belief that vision alone is
            never enough; lasting impact is created when purpose is supported by
            strategy, execution, and intentional action. Through Sit With PD, he
            remains committed to helping individuals and communities move beyond
            aspiration, unlock their potential, and transform purpose into
            meaningful achievement.
          </p>
        </div>
      </div>
    </div>
  );
}
