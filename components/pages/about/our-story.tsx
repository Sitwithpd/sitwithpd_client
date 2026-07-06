export function OurStory() {
  const steps = [
    {
      year: "",
      title: "Pause & Reflect",
      description: (
        <p>
          <span className=" text-[#60935D] italic">
            {" "}
            Create space for deeper understanding{" "}
          </span>{" "}
          <br />
          Growth begins when we slow down. We encourage individuals to step away
          from life’s noise, reflect on their experiences, and reconnect with
          what truly matters.
        </p>
      ),
    },
    {
      year: "",
      title: "Discover What Matters",
      description: (
        <p>
          <span className=" text-[#60935D] italic">
            {" "}
            Gain clarity, direction, and self-awareness{" "}
          </span>{" "}
          <br />
          Through thoughtful conversations and guided reflection, we help people
          better understand their thoughts, emotions, values, and aspirations,
          bringing clarity to where they are and where they want to go.
        </p>
      ),
    },
    {
      year: "",
      title: "Transform Through Action",
      description: (
        <p>
          <span className=" text-[#60935D] italic">
            {" "}
            Turn insight into meaningful change{" "}
          </span>{" "}
          <br />
          Awareness is only the beginning. We support individuals in
          transforming self-discovery into intentional actions that lead to
          sustainable growth and lasting personal development.
        </p>
      ),
    },
    {
      year: "",
      title: "Grow with Support",
      description: (
        <p>
          <span className=" text-[#60935D] italic">
            {" "}
            Build resilience through connection{" "}
          </span>{" "}
          <br />
          Through practical tools, transformative experiences, and a supportive
          community, we help people develop the confidence, resilience, and
          perspective needed to navigate life’s challenges with purpose.
        </p>
      ),
    },
    {
      year: "",
      title: "Purpose",
      description:(
        <p>
          We believe every person has the capacity to live a meaningful and impactful life. Our mission is to help people discover what truly matters and align their lives with greater intention and purpose.
        </p>
      ),
    },
  ];

  return (
    <section className=" py-10 lg:pt-24 w-full">
      <div className="container mx-auto  flex flex-col items-center">
        <h2 className="heading-2 text-center ">Our Approach</h2>
        <p className="text-center text-base text-[#5A6C8A] mt-2 mb-16 max-w-2xl">
          We guide individuals through a journey of reflection, discovery, and
          intentional growth, creating safe spaces where meaningful and lasting
          transformation can take place.
        </p>

        <div className="flex flex-col gap-6 w-full max-w-7xl bg-[#E9EDF0] py-10 border border-[#DEDEDE] rounded-[16px] relative ">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F2F4F7] border-l-4 border-[#649351] rounded-[10px] p-5 md:px-10 md:py-5 w-11/12 sm:w-10/12 mx-auto "
            >
              <div className="flex flex-col  gap-2 ">
                <span className="text-[#606060] text-base ">{step.year}</span>
                <h3 className="font-medium text-[#242424] text-xl">
                  {step.title}
                </h3>
                <div className="text-black text-base leading-relaxed">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
