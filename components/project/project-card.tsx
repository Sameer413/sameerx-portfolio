"use client";

import React from "react";
import Image from "next/image";
import ExperienceSkill from "./project-skill";
import { motion } from "motion/react";
import { Project } from "@/types/project";

const ProjectCard: React.FC<{ project: Project; idx: number }> = ({
  project,
  idx,
}) => {
  const { tech_stack, title, description } = project;
  return (
    <div className="group hover:border-border cursor-pointer rounded-md border border-transparent transition-colors delay-75 duration-300 select-none group-hover:border-t-0">
      <div className="relative rounded-md">
        <Image
          alt="anyImage"
          src="/images/macbook-scroll.webp"
          width={1000}
          height={1000}
          className="rounded-md object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
        />
      </div>

      <div className="relative my-2 flex max-w-[95%] flex-col items-start transition-transform duration-300 ease-out will-change-transform group-hover:translate-x-2">
        <motion.div
          layoutId={`text-${idx}-${title}`}
          className="font-geist-mono text-base font-medium"
        >
          Supply Chain
        </motion.div>
        <div className="font-geist-mono text-muted-foreground mt-2 overflow-hidden text-start text-xs text-pretty">
          {description ||
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          repudiandae facere reprehenderit! Doloremque quas perferendis delectus
          voluptas accusantium sit nesciunt.`}
        </div>

        {/* SKILLS */}
        {tech_stack && tech_stack.length > 0 && (
          <div className="">
            <ul className="flex flex-wrap pt-3">
              {tech_stack.map((skill, idx) => (
                <ExperienceSkill
                  key={idx}
                  image={skill.image}
                  label={skill.label}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
