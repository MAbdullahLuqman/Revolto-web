import Link from "next/link";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted-foreground">This page may have moved or no longer exists.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
      >
        Return home
      </Link>
    </section>
  );
}
