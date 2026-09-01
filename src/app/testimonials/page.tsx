"use client";

import { Route } from "@/routes/testimonials";
import { RouteRenderer } from "@/lib/router-compat";

export default function Page() {
  return <RouteRenderer route={Route} />;
}
