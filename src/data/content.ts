export const homeContent = {
  eyebrow: "B2B LEAD GENERATION AGENCY",
  headline: "Build a sales pipeline that scales with Revoloto",
  subheadline:
    "We help B2B companies fill their calendars with qualified appointments through outbound strategy, account research, and multi-channel outreach.",
  cta: "Get a quote",
  trustLine: "Sales and marketing leaders at growth-stage B2B companies trust Revoloto",
  stats: [
    { value: "50+", label: "Industries served" },
    { value: "12k+", label: "Qualified appointments booked" },
    { value: "94%", label: "Client retention rate" },
    { value: "3x", label: "Average pipeline lift" },
  ],
} as const;

export const servicesContent = {
  title: "Outbound services built for modern B2B sales",
  description:
    "From fully managed appointment setting to targeted LinkedIn campaigns, we run the channels that turn strangers into sales conversations.",
  items: [
    {
      slug: "appointment-setting",
      title: "Appointment setting",
      description:
        "End-to-end calendar filling. We research, reach out, and book meetings directly into your AEs’ schedules.",
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
      slug: "cold-calling",
      title: "Cold calling",
      description:
        "Trained SDRs handle first calls, discovery, objections, and warm handoffs to your sales team.",
      icon: "phone",
    },
    {
      slug: "linkedin-lead-generation",
      title: "LinkedIn lead generation",
      description:
        "Connection-first outreach, content amplification, and InMail campaigns that open doors at target accounts.",
      icon: "linkedin",
    },
    {
      slug: "outsourced-sdr",
      title: "Outsourced SDR",
      description:
        "A dedicated extension of your sales team without the hiring, training, or tooling overhead.",
      icon: "users",
    },
    {
      slug: "sales-development",
      title: "Sales development",
      description:
        "We design, run, and iterate the full top-of-funnel motion that feeds qualified pipeline to closers.",
      icon: "trending-up",
    },
    {
      slug: "demand-generation",
      title: "Demand generation",
      description:
        "Integrated campaigns that create awareness, capture intent, and nurture prospects across channels.",
      icon: "zap",
    },
    {
      slug: "account-based-marketing",
      title: "Account-based marketing",
      description:
        "Hyper-targeted plays for named accounts with personalized messaging, gifting, and executive engagement.",
      icon: "target",
    },
    {
      slug: "lead-nurturing",
      title: "Lead nurturing",
      description:
        "Keep cold leads warm with structured follow-up, value-driven content, and intent-triggered re-engagement.",
      icon: "heart",
    },
    {
      slug: "lead-research",
      title: "Lead research",
      description:
        "Accurate contact data, org mapping, and buyer signals so every outreach dollar is spent on the right people.",
      icon: "search",
    },
    {
      slug: "crm-consulting",
      title: "CRM consulting",
      description:
        "Clean data architecture, workflow automation, and reporting dashboards that make pipeline predictable.",
      icon: "database",
    },
    {
      slug: "sales-enablement",
      title: "Sales enablement",
      description:
        "Playbooks, templates, and training so your internal team can convert the meetings we generate.",
      icon: "briefcase",
    },
    {
      slug: "email-deliverability",
      title: "Email deliverability",
      description:
        "Technical setup, sender reputation, and domain hygiene to keep messages out of spam and in front of buyers.",
      icon: "shield-check",
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
    {
      slug: "startup-lead-generation",
      title: "Startup lead generation",
      description:
        "Founder-friendly GTM sprints that help early-stage teams land first customers and prove repeatable demand.",
      icon: "rocket",
    },
  ],
} as const;

export const processContent = {
  title: "How Revoloto works",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "We map your ideal customer profile, value proposition, competitive landscape, and existing sales motion.",
    },
    {
      number: "02",
      title: "Build",
      description:
        "Our team sets up infrastructure, writes messaging, builds target account lists, and prepares your dedicated SDR pod.",
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
        "Weekly performance reviews, A/B testing, and list refinements keep reply rates and pipeline value trending up.",
    },
  ],
} as const;

export const industriesContent = {
  title: "Industry-focused outreach",
  description:
    "We adapt tone, timing, and targeting to the sectors where you sell. Vertical expertise means faster ramp and better conversations.",
  items: [
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
    title: "FlowStack cut cost per meeting by 42% with Revoloto",
    summary:
      "Tighter ICP definition, refreshed messaging, and a dedicated SDR pod helped FlowStack relaunch outbound at scale.",
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
      "Revoloto became an extension of our sales org within two weeks. The quality of conversations and the speed of ramp were both outstanding.",
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
    question: "How quickly can Revoloto start generating meetings?",
    answer:
      "Most clients see the first qualified conversations within 3–4 weeks. Ramp depends on data quality, ICP clarity, and your sales calendar availability.",
  },
  {
    question: "Do you provide SDRs or just strategy?",
    answer:
      "Both. We offer fully managed SDR pods, strategy-only consulting, and hybrid engagements where we build the system and train your team.",
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
