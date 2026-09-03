import { createFileRoute, notFound } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { Button } from "@/components/Button";
import { pageMeta } from "@/components/SimplePage";
import { approachDetails } from "@/data/approach";

export const Route = createFileRoute("/approach/$slug")({
  loader: ({ params }) => {
    const detail = approachDetails.find((a) => a.slug === params.slug);
    if (!detail) throw notFound();
    return { detail };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Page not found — Rovolto" }, { name: "robots", content: "noindex" }],
      };
    }
    return pageMeta(`${loaderData.detail.title} — Rovolto`, loaderData.detail.description);
  },
  errorComponent: () => (
    <SectionShell>
      <p className="text-center text-muted-foreground">Something went wrong loading this page.</p>
    </SectionShell>
  ),
  notFoundComponent: () => (
    <SectionShell>
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Page not found</h1>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <a href="/approach">Back to our approach</a>
          </Button>
        </div>
      </div>
    </SectionShell>
  ),
  component: ApproachDetailPage,
});

function ApproachDetailPage() {
  const { detail } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Approach" title={detail.title} description={detail.description} />
      <SectionShell>
        <div className="grid gap-6 md:grid-cols-2">
          {detail.points.map((p: { title: string; body: string }) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-xl font-semibold text-card-foreground">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
