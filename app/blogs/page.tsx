import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blogs";
import BlogCard from "@/components/blog/blog-card";

export const metadata: Metadata = {
  title: "Blogs | SameerXdev",
  description: "Blog posts and articles",
};

export default function BlogsPage() {
  const blogs = getAllBlogPosts();

  return (
    <div className="py-8">
      <h1 className="text-foreground mb-2 text-4xl font-bold">Blog</h1>
      <p className="text-muted-foreground mb-8">
        Thoughts, tutorials, and insights on web development and technology.
      </p>

      {blogs.length === 0 ? (
        <div className="border-border bg-card rounded-lg border p-8 text-center">
          <p className="text-muted-foreground">
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <BlogCard key={blog.id} blog={blog} idx={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
