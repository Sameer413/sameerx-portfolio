import React from "react";
import Image from "next/image";
import IndianFlag from "./indian-flag";
import RollingText from "./rolling-text";
import { ROLES } from "@/data";

const Greeting: React.FC = () => {
  return (
    <div className="flex border-y">
      <div className="relative h-32 w-32 border-r p-1">
        <Image
          alt="my-image"
          src={
            "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={500}
          height={500}
          className="ring-border h-full w-full rounded-full object-cover ring-1 ring-offset-2 select-none"
        />
        <IndianFlag className="absolute bottom-0 left-0 h-auto w-10" />
      </div>
      <div className="grid flex-1 grid-rows-[1fr_max-content]">
        {/* <Pattern className="h-full w-full" /> */}
        <div className="ml-3 flex items-end gap-4">
          <div className="text-4xl font-bold">Sameer Nimje</div>
          <RollingText texts={ROLES} />
        </div>

        <div className="font-geist-mono ml-3 py-2 text-sm font-medium">
          <div className="text-muted-foreground">
            I’m a full-stack engineer specializing in frontend, backend, and
            DevOps, building fast, scalable, and reliable web applications.
          </div>
          {/* <div className="">
            From intuitive UIs to robust APIs and cloud-ready infrastructure, I
            deliver end-to-end solutions with clean, production-grade code.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Greeting;
