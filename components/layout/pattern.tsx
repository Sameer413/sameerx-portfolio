import { cn } from "@/lib/utils";
import React from "react";

const Pattern: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        `
        inset-0
        hidden md:block
        border-x border-x-(--pattern-fg)
        bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
        bg-[size:10px_10px]
        bg-fixed
        [--pattern-fg:var(--color-black)]/5
        dark:[--pattern-fg:var(--color-white)]/10
      `,
        className
      )}
    />
  );
};

export default Pattern;
