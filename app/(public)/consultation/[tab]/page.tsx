import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ConsultationTabView } from "@/components/pages/consultation/consultation-tab-view";
import {
  getAllConsultationServices,
  getConsultationServiceById,
} from "@/lib/api/services/consultations/consultation-services.services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tab: string }>;
}): Promise<Metadata> {
  const { tab } = await params;

  try {
    const res = await getConsultationServiceById(tab);
    if (!res || !res.data) {
      return {
        title: "Consultation \u2014 Sit With PD",
        description: "Professional consultation sessions available.",
      };
    }
    const service = res.data;

    return {
      title: `${service.title} \u2014 Sit With PD`,
      description: service.description,
      openGraph: {
        title: `${service.title} \u2014 Sit With PD`,
        description: service.description,
        url: `https://sitwithpd.com/consultation/${tab}`,
        images: [
          {
            url: service.coverImageUrl || "/images/og-image.png",
            width: 1200,
            height: 630,
            alt: service.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${service.title} \u2014 Sit With PD`,
        description: service.description,
        images: [service.coverImageUrl || "/images/og-image.png"],
      },
    };
  } catch (error) {
    return {
      title: "Consultation \u2014 Sit With PD",
      description: "Professional consultation sessions available.",
    };
  }
}

export async function generateStaticParams() {
  try {
    const res = await getAllConsultationServices();
    if (res && res.data) {
      return res.data.map((service) => ({ tab: service.id }));
    }
  } catch (error) {
    console.error(
      "Error fetching consultation services for static params:",
      error,
    );
  }
  return [];
}

export default async function ConsultationTabPage({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab } = await params;

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <ConsultationTabView currentTab={tab} />
    </main>
  );
}
