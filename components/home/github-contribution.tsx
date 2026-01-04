"use client";

import React from "react";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";

const GithubContribution: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="border-y p-4">
      <GitHubCalendar
        username="sameer413"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        colorScheme={theme.theme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default GithubContribution;
