import { pageMetadata } from "@/data/seo";
export const metadata = pageMetadata(
  "Sales Development Training",
  "Training information and resources from Rovolto.",
  "/training",
);
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
