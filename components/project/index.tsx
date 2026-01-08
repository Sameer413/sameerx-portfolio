"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./project-card";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import ProjectDetail from "./project-detail";
import { Project } from "@/types/project";

const Projects: React.FC = () => {
  const [active, setActive] = useState<Project | null>();

  return (
    <div className="flex flex-col gap-4 border-y p-4">
      <div className="text-lg font-semibold md:text-xl">Projects</div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PROJECTS.map((project, idx: number) => (
          <motion.button
            key={idx}
            onClick={() => setActive(project)}
            layoutId={`component-${idx}-${project.title}`}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            style={{ opacity: active && active !== project ? 0.3 : 1 }}
          >
            <ProjectCard project={project} idx={idx} />
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <ProjectDetail
            onClick={setActive}
            image_src="/images/macbook-scroll.webp"
            project={active}
          />
        )}
      </AnimatePresence>

      <div className="flex items-center justify-center">
        <Link href="/projects">
          <Button
            variant="secondary"
            className="font-geist-mono cursor-pointer border-[0.25px]"
            size="sm"
          >
            Show all projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
