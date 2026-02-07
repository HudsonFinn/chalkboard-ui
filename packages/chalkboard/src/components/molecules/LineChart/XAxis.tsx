import * as React from "react";

export interface XAxisProps {
  /** Labels to display */
  labels: string[];
  /** X positions for each label */
  positions: number[];
  /** Y position of the axis line */
  y: number;
  /** Left bound of the axis */
  x1: number;
  /** Right bound of the axis */
  x2: number;
  /** Additional CSS classes */
  className?: string;
}

export const XAxis: React.FC<XAxisProps> = ({
  labels,
  positions,
  y,
  x1,
  x2,
  className = "",
}) => {
  return (
    <g className={className}>
      {/* Axis line */}
      <line
        x1={x1}
        y1={y}
        x2={x2}
        y2={y}
        stroke="currentColor"
        className="text-chalkboard-foreground/20"
      />
      {/* Labels */}
      {labels.map((label, i) => (
        <text
          key={i}
          x={positions[i]}
          y={y + 20}
          textAnchor="middle"
          className="text-[10px] fill-chalkboard-foreground/70"
        >
          {label}
        </text>
      ))}
    </g>
  );
};

XAxis.displayName = "XAxis";
