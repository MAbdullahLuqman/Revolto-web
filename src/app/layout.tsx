import type { Metadata } from "next";
import "@/styles.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Revoloto - B2B Lead Generation Agency",
  description:
    "Revoloto builds predictable B2B sales pipeline through appointment setting, cold email, LinkedIn outreach, and dedicated SDR teams.",
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
