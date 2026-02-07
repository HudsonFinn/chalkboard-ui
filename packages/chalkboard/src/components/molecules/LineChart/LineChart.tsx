import * as React from "react";
import { Grid } from "./Grid";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import { linearScale, calculateTicks } from "./utils/scales";
import { generateLinePath, generateSmoothPath, Point } from "./utils/path";

export interface LineChartDataPoint {
  /** Label for the x-axis */
  label: string;
  /** Numeric value for the y-axis */
  value: number;
}

export interface LineChartProps extends React.SVGAttributes<SVGSVGElement> {
  /** Data points to display */
  data: LineChartDataPoint[];
  /** Chart width in pixels */
  width?: number;
  /** Chart height in pixels */
  height?: number;
  /** Show background grid lines */
  showGrid?: boolean;
  /** Show data point circles */
  showPoints?: boolean;
  /** Use smooth curves instead of straight lines */
  smooth?: boolean;
  /** Show filled area under the line */
  showArea?: boolean;
  /** Line color (uses chalkboard-primary by default) */
  lineColor?: string;
  /** Format function for y-axis tick labels */
  formatYTick?: (value: number) => string;
  /** Number of y-axis ticks */
  yTickCount?: number;
  /** Show tooltip on hover */
  showTooltip?: boolean;
  /** Format function for tooltip value */
  formatTooltip?: (label: string, value: number) => string;
  /** Additional CSS classes */
  className?: string;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  width = 400,
  height = 300,
  showGrid = true,
  showPoints = true,
  smooth = false,
  showArea = false,
  lineColor,
  formatYTick = (v) => String(v),
  yTickCount = 5,
  showTooltip = true,
  formatTooltip = (label, value) => `${label}: ${value}`,
  className = "",
  ...props
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const padding = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Handle empty data
  if (data.length === 0) {
    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className={`w-full h-auto ${className}`}
        {...props}
      >
        <text
          x={width / 2}
          y={height / 2}
          textAnchor="middle"
          className="text-sm fill-chalkboard-foreground/50"
        >
          No data
        </text>
      </svg>
    );
  }

  // Calculate data bounds
  const values = data.map((d) => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  // Calculate y-axis ticks
  const yTicks = calculateTicks(
    Math.min(0, minValue),
    maxValue,
    yTickCount
  );
  const yMin = yTicks[0];
  const yMax = yTicks[yTicks.length - 1];

  // Calculate point positions
  const points: Point[] = data.map((d, i) => ({
    x:
      padding.left +
      (data.length === 1 ? chartWidth / 2 : (i / (data.length - 1)) * chartWidth),
    y: padding.top + linearScale(d.value, [yMax, yMin], [0, chartHeight]),
  }));

  // Calculate y-axis tick positions
  const yTickPositions = yTicks.map(
    (tick) => padding.top + linearScale(tick, [yMax, yMin], [0, chartHeight])
  );

  // Generate line path
  const linePath = smooth ? generateSmoothPath(points) : generateLinePath(points);

  // Generate area path (closes the line path)
  const areaPath = showArea
    ? `${linePath} L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`
    : "";

  // Chart bounds for grid
  const bounds = {
    left: padding.left,
    right: width - padding.right,
    top: padding.top,
    bottom: padding.top + chartHeight,
  };

  // Use CSS variable or direct color
  const strokeColor = lineColor || "currentColor";
  const colorClass = lineColor ? "" : "text-chalkboard-primary";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label="Line chart"
      {...props}
    >
      {/* Grid */}
      {showGrid && (
        <Grid
          yLines={yTickPositions}
          xLines={points.map((p) => p.x)}
          bounds={bounds}
        />
      )}

      {/* Y-Axis */}
      <YAxis
        ticks={yTicks}
        positions={yTickPositions}
        x={padding.left}
        y1={padding.top}
        y2={padding.top + chartHeight}
        formatTick={formatYTick}
      />

      {/* X-Axis */}
      <XAxis
        labels={data.map((d) => d.label)}
        positions={points.map((p) => p.x)}
        y={padding.top + chartHeight}
        x1={padding.left}
        x2={width - padding.right}
      />

      {/* Area fill */}
      {showArea && (
        <path
          d={areaPath}
          className={`${colorClass} opacity-10`}
          fill={strokeColor}
        />
      )}

      {/* Line */}
      <path
        d={linePath}
        fill="none"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={colorClass}
      />

      {/* Data points */}
      {showPoints &&
        points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={hoveredIndex === i ? 6 : 4}
            className={`fill-chalkboard-background stroke-2 ${colorClass} transition-all duration-150`}
            stroke={strokeColor}
          />
        ))}

      {/* Hover targets (larger invisible circles for easier interaction) */}
      {showTooltip &&
        points.map((p, i) => (
          <circle
            key={`hover-${i}`}
            cx={p.x}
            cy={p.y}
            r={12}
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}

      {/* Tooltip */}
      {showTooltip && hoveredIndex !== null && (
        <g>
          {/* Tooltip background */}
          <rect
            x={points[hoveredIndex].x - 30}
            y={points[hoveredIndex].y - 24}
            width={60}
            height={16}
            rx={3}
            className="fill-chalkboard-foreground"
          />
          {/* Tooltip arrow */}
          <polygon
            points={`${points[hoveredIndex].x - 4},${points[hoveredIndex].y - 8} ${points[hoveredIndex].x + 4},${points[hoveredIndex].y - 8} ${points[hoveredIndex].x},${points[hoveredIndex].y - 3}`}
            className="fill-chalkboard-foreground"
          />
          {/* Tooltip text */}
          <text
            x={points[hoveredIndex].x}
            y={points[hoveredIndex].y - 13}
            textAnchor="middle"
            className="text-[8px] fill-chalkboard-background font-medium"
          >
            {formatTooltip(data[hoveredIndex].label, data[hoveredIndex].value)}
          </text>
        </g>
      )}
    </svg>
  );
};

LineChart.displayName = "LineChart";
