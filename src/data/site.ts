export const site = {
  name: "Rovolto",
  tagline: "Lead generation services",
  email: "ahmad@rovolto.net",
  domain: "https://rovolto.com",
} as const;

export const nav = {
  main: [
    { label: "Services", to: "/services" },
    { label: "Industries", to: "/industries" },
    { label: "Approach", to: "/approach" },
    { label: "Pricing", to: "/pricing" },
    { label: "About", to: "/about" },
  ],
  services: [
    { title: "Security contracts", to: "/services/security-contacts" },
    { title: "Startup lead generation", to: "/services/startup-lead-generation" },
    { title: "Email marketing", to: "/services/email-marketing" },
    { title: "Appointment setting", to: "/services/appointment-setting" },
    { title: "Cold email outreach", to: "/services/cold-email-outreach" },
    {
      title: "LinkedIn outreach and Sales Navigator",
      to: "/services/linkedin-sales-navigator-outreach",
    },
    { title: "Account management", to: "/services/account-management" },
    { title: "Sales development", to: "/services/sales-development" },
    { title: "Enterprise lead generation", to: "/services/enterprise-lead-generation" },
    { title: "SMB lead generation", to: "/services/smb-lead-generation" },
  ],
  industries: [
    { title: "Security", to: "/industries/security" },
    { title: "Construction", to: "/industries/construction" },
    { title: "Consulting", to: "/industries/consulting" },
    { title: "Finance", to: "/industries/finance" },
    { title: "Manufacturing", to: "/industries/manufacturing" },
    { title: "Retail", to: "/industries/retail" },
  ],
  approach: [
    { title: "Our approach", to: "/approach" },
    { title: "SDR execution", to: "/approach/sdr" },
    { title: "Research", to: "/approach/research" },
    { title: "Content", to: "/approach/content" },
    { title: "Deliverability", to: "/approach/deliverability" },
    { title: "Account management", to: "/approach/account-management" },
  ],
  company: [
    { title: "About us", to: "/about" },
    { title: "Testimonials", to: "/case-studies#testimonials" },
    { title: "Contact", to: "/contact" },
  ],
  legal: [
    { title: "Privacy policy", to: "/legal/privacy-policy" },
    { title: "Terms of use", to: "/legal/terms-of-use" },
    { title: "Cookie policy", to: "/legal/cookie-policy" },
    { title: "Accessibility", to: "/legal/accessibility" },
    { title: "Anti-modern slavery", to: "/legal/anti-modern-slavery" },
  ],
  social: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/rovoltoservices/" }],
} as const;
