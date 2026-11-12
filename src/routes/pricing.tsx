import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageMeta(
      "Lead Generation Engagements — Rovolto",
      "Discuss an outreach engagement scoped to your target buyers, geography, goals, responsibilities, and duration.",
    ),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Pricing"
      title="Engagements shaped around your goals"
      description="Rovolto uses a quote-based approach. We agree the scope, duration, responsibilities, and cost factors with you before work begins."
      blocks={[
        {
          title: "Managed sales development",
          body: "Discuss the outreach work, roles, and level of coordination your team needs. Staffing and activity are set out in the proposed scope.",
        },
        {
          title: "Campaign sprint",
          body: "A focused campaign can be scoped to explore a segment, offer, or geography. Duration and success criteria are agreed in the quote.",
        },
        {
          title: "Strategy & enablement",
          body: "Discuss the research, messaging, and enablement support that would help your in-house team. Specific work is included only when agreed.",
        },
        {
          title: "What is included",
          body: "Scope and cost depend on target markets, channels, research needs, outreach responsibilities, reporting, and engagement duration. No package price or standard commitment is published.",
        },
      ]}
    />
  );
}
