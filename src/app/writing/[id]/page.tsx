import { writings } from "@/data/writings";
import { notFound } from "next/navigation";
import WritingDetailClient from "./WritingDetailClient";

export function generateStaticParams() {
  return writings.map((post) => ({ id: post.id }));
}

export default async function WritingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = writings.find((item) => item.id === id);

  if (!post) {
    notFound();
  }

  return <WritingDetailClient post={post} />;
}
