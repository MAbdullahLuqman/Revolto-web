import { createFileRoute, Link } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMeta } from "@/components/SimplePage";
import { caseStudies, testimonials } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies/")({
  head: () =>
    pageMeta(
      "B2B Lead Generation Case Studies and Testimonials — Rovolto",
      "See how Rovolto built pipeline for prospects and what sales leaders say about the work.",
    ),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Case studies & testimonials"
        title="Documented responses from outreach"
        description="Examples of prospect replies, requests, and meeting interest recorded in the available correspondence."
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
              <img
                src={c.image}
                alt={`Redacted correspondence for ${c.title}`}
                className="mb-5 aspect-[4/3] w-full rounded-xl border border-border bg-muted object-contain object-top"
              />
              <p className="font-display text-3xl font-bold text-accent-orange">{c.metric}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Context in the prospect request, not revenue
              </p>
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
      <SectionShell variant="muted">
        <SectionHeader eyebrow="Testimonials" title="Client feedback" align="center" />
        <div id="testimonials" className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
