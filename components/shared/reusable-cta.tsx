import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ReusableCtaButton {
  text: string;
  href?: string;
}

export interface ReusableCtaProps {
  subtitle?: string;
  title: string;
  description: string;
  buttons: ReusableCtaButton[];
}

export function ReusableCta({
  subtitle,
  title,
  description,
  buttons,
}: ReusableCtaProps) {
  // Map our custom variants to Tailwind classes

  return (
    <section className="relative w-full bg-footer-bg py-24 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="relative z-10  lg:max-w-4xl mx-auto px-4 flex flex-col w-11/12 lg:w-6/12 items-center ">
        {subtitle && (
          <span className="text-[#A8D675] font-semibold text-xs tracking-[2.4px] uppercase">
            {subtitle}
          </span>
        )}

        <h2 className="text-white text-3xl  lg:text-4xl font-bold leading-tight mt-6 mb-3 ">
          {title}
        </h2>

        <p className="text-[#FFFFFFA6] text-base  leading-relaxed">
          {description}
        </p>

        {/* Buttons layout */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-2.5 items-center justify-center mt-6 w-full sm:w-auto">
          <Link href={buttons[0].href || "#"} className="w-full lg:w-auto">
            <Button
              className={cn("w-full sm:w-auto px-5 shadow-none")}
              variant={"regular"}
            >
              {buttons[0].text}
            </Button>
          </Link>
          <Link href={buttons[1].href || "#"} className="w-full lg:w-auto">
            <Button
              className={cn(
                "w-full sm:w-auto shadow-none bg-[#A8D675] px-5 text-[#1F4842]",
              )}
              variant={"regular"}
            >
              {buttons[1].text}
            </Button>
          </Link>
          {buttons.length === 3 && (
            <Link href={buttons[2].href || "#"}>
              <Button
                className={cn(
                  "w-full sm:w-auto shadow-none hidden lg:block text-white hover:bg-transparent px-5 hover:text-white border-[0.67px] border-[#FFFFFF4D]",
                )}
                variant={"outline"}
              >
                {buttons[2].text}
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="absolute -top-20 right-0 lg:right-20 bg-[#A8D6750D] lg:h-100 lg:w-100 h-70 w-70 z-1 rounded-full" />
      <div className="absolute -bottom-20 -left-15 bg-[#A8D6750D] h-70 w-70 z-1 rounded-full" />
    </section>
  );
}
