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
      "Sales development responsibilities agreed around your target buyers, outreach plan, and sales handoff.",
    points: [
      {
        title: "Responsibilities",
        body: "The people, activities, and level of account focus are described in the agreed engagement scope.",
      },
      {
        title: "Outreach activity",
        body: "Channels, activity expectations, and quality review are agreed before work starts.",
      },
      {
        title: "Qualification criteria",
        body: "Agree what makes a relevant response or meeting and how it should be handed to your sales team.",
      },
      {
        title: "Ongoing review",
        body: "Review timing and adjustments are set with your team as part of the engagement.",
      },
    ],
  },
  {
    slug: "research",
    title: "Research",
    description:
      "Define relevant accounts, contact roles, and research criteria before outreach begins.",
    points: [
      {
        title: "ICP definition",
        body: "Firmographics, technographics, and trigger events that define who is worth contacting.",
      },
      {
        title: "Contact data",
        body: "Agree data sources and any verification work required for your campaign.",
      },
      {
        title: "Org mapping",
        body: "Map relevant stakeholder roles when a campaign needs to reach more than one buyer.",
      },
      {
        title: "Buying context",
        body: "Use relevant account context where it is available and appropriate for the campaign.",
      },
    ],
  },
  {
    slug: "content",
    title: "Content",
    description: "Messaging developed around your offer, buyer, and agreed outreach channels.",
    points: [
      {
        title: "Message testing",
        body: "Message variations can be agreed when testing is part of the campaign scope.",
      },
      {
        title: "Personalization tiers",
        body: "The level of personalization is set around account priorities and available research.",
      },
      {
        title: "Objection libraries",
        body: "Plan how your team wants common prospect questions and replies handled.",
      },
      {
        title: "Agreed assets",
        body: "Any additional sales materials or follow-up assets are confirmed before they are included.",
      },
    ],
  },
  {
    slug: "deliverability",
    title: "Deliverability",
    description:
      "Discuss sending setup and email health responsibilities when cold email is in scope.",
    points: [
      {
        title: "Domain strategy",
        body: "Confirm which sending domains and infrastructure are available and in scope.",
      },
      {
        title: "Authentication",
        body: "Authentication setup responsibilities are agreed before email activity begins.",
      },
      {
        title: "Warm-up and pacing",
        body: "Sending practices and limits depend on the agreed infrastructure and campaign plan.",
      },
      {
        title: "Ongoing monitoring",
        body: "Any monitoring and reporting included in the engagement is confirmed in its scope.",
      },
    ],
  },
  {
    slug: "account-management",
    title: "Account management",
    description: "Coordination and reporting responsibilities agreed for a specific engagement.",
    points: [
      {
        title: "Progress updates",
        body: "Reporting cadence and measures are agreed with your team and reflect documented activity and responses.",
      },
      {
        title: "Campaign reviews",
        body: "Review timing and any changes to segments, messaging, or channels are agreed as part of the work.",
      },
      {
        title: "Systems and records",
        body: "CRM access or integrations are included only when they are confirmed in the scope.",
      },
      {
        title: "Escalation path",
        body: "Agree who to contact when priorities, targets, or campaign responsibilities change.",
      },
    ],
  },
];
