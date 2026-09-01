import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/awards")({
  head: () => pageMeta("Recognition for outbound excellence — Revoloto", "Independent reviewers and industry bodies have recognized our work for B2B growth companies."),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Awards"
      title="Recognition for outbound excellence"
      description="Independent reviewers and industry bodies have recognized our work for B2B growth companies."
      blocks={[{"title":"Top B2B lead gen agency","body":"Recognized among leading appointment setting providers for client satisfaction."},{"title":"Best in outbound strategy","body":"Awarded for multi-channel campaign design across complex enterprise sales cycles."},{"title":"Client choice","body":"Consistently rated highly for communication, reporting transparency, and responsiveness."},{"title":"Deliverability excellence","body":"Recognized for inbox placement standards and sender reputation management."}]}
    />
  );
}
