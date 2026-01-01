import { cn } from "@/lib/utils";
import React from "react";
import Pattern from "./pattern";

const MaxWidthWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn("relative h-full w-full mx-auto flex max-w-7xl", className)}
    >
      <Pattern className="w-10" />
      <main className="w-full flex-1">{children}</main>
      <Pattern className="w-10" />
    </div>
  );
};

export default MaxWidthWrapper;
