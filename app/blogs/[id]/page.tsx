import React from "react";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPost } from "@/lib/blogs";
import { getBlogContent } from "@/lib/blog-content";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { format } from "date-fns";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogPosts();
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params;
  const blog = getBlogPost(id);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${blog.title} | SameerXdev`,
    description: blog.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const blog = getBlogPost(id);

  if (!blog) {
    notFound();
  }

  const BlogContent = getBlogContent(id);

  if (!BlogContent) {
    return (
      <div className="py-8">
        <div className="border-border bg-card rounded-lg border p-8 text-center">
          <p className="text-muted-foreground">
            Blog content not found. Please check the blog ID.
          </p>
          <Link
            href="/blogs"
            className="text-primary mt-4 inline-block hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-8">
      <Link
        href="/blogs"
        className="text-muted-foreground hover:text-foreground mb-6 inline-block text-sm transition-colors"
      >
        ← Back to Blogs
      </Link>

      <header className="mb-8">
        <h1 className="text-foreground mb-4 text-4xl font-bold">
          {blog.title}
        </h1>

        <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
          <time dateTime={blog.date}>
            {format(new Date(blog.date), "MMMM d, yyyy")}
          </time>
          {blog.author && (
            <>
              <span>•</span>
              <span>By {blog.author}</span>
            </>
          )}
          {blog.readingTime && (
            <>
              <span>•</span>
              <span>{blog.readingTime} min read</span>
            </>
          )}
        </div>

        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {blog.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <BlogContent />
      </div>
    </article>
  );
}
