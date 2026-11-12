import { pageMetadata } from "@/data/seo";
export const metadata = {
  ...pageMetadata(
    "Rovolto Testimonials",
    "Read feedback attributed to Rovolto clients in the available project materials.",
    "/case-studies",
  ),
  robots: { index: false, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
