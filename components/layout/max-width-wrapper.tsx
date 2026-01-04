import { cn } from "@/lib/utils";
import React from "react";
import Pattern from "./pattern";

const MaxWidthWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("relative mx-auto grid grid-cols-[max-content_1fr_max-content] max-w-4xl", className)}>
      <Pattern className="hidden w-10 md:block lg:block" />
      <main className="h-full w-full flex-1">{children}</main>
      <Pattern className="hidden w-10 md:block lg:block" />
    </div>
  );
};

export default MaxWidthWrapper;
