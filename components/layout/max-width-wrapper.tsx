import { cn } from "@/lib/utils";
import React from "react";
import Pattern from "./pattern";

const MaxWidthWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto grid h-full max-w-4xl grid-cols-[max-content_1fr_max-content]",
        className,
      )}
    >
      <Pattern className="w-4 md:block md:w-10 lg:block" />
      <main className="h-full w-full flex-1">{children}</main>
      <Pattern className="w-4 md:block md:w-10 lg:block" />
    </div>
  );
};

export default MaxWidthWrapper;
