import { createFileRoute } from "@/lib/router-compat";
import { useState } from "react";
import { SectionShell } from "@/components/SectionShell";
import { Button } from "@/components/Button";
import { pageMeta } from "@/components/SimplePage";
import { site } from "@/data/site";
import { Mail, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Contact Rovolto — Get a Quote",
      "Tell us which prospects you need to reach. We reply with a lead generation and outreach plan.",
    ),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-ring";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-orange">
            Contact
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Get a quote from Rovolto
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Tell us which prospects you need to reach, your target accounts, and what a qualified
            meeting looks like. We'll come back with the data plan, channel mix, and pricing.
          </p>
          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent-orange" /> {site.email}
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
              onSubmit={async (e) => {
                e.preventDefault();
                setError("");
                setSending(true);
                const form = new FormData(e.currentTarget);
                try {
                  const response = await fetch("/api/leads", {
                    method: "POST",
                    body: form,
                  });
                  if (!response.ok) throw new Error("Failed to save lead");
                  setSent(true);
                } catch {
                  setError("Could not save your request. Please email us directly.");
                } finally {
                  setSending(false);
                }
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
                placeholder="Which prospects, accounts, and pipeline goals matter?"
                required
              />
              <Button type="submit" size="lg" className="w-full">
                {sending ? "Sending..." : "Get a quote"}
              </Button>
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
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
