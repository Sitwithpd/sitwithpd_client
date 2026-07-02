import { Pill } from "@/components/ui/pill";
import Image from "next/image";

const processSteps = [
  {
    step: "1",
    title: "Emotional Healing",
    description:
      "Release emotional patterns and cultivate emotional intelligence through guided therapy.",
    icon: (
      <Image
        src="/icons/emotional-healing.svg"
        alt="Emotional Healing"
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
    ),
  },
  {
    step: "2",
    title: "Personal Growth",
    description:
      "Accelerate your development through structured programs and personalized guidance.",
    icon: (
      <Image
        src="/icons/personal-growth.svg"
        alt="Personal Growth"
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
    ),
  },
  {
    step: "3",
    title: "Community Connection",
    description:
      "Connect with like-minded individuals in a safe, supportive therapeutic community.",
    icon: (
      <Image
        src="/icons/community-connection.svg"
        alt="Community Connection"
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
    ),
  },
];

export default function PowerOfPresence() {
  return (
    <section className="py-10  bg-white flex flex-col items-center">
      <div className="container mx-auto text-center flex flex-col items-center">
        <div className="flex flex-col items-center max-w-5xl">
          <Pill text="The power of presence" className="" />
          <h2 className="heading-2 mb-5  ">Sit-With-PD harnesses the transformative power of presence-based therapy and personal development through authentic connection and guided facilitation.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-6xl text-left mt-10">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="bg-[#CBD4DB66] flex flex-col rounded-[16px] px-5 py-6 "
            >
              <div className="w-10 h-10 rounded-full bg-[#25756A1A] flex items-center justify-center text-[#30430E] font-medium text-lg mb-6">
                {item.icon}
              </div>
              <h3 className="text-[#132812] font-medium text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-[#14312D] text-base lg:leading-[1.425rem]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
