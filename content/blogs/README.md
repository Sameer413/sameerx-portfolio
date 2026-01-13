# Blog Posts

This directory contains all blog posts written in MDX format.

## Adding a New Blog Post

1. Create a new `.mdx` file in this directory with a URL-friendly name (e.g., `my-new-post.mdx`)

2. Add frontmatter at the top of the file:

```mdx
---
title: "Your Blog Post Title"
description: "A brief description of your post"
date: "2024-01-20"
author: "Your Name"
tags: ["tag1", "tag2"]
---

# Your Content Here
```

3. Add the import mapping in `lib/blog-content.tsx`:

```tsx
"your-blog-id": () => import("@/content/blogs/your-blog-id.mdx"),
```

The blog ID should match the filename (without the `.mdx` extension).

## Frontmatter Fields

- `title` (required): The title of your blog post
- `description` (required): A brief description for previews
- `date` (required): Publication date in ISO format (YYYY-MM-DD)
- `author` (optional): Author name
- `tags` (optional): Array of tags for categorization

## Example

See `welcome-to-my-blog.mdx` for a complete example.
