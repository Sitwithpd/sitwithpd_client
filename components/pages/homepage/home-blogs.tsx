"use client";

import { useGetPublicBlogs } from "@/lib/api/hooks/blog/blog.hooks";
import CardSkeletons from "@/components/skeletons/card-skeletons";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function HomeBlogs() {
  const { data: blogsData, isLoading, isError } = useGetPublicBlogs();
  const blogs = blogsData?.data?.slice(0, 3) || [];

  if (isLoading) {
    return (
      <section className="py-20 bg-[#F5F8F6]">
        <div className="container mx-auto px-4 max-w-7xl">
          <CardSkeletons />
        </div>
      </section>
    );
  }

  if (isError || blogs.length === 0) {
    return null; // hide section if no blogs or error
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="py-20 bg-linear-to-b from-[#FAFDFB] to-[#F1F6F3] w-full rounded-[32px] my-16 px-4 md:px-10 border border-[#E3ECE6] shadow-[0px_10px_40px_rgba(202,218,206,0.15)] relative overflow-hidden">
      {/* Decorative colored glow spheres */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#EAF2ED]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#E6F3EE] blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl flex flex-col items-center relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          <Pill text="Our Journal & Reflections" className="mb-4" />
          <h2 className="heading-2 max-w-2xl text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] tracking-tight leading-tight">
            Nurture your mind with our perspective
          </h2>
          <p className="paragraph mt-3 max-w-xl text-[#5C6B5F] text-base leading-relaxed">
            Delve into professional insights, personal narratives, and mindful
            guides aimed at supporting you at every phase of your growth.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col bg-white rounded-[10px] border border-[#DEE7E1] shadow-[0px_12px_24px_rgba(16,24,40,0.02)] overflow-hidden transition-all duration-300 h-full group hover:shadow-[0px_20px_40px_rgba(68,91,28,0.08)] hover:border-brand-green/20"
            >
              {/* Image Banner */}
              <Link
                href={`/blog/${blog.slug}`}
                className="relative h-60 w-full overflow-hidden block"
              >
                {blog.coverImageUrl ? (
                  <Image
                    src={blog.coverImageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-[#F0F5F1] flex items-center justify-center text-gray-400">
                    No Image Available
                  </div>
                )}
                {/* Floating categories */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#445b1c]/90 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {blog.category.replace("_", " ")}
                  </span>
                </div>
                {/* Floating read time */}
                <div className="absolute bottom-4 right-4 z-10">
                  <span className="bg-black/50 backdrop-blur-xs text-white px-3 py-1 rounded-lg text-xs font-semibold">
                    {blog.readTimeMinutes} min read
                  </span>
                </div>
              </Link>

              {/* Card Meta & Text Body */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[#6B7B6E] text-xs font-semibold mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                  {blog.publishedAt
                    ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Recent Post"}
                </span>

                <h3 className="text-[#101828] text-lg sm:text-xl font-bold leading-snug mb-3 group-hover:text-brand-green transition-colors line-clamp-2">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>

                <p className="text-[#4A5565] text-sm leading-relaxed mb-6 line-clamp-3 flex-1 opacity-90">
                  {blog.excerpt}
                </p>

                <div className="pt-5 border-t border-[#EDF1EE] flex items-end justify-between mt-auto">
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[10px] text-[#8C9C8F] uppercase tracking-wider font-semibold">
                      Author
                    </span>
                    <span className="text-xs font-bold text-[#202939] truncate w-8/12 lg:w-10/12 ">
                      {blog.authorDisplayName || "Facilitator"}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center w-fit shrink-0 gap-1 text-sm font-semibold text-brand-green hover:text-brand-green/80 group/link transition-colors"
                  >
                    Read Post
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1 duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <div className="flex justify-center">
          <Link href="/blog">
            <Button
              variant="regular"
              className="px-8 py-3 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow"
            >
              Read Rest of Blogs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
