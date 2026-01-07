import React from "react";
import { EXPERIENCES } from "@/data/experience";
import type { Experience } from "@/types/experience";
import Image from "next/image";
import ExperiencePositionItem from "./experience-position-item";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 border-y p-4">
      <div className="text-lg font-semibold md:text-xl">Experience</div>
      <div className="">
        {EXPERIENCES.map((experience: Experience) => {
          return (
            <div
              key={experience.id}
              className="screen-line-after space-y-4 py-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-6 shrink-0 items-center justify-center select-none">
                  {experience.companyLogo ? (
                    <Image
                      src={experience.companyLogo}
                      alt={experience.companyName}
                      width={24}
                      height={24}
                      quality={100}
                      className="rounded-full"
                      unoptimized
                      aria-hidden
                    />
                  ) : (
                    <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  )}
                </div>

                <h3 className="text-lg leading-snug font-medium">
                  {experience.companyName}
                </h3>

                {experience.isCurrentEmployer && (
                  <div className="font-geist-mono text-foreground flex items-center gap-1 rounded-md bg-[color-mix(in_oklab,var(--color-green-400)_10%,transparent)] px-1.5 py-1 text-xs font-medium">
                    <div
                      className="animate-ping rounded-lg bg-green-500 p-1 select-none"
                      style={{ backgroundColor: "var(--color-green-500)" }}
                    />
                    <span className="sr-only">Current Employer</span>
                    Working
                  </div>
                )}
              </div>

              <div className="before:bg-border relative space-y-4 before:absolute before:left-3 before:h-full before:w-px">
                {experience.positions.map((position) => (
                  <ExperiencePositionItem
                    key={position.id}
                    position={position}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
