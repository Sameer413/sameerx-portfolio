"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import type { ExperiencePosition } from "@/types/experience";
import { InfinityIcon, Tag } from "lucide-react";
import { ExperienceIcon } from "./experience-position-icon";
import { Separator } from "../ui/separator";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SkillTag from "../common/skill-tag";
import OverviewTag from "../overview/overview-tag";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const ExperiencePositionItem = ({
  position,
}: {
  position: ExperiencePosition;
}): React.ReactNode => {
  const [open, setOpen] = useState<boolean>(position.isExpanded || false);
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;

  return (
    <div className="group relative last:before:absolute last:before:h-full last:before:w-4">
      {/* <div className="group last:before:bg-neutral-900 relative last:before:absolute last:before:h-full last:before:w-4"> */}
      {/* Trigger */}
      <div
        className={cn(
          "block w-full cursor-pointer list-none text-left",
          "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7",
          "before:-z-1 before:transition-colors before:ease-out",
          "hover:before:bg-muted/50",
        )}
        onClick={() => setOpen(!open)}
      >
        <div className="relative z-1 mb-1 flex items-center">
          <div>
            <OverviewTag
              icon={<ExperienceIcon className="size-4" icon={position.icon} />}
            />
          </div>

          <h4 className="font-geist-mono flex-1 font-medium text-balance">
            {position.title}
          </h4>

          <div className="text-muted-foreground" aria-hidden>
            <div
              className={cn(
                "text-muted-foreground transition-transform duration-200",
                open ? "scale-y-[-1]" : "scale-y-100",
              )}
              aria-hidden
            >
              <IoIosArrowUp className="size-4" />
            </div>
            <div
              className={cn(
                "text-muted-foreground transition-transform duration-200",
                open ? "scale-y-[-1]" : "scale-y-100",
              )}
              aria-hidden
            >
              <IoIosArrowDown className="size-4" />
            </div>
          </div>
        </div>

        <div className="text-muted-foreground flex items-center gap-2 pl-9 text-sm">
          {position.employmentType && (
            <>
              <dl>
                <dt className="sr-only">Employment Type</dt>
                <dd>{position.employmentType}</dd>
              </dl>

              <Separator
                className="data-[orientation=vertical]:h-4"
                orientation="vertical"
              />
            </>
          )}

          <dl>
            <dt className="sr-only">Employment Period</dt>
            <dd className="flex items-center gap-0.5">
              <span>{start}</span>
              <span className="font-mono">—</span>
              {isOngoing ? (
                <>
                  <InfinityIcon
                    className="size-4.5 translate-y-[0.5px]"
                    aria-hidden
                  />
                  <span className="sr-only">Present</span>
                </>
              ) : (
                <span>{end}</span>
              )}
            </dd>
          </dl>
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "overflow-hidden pl-9",
          "transition-all duration-300",
          "group-open:animate-collapsible-fade-down",
          "group-not-open:animate-collapsible-fade-up",
        )}
      >
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0, borderTopWidth: 0 }}
              animate={{ height: "auto", opacity: 1, borderTopWidth: 1 }}
              exit={{ height: 0, opacity: 0, borderTopWidth: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-border my-2 overflow-hidden border-t"
            >
              <ul className="font-geist-mono marker:text-ring list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-lg md:leading-6">
                {position.description?.map((item: string, idx: number) => (
                  <li key={"desc_" + idx} className="text-pretty">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {Array.isArray(position.skills) && position.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1 pt-3">
            {position.skills.map((skill, idx) => (
              <div
                key={idx}
                className="text-foreground bg-muted border-border flex items-center gap-1 rounded-md border-2 border-dashed px-1.5 py-1 text-xs font-normal select-none"
              >
                {skill.image_src && (
                  <Image
                    alt={skill.label + "_logo"}
                    src={skill.image_src}
                    width={16}
                    height={16}
                  />
                )}
                {skill.Icon && <skill.Icon />}

                {skill.label}
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperiencePositionItem;
