import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/training")({
  head: () => pageMeta("Enablement for your in-house sales team — Revoloto", "We train SDRs and AEs to run the same playbooks we use for clients."),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Training"
      title="Enablement for your in-house sales team"
      description="We train SDRs and AEs to run the same playbooks we use for clients."
      blocks={[{"title":"SDR bootcamp","body":"Prospecting, messaging, objection handling, and call structure over four weeks."},{"title":"Manager coaching","body":"Pipeline reviews, activity coaching, and performance frameworks for SDR leaders."},{"title":"Messaging workshops","body":"Rewrite your value proposition for each persona in your market."},{"title":"Tooling setup","body":"Sequencer, CRM, and data stack configuration with your team in the room."}]}
    />
  );
}
