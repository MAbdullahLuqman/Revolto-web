import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";

const labels: Record<string, string> = {
  "privacy-policy": "Privacy Policy",
  "terms-of-use": "Terms of Use",
  "cookie-policy": "Cookie Policy",
  accessibility: "Accessibility Statement",
  "anti-modern-slavery": "Anti Modern Slavery Statement",
};
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return labels[slug]
    ? pageMetadata(labels[slug], `${labels[slug]} for the Rovolto website.`, `/legal/${slug}`)
    : { robots: { index: false, follow: false } };
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
