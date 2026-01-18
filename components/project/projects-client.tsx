"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCard from "./project-card";
import ProjectDetail from "./project-detail";
import { Project } from "@/types/project";

type ProjectsClientProps = {
  projects: Project[];
};

const ProjectsClient: React.FC<ProjectsClientProps> = ({ projects }) => {
  return (
    <div className="w-full p-4">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "auto", opacity: 1 }}
        transition={{ delay: 0.3, ease: "easeOut", duration: 0.5 }}
        className="bg-accent relative inline-block overflow-hidden px-2 py-0.5"
      >
        <div className="font-geist-mono text-base font-normal text-nowrap">
          I love building things
        </div>
        <div className="absolute -top-0.75 -left-0.75 h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
        <div className="absolute -top-0.75 -right-0.75 h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
        <div className="absolute -right-0.75 -bottom-0.75 h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
        <div className="absolute -bottom-0.75 -left-0.75 h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
      </motion.div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.a
            href={`projects/${project.id}`}
            key={project.id ?? idx}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} idx={idx} />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsClient;
