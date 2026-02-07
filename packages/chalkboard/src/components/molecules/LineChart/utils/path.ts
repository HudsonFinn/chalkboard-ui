export interface Point {
  x: number;
  y: number;
}

/**
 * Generate a straight-line SVG path from points
 */
export const generateLinePath = (points: Point[]): string => {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
};

/**
 * Generate a smooth SVG path using Catmull-Rom spline interpolation
 * converted to cubic bezier curves
 */
export const generateSmoothPath = (
  points: Point[],
  tension: number = 0.5
): string => {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  const getControlPoints = (
    p0: Point,
    p1: Point,
    p2: Point,
    t: number
  ): { cp1: Point; cp2: Point } => {
    const d01 = Math.sqrt(
      Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2)
    );
    const d12 = Math.sqrt(
      Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
    );

    const fa = (t * d01) / (d01 + d12);
    const fb = t - fa;

    const cp1: Point = {
      x: p1.x - fa * (p2.x - p0.x),
      y: p1.y - fa * (p2.y - p0.y),
    };
    const cp2: Point = {
      x: p1.x + fb * (p2.x - p0.x),
      y: p1.y + fb * (p2.y - p0.y),
    };

    return { cp1, cp2 };
  };

  let path = `M ${points[0].x} ${points[0].y}`;

  // Generate control points for each segment
  const controlPoints: { cp1: Point; cp2: Point }[] = [];

  for (let i = 0; i < points.length; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[Math.min(points.length - 1, i + 1)];

    controlPoints.push(getControlPoints(p0, p1, p2, tension));
  }

  // Build the path
  for (let i = 1; i < points.length; i++) {
    const cp1 = controlPoints[i - 1].cp2;
    const cp2 = controlPoints[i].cp1;
    const end = points[i];

    path += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${end.x} ${end.y}`;
  }

  return path;
};
