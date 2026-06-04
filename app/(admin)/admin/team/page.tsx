import TeamOverview from "@/components/admin/team/team-overview";
import { Suspense } from "react";

export default function TeamPage() {
  return (
    <div className="space-y-12">
      <Suspense fallback={<div>Loading team members...</div>}>
        <TeamOverview />
      </Suspense>
    </div>
  );
}
