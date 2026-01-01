"use client";

import React, { useEffect, useState } from "react";

type Props = {
  texts: string[];
  duration?: number;
};

const RollingText: React.FC<Props> = ({ texts, duration = 3000 }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return <div>{texts[index]}</div>;
};

export default RollingText;
