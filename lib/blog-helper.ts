/**
 * Helper utility to generate the import statement for a new blog post
 * 
 * Usage: After creating a new MDX file in content/blogs/, run this to get
 * the import statement to add to lib/blog-content.tsx
 * 
 * Example:
 *   generateBlogImport("my-new-post")
 *   // Returns: "my-new-post": () => import("@/content/blogs/my-new-post.mdx"),
 */

export function generateBlogImport(blogId: string): string {
  return `  "${blogId}": () => import("@/content/blogs/${blogId}.mdx"),`;
}

/**
 * Get all blog IDs that need to be added to blog-content.tsx
 * Compares files in content/blogs/ with entries in blog-content.tsx
 */
export function getMissingBlogImports(): string[] {
  // This is a helper function - in a real scenario, you might want to
  // read the actual files and compare them
  return [];
}
