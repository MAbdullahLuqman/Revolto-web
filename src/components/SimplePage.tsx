import { PageHero } from "./PageHero";
import { SectionShell } from "./SectionShell";
import { Button } from "./Button";

export type Block = { title: string; body: string };

export function SimplePage({
  eyebrow,
  title,
  description,
  blocks,
  ctaTitle = "Ready to build a predictable pipeline?",
}: {
  eyebrow?: string | undefined;
  title: string;
  description?: string | undefined;
  blocks: Block[];
  ctaTitle?: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <SectionShell>
        <div className="grid gap-8 md:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-xl font-semibold text-card-foreground">
                {b.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>
      <SectionShell variant="navy">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">{ctaTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Share your ICP and goals — we'll send back a tailored outbound plan and quote.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="accent">
              <a href="/contact">Get a quote</a>
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}

export function pageMeta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
