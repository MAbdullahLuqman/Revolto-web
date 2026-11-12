import { createFileRoute, notFound, Link } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { pageMeta } from "@/components/SimplePage";
import { servicesContent } from "@/data/content";

const details: Record<
  string,
  {
    audience: string;
    deliverables: string;
    process: string;
    reporting: string;
    faqs: { question: string; answer: string }[];
  }
> = {
  "security-contacts": {
    audience:
      "Security businesses seeking relevant conversations with property, construction, facilities, and procurement buyers.",
    deliverables:
      "Target buyer criteria, an agreed outreach plan, and campaign activity scoped around your security offer. Rovolto generates opportunities; your business delivers security services.",
    process:
      "Clarify your service area and ideal contracts, agree target roles and messaging, then review prospect responses together.",
    reporting:
      "Discuss campaign activity and replies. Bid or proposal requests remain opportunities for your team to qualify and pursue.",
    faqs: [
      {
        question: "Does Rovolto provide guarding?",
        answer:
          "No. Rovolto supports security businesses with lead generation and outreach; your business provides the security service.",
      },
      {
        question: "Which buyers can we target?",
        answer:
          "Target roles and property or contract types are agreed around your offer and service area.",
      },
    ],
  },
  "startup-lead-generation": {
    audience:
      "Founders who want to test a buyer profile and learn whether a sales message earns relevant responses.",
    deliverables:
      "A focused campaign plan, target criteria, outreach messaging, and a review of responses against the validation question agreed with the founder.",
    process:
      "The founder shares the offer and hypothesis. We agree a narrow audience and message, run the agreed outreach, and review what the responses do and do not establish.",
    reporting:
      "Discuss reach, replies, objections, and possible next experiments. A campaign can inform a market hypothesis; it does not prove product-market fit by itself.",
    faqs: [
      {
        question: "What does a campaign validate?",
        answer:
          "It can test whether a defined audience engages with a particular offer or message. The question and success criteria are agreed first.",
      },
      {
        question: "What is the founder's role?",
        answer:
          "Founder input is needed to define the offer, review messaging, and interpret prospect feedback.",
      },
    ],
  },
  "email-marketing": {
    audience: "B2B teams considering targeted email outreach as part of prospecting.",
    deliverables:
      "The confirmed focus is business outreach to selected prospects. Subscriber newsletters or lifecycle email programs are not specified and should be confirmed during an enquiry.",
    process:
      "Agree the audience, message, channel responsibilities, and follow-up approach, then review prospect responses.",
    reporting:
      "Reporting measures and cadence are agreed for the engagement. Subscriber campaign scope must be confirmed separately.",
    faqs: [
      {
        question: "Does this include subscriber newsletters?",
        answer:
          "The current service information describes targeted prospect outreach. Ask us to confirm whether a subscriber campaign fits your requirements.",
      },
      {
        question: "How is this different from cold email outreach?",
        answer:
          "Email marketing is the broader service label here; cold email outreach focuses on initiating conversations with selected business prospects.",
      },
    ],
  },
  "appointment-setting": {
    audience: "Teams that want help creating and arranging relevant sales conversations.",
    deliverables:
      "Outreach and meeting coordination scoped around your qualification criteria and calendar process. Qualification rules, handoff format, and handling of unsuitable bookings are agreed before launch.",
    process:
      "Define what makes a suitable prospect and meeting, agree how bookings are made, and align the handoff with your sales team.",
    reporting:
      "Review bookings and responses against the agreed criteria. No replacement or rescheduling policy is assumed until agreed.",
    faqs: [
      {
        question: "How are appointments qualified?",
        answer:
          "Qualification questions and fit criteria are agreed with your team before outreach begins.",
      },
      {
        question: "What happens if a booking is unsuitable?",
        answer:
          "The handling and any replacement policy are agreed as part of the engagement; no guarantee is implied.",
      },
    ],
  },
  "cold-email-outreach": {
    audience:
      "B2B companies that want to start conversations with defined business prospects by email.",
    deliverables:
      "Targeting and messaging are central to the service. Sending infrastructure, reply handling, follow-up volume, and reporting responsibilities are confirmed for each engagement.",
    process:
      "Agree the buyer profile and message, confirm campaign setup and responsibilities, then review responses and refine the approach.",
    reporting:
      "Reporting cadence and measures are agreed before launch. We discuss activity and prospect responses without promising a particular lead volume.",
    faqs: [
      {
        question: "Do you provide sending infrastructure?",
        answer:
          "Infrastructure responsibilities are agreed for each engagement; confirm your setup during an enquiry.",
      },
      {
        question: "Who handles replies?",
        answer: "Reply handling and escalation are defined with your team before campaigns begin.",
      },
    ],
  },
  "linkedin-sales-navigator-outreach": {
    audience: "B2B teams using LinkedIn to research accounts and engage relevant decision makers.",
    deliverables:
      "Sales Navigator supports account and contact research. Connection outreach, InMail, and campaign management are separate activities and included only where agreed.",
    process:
      "Identify account and role criteria, organize research, agree the outreach method, and review engagement with your team.",
    reporting:
      "Discuss research coverage and outreach responses within the agreed scope. LinkedIn access and account responsibilities are confirmed before work starts.",
    faqs: [
      {
        question: "What does Sales Navigator do?",
        answer:
          "It supports professional account and contact research; it is separate from sending connection requests or InMail.",
      },
      {
        question: "Are connection outreach and InMail included?",
        answer:
          "They can be scoped separately according to your goals, access, and agreed campaign responsibilities.",
      },
    ],
  },
  "account-management": {
    audience: "Clients who need clear coordination and visibility across an outreach engagement.",
    deliverables:
      "Account-management responsibilities are set out for each engagement. They may include planning, communication, and review; this page does not assume the same scope as managed outreach.",
    process:
      "Agree ownership, communication, review points, and escalation paths with your team at the outset.",
    reporting:
      "Updates follow the cadence and measures agreed with the client. Scope is clarified separately from account coordination included in other engagements.",
    faqs: [
      {
        question: "How is this different from managed campaign support?",
        answer:
          "Some coordination may already be part of a managed engagement. The separate scope and responsibilities are clarified in your quote.",
      },
    ],
  },
  "sales-development": {
    audience:
      "B2B sales teams that need support with early-stage prospecting and conversation creation.",
    deliverables:
      "Target research and agreed top-of-funnel outreach, with a handoff to your sales team based on the qualification rules you provide.",
    process:
      "Align on target buyers and messaging, run the agreed prospecting activity, and route responses or meetings through your preferred handoff.",
    reporting:
      "Review activity and handoff status using measures agreed with your team. Closing opportunities and revenue remain with your sales organization.",
    faqs: [
      {
        question: "Who closes the opportunities?",
        answer:
          "Your sales team owns sales conversations after the agreed handoff unless another responsibility is explicitly included.",
      },
    ],
  },
  "enterprise-lead-generation": {
    audience:
      "Organizations selling considered solutions to large companies with several stakeholders and longer buying processes.",
    deliverables:
      "Account selection, relevant buying-role research, and outreach sequencing scoped around your offer and target buying group.",
    process:
      "Map the account and relevant stakeholder roles, agree messages, coordinate outreach, and learn from responses over the campaign.",
    reporting:
      "Discuss progress at account and contact level as agreed. A reply or meeting is an engagement signal, not a completed sale.",
    faqs: [
      {
        question: "Can you target several stakeholders at one company?",
        answer: "Buying-group research can be included when roles and account criteria are agreed.",
      },
    ],
  },
  "smb-lead-generation": {
    audience:
      "SMB can describe either the company buying this service or the businesses it wants to reach; the campaign brief clarifies which applies.",
    deliverables:
      "Target definitions, buyer roles, and outreach tailored to the intended customer segment and your sales capacity.",
    process:
      "Clarify whether SMB describes your company or your target market, then agree account criteria, messaging, and outreach responsibilities.",
    reporting:
      "Review responses and campaign progress against the segment and goals agreed with your team.",
    faqs: [
      {
        question: "Does SMB describe the client or the target buyer?",
        answer:
          "It can mean either. We clarify this before proposing a campaign so the targeting fits your business.",
      },
    ],
  },
  "social-media-marketing": {
    audience:
      "B2B businesses that want a clearer social presence connected to growth goals and sales activity.",
    deliverables:
      "Work is agreed around your goals, audience, chosen channels, and internal capabilities. Specific platforms, posting schedules, content production, and paid campaign management are confirmed before inclusion.",
    process:
      "Discuss your goals and current channels, agree priorities and responsibilities, then deliver the scope set out for the engagement.",
    reporting:
      "Discuss progress, activity, and relevant audience response using measures agreed with you. Social activity does not guarantee follower growth, leads, or revenue.",
    faqs: [
      {
        question: "Which platforms and deliverables are included?",
        answer:
          "They are agreed around your goals and channels; no platform or posting frequency is assumed.",
      },
      {
        question: "Does this include paid campaigns or content production?",
        answer:
          "Those capabilities are not established in the current service information and must be confirmed before being included.",
      },
    ],
  },
};

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
        meta: [{ title: "Service not found — Rovolto" }, { name: "robots", content: "noindex" }],
      };
    }
    return pageMeta(`${loaderData.service.title} — Rovolto`, loaderData.service.description);
  },
  errorComponent: () => (
    <SectionShell>
      <p className="text-center text-muted-foreground">
        Something went wrong loading this service.
      </p>
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
  const detail = details[service.slug]!;
  const related = servicesContent.items.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.description} />

      <SectionShell>
        <SectionHeader eyebrow="Deliverables" title="What you receive" align="center" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Who it suits", description: detail.audience },
            { title: "Scope and deliverables", description: detail.deliverables },
            { title: "Delivery process", description: detail.process },
            { title: "Progress and reporting", description: detail.reporting },
          ].map((step) => (
            <div key={step.title} className="rounded-2xl border border-border bg-card p-6">
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
        <SectionHeader eyebrow="FAQ" title="Common questions" align="center" />
        <div className="mx-auto max-w-3xl space-y-4">
          {detail.faqs.map((f) => (
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
