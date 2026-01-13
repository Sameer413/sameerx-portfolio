"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";

interface BlogCardProps {
  blog: BlogPost;
  idx: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, idx }) => {
  const { id, title, description, date, tags, readingTime } = blog;

  return (
    <Link href={`/blogs/${id}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: idx * 0.1 }}
        className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {title}
            </h2>
            <time className="text-sm text-muted-foreground whitespace-nowrap">
              {format(new Date(date), "MMM d, yyyy")}
            </time>
          </div>

          <p className="text-muted-foreground line-clamp-2">
            {description}
          </p>

          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {tags?.slice(0, 3).map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {readingTime && (
              <span className="text-xs text-muted-foreground">
                {readingTime} min read
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogCard;
