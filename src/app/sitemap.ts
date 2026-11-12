import type { MetadataRoute } from "next";
import { servicesContent, industriesContent, caseStudies } from "@/data/content";
import { approachDetails } from "@/data/approach";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/industries",
    "/approach",
    "/case-studies",
    "/contact",
    "/pricing",
    "/about",
    "/roi-calculator",
    "/training",
    ...servicesContent.items.map((item) => `/services/${item.slug}`),
    ...industriesContent.items.map((item) => `/industries/${item.slug}`),
    ...approachDetails.map((item) => `/approach/${item.slug}`),
    ...caseStudies.map((item) => `/case-studies/${item.slug}`),
    ...[
      "privacy-policy",
      "terms-of-use",
      "cookie-policy",
      "accessibility",
      "anti-modern-slavery",
    ].map((slug) => `/legal/${slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, site.domain).toString() }));
}
