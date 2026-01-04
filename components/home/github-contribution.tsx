"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";

const GithubContribution: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ critical

  return (
    <div className="border-y p-4">
      <div className="w-full overflow-x-auto">
        <GitHubCalendar
          username="sameer413"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          colorScheme={theme === "dark" ? "dark" : "light"}
        />
      </div>
    </div>
  );
};

export default GithubContribution;
