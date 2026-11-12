import { notFound } from "next/navigation";
import { caseStudies } from "@/data/content";
import ClientPage from "./client-page";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!caseStudies.some((study) => study.slug === slug)) notFound();
  return <ClientPage slug={slug} />;
}
