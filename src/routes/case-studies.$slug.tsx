import { createFileRoute, notFound } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { pageMeta } from "@/components/SimplePage";
import { caseStudies } from "@/data/content";

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
  const outcomes: Record<string, string> = {
    "multifamily-night-patrol":
      "A request for a detailed proposal; no contract award is documented.",
    "three-property-night-patrol":
      "A request for pricing across three properties; no signed agreement is documented.",
    "community-security-bid": "A bid request for nightly visits; no contract award is documented.",
    "construction-security-coverage":
      "A request for hourly rates; no contract award is documented.",
    "operations-director-meeting": "A meeting was requested; completed revenue is not documented.",
    "new-development-security":
      "A prospect replied and offered time for a call; a completed meeting or sale is not documented.",
  };
  return (
    <>
      <PageHero
        eyebrow={`${study.client} · ${study.industry}`}
        title={study.title}
        description={study.summary}
      />
      <SectionShell>
        <img
          src={study.image}
          alt={`Redacted prospect correspondence supporting the documented ${study.title.toLowerCase()}`}
          className="mx-auto max-h-[720px] w-full max-w-5xl rounded-2xl border border-border object-contain"
        />
        <p className="mx-auto mt-3 max-w-5xl text-sm text-muted-foreground">
          Redacted correspondence is shown as supporting evidence. Personal and company details
          remain obscured.
        </p>
      </SectionShell>
      <SectionShell>
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Context</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {study.industry}. The prospect request referred to {study.metric.toLowerCase()}; this
              is context, not revenue generated.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Outreach objective</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Open a relevant conversation about the security coverage or service need described in
              the prospect’s response.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Work performed</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The available account describes outbound outreach or follow-up. Campaign duration,
              contact volume, and channel count are not documented for this example.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Documented response and outcome</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {study.summary} {outcomes[study.slug]}
            </p>
          </article>
        </div>
      </SectionShell>
    </>
  );
}
