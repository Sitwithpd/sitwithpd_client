import { BlogClient } from "@/components/pages/blog/blog-client";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Insights & Stories — The Sit With PD Blog",
  description:
    "Explore expert articles, personal stories, and reflective insights on emotional wellness, purposeful living, resilience, and personal transformation from the Sit With PD Global Therapeutic Network.",
  openGraph: {
    title: "The Sit With PD Blog — Insights on Growth & Transformation",
    description:
      "Articles, stories, and insights on emotional wellness, clarity, resilience, and purposeful living from the Sit With PD community.",
    url: "https://sitwithpd.com/blog",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sit With PD Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sit With PD Blog",
    description:
      "Insights on emotional wellness, resilience, purpose, and personal transformation. Read stories from the Sit With PD community.",
    images: ["/images/og-image.png"],
  },
};

export default async function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "The Sit With PD Blog",
            url: "https://sitwithpd.com/blog",
            description:
              "Expert articles, personal stories, and reflective insights on emotional wellness, purposeful living, resilience, and personal transformation from the Sit With PD Global Therapeutic Network.",
            publisher: {
              "@type": "Organization",
              name: "Sit With PD",
              url: "https://sitwithpd.com",
              logo: {
                "@type": "ImageObject",
                url: "https://sitwithpd.com/images/primary-logo.png",
              },
            },
          }),
        }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogClient />
      </Suspense>
    </>
  );
}
