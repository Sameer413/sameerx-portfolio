// This file maps project IDs to their MDX content
// Add new projects here when you create them

import dynamic from "next/dynamic";

// Dynamically import project posts
const projectContentMap: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  "project-template": () => import("@/content/projects/project-template.mdx"),
};

export function getProjectContent(id: string) {
  const importFn = projectContentMap[id];
  if (!importFn) {
    return null;
  }

  return dynamic(importFn, {
    loading: () => <div className="text-muted-foreground">Loading...</div>,
  });
}
