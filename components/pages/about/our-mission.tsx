import Image from "next/image";

export function OurMission() {


  return (
    <section className="container mx-auto  py-10 lg:py-20 flex flex-col lg:flex-row-reverse  gap-10 md:gap-16  items-center max-w-6xl">
      {/* Left Content */}
      <div className="flex-1  ">
        <h2 className="heading-2 mb-6">Founder's Story</h2>
        <div className="text-black text-base leading-[140%] space-y-4 lg:h-125 overflow-y-auto scrollbar-hide">
          <p className=" ">
            There was a time when my life looked nothing like the vision I had
            imagined. If someone had told me then that one day I would be
            sharing this story, I probably would have said, "There's no way I'm
            ever going to tell my story and make it look like it was easy."
            Because it wasn't.
          </p>

          <p className=" ">
            Between 2016 and 2019, I watched businesses fail, investments
            disappear, and years of hard work unravel before my eyes. What began
            as a series of setbacks became a season of loss that left me
            questioning everything; my purpose, my direction, and even myself.
          </p>

          <p className=" ">
            The greatest loss wasn't financial; it was the quiet loss of
            enthusiasm, confidence, and hope. Behind every smile was a struggle
            few people could see, and behind every attempt to move forward was a
            mind searching for answers.
          </p>

          <p className=" ">
            When everything I had built came crashing down, I found myself
            standing at a crossroads. For the first time, I could no longer rely
            on achievement, ambition, or external success to define who I was. I
            was forced to confront difficult questions: Who am I when everything
            is stripped away? What remains when life doesn't go according to
            plan?
          </p>

          <p className=" ">
            Instead of running from the pain, I began to sit with it. In that
            season of reflection, I discovered that resilience is not about
            avoiding hardship; it's about growing through it. What felt like the
            end of my story became the beginning of a deeper journey of healing,
            self-awareness, and personal discovery.
          </p>

          <p className="text-regular-button  italic  ">
            That journey gave birth to Sit With PD. PD stands for Purpose,
            Direction, and Personal Discovery three things I desperately needed
            during one of the darkest seasons of my life.
          </p>

          <p className=" ">
            Today, Sit With PD exists to help others who feel overwhelmed,
            stuck, uncertain, or disconnected reconnect with themselves and move
            forward with greater clarity, resilience, and purpose. Because I've
            learned that sometimes the breakthrough we're searching for doesn't
            begin with finding all the answers; it begins with sitting with
            ourselves long enough to hear them.
          </p>
        </div>

     
      </div>

      {/* Right Image Placeholder */}
      <div className="flex-1 w-full h-full">
        {/* Using the join-us image as a placeholder since it features people connecting */}
        <div className="w-full aspect-square   overflow-hidden relative ">
          <Image
            src="/images/founder.webp"
            alt="Our Mission"
            fill
            className="object-cover rounded-[16px]"
          />
        </div>
      </div>
    </section>
  );
}
