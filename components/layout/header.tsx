"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const touchStartPos = useRef<{ x: number; y: number } | null>(null);
  const touchStartTime = useRef<number | null>(null);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const isHoldingRef = useRef<boolean>(false);

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
    setScrolled((prev) => (latest > 10 ? true : prev));
    setHeaderIcon((prev) => {
      if (latest > 170) return true;
      if (latest < 100) return false;
      return prev; // 🔹 keeps previous value between 100–170
    });
  });

  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    touchStartTime.current = Date.now();
    isHoldingRef.current = false;

    // Start long press timer (400ms)
    longPressTimer.current = setTimeout(() => {
      isHoldingRef.current = true;
    }, 400);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartPos.current || !isHoldingRef.current) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartPos.current.x;
    const deltaY = touch.clientY - touchStartPos.current.y;

    // Check if swiping down (positive deltaY) with minimal horizontal movement
    if (deltaY > 30 && Math.abs(deltaX) < 50) {
      setIsMobileMenuOpen(true);
      // Reset state
      touchStartPos.current = null;
      isHoldingRef.current = false;
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
        longPressTimer.current = null;
      }
    }
  };

  const handleTouchEnd = () => {
    // Clear long press timer if touch ends before hold duration
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    touchStartPos.current = null;
    isHoldingRef.current = false;
  };

  return (
    <>
      <motion.div
        style={{ width, y, borderRadius }}
        className={cn(
          "sticky top-0 z-50 mx-auto flex h-16 w-full items-center justify-between rounded-full px-4",
          scrolled && "shadow backdrop-blur-lg backdrop-saturate-150",
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
                  pathname === href &&
                    "text-secondary-foreground font-semibold",
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

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 z-[70] rounded-b-3xl bg-background shadow-lg md:hidden"
            >
              <div className="flex flex-col px-6 py-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="font-geist-mono text-xl font-semibold">
                    Navigation
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-full p-2 text-secondary-foreground/80 hover:bg-accent"
                    aria-label="Close menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <nav className="flex flex-col gap-2">
                  {OPTIONS.map(({ label, href }, idx: number) => (
                    <Link
                      key={idx}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        pathname === href
                          ? "bg-neutral-200 dark:bg-neutral-800 text-secondary-foreground font-semibold"
                          : "text-secondary-foreground/80 hover:bg-neutral-100 dark:hover:bg-neutral-800/50",
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
