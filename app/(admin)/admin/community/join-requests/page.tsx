import JoinRequestsOverview from "@/components/admin/community/join-requests-overview";
import { Suspense } from "react";

export default function CommunityJoinRequestsPage() {
  return (
    <div className="space-y-12">
      <Suspense fallback={<div>Loading join requests...</div>}>
        <JoinRequestsOverview />
      </Suspense>
    </div>
  );
}
