import type { Metadata } from "next";
import "@/styles.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionConfig } from "motion/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rovolto.com"),
  title: { default: "Rovolto | B2B Lead Generation", template: "%s | Rovolto" },
  description:
    "B2B lead generation, targeted outreach, appointment setting, and social media marketing to support business growth.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Rovolto",
    title: "Rovolto | B2B Lead Generation",
    description:
      "B2B lead generation, targeted outreach, appointment setting, and social media marketing to support business growth.",
    url: "https://www.rovolto.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionConfig reducedMotion="user">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </MotionConfig>
      </body>
    </html>
  );
}
