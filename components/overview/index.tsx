"use client";

import React from "react";
import { CodeXml, Globe, Mail, MapPin, Mars } from "lucide-react";
import OverviewTag from "./overview-tag";
import Link from "next/link";
import { motion } from "motion/react";
import { USER } from "@/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08, // delay between each row item
    },
  },
};

const Overview: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="flex flex-col gap-4 border-y p-4"
    >
      <OverviewTag label="Full Stack Developer @AlterSquare" icon={CodeXml} />

      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
        <OverviewTag label={USER.city} icon={MapPin} />
        <OverviewTag icon={Mail}>
          <Link
            href="mailto:sameernimje29@outlook.com"
            className="hover:underline"
          >
            sameernimje29@outlook.com
          </Link>
        </OverviewTag>
        <OverviewTag icon={Globe}>
          <Link
            href={"https://sameerx.in"}
            className="hover:underline"
            target="_blank"
          >
            sameerx.in
          </Link>
        </OverviewTag>
        <OverviewTag label="he/him" icon={Mars} />
      </div>
    </motion.div>
  );
};

export default Overview;
