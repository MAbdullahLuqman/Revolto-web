import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About Rovolto — B2B Lead Generation",
      "Learn how Rovolto helps B2B businesses reach decision makers through targeted outreach and sales support.",
    ),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="About"
      title="B2B outreach built around your growth goals"
      description="Rovolto helps businesses create new opportunities by researching and reaching relevant decision makers. The work is scoped around your offer, buyers, and chosen market."
      blocks={[
        {
          title: "What we do",
          body: "Support B2B lead generation through targeted outreach, appointment setting, sales development, and social media marketing.",
        },
        {
          title: "How we work",
          body: "Agree the target buyers, message, channels, responsibilities, and reporting with your team before work begins.",
        },
        {
          title: "Your role",
          body: "Share your offer, ideal customer, and sales priorities. Your team handles sales conversations after the agreed handoff unless another scope is confirmed.",
        },
        {
          title: "A practical partnership",
          body: "Campaign goals and fit criteria are agreed together. Replies and meetings are reported as the outcomes they are, without treating them as signed business.",
        },
      ]}
    />
  );
}
