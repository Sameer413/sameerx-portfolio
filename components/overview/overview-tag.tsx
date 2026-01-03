"use client";
import React, { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  label?: string;
  icon: LucideIcon;
  children?: ReactNode;
};

const itemVariants = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0 },
};

const OverviewTag: React.FC<Props> = ({ icon: Icon, label, children }) => {
  return (
    <motion.div
      // initial={{ opacity: 0, y: 10 }}
      // animate={{ opacity: 1, y: 0 }}
      variants={itemVariants}
      className="flex items-center gap-3"
    >
      <div className="border-muted-foreground/15 bg-muted ring-ring ring-offset-background [&_svg]:text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-lg border ring-1 ring-offset-1 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4">
        <Icon className="size-4" />
      </div>
      <div className="font-geist-mono cursor-default text-sm">
        {label ? label : children}
      </div>
    </motion.div>
  );
};

export default OverviewTag;
