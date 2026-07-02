import { ProgramHero } from "@/components/pages/programs/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guided Therapeutic Programs",
  description:
    "Explore our specialized therapeutic programs designed for presence-based healing, self-awareness, and emotional transformation at your own pace.",
};
import { ProgramOverview } from "@/components/pages/programs/program-overview";
import { Testimonials } from "@/components/pages/homepage/testimonials";
import { CtaBlock } from "@/components/shared/cta-block";
import ProgramGrowth from "@/components/pages/programs/program-growth";
import { ProgramCta } from "@/components/pages/programs/program-cta";
import Resources from "@/components/pages/homepage/resources";
import PowerOfPresence from "@/components/pages/programs/power-of-presence";

export default function ProgramsPage() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <ProgramHero />
      <div className="w-11/12 mx-auto">
        <ProgramOverview />
        <ProgramGrowth />
        <PowerOfPresence />
      </div>
      <ProgramCta />

      <div className="w-full bg-white">
        <Testimonials />
      </div>
      <div className="w-11/12 mx-auto mb-10">
        <Resources showBtn={false} />
      </div>
    </main>
  );
}
