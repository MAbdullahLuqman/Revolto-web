import { pageMetadata } from "@/data/seo";
export const metadata = {
  ...pageMetadata("Rovolto Webinars", "Information about public Rovolto webinars.", "/webinars"),
  robots: { index: false, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
