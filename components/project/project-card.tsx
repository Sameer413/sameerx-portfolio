import React from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";

const ProjectCard = () => {
  return (
    <div className="group hover:border-border cursor-pointer rounded-md border border-transparent transition-colors duration-300 select-none group-hover:border-t-0">
      <div className="relative rounded-md">
        <Image
          alt="anyImage"
          src="/images/macbook-scroll.webp"
          width={1000}
          height={1000}
          className="rounded-md object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
        />
      </div>

      <div className="relative my-2 max-w-[95%] transition-transform duration-300 ease-out will-change-transform group-hover:translate-x-2">
        <div className="font-geist-mono text-base font-medium">
          Supply Chain
        </div>
        <div className="font-geist-mono text-muted-foreground mt-2 overflow-hidden text-xs text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          repudiandae facere reprehenderit! Doloremque quas perferendis delectus
          voluptas accusantium sit nesciunt.
        </div>

        {/* SKILLS */}
        <div className="">
          <ul className="flex flex-wrap gap-1 pt-3">
            {PROJECTS[0].tech_stack.map((skill, idx) => (
              <div
                key={idx}
                className="text-foreground bg-muted border-border flex items-center gap-1 rounded-md border-2 border-dashed px-1.5 py-1 text-xs font-normal select-none"
              >
                {skill.image && (
                  <Image
                    alt={skill.label + "_logo"}
                    src={skill.image}
                    width={16}
                    height={16}
                  />
                )}
                {/* {skill.Icon && <skill.Icon />} */}

                {skill.label}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
