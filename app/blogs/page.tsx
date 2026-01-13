import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | SameerXdev",
  description: "Blog posts and articles",
};

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
      <p className="text-muted-foreground">
        Blog posts will be displayed here. Create MDX files in the app/blogs
        directory to see them rendered.
      </p>
    </div>
  );
}