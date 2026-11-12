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
        body: "Rovolto receives the contact details you submit through the enquiry form. Business contact details may also be used when they are part of an agreed outreach service.",
      },
      {
        title: "How we use data",
        body: "Contact details may be used to respond to enquiries and deliver agreed services.",
      },
      {
        title: "Your rights",
        body: `Contact ${site.email} to ask about personal data or request access, correction, or deletion where applicable.`,
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
        body: "Website content is provided for general information. Reproduction requires permission from the relevant rights holder.",
      },
      {
        title: "No warranty",
        body: "Content is provided as is. Results described in case studies depend on many factors and are not guaranteed.",
      },
      {
        title: "Engagement terms",
        body: "Service scope, responsibilities, fees, and any additional terms should be agreed in the relevant engagement documents.",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie policy",
    intro: "Information about cookies and similar technologies on the Rovolto website.",
    sections: [
      {
        title: "Essential cookies",
        body: "Cookies may support functions required for a website to operate. Optional analytics and marketing cookies are not documented in the current project materials.",
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
      {
        title: "Accessibility",
        body: "Rovolto aims to make this website accessible and welcomes reports about barriers.",
      },
      {
        title: "Ongoing work",
        body: "Keyboard navigation, readable contrast, and control labels are areas for ongoing review.",
      },
      {
        title: "Known limitations",
        body: "Rovolto welcomes reports about accessibility barriers on this website.",
      },
      {
        title: "Feedback",
        body: `If you encounter a barrier, email ${site.email}.`,
      },
    ],
  },
  "anti-modern-slavery": {
    title: "Anti-modern slavery statement",
    intro: "Our position on modern slavery and human trafficking.",
    sections: [
      {
        title: "Our position",
        body: "Rovolto opposes modern slavery and human trafficking.",
      },
      { title: "Reporting", body: `Concerns can be raised at ${site.email}.` },
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
