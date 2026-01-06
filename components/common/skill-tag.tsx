import React from "react";
import { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

interface SkillTagProps {
  label: string;
  Icon?: IconType | LucideIcon;
  image_src?: string;
}

const SkillTag = ({ Icon, label, image_src }: SkillTagProps) => {
  return (
    <motion.div
      initial="collapsed"
      whileHover="expanded"
      className="border-border flex cursor-pointer items-center overflow-hidden rounded-full border-2 select-none"
    >
      {Icon ? (
        <Icon />
      ) : (
        <Image
          alt={label}
          src={image_src ?? ""}
          width={50}
          height={50}
          className="h-auto w-full max-w-7 rounded-full object-cover"
        />
      )}

      <motion.div
        variants={{
          collapsed: { width: 0 },
          expanded: { width: "auto", padding: "0 4px" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="font-geist-mono overflow-hidden text-sm font-medium whitespace-nowrap"
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default SkillTag;
