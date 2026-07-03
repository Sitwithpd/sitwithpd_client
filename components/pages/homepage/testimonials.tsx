"use client";

import { Pill } from "@/components/ui/pill";
import { useGetAllTestimonials } from "@/lib/api/hooks/testimonials/testimonials.hooks";
import CardSkeletons from "@/components/skeletons/card-skeletons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const { data, isLoading, error } = useGetAllTestimonials();

  const testimonials = data?.data ?? [];

  if (isLoading) return <CardSkeletons />;
  if (error)
    return (
      <p className="text-center min-h-[40vh] flex items-center justify-center text-xl">
        Error fetching testimonials
      </p>
    );
  if (data?.data?.length === 0)
    return (
      <p className="text-center min-h-[40vh] flex items-center justify-center text-xl">
        No testimonials yet
      </p>
    );

  return (
    <section className="container mx-auto px-4 md:px-8 py-24 flex flex-col items-center overflow-hidden">
      <Pill text="Testimonial" />

      <h2 className="heading-2 text-center mb-5 lg:mb-16 max-w-[900px]">
        Real experiences from people we've supported, stories of growth, healing
        and meaningful changes.
      </h2>

      <div className="w-full flex flex-wrap justify-center gap-6 max-w-7xl">
        {testimonials.slice(0, 6).map((t, i) => (
          <Link
            href="/testimonials"
            key={i}
            className="flex flex-col bg-white rounded-[16px] p-8 border border-[#EEF2F6] hover:border-brand-green/20 shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] h-[320px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[380px] group"
          >
            <p className="text-[#697586] text-base leading-relaxed mb-6 line-clamp-5 flex-1 group-hover:text-primary-text transition-colors">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={t.avatarUrl ?? "/images/testimonials/ada.png"}
                alt={t.name}
                className="w-[48px] h-[48px] rounded-full object-cover bg-gray-100 border-2 border-transparent group-hover:border-brand-green/20 transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-[#202939] text-base group-hover:text-brand-green transition-colors">
                  {t.name}
                </span>
                <span className="text-[#697586] text-base">{t.role}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/testimonials">
          <Button variant="regular" className="px-8 py-3">
            Read More Testimonials
          </Button>
        </Link>
      </div>
    </section>
  );
}
