import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Oluwatosin SAM-ABEREOLA — Founder & Chief Purpose Officer | Sit With PD",
  description:
    "Oluwatosin SAM-ABEREOLA is a transformational architect, serial entrepreneur, prolific writer, keynote speaker, and passionate advocate for human potential. Founder & Chief Purpose Officer of Sit With PD.",
};

export default function OluwatosinPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-11/12 max-w-5xl mx-auto py-16 lg:py-24">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row gap-8 mb-10">
          {/* Photo */}
          <div className="shrink-0">
            <div className="w-[160px] h-[200px] sm:w-[180px] sm:h-[220px] relative overflow-hidden rounded-md border border-[#DEDEDE]">
              <Image
                src="/images/team-1.png"
                alt="Oluwatosin SAM-ABEREOLA"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Name, Role & Intro */}
          <div className="flex flex-col justify-start gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#181D27]">
                Oluwatosin SAM-ABEREOLA(PD).
              </h1>
              <p className="text-[#649351] text-base font-medium">
                Founder &amp; Chief Purpose Officer, Sit With PD
              </p>
            </div>

            <p className="text-[#444444] text-base leading-relaxed">
              Oluwatosin SAM-ABEREOLA is a transformational architect, serial
              entrepreneur, prolific writer, keynote speaker, and passionate
              advocate for human potential.
            </p>

            <p className="text-[#444444] text-base leading-relaxed">
              As the Founder and Chief Purpose Officer of Sit With PD, he is
              committed to helping individuals discover clarity, build
              resilience, and live purposefully through transformative
              experiences centred on Purpose, Direction, and Personal Discovery.
            </p>
          </div>
        </div>

        {/* Bio Body */}
        <div className="flex flex-col gap-6 text-[#333333] text-base leading-relaxed">
          <p>
            Born out of profound personal experiences and life-defining
            challenges, Sit With PD reflects Oluwatosin&apos;s own journey of
            rediscovery, resilience, and transformation. Drawing from more than
            twenty-six years of leadership, mentorship, entrepreneurship, and
            personal development, he has dedicated his life to empowering others
            to navigate uncertainty, unlock their potential, and create
            meaningful lives aligned with their values and purpose.
          </p>

          <p>
            Beyond Sit With PD, Oluwatosin serves as the Chairman of Gardenia
            Tropicana Group, the parent organisation overseeing his diverse
            business interests and ventures. He is also a highly accomplished
            technology professional, holding prestigious credentials as an AWS
            Certified Solutions Architect – Professional and AWS Certified
            Solutions Architect – Associate. Widely respected for his expertise,
            he is sought after for his contributions within the technology
            sector as well as his insights on leadership, growth, resilience,
            and personal transformation.
          </p>

          <p>
            A confident communicator and compelling keynote speaker, Oluwatosin
            has inspired audiences across conferences, leadership forums, and
            professional platforms. His ability to connect lived experience with
            practical wisdom has impacted countless individuals, helping them
            move from uncertainty to clarity, from limitation to possibility,
            and from merely existing to truly living.
          </p>

          <p>
            At the heart of everything he does is a simple conviction: when
            people discover their purpose, gain direction, and deepen their
            understanding of themselves, they become empowered to transform not
            only their own lives, but also the lives of those around them.
          </p>
        </div>
      </div>
    </div>
  );
}
