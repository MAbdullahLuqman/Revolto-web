"use client";

import { useParams } from "next/navigation";
import { Route } from "@/routes/services.$slug";
import { RouteRenderer } from "@/lib/router-compat";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  return <RouteRenderer route={Route} params={{ slug }} />;
}
