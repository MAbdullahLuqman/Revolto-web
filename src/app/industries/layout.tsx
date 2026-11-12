import { pageMetadata } from "@/data/seo";
export const metadata = pageMetadata(
  "Industries We Serve",
  "B2B lead generation and outreach tailored to security, retail, construction, consulting, finance, and manufacturing.",
  "/industries",
);
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
