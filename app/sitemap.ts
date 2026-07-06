import { MetadataRoute } from "next";
import { mockBlogs } from "@/lib/mock-data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sitwithpd.com";

  // Static routes
  const routes = [
    "",
    "/about",
    "/programs",
    "/consultation",
    "/camps",
    "/community",
    "/membership",
    "/contact",
    "/blog",
    "/terms",
    "/privacy-policy",
    "/refund-policy",
    "/team/oluwatosin-sam-abereola",
    "/team/oluwafunmike-sam-abereola",
    "/team/clementina-adetoye",
    "/team/kola-olajide",
    "/team/temitope-bamidele",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/team/") ? 0.7 : 0.8,
  }));

  // Blog dynamic routes
  const blogRoutes = mockBlogs.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
