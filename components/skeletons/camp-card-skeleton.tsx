import { Skeleton } from "@/components/ui/skeleton";

export function CampCardSkeleton() {
  return (
    <div className="flex flex-col rounded-[16px] overflow-hidden bg-[#1A3D36]">
      {/* Image Skeleton */}
      <div className="relative w-full aspect-video shrink-0 bg-[#234E45]">
        <Skeleton className="w-full h-full bg-[#234E45]" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-7 gap-3">
        {/* Category badge */}
        <Skeleton className="h-6 w-28 rounded-full bg-[#234E45]" />

        {/* Title */}
        <Skeleton className="h-7 w-3/4 bg-[#234E45]" />

        {/* Description */}
        <div className="space-y-2 my-1 flex-1">
          <Skeleton className="h-4 w-full bg-[#234E45]" />
          <Skeleton className="h-4 w-5/6 bg-[#234E45]" />
          <Skeleton className="h-4 w-4/6 bg-[#234E45]" />
        </div>

        {/* Bullet points */}
        <div className="space-y-2 mt-1">
          <div className="flex items-center gap-2">
            <Skeleton className="w-2 h-2 rounded-full bg-[#234E45]" />
            <Skeleton className="h-4 w-32 bg-[#234E45]" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="w-2 h-2 rounded-full bg-[#234E45]" />
            <Skeleton className="h-4 w-40 bg-[#234E45]" />
          </div>
        </div>

        {/* CTA Button */}
        <Skeleton className="h-11 w-full rounded-md mt-4 bg-[#234E45]" />
      </div>
    </div>
  );
}

export function CampExperienceSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
      {[1, 2, 3].map((i) => (
        <CampCardSkeleton key={i} />
      ))}
    </div>
  );
}
