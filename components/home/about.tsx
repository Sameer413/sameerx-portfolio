"use client";

import { USER } from "@/data";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="flex flex-col gap-4 border-y p-4">
      <div className="text-lg font-semibold md:text-xl">About</div>

      <ul className="font-geist-mono marker:text-ring list-disc space-y-2 pl-5 text-justify text-sm marker:text-lg">
        {USER.about.map((ab: string, idx: number) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {ab}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default About;
