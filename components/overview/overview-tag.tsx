"use client";
import React, { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

type Props = {
  label?: string;
  icon: ReactNode;
  children?: ReactNode;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0 },
};

const OverviewTag: React.FC<Props> = ({ icon, label, children }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-3"
    >
      <div className="border-muted-foreground/15 bg-muted ring-ring ring-offset-background [&_svg]:text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-lg border ring-1 ring-offset-1 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4">
        {/* <Icon className="size-4" /> */}
        {icon}
      </div>
      <div className="font-geist-mono cursor-default text-sm">
        {label ? label : children}
      </div>
    </motion.div>
  );
};

export default OverviewTag;
