import { Button } from "./Button";
import { Reveal } from "./motion";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string | undefined;
  title: string;
  description?: string | undefined;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--accent-orange), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          {eyebrow ? (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-black/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="inline-block size-1.5 rounded-full bg-accent-orange" />
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.06] tracking-tight text-balance text-foreground md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.14}>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="/contact">Get a quote</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/case-studies">See results</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
