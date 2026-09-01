import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/careers")({
  head: () => pageMeta("Grow your career at Revoloto — Revoloto", "We hire curious operators who like sharp messaging, clean data, and measurable outcomes."),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Careers"
      title="Grow your career at Revoloto"
      description="We hire curious operators who like sharp messaging, clean data, and measurable outcomes."
      blocks={[{"title":"Sales development","body":"Own outbound for real B2B clients with coaching, playbooks, and clear progression paths."},{"title":"Research & data","body":"Build target account universes, verify contacts, and surface the buying signals campaigns run on."},{"title":"Copywriting","body":"Write sequences that earn replies from skeptical executives across a dozen industries."},{"title":"Life at Revoloto","body":"Remote-first, async by default, with a strong bias toward documentation and feedback."}]}
    />
  );
}
