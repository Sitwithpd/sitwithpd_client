import { Skeleton } from "@/components/ui/skeleton";

export function ProgramsListingCardSkeleton() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full flex flex-col pt-16 lg:pt-24 lg:pb-10">
        <div className="w-11/12 mx-auto max-w-7xl">
          {/* Header Area */}
          <div className="lg:mb-8 py-4 lg:py-0">
            <div className="flex items-center gap-3 mb-4">
              <Skeleton className="h-7 w-28 rounded-full" />
              <Skeleton className="h-5 w-40" />
            </div>
            <Skeleton className="h-10 w-3/4 mb-2 lg:mb-4" />
            <Skeleton className="h-5 w-1/2" />
          </div>

          {/* Content Area */}
          <div className="flex flex-col gap-5 lg:gap-10 items-start lg:flex-row">
            {/* Image placeholder */}
            <div className="w-full lg:w-[40%] shrink-0 rounded-[16px] aspect-4/3 overflow-hidden">
              <Skeleton className="w-full h-full" />
            </div>

            {/* Text / Details */}
            <div className="w-full lg:flex-1 flex flex-col pt-2">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-11/12 mb-2" />
              <Skeleton className="h-4 w-4/5 mb-5" />

              <Skeleton className="h-4 w-36 mb-4" />

              {/* Cover items grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Skeleton className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" />
                    <Skeleton className="h-4 w-full" />
                  </li>
                ))}
              </ul>

              <Skeleton className="h-px w-full mb-6" />

              {/* Details grid */}
              <div className="flex flex-col lg:grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4 w-full mb-10">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <Skeleton className="h-3 w-20 mb-2" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                ))}
              </div>

              {/* Button */}
              <Skeleton className="h-11 w-52 rounded-md" />
            </div>
          </div>
        </div>

        {/* Who This Is For Bottom Bar */}
        <div className="w-full bg-[#F5F7F5] border-[0.67px] border-[#E8E8E8] mt-10 py-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 lg:gap-24 w-11/12 mx-auto lg:pr-20">
            <Skeleton className="h-4 w-32 shrink-0" />
            <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 w-full">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-4 w-36" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/** Shows multiple card skeletons for the overview loading state */
export function ProgramsListingOverviewSkeleton() {
  return (
    <div className="w-0 mb-10 py-10">
      {[1, 2, 3].map((i) => (
        <ProgramsListingCardSkeleton key={i} />
      ))}
    </div>
  );
}
