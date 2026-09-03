import { createFileRoute } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { pageMeta } from "@/components/SimplePage";
import { testimonials, homeContent } from "@/data/content";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    pageMeta(
      "Client Testimonials — Rovolto",
      "Sales and marketing leaders on what it's like to run outbound with Rovolto.",
    ),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What clients say about working with Rovolto"
        description="Feedback from the sales and marketing leaders who trust us with their pipeline."
      />
      <SectionShell>
        <div className="grid gap-6 md:grid-cols-3">
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
      <SectionShell variant="muted">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold text-foreground">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
