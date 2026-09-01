import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("The team behind your pipeline — Revoloto", "Revoloto is a B2B lead generation agency built by operators who have carried quota and run outbound at scale."),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="About"
      title="The team behind your pipeline"
      description="Revoloto is a B2B lead generation agency built by operators who have carried quota and run outbound at scale."
      blocks={[{"title":"Our mission","body":"Make outbound predictable for B2B teams by combining rigorous research with disciplined execution."},{"title":"How we work","body":"Small senior pods, transparent reporting, and weekly optimization instead of set-and-forget campaigns."},{"title":"Our people","body":"SDRs, researchers, copywriters, and deliverability engineers who specialize in complex B2B sales."},{"title":"Our promise","body":"If a meeting is not qualified, it does not count. We only report pipeline you would accept."}]}
    />
  );
}
