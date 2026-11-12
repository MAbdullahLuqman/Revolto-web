import { createFileRoute, notFound } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { pageMeta } from "@/components/SimplePage";
import { industriesContent, servicesContent } from "@/data/content";

const industryDetails: Record<
  string,
  {
    buyers: string;
    objectives: string;
    approach: string;
    evidence: string;
    categories?: { title: string; body: string }[];
  }
> = {
  security: {
    buyers:
      "Security providers selling guarding, patrol, or related services can target property managers, facilities leaders, construction teams, and procurement contacts. Rovolto generates opportunities for these providers; it does not supply guards.",
    objectives:
      "Start relevant conversations about contract requirements, request for proposals, and upcoming coverage needs.",
    approach:
      "Targeting can reflect service area, property type, contract fit, and buyer role. Messages should distinguish a provider’s specific coverage offer and capacity.",
    evidence:
      "The case studies document prospect replies, proposal or bid requests, and meeting interest. They do not establish signed contracts or revenue.",
  },
  construction: {
    buyers:
      "Construction suppliers and service businesses may target contractors, developers, project leaders, and procurement teams.",
    objectives:
      "Identify relevant projects and buyers, introduce an offer, and create conversations about upcoming requirements.",
    approach:
      "Targeting and timing can reflect project type, geography, buyer responsibility, and known procurement stages.",
    evidence:
      "The available case studies include security service bid and proposal requests from construction related prospects; they do not document contract awards.",
  },
  consulting: {
    buyers:
      "Consultancies and advisory firms can reach executives, department leaders, and owners responsible for the problem their work addresses.",
    objectives:
      "Open discovery conversations and identify whether there is a relevant need, priority, and buying process.",
    approach:
      "Messages should connect the consulting offer to a specific business challenge and seniority of the buyer.",
    evidence:
      "No consulting specific case study or testimonial evidence is documented in the current project materials.",
  },
  finance: {
    buyers:
      "Financial services and fintech businesses can target relevant leaders in banks, insurers, asset managers, and other financial organizations.",
    objectives:
      "Introduce a defined business offer and identify the appropriate stakeholders for a first conversation.",
    approach:
      "Target roles and messages are set around the product, buyer organization, and client approved claims. No compliance expertise is implied.",
    evidence: "No finance specific case study is documented in the current project materials.",
  },
  manufacturing: {
    buyers:
      "Manufacturers and industrial suppliers can reach operations, procurement, engineering, and supply chain leaders where relevant to their offer.",
    objectives:
      "Find suitable accounts and begin conversations about operational or purchasing needs.",
    approach:
      "Targeting can be adapted by product fit, organization type, buyer responsibility, and selected geography.",
    evidence:
      "No manufacturing specific case study is documented in the current project materials.",
  },
  retail: {
    buyers:
      "Retail businesses and partners seeking commercial relationships can discuss which organizations and buyer roles they want to reach. Rovolto’s customer is the business commissioning outreach; its target buyers are the people and organizations that business wants to engage.",
    objectives:
      "Support new commercial conversations, channel relationships, and expansion into selected retail markets.",
    approach:
      "Targeting and messages are tailored to the client’s offer and chosen relationship type. The labels below are preserved as requested; their definitions need confirmation before campaign planning.",
    evidence: "No retail specific case study is documented in the current project materials.",
    categories: [
      {
        title: "First party",
        body: "A requested category for discussion. The intended business definition has not been supplied, so targeting is agreed with the client rather than inferred.",
      },
      {
        title: "Second party",
        body: "A requested category for discussion. The intended business definition has not been supplied, so targeting is agreed with the client rather than inferred.",
      },
      {
        title: "Marketplaces",
        body: "Outreach can be scoped to the people or businesses relevant to a client’s marketplace related offer. This does not include marketplace account management or advertising by default.",
      },
      {
        title: "Distributors",
        body: "Outreach can focus on finding or engaging distributors where that relationship fits the client’s product and growth plans.",
      },
    ],
  },
};

const relatedServices: Record<string, string[]> = {
  security: ["security-contacts", "cold-email-outreach", "appointment-setting"],
  construction: ["cold-email-outreach", "appointment-setting", "enterprise-lead-generation"],
  consulting: ["linkedin-sales-navigator-outreach", "cold-email-outreach", "sales-development"],
  finance: [
    "enterprise-lead-generation",
    "linkedin-sales-navigator-outreach",
    "cold-email-outreach",
  ],
  manufacturing: [
    "enterprise-lead-generation",
    "linkedin-sales-navigator-outreach",
    "cold-email-outreach",
  ],
  retail: ["social-media-marketing", "linkedin-sales-navigator-outreach", "appointment-setting"],
};

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
  const detail = industryDetails[industry.slug]!;
  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={`${industry.title} lead generation`}
        description={industry.description}
      />
      <SectionShell>
        <SectionHeader
          eyebrow="Audience and objectives"
          title={`A focused outreach plan for ${industry.title.toLowerCase()} businesses`}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Who it suits and who they reach", body: detail.buyers },
            { title: "Likely outreach objectives", body: detail.objectives },
            { title: "Targeting and messaging", body: detail.approach },
            { title: "Available evidence", body: detail.evidence },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>
      <SectionShell variant="muted">
        <SectionHeader
          eyebrow={industry.slug === "retail" ? "Retail relationships" : "Relevant services"}
          title={
            industry.slug === "retail"
              ? "Retail categories to discuss"
              : `Outreach services for ${industry.title.toLowerCase()} businesses`
          }
          align="center"
        />
        {detail.categories ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {detail.categories.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        ) : null}
        {detail.categories ? (
          <h3 className="mb-4 mt-10 text-center font-display text-xl font-semibold">
            Related outreach services
          </h3>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.items
            .filter((service) => relatedServices[industry.slug]!.includes(service.slug))
            .map((service) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h2 className="font-display font-semibold">{service.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              </a>
            ))}
        </div>
        <div className="mt-10 text-center">
          <p className="mb-4 text-muted-foreground">
            Discuss your target buyers, market, and growth plans with Rovolto.
          </p>
          <Button asChild>
            <a href="/contact">Get a quote</a>
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
