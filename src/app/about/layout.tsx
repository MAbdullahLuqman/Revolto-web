import { pageMetadata } from "@/data/seo";
export const metadata = pageMetadata(
  "About Rovolto",
  "Learn how Rovolto supports B2B businesses with lead generation and targeted outreach.",
  "/about",
);
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
