"use client";

import { Route } from "@/routes";
import { RouteRenderer } from "@/lib/router-compat";

export default function Page() {
  return <RouteRenderer route={Route} />;
}
