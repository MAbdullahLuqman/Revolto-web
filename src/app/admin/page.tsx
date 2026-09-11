"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { SectionShell } from "@/components/SectionShell";

type Lead = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
  message: string;
  createdAt: string;
};

const inputClass =
  "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-ring";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setToken(localStorage.getItem("adminToken") ?? "");
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!token) return;
    fetch("/api/leads", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load leads");
        return response.json() as Promise<{ leads: Lead[] }>;
      })
      .then((data) => setLeads(data.leads))
      .catch(() => setError("Could not load leads."));
  }, [token]);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(form.get("email")),
          password: String(form.get("password")),
        }),
      });
      if (!response.ok) throw new Error("Login failed");
      const data = (await response.json()) as { token: string };
      localStorage.setItem("adminToken", data.token);
      setToken(data.token);
    } catch {
      setError("Login failed.");
    }
  }

  if (loading) return <SectionShell>Loading...</SectionShell>;

  if (!token) {
    return (
      <SectionShell>
        <form
          onSubmit={login}
          className="mx-auto max-w-sm space-y-4 rounded-2xl border border-border bg-card p-8"
        >
          <h1 className="font-display text-3xl font-bold text-foreground">Admin login</h1>
          <input className={inputClass} type="email" name="email" placeholder="Email" required />
          <input
            className={inputClass}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
        </form>
      </SectionShell>
    );
  }

  return (
    <SectionShell>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-orange">
            Admin
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground">Leads</h1>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            localStorage.removeItem("adminToken");
            setToken("");
            setLeads([]);
          }}
        >
          Sign out
        </Button>
      </div>
      {error ? <p className="mb-4 text-sm text-red-600">{error}</p> : null}
      <div className="space-y-4">
        {leads.map((lead) => (
          <article key={lead.id} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-semibold text-card-foreground">
                  {[lead.firstName, lead.lastName].filter(Boolean).join(" ") || "Unnamed lead"}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{lead.company}</p>
              </div>
              <p className="text-xs text-muted-foreground">
                {lead.createdAt ? new Date(lead.createdAt).toLocaleString() : "New"}
              </p>
            </div>
            <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <a className="hover:text-foreground" href={`mailto:${lead.email}`}>
                {lead.email}
              </a>
              {lead.website ? (
                <a className="hover:text-foreground" href={lead.website}>
                  {lead.website}
                </a>
              ) : null}
            </div>
            <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-foreground/80">
              {lead.message}
            </p>
          </article>
        ))}
        {!leads.length ? <p className="text-muted-foreground">No leads yet.</p> : null}
      </div>
    </SectionShell>
  );
}
