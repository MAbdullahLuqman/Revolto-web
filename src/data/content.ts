export const homeContent = {
  eyebrow: "LEAD GENERATION SERVICES",
  headline: "Connect with the right clients at the right time",
  subheadline:
    "Rovolto helps companies grow with high-quality leads through targeted email marketing, LinkedIn outreach, InMail campaigns, and Sales Navigator strategies powered by Apollo data.",
  cta: "Get a quote",
  trustLine:
    "Companies use Rovolto to reach the right buyers through clean targeting and managed outreach",
  stats: [
    { value: "18k", label: "Profile-fit prospects mapped yearly" },
    { value: "9k", label: "Marketing-qualified contacts filtered" },
    { value: "200", label: "Sales-qualified meetings benchmark" },
    { value: "10-30", label: "Closed-deal range from tracked programs" },
  ],
} as const;

export const servicesContent = {
  title: "Lead generation services for modern B2B sales",
  description:
    "We help firms grow through targeted email marketing, LinkedIn outreach, InMail campaigns, Sales Navigator strategies, and Apollo-backed account data.",
  items: [
    {
      slug: "security-contacts",
      title: "Security contacts",
      description:
        "Find CISOs, IT leaders, security managers, compliance owners, and technical buyers matched to your ideal customer profile.",
      icon: "shield-check",
    },
    {
      slug: "startup-lead-generation",
      title: "Startup lead generation",
      description:
        "Founder-friendly GTM sprints that help early-stage teams land first customers and prove repeatable demand.",
      icon: "rocket",
    },
    {
      slug: "email-marketing",
      title: "Email marketing",
      description:
        "Targeted email campaigns with clean lists, clear messaging, deliverability basics, and reply-focused follow-up.",
      icon: "mail",
    },
    {
      slug: "appointment-setting",
      title: "Appointment setting",
      description:
        "Research, outreach, qualification, and calendar booking with the right clients at the right time.",
      icon: "calendar",
    },
    {
      slug: "cold-email-outreach",
      title: "Cold email outreach",
      description:
        "Multi-step sequences written for your buyer, validated by data, and optimized for reply rates and meeting bookings.",
      icon: "mail",
    },
    {
      slug: "linkedin-sales-navigator-outreach",
      title: "LinkedIn outreach and Sales Navigator",
      description:
        "Connection outreach, InMail campaigns, saved searches, lead lists, account tracking, and Sales Navigator cleanup.",
      icon: "linkedin",
    },
    {
      slug: "account-management",
      title: "Account management",
      description:
        "Weekly reporting, contact quality review, campaign priorities, and clear next actions for every target account.",
      icon: "briefcase",
    },
    {
      slug: "sales-development",
      title: "Sales development",
      description:
        "We design, run, and iterate the top-of-funnel motion that feeds qualified conversations to closers.",
      icon: "trending-up",
    },
    {
      slug: "enterprise-lead-generation",
      title: "Enterprise lead generation",
      description:
        "Complex sales cycles, multiple stakeholders, and rigorous compliance for Fortune 500 and mid-market targets.",
      icon: "building",
    },
    {
      slug: "smb-lead-generation",
      title: "SMB lead generation",
      description:
        "High-volume, cost-efficient outbound that reaches small-business decision makers at scale.",
      icon: "store",
    },
  ],
} as const;

export const processContent = {
  title: "How Rovolto works",
  steps: [
    {
      number: "01",
      title: "Find",
      description:
        "We map target buyers, buying committees, account fit, and the contact data needed before any outreach starts.",
    },
    {
      number: "02",
      title: "Verify",
      description:
        "Apollo, Sales Navigator, email checks, and manual review keep lists clean before they enter campaigns.",
    },
    {
      number: "03",
      title: "Launch",
      description:
        "Campaigns go live across email, phone, and LinkedIn with strict quality controls and daily activity tracking.",
    },
    {
      number: "04",
      title: "Optimize",
      description:
        "Weekly account management, reporting, and list refinements keep contact quality and pipeline value moving.",
    },
  ],
} as const;

