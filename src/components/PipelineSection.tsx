import { useState } from "react";
import { ChevronRight } from "lucide-react";

const journey = [
  {
    title: "Omnichannel engagement",
    body: "We build a plan that combines email, LinkedIn, and cold calling to reach your prospects at the right time and in the right place.",
  },
  {
    title: "Activation",
    body: "Sequences go live with tested messaging, verified data, and daily quality checks on every touchpoint.",
  },
  {
    title: "Conversion",
    body: "Interested replies are qualified, objections handled, and meetings booked straight into your team's calendar.",
  },
];

const yourPart = [
  {
    title: "Deal closure",
    body: "Your AEs take the qualified conversation from first meeting to signed contract while we keep the funnel full.",
  },
];

const funnel = [
  {
    label: "Leads",
    value: "Up to 18,000* prospects within your client profile",
    w: "100%",
    accent: true,
  },
  { label: "MQLs", value: "Up to 9,000* marketing-qualified leads", w: "88%", accent: false },
  {
    label: "SQLs",
    value: "200* sales-qualified meetings with decision-makers",
    w: "74%",
    accent: false,
  },
  { label: "Opportunities", value: "10-30* closed deals", w: "60%", accent: false },
];

function Accordion({ items, label }: { items: { title: string; body: string }[]; label: string }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="rounded-2xl border border-border p-4 sm:p-6">
      <p className="mb-4 text-sm text-muted-foreground">{label}</p>
      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`block w-full rounded-xl px-5 py-4 text-left transition-colors ${
                isOpen ? "bg-navy-900" : "bg-navy-900/60 hover:bg-navy-900/70"
              }`}
            >
              <span className="flex items-center justify-between gap-4">
                <span className="font-display text-base font-semibold text-foreground">
                  {item.title}
                </span>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    isOpen ? "rotate-90 text-accent-orange" : "text-muted-foreground"
                  }`}
                />
              </span>
              {isOpen ? (
                <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PipelineSection() {
  return (
    <section className="bg-navy-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-balance text-foreground md:text-5xl">
            How your pipeline will look with Rovolto
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Focus on scaling your business while we deliver you sales-ready B2B leads.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <Accordion items={journey} label="We take care of the entire user journey" />
            <Accordion items={yourPart} label="Your part in the process" />
          </div>

          <div>
            <p className="text-center text-sm leading-relaxed text-muted-foreground">
              * Average yearly outcomes.
              <br />
              The results depend on multiple factors.
            </p>
            <div className="mt-6 flex flex-col items-center">
              {funnel.map((step, i) => (
                <div key={step.label} className="flex w-full flex-col items-center">
                  <div className="relative z-10 -mb-3 rounded-md bg-navy-900 px-4 py-1 text-xs font-semibold text-foreground">
                    {step.label}
                  </div>
                  <div
                    className={`flex min-h-[130px] items-center justify-center px-8 py-8 text-center ${
                      step.accent
                        ? "bg-accent-orange text-accent-orange-foreground"
                        : "bg-navy-900/70 text-foreground"
                    }`}
                    style={{
                      width: step.w,
                      clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)",
                    }}
                  >
                    <p className="max-w-xs font-display text-base font-semibold leading-snug md:text-lg">
                      {step.value}
                    </p>
                  </div>
                  {i < funnel.length - 1 ? <div className="h-3" /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
