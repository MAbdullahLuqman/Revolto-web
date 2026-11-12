import { pageMetadata } from "@/data/seo";
export const metadata = pageMetadata(
  "B2B Outreach Case Studies",
  "Review documented prospect replies, bid requests, proposal requests, and meeting interest from outreach.",
  "/case-studies",
);
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
