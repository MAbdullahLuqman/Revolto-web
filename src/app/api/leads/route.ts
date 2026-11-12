import { field, firestoreUrl, leadFromFirestore } from "@/lib/firebase-rest";

export async function POST(request: Request) {
  const form = await request.formData();
  const lead = {
    firstName: text(form.get("firstName")),
    lastName: text(form.get("lastName")),
    email: text(form.get("email")),
    company: text(form.get("company")),
    website: text(form.get("website")),
    message: text(form.get("message")),
  };
  if (
    !lead.firstName ||
    !lead.lastName ||
    !lead.company ||
    !lead.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)
  ) {
    return Response.json(
      { error: "Please complete the required fields with a valid email address." },
      { status: 400 },
    );
  }
  const response = await fetch(firestoreUrl("leads"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        firstName: field(lead.firstName),
        lastName: field(lead.lastName),
        email: field(lead.email),
        company: field(lead.company),
        website: field(lead.website),
        message: field(lead.message),
        createdAt: { timestampValue: new Date().toISOString() },
      },
    }),
  });

  if (!response.ok) {
    console.error("Could not save lead", await response.text());
    return Response.json({ error: "Could not save lead" }, { status: 500 });
  }

  try {
    await sendLeadEmail(lead);
  } catch (error) {
    console.error("Lead saved, but notification email failed", error);
  }

  return Response.json({ ok: true });
}

export async function GET(request: Request) {
  const token = request.headers.get("authorization");
  if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const response = await fetch(`${firestoreUrl("leads")}?orderBy=createdAt%20desc`, {
    headers: { Authorization: token },
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Could not load leads", details);
    return Response.json({ error: details || "Could not load leads" }, { status: response.status });
  }

  const data = (await response.json()) as {
    documents?: { name: string; fields?: Parameters<typeof leadFromFirestore>[0]["fields"] }[];
  };

  return Response.json({ leads: (data.documents ?? []).map(leadFromFirestore) });
}

export async function DELETE(request: Request) {
  const token = request.headers.get("authorization");
  const id = new URL(request.url).searchParams.get("id");
  if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 });
  if (!id || id.includes("/")) return Response.json({ error: "Invalid lead id" }, { status: 400 });

  const response = await fetch(firestoreUrl(`leads/${encodeURIComponent(id)}`), {
    method: "DELETE",
    headers: { Authorization: token },
  });
  if (!response.ok) {
    console.error("Could not delete lead", await response.text());
    return Response.json({ error: "Could not delete lead" }, { status: response.status });
  }
  return Response.json({ ok: true });
}

function text(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

async function sendLeadEmail(lead: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
  message: string;
}) {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    console.warn("Skipping lead email: missing RESEND_API_KEY");
    return;
  }

  const name = [lead.firstName, lead.lastName].filter(Boolean).join(" ") || "Unnamed lead";
  const body = [
    `Name: ${name}`,
    `Email: ${lead.email || "-"}`,
    `Company: ${lead.company || "-"}`,
    `Website: ${lead.website || "-"}`,
    "",
    "Message:",
    lead.message || "-",
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env["LEADS_FROM_EMAIL"] ?? "Rovolto Leads <onboarding@resend.dev>",
      to: [process.env["LEADS_TO_EMAIL"] ?? "ahmad@rovolto.net"],
      reply_to: lead.email || undefined,
      subject: `New lead from ${name}`,
      text: body,
      html: `<pre>${body.replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[char] ?? char)}</pre>`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Could not send lead email: ${await response.text()}`);
  }
}
