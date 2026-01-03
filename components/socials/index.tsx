"use client";

import React from "react";
import SocialItem from "./social-item";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";

const Socials = () => {
  return (
    <div className="flex gap-4 border-y p-4">
      <SocialItem icon={FaLinkedinIn} label="linkedIn" />
      <SocialItem icon={FaGithub} label="Github" />
      <SocialItem icon={FaXTwitter} label="twitter" />
      <SocialItem icon={Mail} label="outlook" />
    </div>
  );
};

export default Socials;
