import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { services } from "@/data/services";
import { educationCases } from "@/data/cases";
import { getAllCourseRoutes } from "@/data/courses";
import { programs } from "@/data/programs";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllFaqEntries } from "@/lib/faq";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/courses",
    "/programs",
    "/consult",
    "/lecture",
    "/about",
    "/services",
    "/cases",
    "/blog",
    "/faq",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: new URL(path || "/", siteConfig.url).toString(),
    lastModified: new Date(),
  }));

  const courseRoutes = getAllCourseRoutes().map((routeSlug) => ({
    url: new URL(`/courses/${routeSlug}`, siteConfig.url).toString(),
    lastModified: new Date(),
  }));

  const programRoutes = programs.map((program) => ({
    url: new URL(`/programs/${program.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: new URL(`/services/${service.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
  }));

  const caseRoutes = educationCases.map((item) => ({
    url: new URL(`/cases/${item.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
  }));

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteConfig.url).toString(),
    lastModified: new Date(post.date),
  }));

  const faqRoutes = getAllFaqEntries().map((entry) => ({
    url: new URL(`/faq/${entry.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...programRoutes,
    ...serviceRoutes,
    ...caseRoutes,
    ...blogRoutes,
    ...faqRoutes,
  ];
}
