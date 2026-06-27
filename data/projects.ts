import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "anything",
    title: "Flash Sale Platform",
    description:
      "High-concurrency flash sale system with atomic stock reservation, transactional inventory updates, and race-condition-safe checkout for simultaneous multi-product purchases.",
    tech_stack: [
      { label: "TypeScript", image: "/images/typescript.svg" },
      { label: "React", image: "/images/react.svg" },
      { label: "PostgreSQL", image: "/images/postgresql.svg" },
      { label: "Docker", image: "/images/docker.svg" },
      { label: "Redis", image: "/images/redis.svg" },
    ],
  },
  {
    id: "anything1",
    title: "Supply Chain",
    description: "anything on the description",
    tech_stack: [
      { label: "TypeScript", image: "/images/typescript.svg" },
      { label: "React", image: "/images/react.svg" },
      { label: "PostgreSQL", image: "/images/postgresql.svg" },
      { label: "Docker", image: "/images/docker.svg" },
    ],
  },
  {
    id: "anything2",
    title: "Supply Chain",
    description: "anything on the description",
    tech_stack: [
      { label: "TypeScript", image: "/images/typescript.svg" },
      { label: "React", image: "/images/react.svg" },
      { label: "PostgreSQL", image: "/images/postgresql.svg" },
      { label: "Docker", image: "/images/docker.svg" },
    ],
  },
];
