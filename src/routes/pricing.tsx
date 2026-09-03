import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageMeta(
      "Engagement models that fit your stage — Rovolto",
      "Flexible retainers for managed SDR pods, project sprints, and strategy-only engagements.",
    ),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Pricing"
      title="Engagement models that fit your stage"
      description="Flexible retainers for managed SDR pods, project sprints, and strategy-only engagements."
      blocks={[
        {
          title: "Managed SDR pod",
          body: "A dedicated pod of SDRs, a researcher, a copywriter, and an account manager working your market full time.",
        },
        {
          title: "Campaign sprint",
          body: "A fixed-scope 90-day outbound sprint to validate a new segment, product, or geography.",
        },
        {
          title: "Strategy & enablement",
          body: "We design the playbook, tech stack, and messaging, then train your in-house team to run it.",
        },
        {
          title: "What is included",
          body: "List building, data enrichment, copywriting, deliverability infrastructure, CRM sync, and weekly reporting.",
        },
      ]}
    />
  );
}
