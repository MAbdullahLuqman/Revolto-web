"use client";

import { Route } from "@/routes/training";
import { RouteRenderer } from "@/lib/router-compat";

export default function Page() {
  return <RouteRenderer route={Route} />;
}
