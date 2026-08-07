import { CampHero } from "@/components/pages/camps/hero";
import { Metadata } from "next";
import { getCamps } from "@/lib/api/services/camps/camps.services";
import { DEFAULT_OG_IMAGE, SITE_URL, toMetaDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Therapeutic Camps — Pause, Reflect & Reconnect With Yourself",
  description:
    "Join a Sit With PD immersive therapeutic retreat. A small-group experience in nature designed for clarity, genuine connection, and lasting personal growth. Apply now.",
  alternates: { canonical: `${SITE_URL}/camps` },
  openGraph: {
    title: "Therapeutic Camps — Pause, Reflect & Reconnect | Sit With PD",
    description:
      "Days away from the noise. In nature, with people on the same journey, guided by those who have walked it too. Small-group therapeutic retreats.",
    url: `${SITE_URL}/camps`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sit With PD Therapeutic Camp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapeutic Camps — Pause, Reflect & Reconnect",
    description:
      "An immersive therapeutic retreat for clarity, growth, and genuine connection.",
    images: [DEFAULT_OG_IMAGE],
  },
};
import { CampDifference } from "@/components/pages/camps/camp-difference";
import { CampHighlights } from "@/components/pages/camps/camp-highlights";
import { CampsJourney } from "@/components/pages/camps/camps-journey";
import { CampExperience } from "@/components/pages/camps/camp-experience";
import { ReusableCta } from "@/components/shared/reusable-cta";
import { ConsultationTestimonials } from "@/components/pages/consultation/consultation-testimonials";
import { CampWho } from "@/components/pages/camps/camp-who";
import { CampTransform } from "@/components/pages/camps/camp-transform";

// The page is otherwise static marketing; this keeps the camp structured data
// from freezing at build time.
export const revalidate = 3600;

const EVENT_STATUS: Record<string, string> = {
  UPCOMING: "https://schema.org/EventScheduled",
  ONGOING: "https://schema.org/EventScheduled",
  CANCELLED: "https://schema.org/EventCancelled",
};

// schema.org/Event requires startDate, so camps without one are omitted rather
// than emitted as markup search engines will reject.
async function buildCampListJsonLd() {
  try {
    const camps = (await getCamps()).data.filter(
      (camp) => camp.startDate && camp.status !== "COMPLETED",
    );
    if (!camps.length) return null;

    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Sit With PD Therapeutic Camps",
      itemListElement: camps.map((camp, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Event",
          name: camp.title,
          description: toMetaDescription(camp.description, camp.title, 300),
          url: `${SITE_URL}/camps/${camp.id}`,
          startDate: camp.startDate,
          ...(camp.endDate ? { endDate: camp.endDate } : {}),
          ...(camp.thumbnail ? { image: camp.thumbnail } : {}),
          ...(camp.location
            ? { location: { "@type": "Place", name: camp.location } }
            : {}),
          organizer: {
            "@type": "Organization",
            name: "Sit With PD",
            url: SITE_URL,
          },
          eventAttendanceMode:
            "https://schema.org/OfflineEventAttendanceMode",
          eventStatus:
            EVENT_STATUS[camp.status ?? "UPCOMING"] ??
            "https://schema.org/EventScheduled",
        },
      })),
    };
  } catch {
    return null;
  }
}

export default async function CampsPage() {
  const jsonLd = await buildCampListJsonLd();

  return (
    <div className="flex flex-col items-center  w-full overflow-x-hidden">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CampHero />
      <div className="w-11/12 mx-auto">
        <CampDifference />
        {/* <WhatTheCampIs />
        <CampJourney /> */}
      </div>
      <CampHighlights />
      <CampsJourney />
      <CampExperience />
      <CampWho />
      <CampTransform />
      {/* <GlimpseGallery /> */}
      {/* <Suspense fallback={<CardSkeletons />}>
        <div className="w-11/12 mx-auto">
          <CampServices />
        </div>
      </Suspense> */}
   
     
      <ConsultationTestimonials />
      <ReusableCta
        subtitle="Begin Your Camp Journey"
        title="Your space is waiting. Just show up."
        description="You don't need to have it all figured out. Discover the camp that's right for you and take the next step toward becoming all you were created to be.."
        buttons={[
          {
            text: "Contact Us",
            href: "/contact",
          },
          {
            text: "View Community",
            href: "/community",
          },
        ]}
      />
      {/* Shared CTA Block with custom props */}
    </div>
  );
}
