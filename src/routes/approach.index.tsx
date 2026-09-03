import { createFileRoute, Link } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMeta } from "@/components/SimplePage";
import { processContent } from "@/data/content";
import { approachDetails } from "@/data/approach";

export const Route = createFileRoute("/approach/")({
  head: () =>
    pageMeta(
      "Our Approach — Rovolto",
      "Discovery, build, launch, and optimize: the Rovolto method for predictable B2B pipeline.",
    ),
  component: ApproachIndex,
});

function ApproachIndex() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title={processContent.title}
        description="A four-stage method that turns market research into booked meetings — and keeps improving every week."
      />
      <SectionShell>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processContent.steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-4xl font-bold text-black/10">{step.number}</span>
              <h2 className="mt-2 font-display text-lg font-semibold text-card-foreground">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>
      <SectionShell variant="muted">
        <SectionHeader
          eyebrow="Disciplines"
          title="The teams behind every campaign"
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approachDetails.map((a) => (
            <Link
              key={a.slug}
              to="/approach/$slug"
              params={{ slug: a.slug }}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-semibold text-card-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
            </Link>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
