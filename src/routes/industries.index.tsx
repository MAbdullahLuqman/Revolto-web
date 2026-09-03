import { createFileRoute, Link } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { pageMeta } from "@/components/SimplePage";
import { industriesContent } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries/")({
  head: () =>
    pageMeta(
      "Industries We Serve — Rovolto",
      "Industry-specific B2B outbound for construction, consulting, finance, and manufacturing companies.",
    ),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={industriesContent.title}
        description={industriesContent.description}
      />
      <SectionShell>
        <div className="grid gap-6 sm:grid-cols-2">
          {industriesContent.items.map((i) => (
            <Link
              key={i.slug}
              to="/industries/$slug"
              params={{ slug: i.slug }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="font-display text-xl font-semibold text-card-foreground">{i.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-orange group-hover:gap-2">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
