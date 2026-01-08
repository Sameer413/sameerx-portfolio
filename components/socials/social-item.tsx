import React, { ReactNode } from "react";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

type Props = {
  label?: string;
  icon: LucideIcon | IconType;
  children?: ReactNode;
  iconSize?: number;
};

const containerVariants: Variants = {
  hidden: {
    width: 0,
    opacity: 0,
  },
  show: {
    width: "auto",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const SocialItem: React.FC<Props> = ({
  icon: Icon,
  children,
  label,
  iconSize,
}) => {
  //   const splitWords = (text: string) => text.split(" ");

  return (
    <motion.div
      className="relative flex cursor-pointer items-center"
      initial="hidden"
      whileHover="show"
    >
      {/* Icon */}
      <Icon size={16} />

      {/* Expanding label */}
      <motion.div
        variants={containerVariants}
        className="left-full ml-2 overflow-hidden whitespace-nowrap hover:underline"
      >
        {label?.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            variants={wordVariant}
            transition={{
              delay: wordIndex * 0.15,
              duration: 0.3,
            }}
            className="inline-block hover:underline"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={letter + letterIndex}
                initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.15 + letterIndex * 0.04,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SocialItem;

// "use client";
// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion, LayoutGroup } from "motion/react";
// import { cn } from "@/lib/utils";

// export const FlipWords = ({
//   words,
//   duration = 3000,
//   className,
// }: {
//   words: string[];
//   duration?: number;
//   className?: string;
// }) => {
//   const [currentWord, setCurrentWord] = useState(words[0]);
//   const [isAnimating, setIsAnimating] = useState<boolean>(false);

//   // thanks for the fix Julian - https://github.com/Julian-AT
//   const startAnimation = useCallback(() => {
//     const word = words[words.indexOf(currentWord) + 1] || words[0];
//     setCurrentWord(word);
//     setIsAnimating(true);
//   }, [currentWord, words]);

//   useEffect(() => {
//     if (!isAnimating)
//       setTimeout(() => {
//         startAnimation();
//       }, duration);
//   }, [isAnimating, duration, startAnimation]);

//   return (
//     <AnimatePresence
//       onExitComplete={() => {
//         setIsAnimating(false);
//       }}
//     >
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 10,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 100,
//           damping: 10,
//         }}
//         exit={{
//           opacity: 0,
//           y: -40,
//           x: 40,
//           filter: "blur(8px)",
//           scale: 2,
//           position: "absolute",
//         }}
//         className={cn(
//           "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
//           className
//         )}
//         key={currentWord}
//       >
//         {/* edit suggested by Sajal: https://x.com/DewanganSajal */}
//         {currentWord.split(" ").map((word, wordIndex) => (
//           <motion.span
//             key={word + wordIndex}
//             initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{
//               delay: wordIndex * 0.3,
//               duration: 0.3,
//             }}
//             className="inline-block whitespace-nowrap"
//           >
//             {word.split("").map((letter, letterIndex) => (
//               <motion.span
//                 key={word + letterIndex}
//                 initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 transition={{
//                   delay: wordIndex * 0.3 + letterIndex * 0.05,
//                   duration: 0.2,
//                 }}
//                 className="inline-block"
//               >
//                 {letter}
//               </motion.span>
//             ))}
//             <span className="inline-block">&nbsp;</span>
//           </motion.span>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// };
