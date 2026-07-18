import { Metadata } from "next";
import CampCardByIdOverviewWrapper from "@/components/pages/camps/camp-by-id";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: "Camp Details \u2014 Sit With PD Therapeutic Camp",
    description:
      "Explore this immersive therapeutic camp from Sit With PD. A small-group retreat designed to help you pause, reflect, and reconnect with yourself in nature.",
    openGraph: {
      title: "Therapeutic Camp | Sit With PD",
      description:
        "An immersive retreat experience designed for clarity, genuine connection, and lasting personal growth. Three days away from the noise, in nature, with people on the same journey.",
      url: `https://sitwithpd.com/camps/${id}`,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Sit With PD Therapeutic Camp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Therapeutic Camp | Sit With PD",
      description:
        "Discover the camp that's right for you. Apply now and take the next step toward becoming all you were created to be.",
      images: ["/images/og-image.png"],
    },
  };
}

export default async function CampDetailsOverview({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div>
      <CampCardByIdOverviewWrapper id={id} />
    </div>
  );
}
