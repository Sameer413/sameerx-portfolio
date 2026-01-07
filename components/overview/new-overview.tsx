"use client"
import Image from "next/image";
import React from "react";
import OverviewTag from "./overview-tag";
import { USER } from "@/data";
import { Globe, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { FiFileText } from "react-icons/fi";
import SocialItem from "../socials/social-item";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CORE_SKILLS = [
  { label: "TypeScript", image: "/images/typescript.svg" },
  { label: "React", image: "/images/react.svg" },
  { label: "PostgreSQL", image: "/images/postgresql.svg" },
  { label: "Docker", image: "/images/docker.svg" },
];
const NewAbout = () => {
  return (
    <div className="flex flex-col gap-4 border-y p-4">
      {/* <div className="text-lg font-semibold md:text-xl">About</div> */}
      <div className="font-geist-mono text-muted-foreground leading-relaxed">
        I’m a full-stack developer focused on building modern, scalable web
        applications. I work with{" "}
        <div className="mx-1 inline-flex flex-wrap gap-1.5 align-middle">
          {CORE_SKILLS.map(({ label, image: src }) => (
            <div
              key={label}
              className="text-foreground bg-muted border-border flex items-center gap-1 rounded-md border-2 border-dashed px-1.5 py-1 text-xs font-medium"
            >
              <Image alt={label + "_logo"} src={src} width={16} height={16} />
              {label}
            </div>
          ))}
        </div>
        to create performant, maintainable, and user-centric products.
      </div>
      <div className="flex items-center gap-4">
        <Button
          size="sm"
          variant={"secondary"}
          className="font-geist-mono cursor-pointer border-[0.25px]"
        >
          <FiFileText />
          Resume / CV
        </Button>
        <Button size="sm" className="font-geist-mono cursor-pointer">
          <Send />
          Get in touch
        </Button>
      </div>
      <div className="flex gap-4">
        <SocialItem icon={FaLinkedinIn} label="linkedIn" />
        <SocialItem icon={FaGithub} label="Github" />
        <SocialItem icon={FaXTwitter} label="twitter" />
        <SocialItem icon={Mail} label="outlook" />
      </div>
    </div>
  );
};

export default NewAbout;
