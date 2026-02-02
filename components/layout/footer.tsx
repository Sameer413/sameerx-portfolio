"use client";

import { Mail } from "lucide-react";
import SocialItem from "../socials/social-item";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex items-center justify-between border-t px-4 py-2">
      <div className="font-geist-mono text-muted-foreground text-sm font-normal">
        Built with love by Sameer Nimje
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

export default Footer;
