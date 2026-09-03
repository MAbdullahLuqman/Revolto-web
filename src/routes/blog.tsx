import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/blog")({
  head: () =>
    pageMeta(
      "Outbound insights from the Rovolto team — Rovolto",
      "Field notes on cold email, calling, targeting, and sales development leadership.",
    ),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Blog"
      title="Outbound insights from the Rovolto team"
      description="Field notes on cold email, calling, targeting, and sales development leadership."
      blocks={[
        {
          title: "Cold email that earns replies",
          body: "Structure, length, personalization depth, and the follow-up cadence that works in 2026.",
        },
        {
          title: "Building an ICP that converts",
          body: "How to narrow your target market using firmographics, technographics, and buying signals.",
        },
        {
          title: "Deliverability fundamentals",
          body: "Domain warm-up, SPF/DKIM/DMARC, sending volumes, and reputation monitoring.",
        },
        {
          title: "Managing an SDR pod",
          body: "Activity metrics that matter, coaching cadence, and how to review conversations weekly.",
        },
      ]}
    />
  );
}
