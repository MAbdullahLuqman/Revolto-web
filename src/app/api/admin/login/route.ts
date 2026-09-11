import { firebaseApiKey } from "@/lib/firebase-rest";

export async function POST(request: Request) {
  const { email, password } = (await request.json()) as { email?: string; password?: string };

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseApiKey()}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    },
  );

  if (!response.ok) return Response.json({ error: "Login failed" }, { status: 401 });

  const data = (await response.json()) as { idToken: string };
  return Response.json({ token: data.idToken });
}
