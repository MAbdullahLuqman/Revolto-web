import type { Metadata } from "next";
import "@/styles.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rovolto - Lead Generation Services",
  description:
    "Rovolto helps companies grow with high-quality leads through targeted email marketing, LinkedIn outreach, InMail campaigns, Sales Navigator strategies, and Apollo data.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
