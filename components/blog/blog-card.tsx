"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";
import { MoveRight } from "lucide-react";

interface BlogCardProps {
  blog: BlogPost;
  idx: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, idx }) => {
  const { id, title, description, date, tags, readingTime } = blog;

  return (
    <Link href={`/blogs/${id}`}>
      <motion.article
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          delay: Math.min(idx * 0.1, 0.6),
          duration: 0.4,
          ease: "easeOut",
        }}
        className="group bg-card shadow-primary/10 ring-primary/10 h-full cursor-pointer rounded-lg p-4 shadow-sm ring-1 transition-all duration-300 hover:shadow-lg"
      >
        <div className="flex h-full flex-col">
          {/* Title (fixed space) */}
          <h2 className="text-foreground group-hover:text-primary font-geist-mono line-clamp-3 min-h-18 text-base font-medium transition-colors text-shadow-primary/10 text-shadow-sm">
            {title}
          </h2>

          {/* Middle content grows */}
          <div className="mt-2 flex flex-1 flex-col gap-2">
            {/* Description (fixed space) */}
            <p className="text-muted-foreground line-clamp-2 min-h-10">
              {description}
            </p>

            {/* Tags (fixed height row) */}
            <div className="flex min-h-7 flex-wrap gap-2">
              {tags?.slice(0, 3).map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer always at bottom */}
            <div className="mt-auto flex min-h-6 items-center justify-between gap-4">
              <div className="flex flex-1 items-center justify-between">
                <time className="text-muted-foreground text-sm whitespace-nowrap">
                  {format(new Date(date), "MMM d, yyyy")}
                </time>
                {readingTime && (
                  <span className="text-muted-foreground text-xs">
                    {readingTime} min read
                  </span>
                )}
              </div>
              <MoveRight
                className="text-muted-foreground hidden -translate-x-1 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 md:block"
                size={16}
              />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogCard;
