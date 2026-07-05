export function TherapeuticApproach() {
  const healingPoints = [
    "Building awareness of one's body, mind, and spirit",
    "Embracing present-moment awareness, letting go of future and past anxiety",
    "Fostering emotional regulation through grounding techniques",
    "Creating safe space for processing deep-seated trauma",
  ];

  const developmentPoints = [
    "Building emotional intelligence and self awareness",
    "Developing authentic leadership and relationship skills",
    "Clarifying values and aligning life goals with purpose",
    "Creating sustainable practices for health and growth",
    "Building capacity for deeper, more meaningful connection",
  ];

  return (
    <section className="container  mx-auto  py-18 flex flex-col items-center">
      {/* <h2 className="heading-2 text-center mb-7 lg:mb-16">Our Therapeutic Approach</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left Card */}
        <div className="bg-[#E7F0E733] border border-[#C9EDC7] rounded-[4px] p-5">
          <h3 className="heading-2  mb-6">Our Vision</h3>
          <div className="text-black text-base space-y-5">
            <p className="">
              Our vision is to build a world where more people live with
              clarity, resilience, and purpose; empowered to navigate life's
              challenges, embrace personal growth, and become the fullest
              expression of who they are.
            </p>
            <p>
              We envision Sit With PD as a transformative global movement that
              inspires individuals to pause, reconnect with themselves, and
              create lives of meaning, impact, and intentional living.
            </p>
            <p>
              We aspire to be a trusted catalyst for personal discovery and
              human transformation, helping generations of people move beyond
              uncertainty and limitation into lives marked by self-awareness,
              fulfilment, authentic connection, and purposeful contribution to
              the world around them.
            </p>
          </div>
        </div>

        {/* right side  */}
        <div className="bg-[#634005]  rounded-[4px] p-5">
          <h3 className="heading-2 text-[#FEF6E7]  mb-6">Our Mission</h3>
          <div className="text-[#FFECE5] text-base space-y-5">
            <p className="">
              At Sit With PD, our mission is to create transformative spaces
              where people can pause, reflect, and reconnect with themselves
              amidst the noise of everyday life. Through purposeful
              conversations, therapeutic experiences, guided growth, and
              meaningful community, we empower individuals to discover clarity
              in uncertainty, resilience in adversity, and purpose in every
              season of life.
            </p>
            <p>
              We exist to help people move beyond merely surviving and into
              intentional living — unlocking their potential, embracing their
              journey, and becoming the person they were created to be. Because
              we believe that when people understand themselves more deeply,
              they gain the confidence, direction, and courage to transform
              their lives and positively impact the world around them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
