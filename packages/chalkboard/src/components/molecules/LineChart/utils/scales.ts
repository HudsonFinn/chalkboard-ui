/**
 * Linear scale: maps a value from one range to another
 * @param value - The value to scale
 * @param domain - Input range [min, max]
 * @param range - Output range [min, max]
 */
export const linearScale = (
  value: number,
  domain: [number, number],
  range: [number, number]
): number => {
  const [d0, d1] = domain;
  const [r0, r1] = range;

  // Handle edge case where domain is a single point
  if (d1 === d0) return r0;

  return r0 + ((value - d0) / (d1 - d0)) * (r1 - r0);
};

/**
 * Calculate nice tick values for an axis
 * @param min - Minimum data value
 * @param max - Maximum data value
 * @param tickCount - Desired number of ticks
 */
export const calculateTicks = (
  min: number,
  max: number,
  tickCount: number = 5
): number[] => {
  const range = max - min;
  if (range === 0) return [min];

  // Calculate a "nice" step size
  const roughStep = range / (tickCount - 1);
  const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
  const residual = roughStep / magnitude;

  let niceStep: number;
  if (residual <= 1.5) niceStep = magnitude;
  else if (residual <= 3) niceStep = 2 * magnitude;
  else if (residual <= 7) niceStep = 5 * magnitude;
  else niceStep = 10 * magnitude;

  const niceMin = Math.floor(min / niceStep) * niceStep;
  const niceMax = Math.ceil(max / niceStep) * niceStep;

  const ticks: number[] = [];
  for (let tick = niceMin; tick <= niceMax; tick += niceStep) {
    ticks.push(Number(tick.toPrecision(12)));
  }

  return ticks;
};
