import { caseStudies } from "./caseStudies";
import { person, SITE_URL } from "./site";

export type PageMeta = { path: string; title: string; description: string; status?: number };

export const homeMeta: PageMeta = {
  path: "/",
  title: `${person.name} · Senior full-stack engineer`,
  description:
    "Senior full-stack engineer in Wellington, NZ, with a backend focus. I build and run IoT SaaS platforms on AWS, their web and mobile apps, and production Rust on Injective.",
};

export const notFoundMeta: PageMeta = {
  path: "/404",
  title: `Page not found · ${person.name}`,
  description: "That page doesn't exist.",
  status: 404,
};

export const pages: PageMeta[] = [
  homeMeta,
  ...caseStudies.map((c) => ({
    path: `/work/${c.slug}`,
    title: `${c.title} · ${person.name}`,
    description: c.description,
  })),
];

export const metaFor = (pathname: string): PageMeta => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return pages.find((p) => p.path === clean) ?? notFoundMeta;
};

export const canonical = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);
