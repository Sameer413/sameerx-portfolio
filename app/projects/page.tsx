import ProjectsClient from "@/components/project/projects-client";
import { getAllProjects } from "@/lib/projects";

const ProjectsPage = async () => {
  const projects = getAllProjects().filter((project) => project.published !== false);

  return <ProjectsClient projects={projects} />;
};

export default ProjectsPage;
