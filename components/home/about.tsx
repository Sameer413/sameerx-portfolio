"use client";

import { USER } from "@/data";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="flex flex-col gap-4 border-y p-4">
      <div className="text-lg font-semibold md:text-xl">About</div>

      <motion.ul
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        initial="hidden"
        // animate="show"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="font-geist-mono marker:text-ring list-disc space-y-2 pl-5 text-justify text-sm marker:text-lg"
      >
        {USER.about.map((ab: string, idx: number) => (
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 5 },
              // show: { opacity: 1, y: 0 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.35, ease: "easeOut" },
              },
            }}
            key={idx}
          >
            {ab}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default About;
