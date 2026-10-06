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
        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem("adminToken");
          setToken("");
          throw new Error("Session expired");
        }
        if (!response.ok) {
          return response.json().then((data: { error?: string }) => {
            throw new Error(data.error || "Failed to load leads");
          });
        }
        return response.json() as Promise<{ leads: Lead[] }>;
      })
      .then((data) => setLeads(data.leads))
      .catch((error: unknown) =>
        setError(error instanceof Error ? error.message : "Could not load leads."),
      );
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

  async function deleteLead(id: string) {
    if (!window.confirm("Delete this lead?")) return;
    setError("");
    const response = await fetch(`/api/leads?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      setError("Could not delete lead.");
      return;
    }
    setLeads((current) => current.filter((lead) => lead.id !== id));
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
      {leads.length ? (
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="border-b border-border text-muted-foreground">
              <tr>{["Name", "Email", "Company", "Website", "Message", "Received", ""].map((label) => <th key={label} className="px-4 py-3 font-medium">{label}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leads.map((lead) => (
                <tr key={lead.id} className="align-top">
                  <td className="px-4 py-4 font-medium text-card-foreground">{[lead.firstName, lead.lastName].filter(Boolean).join(" ") || "Unnamed lead"}</td>
                  <td className="px-4 py-4"><a className="hover:text-foreground" href={`mailto:${lead.email}`}>{lead.email}</a></td>
                  <td className="px-4 py-4">{lead.company}</td>
                  <td className="px-4 py-4">{lead.website ? <a className="hover:text-foreground" href={lead.website}>{lead.website}</a> : "—"}</td>
                  <td className="max-w-sm whitespace-pre-wrap px-4 py-4">{lead.message}</td>
                  <td className="whitespace-nowrap px-4 py-4">{lead.createdAt ? new Date(lead.createdAt).toLocaleString() : "New"}</td>
                  <td className="px-4 py-4"><Button variant="outline" onClick={() => void deleteLead(lead.id)}>Delete</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : <p className="text-muted-foreground">No leads yet.</p>}
    </SectionShell>
  );
}
