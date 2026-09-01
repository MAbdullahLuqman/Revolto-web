"use client";

import { Route } from "@/routes/case-studies.index";
import { RouteRenderer } from "@/lib/router-compat";

export default function Page() {
  return <RouteRenderer route={Route} />;
}
