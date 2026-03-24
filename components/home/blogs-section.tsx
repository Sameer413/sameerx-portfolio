"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";

const BlogSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 border-y p-4">
      <div className="text-lg font-semibold md:text-xl">Blogs</div>

      <div className="flex flex-col space-y-6">
        {[0, 1, 3].map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // transition={{ delay: 0.25 * idx }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              delay: idx * 0.15,
            }}
          >
            <BlogCard />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const BlogCard = () => (
  <Link href={"#"} className="flex items-center justify-between">
    <div className="flex-1">
      <div className="mb-1 text-base font-medium">
        How to optimise a Next.js web app
      </div>
      <div className="text-muted-foreground font-geist-mono mb-0.5 text-sm">
        Optimise your Next.js web app to make it lightning fast!
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <CalendarDays size={16} className="text-muted-foreground" />
          <div className="text-muted-foreground font-geist-mono text-sm">
            January 31, 2026
          </div>
        </div>
        <div className="flex min-w-[15%] items-center justify-end gap-1 lg:hidden">
          <div className="text-muted-foreground font-geist-mono text-sm">
            Read more
          </div>
          <ArrowRight size={16} className="text-muted-foreground" />
        </div>
      </div>
    </div>

    <div className="hidden min-w-[15%] items-center justify-end gap-1 lg:flex">
      <div className="text-muted-foreground font-geist-mono text-sm">
        Read more
      </div>
      <ArrowRight size={16} className="text-muted-foreground" />
    </div>
  </Link>
);

export default BlogSection;
