import * as React from "react";

export interface YAxisProps {
  /** Tick values to display */
  ticks: number[];
  /** Y positions for each tick */
  positions: number[];
  /** X position of the axis line */
  x: number;
  /** Top bound of the axis */
  y1: number;
  /** Bottom bound of the axis */
  y2: number;
  /** Format function for tick labels */
  formatTick?: (value: number) => string;
  /** Additional CSS classes */
  className?: string;
}

export const YAxis: React.FC<YAxisProps> = ({
  ticks,
  positions,
  x,
  y1,
  y2,
  formatTick = (v) => String(v),
  className = "",
}) => {
  return (
    <g className={className}>
      {/* Axis line */}
      <line
        x1={x}
        y1={y1}
        x2={x}
        y2={y2}
        stroke="currentColor"
        className="text-chalkboard-foreground/20"
      />
      {/* Tick marks and labels */}
      {ticks.map((tick, i) => (
        <g key={i}>
          <line
            x1={x - 4}
            y1={positions[i]}
            x2={x}
            y2={positions[i]}
            stroke="currentColor"
            className="text-chalkboard-foreground/20"
          />
          <text
            x={x - 8}
            y={positions[i]}
            textAnchor="end"
            dominantBaseline="middle"
            className="text-[10px] fill-chalkboard-foreground/70"
          >
            {formatTick(tick)}
          </text>
        </g>
      ))}
    </g>
  );
};

YAxis.displayName = "YAxis";
