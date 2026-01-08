import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

type Props = { label: string; image: string };

const ProjectSkill: React.FC<Props> = ({ image, label }) => {
  return (
    <motion.div
      initial="collapsed"
      whileHover="expanded"
      className="-mr-3 flex items-start justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 hover:z-10 dark:border-neutral-700 dark:bg-neutral-800"
    >
      {image && (
        <Image
          alt={label + "_logo"}
          src={image}
          width={16}
          height={16}
          className="rounded-full object-contain"
        />
      )}
      {/* {skill.Icon && <skill.Icon />} */}

      <motion.div
        variants={{
          collapsed: { width: 0 },
          expanded: { width: "auto", padding: "0 4px" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="font-geist-mono text-primary overflow-hidden text-xs font-medium whitespace-nowrap"
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default ProjectSkill;
