"use client";
import { Route } from "@/routes/case-studies.$slug";
import { RouteRenderer } from "@/lib/router-compat";
export default function ClientPage({ slug }: { slug: string }) {
  return <RouteRenderer route={Route} params={{ slug }} />;
}
