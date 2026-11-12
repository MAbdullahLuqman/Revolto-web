import type { Metadata } from "next";
import { industriesContent } from "@/data/content";
import { pageMetadata } from "@/data/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = industriesContent.items.find((industry) => industry.slug === slug);
  return item
    ? pageMetadata(`${item.title} Lead Generation`, item.description, `/industries/${slug}`)
    : { robots: { index: false, follow: false } };
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
