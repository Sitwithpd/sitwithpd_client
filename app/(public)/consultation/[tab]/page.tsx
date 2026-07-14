import { notFound } from "next/navigation";
import { ConsultationTabView } from "@/components/pages/consultation/consultation-tab-view"; 

const validTabs = ["one-on-one", "executive", "business-strategy", "teams"];

export function generateStaticParams() {
  return validTabs.map((tab) => ({ tab }));
}

export default async function ConsultationTabPage({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const {tab} = await params;
  
  if (!validTabs.includes(tab)) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <ConsultationTabView currentTab={tab} />
    </main>
  );
}
