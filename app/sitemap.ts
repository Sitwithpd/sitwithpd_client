import { MetadataRoute } from "next";
import { mockBlogs } from "@/lib/mock-data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sitwithpd.com";

  // Static routes
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/programs", priority: 0.9 },
    { path: "/programs/programs-listing", priority: 0.8 },
    { path: "/consultation", priority: 0.9 },
    { path: "/camps", priority: 0.9 },
    { path: "/community", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/testimonials", priority: 0.7 },
    { path: "/team/oluwatosin-sam-abereola", priority: 0.7 },
    { path: "/team/oluwafunmike-sam-abereola", priority: 0.7 },
    { path: "/team/clementina-adetoye", priority: 0.7 },
    { path: "/team/kola-olajide", priority: 0.7 },
    { path: "/team/temitope-bamidele", priority: 0.7 },
    { path: "/terms", priority: 0.3 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/refund-policy", priority: 0.3 },
    { path: "/medical-disclaimer", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority,
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
