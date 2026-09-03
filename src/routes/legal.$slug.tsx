import { createFileRoute, notFound } from "@/lib/router-compat";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { Button } from "@/components/Button";
import { pageMeta } from "@/components/SimplePage";
import { site } from "@/data/site";

const legalPages: Record<
  string,
  { title: string; intro: string; sections: { title: string; body: string }[] }
> = {
  "privacy-policy": {
    title: "Privacy policy",
    intro: "How Rovolto collects, uses, and protects personal data.",
    sections: [
      {
        title: "Data we collect",
        body: "Contact details you submit through our forms, business contact data used for outreach, and standard analytics data such as pages viewed and device type.",
      },
      {
        title: "How we use data",
        body: "To respond to enquiries, deliver contracted services, improve our website, and meet legal obligations. We do not sell personal data.",
      },
      {
        title: "Legal basis",
        body: "We rely on legitimate interest for B2B communications and consent where required by applicable law.",
      },
      {
        title: "Your rights",
        body: `You can request access, correction, or deletion of your data at any time by emailing ${site.email}.`,
      },
    ],
  },
  "terms-of-use": {
    title: "Terms of use",
    intro: "The terms that govern your use of the Rovolto website.",
    sections: [
      {
        title: "Acceptance",
        body: "By accessing this website you agree to these terms. If you do not agree, please do not use the site.",
      },
      {
        title: "Use of content",
        body: "All content is owned by Rovolto and provided for informational purposes. Reproduction without permission is not permitted.",
      },
      {
        title: "No warranty",
        body: "Content is provided as is. Results described in case studies depend on many factors and are not guaranteed.",
      },
      {
        title: "Governing law",
        body: "These terms are governed by the laws of the jurisdiction in which Rovolto is incorporated.",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie policy",
    intro: "How and why we use cookies on rovolto.com.",
    sections: [
      {
        title: "Essential cookies",
        body: "Required for the site to function, such as security and session handling.",
      },
      {
        title: "Analytics cookies",
        body: "Help us understand which pages are useful so we can improve content and navigation.",
      },
      {
        title: "Marketing cookies",
        body: "Used to measure the performance of our campaigns. These are only set with your consent.",
      },
      {
        title: "Managing cookies",
        body: "You can clear or block cookies in your browser settings at any time.",
      },
    ],
  },
  accessibility: {
    title: "Accessibility statement",
    intro: "Our commitment to an accessible web experience.",
    sections: [
      { title: "Standard", body: "We aim to meet WCAG 2.1 AA across the Rovolto website." },
      {
        title: "Ongoing work",
        body: "We test colour contrast, keyboard navigation, and screen reader labelling as part of our release process.",
      },
      {
        title: "Known limitations",
        body: "Some embedded third-party media may not fully meet our standard. We work with vendors to improve this.",
      },
      {
        title: "Feedback",
        body: `If you encounter a barrier, email ${site.email} and we will respond promptly.`,
      },
    ],
  },
  "anti-modern-slavery": {
    title: "Anti-modern slavery statement",
    intro: "Our position on modern slavery and human trafficking.",
    sections: [
      {
        title: "Our position",
        body: "Rovolto has zero tolerance for modern slavery or human trafficking in our business or supply chain.",
      },
      {
        title: "Our people",
        body: "All team members are engaged under fair contracts with transparent pay and working conditions.",
      },
      {
        title: "Suppliers",
        body: "We expect suppliers and partners to uphold equivalent standards and reserve the right to terminate relationships that do not.",
      },
      { title: "Reporting", body: `Concerns can be raised confidentially at ${site.email}.` },
    ],
  },
};

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const page = legalPages[params.slug];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Page not found — Rovolto" }, { name: "robots", content: "noindex" }],
      };
    }
    return pageMeta(`${loaderData.page.title} — Rovolto`, loaderData.page.intro);
  },
  errorComponent: () => (
    <SectionShell>
      <p className="text-center text-muted-foreground">Something went wrong loading this page.</p>
    </SectionShell>
  ),
  notFoundComponent: () => (
    <SectionShell>
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Page not found</h1>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <a href="/">Back home</a>
          </Button>
        </div>
      </div>
    </SectionShell>
  ),
  component: LegalPage,
});

function LegalPage() {
  const { page } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Legal" title={page.title} description={page.intro} />
      <SectionShell>
        <div className="mx-auto max-w-3xl space-y-8">
          {page.sections.map((s: { title: string; body: string }) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
