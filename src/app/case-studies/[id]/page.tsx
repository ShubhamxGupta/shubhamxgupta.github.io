import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ id: study.id }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const study = caseStudies.find((item) => item.id === id);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailClient study={study} />;
}
