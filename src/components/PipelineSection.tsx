import { ChevronRight } from "lucide-react";

const outreach = [
  {
    title: "Targeting",
    body: "Agree the target accounts, buyer roles, geography, and fit criteria before outreach starts.",
  },
  {
    title: "Outreach",
    body: "Plan the messaging, channels, and responsibilities around your offer and chosen market.",
  },
  {
    title: "Response review",
    body: "Review replies and meeting interest against the criteria agreed with your team.",
  },
];

const pipeline = [
  { title: "Target accounts", body: "Research aligned to your buyer profile", width: "100%" },
  { title: "Outreach", body: "Agreed messaging and channels", width: "88%" },
  { title: "Responses", body: "Replies reviewed against your criteria", width: "76%" },
  { title: "Sales handoff", body: "Your team owns follow-up and closing", width: "64%" },
];

function JourneyItem({ title, body }: { title: string; body: string }) {
  return (
    <details open className="group rounded-xl bg-navy-900/70 px-5 py-4 open:bg-navy-900">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-foreground">
        {title}
        <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90 group-open:text-accent-orange" />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </details>
  );
}

export function PipelineSection() {
  return (
    <section className="bg-navy-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-balance text-foreground md:text-5xl">
            How your pipeline takes shape with Rovolto
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Rovolto supports the agreed outreach work. Your team helps shape the offer and takes
            sales conversations forward after handoff.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border p-4 sm:p-6">
              <p className="mb-4 text-sm text-muted-foreground">Rovolto’s part in the journey</p>
              <div className="space-y-3">
                {outreach.map((item) => (
                  <JourneyItem key={item.title} {...item} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border p-4 sm:p-6">
              <p className="mb-4 text-sm text-muted-foreground">Your part in the process</p>
              <JourneyItem
                title="Sales handoff"
                body="Your sales team follows up, qualifies the opportunity, and owns any proposal, contract, or close."
              />
            </div>
          </div>

          <div className="flex flex-col items-center pt-2">
            {pipeline.map((stage, index) => (
              <div key={stage.title} className="flex w-full flex-col items-center">
                <div className="relative z-10 -mb-3 rounded-md bg-navy-900 px-4 py-1 text-xs font-semibold text-foreground">
                  {stage.title}
                </div>
                <div
                  className={`flex min-h-32 items-center justify-center px-8 py-8 text-center ${index === 0 ? "bg-accent-orange text-accent-orange-foreground" : "bg-navy-900/70 text-foreground"}`}
                  style={{
                    width: stage.width,
                    clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)",
                  }}
                >
                  <p className="max-w-xs font-display text-base font-semibold leading-snug md:text-lg">
                    {stage.body}
                  </p>
                </div>
                {index < pipeline.length - 1 ? <div className="h-3" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
