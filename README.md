This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Blog System

This project includes a reusable blog system that stores blog posts locally as MDX files.

### Adding a New Blog Post

1. Create a new `.mdx` file in `content/blogs/` with a URL-friendly name (e.g., `my-new-post.mdx`)

2. Add frontmatter at the top:
```mdx
---
title: "Your Blog Post Title"
description: "A brief description"
date: "2024-01-20"
author: "Your Name"
tags: ["tag1", "tag2"]
---

# Your content here
```

3. Add the import in `lib/blog-content.tsx`:
```tsx
"my-new-post": () => import("@/content/blogs/my-new-post.mdx"),
```

The blog will automatically appear on `/blogs` and be accessible at `/blogs/my-new-post`.

See `content/blogs/README.md` for more details.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
