import { TECH_STACK } from "@/data";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <div className="flex flex-col gap-4 border-y p-4">
      <div className="text-lg font-semibold md:text-xl">Stack</div>
      <div className="grid grid-cols-[repeat(auto-fit,32px)] gap-3">
        {TECH_STACK.map(({ icon, label }, idx) => {
          return (
            <div key={idx} className="h-8 max-h-8 min-w-8">
              <Image
                alt={label + "_logo"}
                src={icon}
                width={32}
                height={32}
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
