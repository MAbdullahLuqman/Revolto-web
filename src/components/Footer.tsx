import { Link } from "@/lib/router-compat";
import { Logo } from "./Logo";
import { nav, site } from "@/data/site";

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to as "/"}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Rovolto helps companies grow with high-quality leads through targeted email marketing,
              LinkedIn outreach, InMail campaigns, Sales Navigator strategies, and Apollo data.
            </p>
            <div className="mt-6 space-y-1 text-sm text-muted-foreground">
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {nav.services.slice(0, 6).map((s) => (
                <li key={s.to}>
                  <FooterLink to={s.to}>{s.title}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink to="/services">All services</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Industries</h3>
            <ul className="space-y-2">
              {nav.industries.map((i) => (
                <li key={i.to}>
                  <FooterLink to={i.to}>{i.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              {nav.company.map((c) => (
                <li key={c.to}>
                  <FooterLink to={c.to}>{c.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              {nav.resources.slice(0, 5).map((r) => (
                <li key={r.to}>
                  <FooterLink to={r.to}>{r.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rovolto. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {nav.legal.map((l) => (
              <FooterLink key={l.to} to={l.to}>
                {l.title}
              </FooterLink>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {nav.social.map((s) => (
              <ExternalLink key={s.href} href={s.href}>
                {s.label}
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
