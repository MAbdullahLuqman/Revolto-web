import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/podcasts")({
  head: () =>
    pageMeta(
      "Conversations with B2B revenue leaders — Rovolto",
      "Interviews on pipeline generation, sales leadership, and go-to-market strategy.",
    ),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Podcasts"
      title="Conversations with B2B revenue leaders"
      description="Interviews on pipeline generation, sales leadership, and go-to-market strategy."
      blocks={[
        {
          title: "Pipeline Talks",
          body: "Weekly interviews with VPs of Sales on building outbound engines.",
        },
        {
          title: "Founder GTM",
          body: "Early-stage founders on landing first customers with outbound.",
        },
        { title: "Ops Room", body: "RevOps leaders on CRM hygiene, attribution, and forecasting." },
        { title: "Subscribe", body: "Available on all major podcast platforms." },
      ]}
    />
  );
}
