"use client";

import React from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "../ui/button";
import { FiFileText } from "react-icons/fi";
import SocialItem from "../socials/social-item";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const CORE_SKILLS = [
  { label: "TypeScript", image: "/images/typescript.svg" },
  { label: "React", image: "/images/react.svg" },
  { label: "PostgreSQL", image: "/images/postgresql.svg" },
  { label: "Docker", image: "/images/docker.svg" },
];

const About = () => {
  return (
    <div className="flex flex-col gap-4 border-y p-4">
      {/* <div className="text-lg font-semibold md:text-xl">About</div> */}
      <div className="font-geist-mono text-muted-foreground leading-relaxed">
        I’m a full-stack developer focused on building modern, scalable web
        applications. I work with{" "}
        {/* <span className="mx-1 inline-flex flex-wrap gap-1.5 align-middle"> */}
        {CORE_SKILLS.map(({ label, image: src }) => (
          <span
            key={label}
            className="border-border bg-muted text-foreground mr-2 inline-flex items-center gap-1 rounded-md border-2 border-dashed px-1.5 py-0.5 text-xs font-medium"
          >
            <Image alt={`${label}_logo`} src={src} width={14} height={14} />
            {label}
          </span>
        ))}
        {/* </span> */}
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
        <SocialItem
          icon={FaLinkedinIn}
          label="linkedIn"
          link="https://www.linkedin.com/in/sameer-nimje-0029b421b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJ1O4DimGTBKp4hkhGHr0Cw%3D%3D"
        />
        <SocialItem
          icon={FaGithub}
          label="Github"
          link="https://github.com/Sameer413"
        />
        <SocialItem
          icon={FaXTwitter}
          label="twitter"
          link="https://x.com/sameernimje413"
        />
        <SocialItem
          icon={Mail}
          label="outlook"
          link="mailto:sameernimje29@outlook.com"
        />
      </div>
    </div>
  );
};

export default About;
