export type ApproachDetail = {
  slug: string;
  title: string;
  description: string;
  points: { title: string; body: string }[];
};

export const approachDetails: ApproachDetail[] = [
  {
    slug: "sdr",
    title: "SDR execution",
    description:
      "Dedicated sales development reps who run your outreach, qualify replies, and book meetings.",
    points: [
      { title: "Dedicated pods", body: "A named SDR team assigned to your market, brand, and calendar — never a shared queue." },
      { title: "Daily activity standards", body: "Defined dial, email, and LinkedIn volumes with QA on every conversation." },
      { title: "Qualification criteria", body: "We agree on BANT-style criteria up front so only real opportunities reach your AEs." },
      { title: "Weekly coaching", body: "Call reviews and messaging updates keep performance improving throughout the engagement." },
    ],
  },
  {
    slug: "research",
    title: "Research",
    description:
      "Account universes, verified contacts, and buying signals that make every touch relevant.",
    points: [
      { title: "ICP definition", body: "Firmographics, technographics, and trigger events that define who is worth contacting." },
      { title: "Manual verification", body: "Every contact is checked by a human researcher before it enters a sequence." },
      { title: "Org mapping", body: "We map the buying committee so outreach reaches influencers and economic buyers." },
      { title: "Signal monitoring", body: "Funding, hiring, tech changes, and leadership moves trigger timely outreach." },
    ],
  },
  {
    slug: "content",
    title: "Content",
    description: "Sequences, call scripts, and follow-up assets written for skeptical B2B buyers.",
    points: [
      { title: "Message testing", body: "Multiple angles run in parallel so we learn which pain point resonates fastest." },
      { title: "Personalization tiers", body: "Deep personalization for tier-one accounts, smart templating for volume segments." },
      { title: "Objection libraries", body: "Documented responses to the objections your market actually raises." },
      { title: "Sales collateral", body: "One-pagers and follow-up emails that keep momentum after the first meeting." },
    ],
  },
  {
    slug: "deliverability",
    title: "Deliverability",
    description: "Infrastructure and reputation management that keep your emails in the inbox.",
    points: [
      { title: "Domain strategy", body: "Separate sending domains protect your primary domain reputation." },
      { title: "Authentication", body: "SPF, DKIM, and DMARC configured and monitored from day one." },
      { title: "Warm-up and pacing", body: "Gradual volume ramps and per-mailbox limits prevent spam placement." },
      { title: "Ongoing monitoring", body: "Placement tests, blocklist checks, and bounce analysis every week." },
    ],
  },
  {
    slug: "account-management",
    title: "Account management",
    description: "A single point of contact who owns strategy, reporting, and results.",
    points: [
      { title: "Weekly reporting", body: "Meetings booked, pipeline value, reply quality, and next-week priorities." },
      { title: "Quarterly strategy", body: "Segment expansion, offer testing, and channel mix reviews every quarter." },
      { title: "CRM integration", body: "Activity and outcomes sync into your CRM so forecasting stays accurate." },
      { title: "Escalation path", body: "Direct access to leadership whenever priorities or targets change." },
    ],
  },
];
