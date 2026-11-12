import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/roi-calculator")({
  head: () =>
    pageMeta(
      "Plan an Outreach Forecast — Rovolto",
      "Prepare the business assumptions to discuss when planning a B2B outreach campaign.",
    ),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="ROI calculator"
      title="Plan your outreach goals"
      description="Use these planning questions to prepare for a conversation about your target market and campaign. This page does not forecast results or promise pipeline or revenue."
      blocks={[
        {
          title: "Target market",
          body: "Which organizations, roles, and geography are a fit for your offer?",
        },
        {
          title: "Sales goals",
          body: "What would a useful reply or meeting establish, and how will your team handle a relevant response?",
        },
        {
          title: "Campaign assumptions",
          body: "Agree the message, channels, responsibilities, reporting, and duration before estimating costs or outcomes.",
        },
        {
          title: "Want a custom model?",
          body: "Share your goals and assumptions so Rovolto can discuss an appropriate quote-based scope.",
        },
      ]}
    />
  );
}
