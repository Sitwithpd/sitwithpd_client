import { Metadata } from "next";
import CampCardByIdOverviewWrapper from "@/components/pages/camps/camp-by-id";
import { getCamp } from "@/lib/api/services/camps/camps.services";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  formatDateRange,
  toMetaDescription,
} from "@/lib/seo";

interface Props {
  params: { id: string };
}

const FALLBACK_DESCRIPTION =
  "An immersive Sit With PD therapeutic camp — a small-group retreat designed to help you pause, reflect, and reconnect with yourself.";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const url = `${SITE_URL}/camps/${id}`;

  try {
    const camp = (await getCamp(id)).data;

    const dates = formatDateRange(camp.startDate, camp.endDate);
    const context = [camp.location, dates].filter(Boolean).join(" · ");
    const title = context ? `${camp.title} — ${context}` : camp.title;
    const description = toMetaDescription(
      camp.description,
      context
        ? `${camp.title}, a Sit With PD therapeutic camp in ${context}.`
        : FALLBACK_DESCRIPTION,
    );
    const image =
      camp.thumbnail || camp.images?.[0]?.url || DEFAULT_OG_IMAGE;

    return {
      title,
      description,
      keywords: [camp.category, camp.location, "therapeutic camp", "Sit With PD"]
        .filter((k): k is string => Boolean(k)),
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        type: "website",
        url,
        images: [{ url: image, width: 1200, height: 630, alt: camp.title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch {
    return {
      title: "Therapeutic Camp",
      description: FALLBACK_DESCRIPTION,
      alternates: { canonical: url },
      openGraph: {
        title: "Therapeutic Camp | Sit With PD",
        description: FALLBACK_DESCRIPTION,
        url,
        images: [
          {
            url: DEFAULT_OG_IMAGE,
            width: 1200,
            height: 630,
            alt: "Sit With PD Therapeutic Camp",
          },
        ],
      },
    };
  }
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
