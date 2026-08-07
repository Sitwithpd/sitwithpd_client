import { Suspense } from "react";
import MembershipDashboard from "@/components/user/dashboard/membership-dashboard";
import { Spinner } from "@/components/spinner";

export const metadata = {
  title: "Membership",
  description: "Manage your Sit With PD membership, billing and plan.",
};

export default function DashboardMembershipPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center py-20">
          <Spinner size={40} />
        </div>
      }
    >
      <MembershipDashboard />
    </Suspense>
  );
}
