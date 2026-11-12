import { notFound } from "next/navigation";
import { approachDetails } from "@/data/approach";
import ClientPage from "./client-page";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!approachDetails.some((detail) => detail.slug === slug)) notFound();
  return <ClientPage slug={slug} />;
}
