// This file maps blog IDs to their MDX content
// Add new blog posts here when you create them

import dynamic from "next/dynamic";

// Dynamically import blog posts
const blogContentMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  "welcome-to-my-blog": () => import("@/content/blogs/welcome-to-my-blog.mdx"),
  "getting-started-with-nextjs": () => import("@/content/blogs/getting-started-with-nextjs.mdx"),
};

export function getBlogContent(id: string) {
  const importFn = blogContentMap[id];
  if (!importFn) {
    return null;
  }
  
  return dynamic(importFn, {
    loading: () => <div className="text-muted-foreground">Loading...</div>,
  });
}
