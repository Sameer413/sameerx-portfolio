import { getProjectContent } from "@/lib/project-content";
import { getAllProjects, getProjectById } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { format } from "date-fns";
import Image from "next/image";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | SameerXdev`,
    description: project.description,
  };
}

const ProjectDetailPage = async ({ params }: ProjectPageProps) => {
  const { id } = await params;

  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const ProjectContent = getProjectContent(id);

  if (!ProjectContent) {
    return (
      <div className="py-8">
        <div className="border-border bg-card rounded-lg border p-8 text-center">
          <p className="text-muted-foreground">
            Project content not found. Please check the project ID.
          </p>
          <Link
            href="/projects"
            className="text-primary mt-4 inline-block hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-8">
      <Link
        href="/projects"
        className="text-muted-foreground hover:text-foreground mb-6 inline-block text-sm transition-colors"
      >
        ← Back to Projects
      </Link>

      <header className="mb-8">
        <h1 className="text-foreground mb-4 text-4xl font-bold">
          {project.title}
        </h1>

        {project.description && (
          <p className="text-muted-foreground mb-4 text-lg">
            {project.description}
          </p>
        )}

        <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
          {project.date && (
            <time dateTime={project.date}>
              {format(new Date(project.date), "MMMM d, yyyy")}
            </time>
          )}
          {project.author && (
            <>
              <span>•</span>
              <span>By {project.author}</span>
            </>
          )}
        </div>

        {project.tags && project.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.tech_stack && project.tech_stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.tech_stack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-1.5"
              >
                {tech.image && (
                  <Image
                    src={tech.image}
                    alt={tech.label}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                )}
                <span className="text-sm font-medium">{tech.label}</span>
              </div>
            ))}
          </div>
        )}

        {project.cover_image && (
          <div className="mt-6 overflow-hidden rounded-lg">
            <Image
              src={project.cover_image}
              alt={project.title}
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        )}
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <ProjectContent />
      </div>
    </article>
  );
};

export default ProjectDetailPage;
