import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/roi-calculator")({
  head: () => pageMeta("Estimate the pipeline outbound can create — Revoloto", "Model meetings, opportunities, and revenue from a Revoloto engagement."),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="ROI calculator"
      title="Estimate the pipeline outbound can create"
      description="Model meetings, opportunities, and revenue from a Revoloto engagement."
      blocks={[{"title":"Inputs","body":"Average deal size, win rate, sales cycle length, and target meeting volume."},{"title":"Outputs","body":"Projected meetings, opportunities, pipeline value, and cost per meeting."},{"title":"Assumptions","body":"Based on averages across our client base; your results depend on ICP and offer strength."},{"title":"Want a custom model?","body":"Send us your numbers and we will build the projection with you."}]}
    />
  );
}
