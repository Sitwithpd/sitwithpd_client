import CommunityOverview from "@/components/admin/community/community-overview";
import { Suspense } from "react";

export default function CommunityPage() {
  return (
    <div className="space-y-12">
      <Suspense fallback={<div>Loading communities...</div>}>
        <CommunityOverview />
      </Suspense>
    </div>
  );
}
