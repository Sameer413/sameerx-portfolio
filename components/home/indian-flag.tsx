import React from "react";

type IndianFlagProps = {
  width?: number;
  height?: number;
  className?: string;
};

const IndianFlag: React.FC<IndianFlagProps> = ({
  width = 240,
  height = 160,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Indian Flag"
      className={className}
    >
      {/* Saffron */}
      <rect width="240" height="53.33" y="0" fill="#FF9933" />

      {/* White */}
      <rect width="240" height="53.33" y="53.33" fill="#FFFFFF" />

      {/* Green */}
      <rect width="240" height="53.33" y="106.66" fill="#138808" />

      {/* Ashoka Chakra */}
      <circle
        cx="120"
        cy="80"
        r="18"
        fill="none"
        stroke="#000080"
        strokeWidth="2"
      />

      {/* 24 spokes */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <line
            key={i}
            x1="120"
            y1="80"
            x2="120"
            y2="62"
            stroke="#000080"
            strokeWidth="1"
            transform={`rotate(${angle} 120 80)`}
          />
        );
      })}
    </svg>
  );
};

export default IndianFlag;
