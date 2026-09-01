"use client";

import { Route } from "@/routes/services.index";
import { RouteRenderer } from "@/lib/router-compat";

export default function Page() {
  return <RouteRenderer route={Route} />;
}
