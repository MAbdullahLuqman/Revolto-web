import { createFileRoute, notFound } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { pageMeta } from "@/components/SimplePage";
import { caseStudies, processContent } from "@/data/content";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study not found — Rovolto" }, { name: "robots", content: "noindex" }],
      };
    }
    return pageMeta(`${loaderData.study.title} — Rovolto`, loaderData.study.summary);
  },
  errorComponent: () => (
    <SectionShell>
      <p className="text-center text-muted-foreground">Something went wrong loading this story.</p>
    </SectionShell>
  ),
  notFoundComponent: () => (
    <SectionShell>
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Case study not found</h1>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <a href="/case-studies">All case studies</a>
          </Button>
        </div>
      </div>
    </SectionShell>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={`${study.client} · ${study.industry}`}
        title={study.title}
        description={study.summary}
      />
      <SectionShell>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-display text-3xl font-bold text-accent-orange">{study.metric}</p>
            <p className="mt-2 text-sm text-muted-foreground">Headline result</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-display text-3xl font-bold text-accent-orange">90 days</p>
            <p className="mt-2 text-sm text-muted-foreground">Time to full ramp</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-display text-3xl font-bold text-accent-orange">3 channels</p>
            <p className="mt-2 text-sm text-muted-foreground">Email, phone, LinkedIn</p>
          </div>
        </div>
      </SectionShell>
      <SectionShell variant="muted">
        <SectionHeader eyebrow="The work" title="How we ran the program" align="center" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processContent.steps.map((s) => (
            <div key={s.number} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold text-card-foreground">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
