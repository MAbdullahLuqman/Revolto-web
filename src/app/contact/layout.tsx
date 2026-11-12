import { pageMetadata } from "@/data/seo";
export const metadata = pageMetadata(
  "Contact Rovolto",
  "Tell Rovolto about your target buyers and growth goals to discuss a lead generation quote.",
  "/contact",
);
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
