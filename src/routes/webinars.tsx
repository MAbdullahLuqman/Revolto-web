import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/webinars")({
  head: () => pageMeta("Live sessions with our outbound team — Revoloto", "Join working sessions on messaging, targeting, and pipeline forecasting."),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Webinars"
      title="Live sessions with our outbound team"
      description="Join working sessions on messaging, targeting, and pipeline forecasting."
      blocks={[{"title":"Cold email teardown","body":"We review live sequences and rewrite them on the call."},{"title":"ICP workshop","body":"Build a target account list from scratch in 45 minutes."},{"title":"Deliverability clinic","body":"Diagnose inbox placement problems with our engineers."},{"title":"On demand","body":"Every past session is available to watch on demand."}]}
    />
  );
}
