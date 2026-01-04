import React from "react";
import Image from "next/image";
import IndianFlag from "./indian-flag";
import RollingText from "./rolling-text";
import { ROLES } from "@/data";
import type { Transition } from "motion/react";
import Pattern from "../layout/pattern";

const Greeting: React.FC = () => {
  const transition: Transition = {
    y: {
      type: "spring",
      stiffness: 420,
      damping: 32,
    },
    opacity: { duration: 0.2 },

    // ⬇️ DELAY shake until enter completes
    x: {
      delay: 0.22,
      duration: 0.35,
      ease: "easeInOut",
    },
  };

  return (
    <div className="mt-5 flex border-y">
      <div className="relative h-32 w-32 border-r p-1">
        <Image
          alt="my-image"
          src={
            "https://pbs.twimg.com/profile_images/2004574016246620160/wKaT51XI_400x400.jpg"
          }
          width={500}
          height={500}
          className="ring-border h-full w-full rounded-full object-cover ring-1 ring-offset-2 select-none"
        />
        {/* <IndianFlag className="absolute bottom-0 left-0 h-auto w-10" /> */}
      </div>
      <div className="grid flex-1 grid-rows-[1fr_max-content_max-content]">
        <div className="relative">
          <Pattern className="h-full w-full" />
          <div className="font-geist-mono text-muted-foreground absolute bottom-0 mb-1 ml-2 text-[10px] md:hidden md:text-xs">
            text-3xl font-geist-mono font-medium
          </div>
          <pre className="font-geist-mono text-muted-foreground pointer-events-none absolute bottom-0 mb-2 ml-3 hidden text-sm leading-tight font-medium select-none md:block">
            {`<body className="text-3xl font-geist-mono font-medium">
  <h1>Building for the web</h1>
</body>`}
          </pre>
        </div>

        <div className="flex flex-col-reverse gap-1 border-t py-2 pl-3 md:flex-row md:items-center md:gap-4">
          <div className="text-2xl font-bold md:text-3xl">Sameer Nimje</div>
          <div className="inline-block w-fit rounded-sm border px-2 shadow-[var(--shadow-aesthetic)]">
            <RollingText
              className="text-muted-foreground font-geist-mono inline-block text-xs font-medium text-balance md:text-sm"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  x: [0, -6, 6, -4, 4, 0],
                },
                exit: {
                  y: 10,
                  opacity: 0,
                },
              }}
              transition={transition}
              interval={3}
            >
              {ROLES}
            </RollingText>
          </div>
        </div>

        {/* <div className="font-geist-mono ml-3 hidden py-2 text-sm font-medium">
          <div className="text-muted-foreground">
            I’m a full-stack engineer specializing in frontend, backend, and
            DevOps, building fast, scalable, and reliable web applications.
          </div>
          <div className="">
            From intuitive UIs to robust APIs and cloud-ready infrastructure, I
            deliver end-to-end solutions with clean, production-grade code.
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Greeting;
