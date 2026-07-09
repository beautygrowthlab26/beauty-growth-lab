import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { services } from "@/data/services";
import { cases } from "@/data/cases";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllFaqEntries } from "@/lib/faq";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/services",
    "/cases",
    "/blog",
    "/faq",
    "/bgi",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: new URL(path || "/", siteConfig.url).toString(),
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: new URL(`/services/${service.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
  }));

  const caseRoutes = cases.map((item) => ({
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

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...blogRoutes, ...faqRoutes];
}
