import { Pill } from "@/components/ui/pill";
import Image from "next/image";

const coreValues = [
  {
    title: "Reflection",
    description:
      "We believe in the transformative power of genuine presence with ourselves, with others, and with what is.",
  },
  {
    title: "Authenticity",
    description:
      "We encourage people to show up, as they are genuine transformation begins when we embrace true ourselves with honesty",
  },
  {
    title: "Compassion",
    description:
      "Every person carries a unique story. We lead with empathy, understanding, and kindness, creating safe spaces where people feel seen",
  },
  {
    title: "Resilience",
    description:
      "Life's challenges do not define us they refine us. We believe adversity can become a catalyst for growth, strength and confidence",
  },
  {
    title: "Purpose",
    description:
      "We believe every person has the capacity to live a meaningful and impactful life. Our mission is to help people discover what truly matters",
  },
];

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#F9FBFF] rounded-[10px] relative flex flex-col p-5 h-auto  items-center text-center  w-full">
      <div className="  h-75 w-75 bg-[#E9EDF0] relative rounded-full flex items-center justify-center ">
        <div className="py-5 px-4 absolute top-5   ">
          <div className="w-10 h-10 mx-auto rounded-full bg-[#25756A1A] flex items-center justify-center">
            <Image
              src="/images/green-heart-no-overlay.png"
              alt={title}
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </div>

          <h3 className="text-lg font-semibold text-[#1A2B1A] mb-3">{title}</h3>
          <p className="text-sm text-[#5A6C5A] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {/* Large grey circle with icon */}
    </div>
  );
}

export function CoreValues() {
  return (
    <section className="bg-[#E9EDF0] py-10 lg:py-20 w-full">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="mb-7 lg:mb-16 flex flex-col items-center max-w-xl">
          <Pill text="Our Core Values" />
          <h2 className="heading-2 text-center">
            What Guides Everything We Do
          </h2>
          <p className="text-center text-base text-[#5A6C8A] mt-2">
            We pause with intention, live authentically, lead with compassion,
            grow through resilience, and pursue purpose in all that we do.
          </p>
        </div>

        <div className="w-full max-w-5xl flex flex-col gap-5">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {coreValues.slice(0, 3).map((value) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
          {/* Row 2: 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:w-2/3 mx-auto">
            {coreValues.slice(3).map((value) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
