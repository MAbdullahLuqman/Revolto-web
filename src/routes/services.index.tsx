import { createFileRoute, Link } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { pageMeta } from "@/components/SimplePage";
import { servicesContent } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta(
      "B2B Lead Generation Services — Revoloto",
      "Appointment setting, cold email, cold calling, LinkedIn outreach, outsourced SDR teams, and more from Revoloto.",
    ),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={servicesContent.title}
        description={servicesContent.description}
      />
      <SectionShell>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.items.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="font-display text-lg font-semibold text-card-foreground">
                {s.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-orange group-hover:gap-2">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
