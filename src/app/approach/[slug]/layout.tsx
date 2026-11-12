import type { Metadata } from "next";
import { approachDetails } from "@/data/approach";
import { pageMetadata } from "@/data/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = approachDetails.find((detail) => detail.slug === slug);
  return item
    ? pageMetadata(item.title, item.description, `/approach/${slug}`)
    : { robots: { index: false, follow: false } };
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
