import { createFileRoute, notFound } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { pageMeta } from "@/components/SimplePage";
import { industriesContent, processContent, servicesContent } from "@/data/content";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industriesContent.items.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Industry not found — Rovolto" }, { name: "robots", content: "noindex" }],
      };
    }
    return pageMeta(
      `${loaderData.industry.title} Lead Generation — Rovolto`,
      loaderData.industry.description,
    );
  },
  errorComponent: () => (
    <SectionShell>
      <p className="text-center text-muted-foreground">Something went wrong loading this page.</p>
    </SectionShell>
  ),
  notFoundComponent: () => (
    <SectionShell>
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Industry not found</h1>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <a href="/industries">View all industries</a>
          </Button>
        </div>
      </div>
    </SectionShell>
  ),
  component: IndustryPage,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const services = servicesContent.items.slice(0, 6);
  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={`${industry.title} lead generation`}
        description={industry.description}
      />
      <SectionShell>
        <SectionHeader
          eyebrow="Playbook"
          title={`How we run outbound in ${industry.title.toLowerCase()}`}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processContent.steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>
      <SectionShell variant="muted">
        <SectionHeader eyebrow="Services" title="Channels we run for this sector" align="center" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
