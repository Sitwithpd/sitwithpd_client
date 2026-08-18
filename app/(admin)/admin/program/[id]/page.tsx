

import ProgramDetailClient from "./program-detail-client";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProgramDetailsPage({ params }: Props) {
  const { id } = await params;
  return <ProgramDetailClient programId={id} />;
}
