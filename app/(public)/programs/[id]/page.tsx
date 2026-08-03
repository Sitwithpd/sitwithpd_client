import { Metadata } from "next";
import ProgramDetailsClient from "@/components/pages/programs/program-details-client";
import { get_program_by_ID } from "@/lib/api/services/programs/programs.services";
import { DEFAULT_OG_IMAGE, SITE_URL, toMetaDescription } from "@/lib/seo";

interface Props {
  params: { id: string };
}

const FALLBACK_DESCRIPTION =
  "A structured Sit With PD programme designed to help you build emotional awareness, resilience, and clarity at your own pace.";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const url = `${SITE_URL}/programs/${id}`;

  try {
    const program = (await get_program_by_ID(id)).data;

    const duration = program.durationWeeks
      ? `${program.durationWeeks}-week programme`
      : "";
    const title = duration ? `${program.title} — ${duration}` : program.title;
    const description = toMetaDescription(
      program.description,
      `${program.title}, a guided Sit With PD programme.`,
    );
    const image = program.thumbnail || DEFAULT_OG_IMAGE;

    return {
      title,
      description,
      keywords: [
        ...(program.tags ?? []),
        program.category,
        "guided programme",
        "Sit With PD",
      ].filter((k: unknown): k is string => Boolean(k)),
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        type: "website",
        url,
        images: [{ url: image, width: 1200, height: 630, alt: program.title }],
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
      title: "Guided Programme",
      description: FALLBACK_DESCRIPTION,
      alternates: { canonical: url },
      openGraph: {
        title: "Guided Programme | Sit With PD",
        description: FALLBACK_DESCRIPTION,
        url,
        images: [
          {
            url: DEFAULT_OG_IMAGE,
            width: 1200,
            height: 630,
            alt: "Sit With PD Programme",
          },
        ],
      },
    };
  }
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
