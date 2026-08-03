import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getPublishedBlogs } from "@/lib/api/services/blog/blog.services";
import { getCamps } from "@/lib/api/services/camps/camps.services";
import { get_programs } from "@/lib/api/services/programs/programs.services";

// Without this the sitemap is frozen at build time and never picks up new
// blogs, camps or programmes.
export const revalidate = 3600;

type Entry = MetadataRoute.Sitemap[number];

interface Timestamped {
  createdAt?: string;
  updatedAt?: string;
}

/** A sitemap must still build when the API is unreachable. */
async function safely<T>(fetcher: () => Promise<T[]>): Promise<T[]> {
  try {
    return (await fetcher()) ?? [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const routes: Entry[] = [
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
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const [blogs, camps, programs] = await Promise.all([
    safely<Timestamped & { slug?: string }>(
      async () => (await getPublishedBlogs()).data,
    ),
    safely<Timestamped & { id?: string; status?: string }>(
      async () => (await getCamps()).data,
    ),
    safely<Timestamped & { id?: string }>(
      async () => (await get_programs()).data,
    ),
  ]);

  const blogRoutes: Entry[] = blogs
    .filter((post) => post?.slug)
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt || post.createdAt || now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  const campRoutes: Entry[] = camps
    .filter((camp) => camp?.id && camp.status !== "COMPLETED")
    .map((camp) => ({
      url: `${SITE_URL}/camps/${camp.id}`,
      lastModified: camp.updatedAt || camp.createdAt || now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  const programRoutes: Entry[] = programs
    .filter((program) => program?.id)
    .map((program) => ({
      url: `${SITE_URL}/programs/${program.id}`,
      lastModified: program.updatedAt || program.createdAt || now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [...routes, ...blogRoutes, ...campRoutes, ...programRoutes];
}
