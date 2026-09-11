type FirestoreValue = { stringValue: string } | { timestampValue: string };

export type Lead = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
  message: string;
  createdAt: string;
};

function env(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

export const firebaseApiKey = () => env("FIREBASE_API_KEY");
export const firebaseProjectId = () => env("FIREBASE_PROJECT_ID");

export function firestoreUrl(path: string) {
  return `https://firestore.googleapis.com/v1/projects/${firebaseProjectId()}/databases/(default)/documents/${path}`;
}

export function field(value: FormDataEntryValue | null): FirestoreValue {
  return { stringValue: typeof value === "string" ? value : "" };
}

export function leadFromFirestore(document: {
  name: string;
  fields?: Record<string, FirestoreValue> | undefined;
}): Lead {
  const fields = document.fields ?? {};
  const text = (name: string) => {
    const value = fields[name];
    return value && "stringValue" in value ? value.stringValue : "";
  };
  const createdAtValue = fields["createdAt"];
  const createdAt =
    createdAtValue && "timestampValue" in createdAtValue ? createdAtValue.timestampValue : "";

  return {
    id: document.name.split("/").pop() ?? document.name,
    firstName: text("firstName"),
    lastName: text("lastName"),
    email: text("email"),
    company: text("company"),
    website: text("website"),
    message: text("message"),
    createdAt,
  };
}
