export const homeContent = {
  eyebrow: "LEAD GENERATION SERVICES",
  headline: "Connect with the right prospects at the right time",
  subheadline:
    "Rovolto helps companies grow with high-quality leads through targeted email marketing, LinkedIn outreach, InMail campaigns, and Sales Navigator strategies powered by Apollo data.",
  cta: "Get a quote",
  trustLine:
    "Companies use Rovolto to reach the right prospects through clean targeting and managed outreach",
  stats: [
    { value: "18k", label: "Profile-fit prospects mapped yearly" },
    { value: "9k", label: "Marketing-qualified contacts filtered" },
    { value: "200+", label: "Qualified meetings" },
    { value: "$1M+", label: "Revenue generated", note: "10-30 converted deals" },
  ],
} as const;

export const servicesContent = {
  title: "Lead generation services for modern B2B sales",
  description:
    "We help firms grow through targeted email marketing, LinkedIn outreach, InMail campaigns, Sales Navigator strategies, and Apollo-backed account data.",
  items: [
    {
      slug: "security-contacts",
      title: "Security contracts",
      description:
        "Reach property managers, construction managers, security managers, and procurement buyers matched to your ideal prospect profile.",
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
        "Research, outreach, qualification, and calendar booking with the right prospects at the right time.",
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
        "Reach property managers, construction managers, security leaders, and procurement buyers with verified contact data.",
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
    {
      slug: "retail",
      title: "Retail",
      description:
        "Reach retail operators, property teams, and regional managers with clean targeting and direct outreach.",
    },
  ],
} as const;

export const caseStudies = [
  {
    slug: "multifamily-night-patrol",
    client: "Multifamily property group",
    industry: "Multifamily Residentials",
    title: "700-unit property requested active night patrol coverage",
    summary:
      "Outbound follow-up turned into a detailed proposal request for active courtesy patrol, parking enforcement, amenity closures, and resident response.",
    metric: "700 units",
    image: "/images/case-studies/security-proposal-1.jpg",
  },
  {
    slug: "three-property-night-patrol",
    client: "Residential property manager",
    industry: "Multifamily Residentials",
    title: "Property manager asked for pricing across three sites",
    summary:
      "A property management prospect requested separate pricing for three night patrol properties, including incident response and weekly PDF reporting.",
    metric: "3 properties",
    image: "/images/case-studies/security-proposal-2.jpg",
  },
  {
    slug: "community-security-bid",
    client: "Community manager",
    industry: "Multifamily Residentials",
    title: "Community manager requested a bid for nightly security visits",
    summary:
      "Cold outreach generated a direct bid request for two security visits per night, including property lockup at 10:00 PM.",
    metric: "2 visits nightly",
    image: "/images/case-studies/security-proposal-3.jpg",
  },
  {
    slug: "construction-security-coverage",
    client: "Construction company",
    industry: "Construction",
    title: "Construction prospect requested hourly security rates",
    summary:
      "A construction prospect asked for a proposal covering weekday overnight coverage and 24-hour weekend coverage.",
    metric: "24-hour coverage",
    image: "/images/case-studies/security-proposal-4.jpg",
  },
  {
    slug: "operations-director-meeting",
    client: "Operations director",
    industry: "Multifamily Residentials",
    title: "Operations leader booked time to discuss mobile patrol",
    summary:
      "Follow-up outreach led to a meeting request from an operations director and interest in mobile patrol services.",
    metric: "Meeting booked",
    image: "/images/case-studies/security-proposal-5.jpg",
  },
  {
    slug: "new-development-security",
    client: "Development manager",
    industry: "Construction",
    title: "Developer opened a security conversation for a Dallas project",
    summary:
      "A real estate development prospect replied during acquisition planning and offered time for a quick call.",
    metric: "New development",
    image: "/images/case-studies/security-proposal-6.jpg",
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
      "Most campaigns see the first qualified conversations within 3-4 weeks. Ramp depends on account fit, contact data quality, ICP clarity, and calendar availability.",
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
