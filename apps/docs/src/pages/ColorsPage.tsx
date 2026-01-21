import { H1, H2, H3, P, Code } from "chalkboard-ui";

interface ColorSwatchProps {
  name: string;
  value: string;
  cssVar: string;
  description: string;
}

function ColorSwatch({ name, value, cssVar, description }: ColorSwatchProps) {
  return (
    <div className="rounded-lg border border-chalkboard-secondary bg-white p-4 shadow">
      <div className="flex items-start gap-4">
        <div
          className="h-20 w-20 flex-shrink-0 rounded-lg border border-chalkboard-secondary"
          style={{ backgroundColor: value }}
        />
        <div className="flex-1">
          <H3 className="!text-base !md:text-base">{name}</H3>
          <div className="mt-1 flex flex-wrap gap-2">
            <Code>{value}</Code>
            <Code>{cssVar}</Code>
          </div>
          <P className="mt-2 text-sm text-chalkboard-foreground/70">
            {description}
          </P>
        </div>
      </div>
    </div>
  );
}

const colors: ColorSwatchProps[] = [
  {
    name: "Background",
    value: "#FFFAF6",
    cssVar: "chalkboard-background",
    description:
      "The primary background color for pages and large surfaces. A warm off-white that provides a soft, inviting canvas for content.",
  },
  {
    name: "Foreground",
    value: "#0d1321",
    cssVar: "chalkboard-foreground",
    description:
      "The primary text color used for headings, body text, and high-contrast content. A deep navy that ensures excellent readability.",
  },
  {
    name: "Primary",
    value: "#66717e",
    cssVar: "chalkboard-primary",
    description:
      "The main accent color used for primary buttons, links, active states, and key interactive elements. A sophisticated slate gray-blue.",
  },
  {
    name: "Secondary",
    value: "#8d818c",
    cssVar: "chalkboard-secondary",
    description:
      "Used for secondary buttons, borders, dividers, and subtle UI elements. A muted mauve that complements the primary color while providing softer emphasis.",
  },
  {
    name: "Success",
    value: "#63821B",
    cssVar: "chalkboard-success",
    description:
      "Used for success messages, confirmations, and positive feedback. A rich olive green that conveys accomplishment and completion.",
  },
  {
    name: "Error",
    value: "#F76350",
    cssVar: "chalkboard-error",
    description:
      "Used for error states, destructive actions, and critical alerts. A vibrant coral red that demands attention for important warnings.",
  },
  {
    name: "Info",
    value: "#9DCBBA",
    cssVar: "chalkboard-info",
    description:
      "Used for informational messages, tips, and neutral notifications. A soft sage green that communicates helpful context without urgency.",
  },
  {
    name: "Warning",
    value: "#FDF5BF",
    cssVar: "chalkboard-warning",
    description:
      "Used for warning messages and caution states. A soft pale yellow that alerts users to potential issues without causing alarm.",
  },
];

export function ColorsPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Colors</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          The Chalkboard design system uses a carefully curated palette of eight
          core colors. Each color serves a specific purpose and should be used
          consistently throughout your application.
        </P>
      </div>

      <div className="space-y-8">
        <section>
          <H2 className="mb-4">Color Palette</H2>
          <div className="space-y-4">
            {colors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </section>

        <section>
          <H2 className="mb-4">Usage</H2>
          <div className="rounded-lg border border-chalkboard-secondary bg-white p-4 shadow">
            <P className="mb-4">
              Colors can be used with Tailwind CSS utility classes using the{" "}
              <Code>chalkboard-</Code> prefix:
            </P>
            <div className="space-y-2 text-sm">
              <P>
                <Code>bg-chalkboard-background</Code> - Background color
              </P>
              <P>
                <Code>text-chalkboard-foreground</Code> - Text color
              </P>
              <P>
                <Code>bg-chalkboard-primary</Code> - Primary background
              </P>
              <P>
                <Code>border-chalkboard-secondary</Code> - Border color
              </P>
              <P>
                <Code>text-chalkboard-success</Code> - Success text
              </P>
              <P>
                <Code>bg-chalkboard-error</Code> - Error/danger background
              </P>
              <P>
                <Code>bg-chalkboard-info</Code> - Info background
              </P>
              <P>
                <Code>bg-chalkboard-warning</Code> - Warning background
              </P>
            </div>
          </div>
        </section>

        <section>
          <H2 className="mb-4">Opacity Variants</H2>
          <div className="rounded-lg border border-chalkboard-secondary bg-white p-4 shadow">
            <P className="mb-4">
              Colors support Tailwind's opacity modifier for subtle variations:
            </P>
            <div className="flex flex-wrap gap-2">
              {[100, 80, 60, 40, 20, 10].map((opacity) => (
                <div key={opacity} className="text-center">
                  <div
                    className="mb-1 h-12 w-12 rounded-lg border border-chalkboard-secondary"
                    style={{
                      backgroundColor: `rgb(13 19 33 / ${opacity / 100})`,
                    }}
                  />
                  <Code className="text-xs">{opacity}%</Code>
                </div>
              ))}
            </div>
            <P className="mt-4 text-sm text-chalkboard-foreground/70">
              Example: <Code>text-chalkboard-foreground/60</Code> for 60%
              opacity text.
            </P>
          </div>
        </section>
      </div>
    </div>
  );
}
