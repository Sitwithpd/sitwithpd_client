import { Pill } from "@/components/ui/pill";

const processSteps = [
  {
    step: "1",
    title: "Pause",
    description:
      "Step back from life's noise. Create space for stillness and allow yourself to breathe, reflect, and gain perspective on where you are.",
  },
  {
    step: "2",
    title: "Discover",
    description:
      "Develop deeper self-awareness and uncover the patterns, beliefs, and possibilities shaping your journey toward who you truly are.",
  },
  {
    step: "3",
    title: "Transform",
    description:
      "Turn insight into intentional action  building the resilience, confidence, and purpose needed to navigate life and create lasting change.",
  },

];

export default function Methodology() {
  return (
    <section className="py-10 lg:py-24 bg-white flex flex-col items-center">
      <div className="container mx-auto text-center flex flex-col items-center">
        <div className="flex flex-col items-center max-w-5xl">
          <Pill text="Our Methodology" className="" />
          <h2 className="heading-2 mb-5  ">
            Pause. Discover. Transform.
          </h2>
          <p className="text-black  leading-6">
            Every Sit With PD experience is guided by a simple yet powerful
            journey. Like a seed taking root before it blooms, lasting
            transformation begins with stillness, grows through self-discovery,
            and flourishes through intentional action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-6xl text-left mt-10">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="bg-[#314C14] flex flex-col rounded-[16px] px-5 py-6 "
            >
              <div className="w-10 h-10 rounded-full bg-secondary-green flex items-center justify-center text-[#30430E] font-medium text-lg mb-6">
                {item.step}
              </div>
              <h3 className="text-[#FBFFF6] font-emibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-[#FBFFF6] text-base leading-[1.425rem]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
