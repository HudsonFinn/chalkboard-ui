import * as React from "react";

export interface GridProps {
  /** X positions for vertical grid lines */
  xLines?: number[];
  /** Y positions for horizontal grid lines */
  yLines?: number[];
  /** Chart area bounds */
  bounds: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  /** Additional CSS classes */
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  xLines = [],
  yLines = [],
  bounds,
  className = "",
}) => {
  return (
    <g className={`text-chalkboard-foreground/10 ${className}`}>
      {/* Horizontal grid lines */}
      {yLines.map((y, i) => (
        <line
          key={`h-${i}`}
          x1={bounds.left}
          y1={y}
          x2={bounds.right}
          y2={y}
          stroke="currentColor"
          strokeDasharray="4 4"
        />
      ))}
      {/* Vertical grid lines */}
      {xLines.map((x, i) => (
        <line
          key={`v-${i}`}
          x1={x}
          y1={bounds.top}
          x2={x}
          y2={bounds.bottom}
          stroke="currentColor"
          strokeDasharray="4 4"
        />
      ))}
    </g>
  );
};

Grid.displayName = "Grid";
