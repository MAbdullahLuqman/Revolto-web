import { createFileRoute, notFound, Link } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { pageMeta } from "@/components/SimplePage";
import { servicesContent, processContent, faqContent } from "@/data/content";

function findService(slug: string) {
  return servicesContent.items.find((s) => s.slug === slug);
}

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — Revoloto" }, { name: "robots", content: "noindex" }],
      };
    }
    return pageMeta(
      `${loaderData.service.title} — Revoloto`,
      loaderData.service.description,
    );
  },
  errorComponent: () => (
    <SectionShell>
      <p className="text-center text-muted-foreground">Something went wrong loading this service.</p>
    </SectionShell>
  ),
  notFoundComponent: ServiceNotFound,
  component: ServicePage,
});

function ServiceNotFound() {
  return (
    <SectionShell>
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Service not found</h1>
        <p className="mt-4 text-muted-foreground">
          The service you are looking for does not exist.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <a href="/services">View all services</a>
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = servicesContent.items.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.description} />

      <SectionShell>
        <SectionHeader
          eyebrow="Deliverables"
          title={`What ${service.title.toLowerCase()} looks like with Revoloto`}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processContent.steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-3xl font-bold text-black/10">
                {step.number}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-card-foreground">
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
        <SectionHeader eyebrow="FAQ" title="Common questions" align="center" />
        <div className="mx-auto max-w-3xl space-y-4">
          {faqContent.map((f) => (
            <div key={f.question} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-semibold text-card-foreground">
                {f.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeader eyebrow="Related" title="Other services" align="center" />
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-semibold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </Link>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
