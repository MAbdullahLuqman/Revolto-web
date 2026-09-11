import { field, firestoreUrl, leadFromFirestore } from "@/lib/firebase-rest";

export async function POST(request: Request) {
  const form = await request.formData();
  const response = await fetch(firestoreUrl("leads"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        firstName: field(form.get("firstName")),
        lastName: field(form.get("lastName")),
        email: field(form.get("email")),
        company: field(form.get("company")),
        website: field(form.get("website")),
        message: field(form.get("message")),
        createdAt: { timestampValue: new Date().toISOString() },
      },
    }),
  });

  if (!response.ok) return Response.json({ error: "Could not save lead" }, { status: 500 });

  return Response.json({ ok: true });
}

export async function GET(request: Request) {
  const token = request.headers.get("authorization");
  if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const response = await fetch(`${firestoreUrl("leads")}?orderBy=createdAt%20desc`, {
    headers: { Authorization: token },
  });

  if (!response.ok) return Response.json({ error: "Could not load leads" }, { status: 500 });

  const data = (await response.json()) as {
    documents?: { name: string; fields?: Parameters<typeof leadFromFirestore>[0]["fields"] }[];
  };

  return Response.json({ leads: (data.documents ?? []).map(leadFromFirestore) });
}
