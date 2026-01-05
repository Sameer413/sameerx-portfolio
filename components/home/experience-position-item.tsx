import { cn } from "@/lib/utils";
import type { ExperiencePosition } from "@/types/experience";
import { InfinityIcon, Tag } from "lucide-react";
import React from "react";
import { ExperienceIcon } from "./experience-position-icon";
import { Separator } from "../ui/separator";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ExperiencePositionItem = ({
  position,
}: {
  position: ExperiencePosition;
}) => {
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;

  return (
    <details
      open={position.isExpanded}
      className="group last:before:bg-background relative last:before:absolute last:before:h-full last:before:w-4"
    >
      {/* Trigger */}
      <summary
        className={cn(
          "block w-full cursor-pointer list-none text-left",
          "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7",
          "before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out",
          "hover:before:bg-accent2",
        )}
      >
        <div className="relative z-1 mb-1 flex items-center gap-3">
          <div
            className={cn(
              "flex size-6 shrink-0 items-center justify-center rounded-lg",
              "bg-muted text-muted-foreground",
              "border-muted-foreground/15 ring-edge ring-offset-background border ring-1 ring-offset-1",
            )}
            aria-hidden
          >
            <ExperienceIcon className="size-4" icon={position.icon} />
          </div>

          <h4 className="flex-1 font-medium text-balance">{position.title}</h4>

          <div
            className="text-muted-foreground relative shrink-0 transition-transform [&_svg]:size-4"
            aria-hidden
          >
            {/* <span className="rotate-0 group-open:rotate-180">
              <IoIosArrowDown className="size-4" />
            </span>

            <span className="rotate-0 group-open:rotate-180">
              <IoIosArrowUp className="size-4" />
            </span> */}
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
      </summary>

      {/* Content */}
      <div
        className={cn(
          "overflow-hidden pl-9",
          "transition-all duration-300",
          "group-open:animate-collapsible-fade-down",
          "group-not-open:animate-collapsible-fade-up",
        )}
      >
        {/* {position.description && (
          <ProseMono className="pt-2">
            <Markdown>{position.description}</Markdown>
          </ProseMono>
        )} */}

        {/* {Array.isArray(position.skills) && position.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-3">
            {position.skills.map((skill, index) => (
              <li key={index}>
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </details>
  );
};

export default ExperiencePositionItem;
