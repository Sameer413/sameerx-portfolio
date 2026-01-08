"use client";
import React, { useState } from "react";
import { ThemeSwitcher } from "../common/theme-switcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";

const OPTIONS = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Experiences", href: "/experiences" },
  { label: "Projects", href: "/projects" },
];

const Header: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [headerIcon, setHeaderIcon] = useState<boolean>(false);

  const pathname = usePathname();
  const { scrollY } = useScroll();

  const width = useTransform(scrollY, [0, 80], ["100%", "90%"], {
    clamp: true,
  });
  const y = useTransform(scrollY, [0, 80], [0, 10], {
    clamp: true,
  });
  const borderRadius = useTransform(scrollY, [0, 80], [0, 50], {
    clamp: true,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    // if (latest > 10) {
    //   setScrolled(true);
    // } else {
    //   setScrolled(false);
    // }
    // if (latest > 170) {
    //   setHeaderIcon(true);
    // } else {
    //   setHeaderIcon(false);
    // }
    setScrolled((prev) => (latest > 10 ? true : prev));
    setHeaderIcon((prev) => {
      if (latest > 170) return true;
      if (latest < 100) return false;
      return prev; // 🔹 keeps previous value between 100–170
    });
  });

  // const showIcon = useTransform(scrollY, (v) => v > 170);

  return (
    <motion.div
      style={{ width, y, borderRadius }}
      className={cn(
        "sticky top-0 z-50 mx-auto flex h-16 w-full items-center justify-between rounded-full px-4",
        scrolled && "shadow backdrop-blur-lg backdrop-saturate-150",
      )}
    >
      <div className="flex items-center gap-2">
        <AnimatePresence mode="wait">
          {headerIcon ? (
            <div className="h-8 w-8">
              <motion.img
                initial={{ opacity: 0, x: -15, rotate: -45 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -15, rotate: -25 }}
                transition={{ ease: "easeOut", duration: 0.25 }}
                src={
                  "https://pbs.twimg.com/profile_images/2004574016246620160/wKaT51XI_400x400.jpg"
                }
                style={{ opacity: showIcon }}
                width={50}
                height={50}
                className="h-full w-full rounded-full object-cover select-none"
                // className="ring-ring ring-offset-ring h-full w-full rounded-full object-cover ring-1 ring-offset-1 select-none"
              />
            </div>
          ) : null}
        </AnimatePresence>
        <div className="font-geist-mono text-lg font-semibold transition-all ease-linear">
          SameerX
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <div className="hidden items-center md:flex">
          {OPTIONS.map(({ label, href }, idx: number) => (
            <Link
              key={idx}
              href={href}
              className={cn(
                "text-secondary-foreground/80 relative px-2 py-1 text-sm font-medium",
                pathname === href && "text-secondary-foreground font-semibold",
              )}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 rounded-sm bg-neutral-200 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-50">{label}</span>
            </Link>
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </motion.div>
  );
};

export default Header;