export const industriesContent = {
  title: "Industry-focused outreach",
  description:
    "We adapt tone, timing, and targeting to the sectors where you sell. Security is first because clean technical buyer data drives the rest of the campaign.",
  items: [
    {
      slug: "security",
      title: "Security",
      description:
        "Reach CISOs, security leaders, IT directors, compliance owners, and technical buyers with verified contact data.",
    },
    {
      slug: "construction",
      title: "Construction",
      description:
        "Reach contractors, developers, and infrastructure buyers with messages that match procurement cycles.",
    },
    {
      slug: "consulting",
      title: "Consulting",
      description:
        "Book discovery calls with executives evaluating advisory, implementation, and transformation partners.",
    },
    {
      slug: "finance",
      title: "Finance",
      description:
        "Target banks, insurers, fintechs, and asset managers with compliance-aware outreach and precise stakeholder mapping.",
    },
    {
      slug: "manufacturing",
      title: "Manufacturing",
      description:
        "Connect with operations, supply-chain, and plant leadership at industrial buyers around the world.",
    },
  ],
} as const;

export const caseStudies = [
  {
    slug: "fintech-expansion",
    client: "PayNova",
    industry: "Fintech",
    title: "How PayNova booked 140 qualified demos in 90 days",
    summary:
      "A unified cold email and LinkedIn campaign rebuilt PayNova’s enterprise pipeline after a stalled launch.",
    metric: "140 qualified demos",
    image: "/images/case-paynova.jpg",
  },
  {
    slug: "saas-relaunch",
    client: "FlowStack",
    industry: "SaaS",
    title: "FlowStack cut cost per meeting by 42% with Rovolto",
    summary:
      "Tighter ICP definition, verified security contacts, and cleaner account data helped FlowStack relaunch outbound at scale.",
    metric: "42% lower CPM",
    image: "/images/case-flowstack.jpg",
  },
  {
    slug: "manufacturing-growth",
    client: "Apex Industrial",
    industry: "Manufacturing",
    title: "Apex Industrial opened conversations in three new regions",
    summary:
      "Regionalized campaigns and localized account research generated meetings with procurement leaders across EMEA.",
    metric: "3 new regions",
    image: "/images/case-apex.jpg",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Rovolto became an extension of our sales org within two weeks. The quality of conversations and the speed of ramp were both outstanding.",
    name: "Dana Chen",
    role: "VP of Sales",
    company: "BrightPath",
  },
  {
    quote:
      "We went from inconsistent demos to a predictable calendar. Their weekly optimization cadence made the difference.",
    name: "Marcus Reid",
    role: "Head of Growth",
    company: "Nexus Labs",
  },
  {
    quote:
      "The account research alone saved us months. Every meeting was with the right stakeholder and they actually showed up.",
    name: "Sarah Whitfield",
    role: "CMO",
    company: "CoreLedger",
  },
] as const;

export const faqContent = [
  {
    question: "How quickly can Rovolto start generating meetings?",
    answer:
      "Most clients see the first qualified conversations within 3-4 weeks. Ramp depends on account fit, contact data quality, ICP clarity, and calendar availability.",
  },
  {
    question: "Do you manage Apollo and Sales Navigator?",
    answer:
      "Yes. We manage Apollo lists, enrichment, segmentation, sequence hygiene, Sales Navigator searches, and weekly contact-quality reviews.",
  },
  {
    question: "Which channels do you use?",
    answer:
      "We run cold email, cold calling, LinkedIn outreach, and account-based marketing campaigns. The mix is tailored to your ICP and market.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Primary metrics are qualified meetings booked, pipeline value created, cost per meeting, and meeting-to-opportunity conversion. Reporting is shared weekly.",
  },
] as const;
