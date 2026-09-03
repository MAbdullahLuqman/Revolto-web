import { createFileRoute } from "@/lib/router-compat";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { pageMeta } from "@/components/SimplePage";

export const Route = createFileRoute("/resources")({
  head: () =>
    pageMeta(
      "Playbooks, research, and templates — Rovolto",
      "Practical outbound resources from campaigns we run every day.",
    ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Security contact resources"
        description="Portfolio, track record, and practical notes for B2B lead generation."
      />
      <SectionShell>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Rovolto portfolio",
              body: "Company overview, service mix, and delivery model.",
              href: "/rovolto-portfolio.pdf",
            },
            {
              title: "Rovolto track record",
              body: "Selected proof points from tracked outbound programs.",
              href: "/rovolto-track-record.pdf",
            },
          ].map((item) => (
            <div key={item.href} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-xl font-semibold text-card-foreground">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <Button asChild className="mt-6">
                <a href={item.href}>Download PDF</a>
              </Button>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
