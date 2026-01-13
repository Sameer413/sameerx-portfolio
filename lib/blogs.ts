import fs from "fs";
import path from "path";
import type { BlogPost, BlogPostWithContent } from "@/types/blog";

const BLOGS_DIRECTORY = path.join(process.cwd(), "content", "blogs");

// Get all blog post metadata
export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOGS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOGS_DIRECTORY);
  const blogPosts: BlogPost[] = [];

  for (const fileName of fileNames) {
    if (fileName.endsWith(".mdx") || fileName.endsWith(".md")) {
      const id = fileName.replace(/\.(mdx|md)$/, "");
      const filePath = path.join(BLOGS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");

      // Extract frontmatter
      const frontmatter = extractFrontmatter(fileContents);
      
      blogPosts.push({
        id,
        title: frontmatter.title || id,
        description: frontmatter.description || "",
        date: frontmatter.date || new Date().toISOString(),
        author: frontmatter.author,
        tags: frontmatter.tags,
        readingTime: calculateReadingTime(fileContents),
      });
    }
  }

  // Sort by date (newest first)
  return blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Get a single blog post by ID
export function getBlogPost(id: string): BlogPost | null {
  const allPosts = getAllBlogPosts();
  return allPosts.find((post) => post.id === id) || null;
}

// Extract frontmatter from MDX content
function extractFrontmatter(content: string): {
  title?: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return {};
  }

  const frontmatterText = match[1];
  const frontmatter: Record<string, any> = {};

  frontmatterText.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      // Handle arrays (tags)
      if (key === "tags" && value.startsWith("[") && value.endsWith("]")) {
        frontmatter[key] = value
          .slice(1, -1)
          .split(",")
          .map((tag) => tag.trim().replace(/['"]/g, ""));
      } else {
        frontmatter[key] = value;
      }
    }
  });

  return frontmatter;
}

// Calculate reading time (average 200 words per minute)
function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return minutes;
}

// Get blog post file path
export function getBlogPostFilePath(id: string): string | null {
  const possibleExtensions = [".mdx", ".md"];
  
  for (const ext of possibleExtensions) {
    const filePath = path.join(BLOGS_DIRECTORY, `${id}${ext}`);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }
  
  return null;
}
