import { createFileRoute, Link } from "@/lib/router-compat";
import { Button } from "@/components/Button";
import { SectionShell } from "@/components/SectionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { PipelineSection } from "@/components/PipelineSection";
import { motion, Stagger, StaggerItem, ease } from "@/components/motion";
import {
  homeContent,
  servicesContent,
  processContent,
  industriesContent,
  caseStudies,
  testimonials,
} from "@/data/content";
import {
  Calendar,
  Mail,
  Phone,
  Linkedin,
  TrendingUp,
  Zap,
  Target,
  ArrowRight,
  ShieldCheck,
  Search,
  Database,
  BriefcaseBusiness,
  HeartHandshake,
  Building2,
  Store,
  Rocket,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  mail: Mail,
  phone: Phone,
  linkedin: Linkedin,
  "trending-up": TrendingUp,
  zap: Zap,
  target: Target,
  "shield-check": ShieldCheck,
  search: Search,
  database: Database,
  briefcase: BriefcaseBusiness,
  heart: HeartHandshake,
  building: Building2,
  store: Store,
  rocket: Rocket,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rovolto — B2B Lead Generation Agency" },
      {
        name: "description",
        content:
          "Rovolto helps companies grow with targeted email marketing, LinkedIn outreach, InMail campaigns, Sales Navigator strategies, and Apollo data.",
      },
      {
        property: "og:title",
        content: "Rovolto — B2B Lead Generation Agency",
      },
      {
        property: "og:description",
        content:
          "Rovolto helps companies grow with targeted email marketing, LinkedIn outreach, InMail campaigns, Sales Navigator strategies, and Apollo data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <PipelineSection />
      <Process />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  );
}

const cardClass =
  "group relative block h-full overflow-hidden rounded-2xl border border-border bg-black/[0.02] p-6 transition-[transform,background-color,border-color,box-shadow] duration-300 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-black/15 hover:bg-black/[0.05] hover:shadow-[0_30px_70px_-40px_rgba(15,27,61,0.15)]";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-32 size-72 rounded-full border border-border bg-muted sm:-left-20 sm:-top-28 sm:size-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-20 size-32 rounded-full bg-primary opacity-90 sm:left-14 sm:size-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 size-56 rounded-full border border-border bg-muted/60 sm:-right-12 sm:-top-28 sm:size-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-64 w-80 rounded-full bg-muted/70 blur-3xl sm:h-80 sm:w-[30rem]"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-center py-24 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-7 inline-flex items-center gap-2 text-xs font-semibold uppercase text-primary sm:mb-9"
            >
              {homeContent.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, ease, delay: 0.05 }}
              className="mx-auto max-w-4xl font-display text-[2.8rem] font-bold leading-[1.04] text-balance text-foreground sm:text-6xl lg:text-[4.75rem]"
            >
              {homeContent.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.16 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg"
            >
              {homeContent.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-10"
            >
              <Button asChild size="lg">
                <a href="/contact">{homeContent.cta}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/services">Explore services</a>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.34 }}
          className="pb-8 text-center text-xs font-medium text-muted-foreground sm:pb-10 sm:text-sm"
        >
          {homeContent.trustLine}
        </motion.p>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <SectionShell variant="muted">
      <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {homeContent.stats.map((stat) => (
          <StaggerItem key={stat.label} className="text-center">
            <p className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}

function Services() {
  const featured = servicesContent.items.slice(0, 8);
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Services"
        title={servicesContent.title}
        description={servicesContent.description}
        align="center"
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((service) => {
          const Icon = iconMap[service.icon] || Target;
          return (
            <StaggerItem key={service.slug} className="h-full">
              <Link to={`/services/${service.slug}` as "/"} className={cardClass}>
                <div className="mb-5 inline-flex rounded-xl border border-black/10 bg-black/[0.05] p-2.5 text-foreground transition-transform duration-300 group-hover:-rotate-6">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-accent-orange">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
      <div className="mt-14 text-center">
        <Button asChild variant="outline">
          <a href="/services">View all services</a>
        </Button>
      </div>
    </SectionShell>
  );
}

function Process() {
  return (
    <SectionShell variant="navy">
      <SectionHeader eyebrow="Approach" title={processContent.title} align="center" light />
      <Stagger className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {processContent.steps.map((step) => (
          <StaggerItem key={step.number} className="relative">
            <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}

function Industries() {
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Industries"
        title={industriesContent.title}
        description={industriesContent.description}
        align="center"
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industriesContent.items.map((industry) => (
          <StaggerItem key={industry.slug} className="h-full">
            <Link to={`/industries/${industry.slug}` as "/"} className={cardClass}>
              <h3 className="font-display text-lg font-semibold text-card-foreground">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-accent-orange">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}

function CaseStudies() {
  const featured = caseStudies.slice(0, 3);
  return (
    <SectionShell variant="muted">
      <SectionHeader
        eyebrow="Results"
        title="Pipeline our clients can forecast"
        description="Selected wins from B2B growth companies that partnered with Rovolto for outbound."
        align="center"
      />
      <Stagger className="grid gap-4 md:grid-cols-3">
        {featured.map((study) => (
          <StaggerItem key={study.slug} className="h-full">
            <div className={cardClass}>
              <p className="font-display text-3xl font-bold text-accent-orange">{study.metric}</p>
              <p className="mt-3 font-display text-lg font-semibold text-card-foreground">
                {study.title}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {study.industry}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <div className="mt-14 text-center">
        <Button asChild variant="outline">
          <a href="/case-studies">See all case studies</a>
        </Button>
      </div>
    </SectionShell>
  );
}

function Testimonials() {
  const featured = testimonials.slice(0, 3);
  return (
    <SectionShell>
      <SectionHeader eyebrow="Testimonials" title="What clients say about Rovolto" align="center" />
      <Stagger className="grid gap-4 md:grid-cols-3">
        {featured.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <figure className={cardClass}>
              <blockquote className="text-[15px] leading-relaxed text-foreground/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role}, {t.company}
                </p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}

function CTA() {
  return (
    <SectionShell variant="navy">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Ready to fill your pipeline with qualified meetings?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us about your ICP and sales goals. We'll reply with a tailored outbound plan and
          quote.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="accent">
            <a href="/contact">Get a quote</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/services">Explore services</a>
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
