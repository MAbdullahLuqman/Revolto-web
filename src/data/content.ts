export const homeContent = {
  eyebrow: "LEAD GENERATION SERVICES",
  headline: "Connect with the right prospects at the right time",
  subheadline:
    "Reach the right decision makers through targeted outreach, appointment setting, and social media marketing. Rovolto helps you create new business opportunities and support your next stage of growth.",
  cta: "Get a quote",
  trustLine: "Targeted outreach shaped around your buyers, market, and growth goals",
} as const;

export const servicesContent = {
  title: "Lead generation services for modern B2B sales",
  description:
    "We help B2B firms create new opportunities through targeted outreach, appointment setting, managed sales development, and social media marketing.",
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
        "Focused outreach that helps early-stage teams test a buyer profile, gather market feedback, and plan next steps.",
      icon: "rocket",
    },
    {
      slug: "email-marketing",
      title: "Email marketing",
      description:
        "Targeted business email outreach with audience and message agreed around your campaign goals.",
      icon: "mail",
    },
    {
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      description:
        "Build a consistent social presence aligned with your audience, business goals, and sales activity.",
      icon: "linkedin",
    },
    {
      slug: "appointment-setting",
      title: "Appointment setting",
      description:
        "Coordinate outreach and meeting bookings around qualification criteria and handoff rules agreed with your team.",
      icon: "calendar",
    },
    {
      slug: "cold-email-outreach",
      title: "Cold email outreach",
      description:
        "Targeting and email messages planned around your buyer profile, offer, and agreed campaign scope.",
      icon: "mail",
    },
    {
      slug: "linkedin-sales-navigator-outreach",
      title: "LinkedIn outreach and Sales Navigator",
      description:
        "Use Sales Navigator for account research; connection outreach, InMail, and campaign management are scoped separately.",
      icon: "linkedin",
    },
    {
      slug: "account-management",
      title: "Account management",
      description:
        "Agree campaign coordination, progress updates, and contact review responsibilities for your engagement.",
      icon: "briefcase",
    },
    {
      slug: "sales-development",
      title: "Sales development",
      description:
        "Support prospecting and early sales conversations with a handoff to your sales team based on agreed criteria.",
      icon: "trending-up",
    },
    {
      slug: "enterprise-lead-generation",
      title: "Enterprise lead generation",
      description:
        "Map relevant buying roles and coordinate outreach for larger accounts with multiple stakeholders and longer sales processes.",
      icon: "building",
    },
    {
      slug: "smb-lead-generation",
      title: "SMB lead generation",
      description:
        "Targeting clarified around whether your company or your intended buyers are small and medium-sized businesses.",
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
        "Apollo and Sales Navigator can support account research and data checks where appropriate for the campaign.",
    },
    {
      number: "03",
      title: "Launch",
      description:
        "Agreed outreach begins with the selected channels, target criteria, and messaging for your campaign.",
    },
    {
      number: "04",
      title: "Optimize",
      description:
        "Campaign reviews and list refinements help keep targeting aligned with your agreed buyer profile.",
    },
  ],
} as const;

export const industriesContent = {
  title: "Industry-focused outreach",
  description:
    "We adapt targeting and messaging to the businesses and decision makers you want to reach, across security, retail, and other B2B sectors.",
  items: [
    {
      slug: "security",
      title: "Security",
      description:
        "Help security businesses reach property, facilities, construction, and procurement decision makers with relevant outreach.",
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
        "Target relevant decision makers in banks, insurers, fintechs, and asset managers with messaging shaped to your offer.",
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
        "Plan outreach around retail relationships and the buyers relevant to your product or service.",
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
