import { createFileRoute, Link } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { pageMeta } from "@/components/SimplePage";
import { caseStudies } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies/")({
  head: () =>
    pageMeta(
      "B2B Lead Generation Case Studies — Rovolto",
      "See how Rovolto built pipeline for fintech, SaaS, and manufacturing clients through outbound campaigns.",
    ),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Pipeline our clients can forecast"
        description="Detailed breakdowns of outbound programs we ran, the decisions behind them, and the results they produced."
      />
      <SectionShell>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="font-display text-3xl font-bold text-accent-orange">{c.metric}</p>
              <h2 className="mt-3 font-display text-lg font-semibold text-card-foreground">
                {c.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.industry}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-orange group-hover:gap-2">
                Read the story <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
