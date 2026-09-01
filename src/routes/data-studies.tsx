import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/data-studies")({
  head: () => pageMeta("Benchmarks from millions of outbound touches — Revoloto", "We analyze our own campaign data to publish honest B2B outbound benchmarks."),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Data studies"
      title="Benchmarks from millions of outbound touches"
      description="We analyze our own campaign data to publish honest B2B outbound benchmarks."
      blocks={[{"title":"Reply rate benchmarks","body":"How reply rates vary by industry, seniority, company size, and sequence length."},{"title":"Cadence analysis","body":"The optimal number of touches and days between them across channels."},{"title":"Subject line study","body":"Patterns that lift open rates without hurting reply quality."},{"title":"Call connect study","body":"Best time blocks and dial volumes for connecting with B2B decision-makers."}]}
    />
  );
}
