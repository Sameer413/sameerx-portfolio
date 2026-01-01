"use client";
import React, { useState } from "react";
import { ThemeSwitcher } from "../common/theme-switcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";

const OPTIONS = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Experiences", href: "/experiences" },
  { label: "Projects", href: "/projects" },
];

const Header: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

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
    if (latest > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.div
      style={{ width, y, borderRadius }}
      className={cn(
        "bg-background/50 sticky top-0 z-50 mx-auto flex h-16 w-full items-center justify-between rounded-full px-4",
        scrolled && "shadow backdrop-blur-lg backdrop-saturate-150",
      )}
    >
      <div className="text-lg font-bold">SameerX.dev</div>

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
