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
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });
  const setField = (name: keyof typeof lead, value: string) =>
    setLead((current) => ({ ...current, [name]: value }));
  const canContinue =
    step === 0
      ? lead.firstName.trim() && lead.lastName.trim()
      : step === 1
        ? lead.email.trim()
        : step === 2
          ? lead.company.trim()
          : lead.message.trim();

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
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setError("");
                setSending(true);
                const form = new FormData();
                Object.entries(lead).forEach(([name, value]) => form.set(name, value));
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
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className={`h-1 flex-1 rounded-full ${item <= step ? "bg-accent-orange" : "bg-border"}`}
                  />
                ))}
              </div>

              {step === 0 ? (
                <div className="space-y-4">
                  <p className="font-display text-2xl font-semibold text-card-foreground">
                    What's your name?
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className={inputClass}
                      name="firstName"
                      placeholder="First name"
                      value={lead.firstName}
                      onChange={(e) => setField("firstName", e.target.value)}
                      required
                    />
                    <input
                      className={inputClass}
                      name="lastName"
                      placeholder="Last name"
                      value={lead.lastName}
                      onChange={(e) => setField("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div className="space-y-4">
                  <p className="font-display text-2xl font-semibold text-card-foreground">
                    Where should we reply?
                  </p>
                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    placeholder="Work email"
                    value={lead.email}
                    onChange={(e) => setField("email", e.target.value)}
                    required
                  />
                </div>
              ) : null}

              {step === 2 ? (
                <div className="space-y-4">
                  <p className="font-display text-2xl font-semibold text-card-foreground">
                    Which company is this for?
                  </p>
                  <input
                    className={inputClass}
                    name="company"
                    placeholder="Company"
                    value={lead.company}
                    onChange={(e) => setField("company", e.target.value)}
                    required
                  />
                  <input
                    className={inputClass}
                    name="website"
                    placeholder="Company website"
                    value={lead.website}
                    onChange={(e) => setField("website", e.target.value)}
                  />
                </div>
              ) : null}

              {step === 3 ? (
                <div className="space-y-4">
                  <p className="font-display text-2xl font-semibold text-card-foreground">
                    What kind of leads do you need?
                  </p>
                  <textarea
                    className={`${inputClass} min-h-32`}
                    name="message"
                    placeholder="Tell us your prospects, target accounts, and pipeline goals."
                    value={lead.message}
                    onChange={(e) => setField("message", e.target.value)}
                    required
                  />
                </div>
              ) : null}

              <div className="flex gap-3">
                {step > 0 ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </Button>
                ) : null}
                {step < 3 ? (
                  <Button
                    type="button"
                    size="lg"
                    className="flex-1"
                    disabled={!canContinue}
                    onClick={() => setStep(step + 1)}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1"
                    disabled={!canContinue || sending}
                  >
                    {sending ? "Sending..." : "Get a quote"}
                  </Button>
                )}
              </div>
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
