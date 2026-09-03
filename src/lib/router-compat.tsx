"use client";

import NextLink from "next/link";
import React, { createContext, useContext, type ComponentType, type ReactNode } from "react";

const LoaderDataContext = createContext<unknown>(null);

type RouteParams = Record<string, string> & { slug: string };

type RouteConfig<TLoaderData = unknown> = {
  component: ComponentType;
  loader?: (args: { params: RouteParams }) => TLoaderData;
  head?: (args: { loaderData?: TLoaderData }) => unknown;
  notFoundComponent?: ComponentType;
  errorComponent?: ComponentType<{ error?: Error }>;
};

export function createFileRoute(_path: string) {
  return <TLoaderData,>(config: RouteConfig<TLoaderData> & Record<string, unknown>) => ({
    ...config,
    useLoaderData: () => useContext(LoaderDataContext) as TLoaderData,
  });
}

export function notFound(): never {
  throw new Error("NEXT_NOT_FOUND");
}

function hrefFor(to: string, params?: Record<string, string>) {
  return Object.entries(params ?? {}).reduce(
    (href, [key, value]) => href.replace(`$${key}`, value),
    to,
  );
}

export function Link({
  to,
  params,
  activeProps: _activeProps,
  children,
  ...props
}: {
  to: string;
  params?: Record<string, string>;
  activeProps?: unknown;
  children: ReactNode;
} & Omit<React.ComponentProps<typeof NextLink>, "href">) {
  return (
    <NextLink href={hrefFor(to, params)} {...props}>
      {children}
    </NextLink>
  );
}

export function RouteRenderer<TLoaderData>({
  route,
  params = {},
}: {
  route: RouteConfig<TLoaderData>;
  params?: Record<string, string>;
}) {
  try {
    const loaderData = route.loader?.({ params: params as RouteParams });
    const Component = route.component;
    return (
      <LoaderDataContext.Provider value={loaderData}>
        <Component />
      </LoaderDataContext.Provider>
    );
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_NOT_FOUND" && route.notFoundComponent) {
      const NotFound = route.notFoundComponent;
      return <NotFound />;
    }
    if (route.errorComponent) {
      const ErrorComponent = route.errorComponent;
      return error instanceof Error ? <ErrorComponent error={error} /> : <ErrorComponent />;
    }
    throw error;
  }
}
