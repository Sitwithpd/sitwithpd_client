import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ConsultationTabView } from "@/components/pages/consultation/consultation-tab-view";

const validTabs = ["one-on-one", "executive", "business-strategy", "teams"];

const tabMeta: Record<string, { title: string; description: string }> = {
  "one-on-one": {
    title: "One-on-One Consultation \u2014 Sit With PD",
    description:
      "A confidential, personalised consultation session with Sit With PD. Gain clarity, develop practical strategies, and move forward with confidence in a safe, solution-focused space.",
  },
  executive: {
    title: "Executive Consultation \u2014 Sit With PD",
    description:
      "Executive-level consultation sessions designed for leaders seeking clarity, strategic direction, and enhanced leadership effectiveness. Confidential, practical, and results-focused.",
  },
  "business-strategy": {
    title: "Business Strategy Consultation \u2014 Sit With PD",
    description:
      "Practical business strategy consultations for entrepreneurs and business leaders. Get guidance on growth, decision-making, and building a sustainable, purpose-driven organisation.",
  },
  teams: {
    title: "Team & Organisational Consultation \u2014 Sit With PD",
    description:
      "Group and team consultation sessions to strengthen leadership, culture, collaboration, and performance within your organisation. Guided by Sit With PD's experienced facilitators.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tab: string }>;
}): Promise<Metadata> {
  const { tab } = await params;
  const meta = tabMeta[tab] ?? {
    title: "Consultation \u2014 Sit With PD",
    description:
      "Professional consultation sessions available for individuals, executives, teams, and organisations. Confidential, practical, and personalised.",
  };
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://sitwithpd.com/consultation/${tab}`,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Sit With PD Consultation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/og-image.png"],
    },
  };
}

export function generateStaticParams() {
  return validTabs.map((tab) => ({ tab }));
}

export default async function ConsultationTabPage({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab } = await params;

  if (!validTabs.includes(tab)) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <ConsultationTabView currentTab={tab} />
    </main>
  );
}
