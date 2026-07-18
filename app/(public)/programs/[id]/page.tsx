import { Metadata } from "next";
import ProgramDetailsClient from "@/components/pages/programs/program-details-client";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: "Programme Details \u2014 Sit With PD",
    description:
      "Explore this guided programme from Sit With PD. Structured to help you build emotional awareness, resilience, and clarity at your own pace.",
    openGraph: {
      title: "Guided Programme | Sit With PD",
      description:
        "A structured, purposeful programme designed to help you heal, grow, and transform at your own pace.",
      url: `https://sitwithpd.com/programs/${id}`,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Sit With PD Programme",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Guided Programme | Sit With PD",
      description:
        "Discover and enrol in a guided programme built for your personal growth journey.",
      images: ["/images/og-image.png"],
    },
  };
}

export default async function ProgramDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div>
      <ProgramDetailsClient id={id} />
    </div>
  );
}
