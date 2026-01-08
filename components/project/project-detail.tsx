import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Project } from "@/types/project";
import ProjectSkill from "./project-skill";
import { PROJECTS } from "@/data/projects";

type Props = {
  onClick: (value: null) => void;
  image_src: string;
  project: Project;
};
const ProjectDetail: React.FC<Props> = ({ onClick, image_src, project }) => {
  return (
    <motion.div
      onClick={() => onClick(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/5 backdrop-blur-lg"
    >
      <motion.div
        layoutId={`component-${PROJECTS.findIndex((p) => p === project)}-${project.title}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
          mass: 0.8,
        }}
        className="border-border h-100 w-80 rounded-md border bg-white p-4 shadow-sm ring-1 shadow-black/10 ring-black/5"
      >
        <Image
          src={"/images/macbook-scroll.webp"}
          alt=""
          width={500}
          height={500}
          className="full rounded-sm object-cover"
        />

        <div className="relative my-2 flex max-w-[95%] flex-col items-start transition-transform duration-300 ease-out will-change-transform group-hover:translate-x-2">
          <motion.div
            layoutId={`text-${PROJECTS.findIndex((p) => p === project)}-${project.title}`}
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.05, // 🔹 appears earlier
            //   delay: 0.06, // 🔹 appears earlier
              duration: 0.3, // 🔹 faster than card
              ease: "linear",
            }}
            className="font-geist-mono text-secondary text-base font-medium"
          >
            Supply Chain
          </motion.div>
          <div className="font-geist-mono text-muted-foreground mt-2 overflow-hidden text-start text-xs text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            repudiandae facere reprehenderit! Doloremque quas perferendis
            delectus voluptas accusantium sit nesciunt.
          </div>

          {/* SKILLS */}
          <div className="">
            <ul className="flex flex-wrap pt-3">
              {project.tech_stack.map((skill, idx) => (
                <ProjectSkill
                  key={idx}
                  image={skill.image}
                  label={skill.label}
                />
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
