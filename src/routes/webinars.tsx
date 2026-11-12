import { createFileRoute } from "@/lib/router-compat";
import { SimplePage, pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/webinars")({
  head: () => pageMeta("Rovolto Webinars", "Information about public Rovolto webinars."),
  component: Page,
});

function Page() {
  return (
    <SimplePage
      eyebrow="Webinars"
      title="Webinars"
      description="There are no webinar dates or recordings listed at this time. Contact Rovolto to discuss your outreach questions."
      blocks={[
        {
          title: "Contact Rovolto",
          body: "Ask about targeted outreach, appointment setting, or social media marketing.",
        },
        {
          title: "Discuss your audience",
          body: "Share which businesses and decision makers you want to reach.",
        },
      ]}
    />
  );
}
