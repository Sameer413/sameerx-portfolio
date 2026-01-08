import React from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./project-card";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 border-y p-4">
      <div className="text-lg font-semibold md:text-xl">Projects</div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PROJECTS.map((project, idx: number) => (
          <ProjectCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
