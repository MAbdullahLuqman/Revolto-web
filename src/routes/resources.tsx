import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/resources")({
  head: () => pageMeta("Playbooks, research, and templates — Revoloto", "Practical outbound resources from campaigns we run every day."),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Resources"
      title="Playbooks, research, and templates"
      description="Practical outbound resources from campaigns we run every day."
      blocks={[{"title":"Blog","body":"Tactical articles on cold email, calling, LinkedIn, and sales development management."},{"title":"Case studies","body":"Detailed breakdowns of client campaigns, from ICP definition to closed pipeline."},{"title":"Data studies","body":"Original benchmark research on reply rates, cadence design, and deliverability."},{"title":"Webinars & podcasts","body":"Conversations with B2B sales leaders about building repeatable outbound."}]}
    />
  );
}
