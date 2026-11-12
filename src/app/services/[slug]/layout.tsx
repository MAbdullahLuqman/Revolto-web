import type { Metadata } from "next";
import { servicesContent } from "@/data/content";
import { pageMetadata } from "@/data/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = servicesContent.items.find((service) => service.slug === slug);
  return item
    ? pageMetadata(item.title, item.description, `/services/${slug}`)
    : { robots: { index: false, follow: false } };
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
