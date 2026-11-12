import { notFound } from "next/navigation";
import ClientPage from "./client-page";

const legalSlugs = [
  "privacy-policy",
  "terms-of-use",
  "cookie-policy",
  "accessibility",
  "anti-modern-slavery",
];
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!legalSlugs.includes(slug)) notFound();
  return <ClientPage slug={slug} />;
}
