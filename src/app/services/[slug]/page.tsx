import { notFound } from "next/navigation";
import { servicesContent } from "@/data/content";
import ClientPage from "./client-page";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!servicesContent.items.some((service) => service.slug === slug)) notFound();
  return <ClientPage slug={slug} />;
}
