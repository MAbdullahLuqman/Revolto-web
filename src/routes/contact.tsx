import { createFileRoute } from "@/lib/router-compat";
import { useState } from "react";
import { SectionShell } from "@/components/SectionShell";
import { Button } from "@/components/Button";
import { pageMeta } from "@/components/SimplePage";
import { site } from "@/data/site";
import { Mail, Phone, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Contact Revoloto — Get a Quote",
      "Tell us about your ideal customer profile and pipeline goals. We reply with a tailored outbound plan and quote.",
    ),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-ring";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-orange">
            Contact
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Get a quote from Revoloto
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Tell us who you sell to and what a good meeting looks like. We'll come back with a
            channel mix, target volumes, and pricing.
          </p>
          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent-orange" /> {site.email}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent-orange" /> {site.phone}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          {sent ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle2 className="h-10 w-10 text-accent-orange" />
              <h2 className="mt-4 font-display text-xl font-semibold text-card-foreground">
                Thanks — we've got it
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A strategist will reply within one business day.
              </p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input className={inputClass} name="firstName" placeholder="First name" required />
                <input className={inputClass} name="lastName" placeholder="Last name" required />
              </div>
              <input
                className={inputClass}
                type="email"
                name="email"
                placeholder="Work email"
                required
              />
              <input className={inputClass} name="company" placeholder="Company" required />
              <input className={inputClass} name="website" placeholder="Company website" />
              <textarea
                className={`${inputClass} min-h-32`}
                name="message"
                placeholder="Who do you sell to, and what are your pipeline goals?"
                required
              />
              <Button type="submit" size="lg" className="w-full">
                Get a quote
              </Button>
              <p className="text-xs text-muted-foreground">
                By submitting you agree to our privacy policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
