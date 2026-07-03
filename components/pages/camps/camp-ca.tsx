import { Button } from "@/components/ui/button";
import CaretRight from "@/pd-icons/caret-right";

export function CampCACta() {
  return (
    <section className="bg-footer-bg py-24 w-full text-center mt-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col gap-4 lg:w-[50%] items-center">
        <h2 className="heading-2 text-[#EBECEB] ">
          Your space is waiting.

        </h2>
        <p className="text-[#F7FBF6] text-base leading-[140%] w-100 max-w-2xl ">
          You don't have to have it all figured out.
          Just show up. That's enough.
        </p>

        <div className="flex flex-row gap-4 items-center justify-center mt-3">
          <Button variant={"regular"} className="rounded-[8px]">
            Reserve a spot <CaretRight />{" "}
          </Button>
          <Button variant={"outline"} className="rounded-[8px]">
            Ask a question 
          </Button>
        </div>
      </div>
    </section>
  );
}
