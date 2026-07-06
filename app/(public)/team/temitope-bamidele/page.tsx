import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Temitope BAMIDELE — Director of Technology & Innovation | Sit With PD",
  description:
    "Temitope BAMIDELE is a distinguished technology leader, cybersecurity specialist, and DevOps engineer with 10+ years in telecommunications. Director of Technology & Innovation (DTI) at Sit With PD, driving digital transformation to empower individuals through Purpose, Direction, and Personal Discovery.",
  openGraph: {
    title:
      "Temitope BAMIDELE — Director of Technology & Innovation | Sit With PD",
    description:
      "First-Class Cybersecurity graduate and certified DevOps Engineer leading Sit With PD's technology infrastructure, ensuring the organisation's mission is backed by scalable, secure, and innovative systems.",
    url: "https://sitwithpd.com/team/temitope-bamidele",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Temitope BAMIDELE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Temitope BAMIDELE — Director of Technology & Innovation | Sit With PD",
    description:
      "Cybersecurity specialist and DevOps engineer leveraging technology to accelerate personal transformation and community impact at Sit With PD.",
    images: ["/images/og-image.png"],
  },
};

export default function TemitopeBamidelePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Temitope BAMIDELE",
            url: "https://sitwithpd.com/team/temitope-bamidele",
            jobTitle: "Director of Technology & Innovation",
            worksFor: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
            },
            description:
              "Distinguished technology leader, cybersecurity specialist, and certified DevOps Engineer with over a decade of experience in telecommunications and digital transformation. Leads Sit With PD's technology infrastructure to empower individuals through Purpose, Direction, and Personal Discovery.",
            knowsAbout: [
              "Cybersecurity",
              "DevOps",
              "Digital Transformation",
              "Infrastructure Management",
              "Innovation Strategy",
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
                src="/images/bami.png"
                alt="Temitope BAMIDELE"
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
                Temitope BAMIDELE
              </h1>
              <p className="text-[#649351] text-base font-medium">
                Director of Technology &amp; Innovation (DTI), Sit With PD
              </p>
            </div>

            <p className="text-[#444444] text-base leading-relaxed">
              Temitope BAMIDELE is a distinguished technology leader,
              cybersecurity specialist, DevOps engineer, and innovation
              strategist with a passion for building systems that drive
              efficiency, scalability, and meaningful impact. As the Director of
              Technology &amp; Innovation at Sit With PD, he leads the
              development and integration of technology solutions that support
              the organisation&apos;s mission of empowering individuals through
              Purpose, Direction, and Personal Discovery.
            </p>
          </div>
        </div>

        {/* Bio Body */}
        <div className="flex flex-col gap-6 text-[#333333] text-base leading-relaxed">
          <p>
            A First-Class graduate in Cybersecurity, Temitope brings more than a
            decade of experience within the telecommunications and technology
            sectors, where he has consistently demonstrated excellence in
            infrastructure management, digital transformation, and operational
            innovation. His ability to bridge technical expertise with strategic
            thinking has positioned him as a trusted leader in designing and
            implementing solutions that enable organisations to grow, adapt, and
            thrive in an evolving digital landscape.
          </p>

          <p>
            In addition to his extensive industry experience, Temitope is a
            certified DevOps Engineer and currently serves as Director of
            Technology Infrastructure and Management, where he oversees critical
            technology operations and drives the delivery of robust, secure, and
            high-performing systems. His commitment to excellence, innovation,
            and continuous improvement has earned him recognition among
            colleagues, clients, and industry professionals alike.
          </p>

          <p>
            Beyond his corporate accomplishments, Temitope is an entrepreneur
            with a deep appreciation for technology&apos;s role in unlocking
            potential and creating opportunities. He is widely respected for his
            forward-thinking approach, problem-solving capabilities, and
            unwavering belief that successful organisations are built on strong
            systems, seamless execution, and a culture of innovation.
          </p>

          <p>
            At the heart of his work is a conviction that technology should not
            merely support progress; it should accelerate it. Through Sit With
            PD, he remains committed to leveraging innovation, digital
            transformation, and strategic execution to create impactful
            experiences that empower people, strengthen communities, and inspire
            lasting transformation.
          </p>
        </div>
      </div>
    </div>
  );
}
