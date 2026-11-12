import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/training")({
  head: () =>
    pageMeta(
      "Sales Enablement — Rovolto",
      "Discuss sales enablement and strategy support scoped to your in-house team.",
    ),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Training"
      title="Sales enablement shaped around your team"
      description="Rovolto can discuss strategy and enablement as part of a scoped engagement. Specific training formats and deliverables are agreed before work begins."
      blocks={[
        {
          title: "Prospecting and messaging",
          body: "Discuss the skills and sales activities your team wants to develop.",
        },
        {
          title: "Team support",
          body: "Coaching and management support can be included when agreed in the engagement scope.",
        },
        {
          title: "Messaging workshops",
          body: "Messaging work is scoped to your offer, buyer roles, and chosen channels.",
        },
        {
          title: "Delivery format",
          body: "Timeline, format, tools, and responsibilities are discussed before a quote is prepared.",
        },
      ]}
    />
  );
}
