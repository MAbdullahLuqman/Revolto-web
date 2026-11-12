import { notFound } from "next/navigation";
import { industriesContent } from "@/data/content";
import ClientPage from "./client-page";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!industriesContent.items.some((industry) => industry.slug === slug)) notFound();
  return <ClientPage slug={slug} />;
}
