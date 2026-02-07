import { LineChart, H1, P, CodeExample } from "chalkboard-ui";

const basicData = [
  { label: "Jan", value: 120 },
  { label: "Feb", value: 180 },
  { label: "Mar", value: 90 },
  { label: "Apr", value: 240 },
  { label: "May", value: 200 },
  { label: "Jun", value: 280 },
];

const stockData = [
  { label: "Mon", value: 142.5 },
  { label: "Tue", value: 145.2 },
  { label: "Wed", value: 143.8 },
  { label: "Thu", value: 148.9 },
  { label: "Fri", value: 151.2 },
];

const temperatureData = [
  { label: "6am", value: 12 },
  { label: "9am", value: 18 },
  { label: "12pm", value: 24 },
  { label: "3pm", value: 26 },
  { label: "6pm", value: 22 },
  { label: "9pm", value: 16 },
];

const growthData = [
  { label: "Q1", value: 1200 },
  { label: "Q2", value: 1850 },
  { label: "Q3", value: 2400 },
  { label: "Q4", value: 3100 },
];

export function LineChartPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>LineChart</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          A custom SVG-based line chart component for visualizing trends and data over time.
          Built without external charting libraries for full control over styling and behavior.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="Basic Usage"
          code={`const data = [
  { label: "Jan", value: 120 },
  { label: "Feb", value: 180 },
  { label: "Mar", value: 90 },
  { label: "Apr", value: 240 },
  { label: "May", value: 200 },
  { label: "Jun", value: 280 },
];

<LineChart data={data} />`}
        >
          <LineChart data={basicData} height={200} />
        </CodeExample>

        <CodeExample
          title="Smooth Curves"
          code={`<LineChart data={data} smooth />`}
        >
          <LineChart data={basicData} smooth height={200} />
        </CodeExample>

        <CodeExample
          title="With Area Fill"
          code={`<LineChart data={data} showArea smooth />`}
        >
          <LineChart data={basicData} showArea smooth height={200} />
        </CodeExample>

        <CodeExample
          title="Without Grid"
          code={`<LineChart data={data} showGrid={false} />`}
        >
          <LineChart data={basicData} showGrid={false} height={200} />
        </CodeExample>

        <CodeExample
          title="Without Points"
          code={`<LineChart data={data} showPoints={false} smooth />`}
        >
          <LineChart data={basicData} showPoints={false} smooth height={200} />
        </CodeExample>

        <CodeExample
          title="Custom Y-Axis Formatting"
          code={`<LineChart
  data={stockData}
  formatYTick={(v) => \`$\${v.toFixed(2)}\`}
  smooth
/>`}
        >
          <LineChart
            data={stockData}
            formatYTick={(v: number) => `$${v.toFixed(2)}`}
            smooth
            height={200}
          />
        </CodeExample>

        <CodeExample
          title="Custom Tooltip"
          code={`<LineChart
  data={stockData}
  formatTooltip={(label, value) => \`\${label}: $\${value}\`}
  smooth
/>`}
        >
          <LineChart
            data={stockData}
            formatTooltip={(label: string, value: number) => `${label}: $${value}`}
            smooth
            height={200}
          />
        </CodeExample>

        <CodeExample
          title="Temperature Data"
          code={`<LineChart
  data={temperatureData}
  formatYTick={(v) => \`\${v}\u00B0C\`}
  smooth
  showArea
/>`}
        >
          <LineChart
            data={temperatureData}
            formatYTick={(v: number) => `${v}\u00B0C`}
            smooth
            showArea
            height={200}
          />
        </CodeExample>

        <CodeExample
          title="Growth Metrics"
          code={`<LineChart
  data={growthData}
  formatYTick={(v) => v >= 1000 ? \`\${(v / 1000).toFixed(1)}k\` : String(v)}
  showArea
  smooth
/>`}
        >
          <LineChart
            data={growthData}
            formatYTick={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(v)}
            showArea
            smooth
            height={200}
          />
        </CodeExample>

        <CodeExample
          title="Without Tooltip"
          code={`<LineChart data={data} showTooltip={false} smooth />`}
        >
          <LineChart data={basicData} showTooltip={false} smooth height={200} />
        </CodeExample>

        <CodeExample
          title="Minimal Style"
          code={`<LineChart
  data={data}
  showGrid={false}
  showPoints={false}
  smooth
/>`}
        >
          <LineChart
            data={basicData}
            showGrid={false}
            showPoints={false}
            smooth
            height={200}
          />
        </CodeExample>

        <CodeExample
          title="Empty State"
          code={`<LineChart data={[]} />`}
        >
          <LineChart data={[]} height={200} />
        </CodeExample>
      </div>
    </div>
  );
}
