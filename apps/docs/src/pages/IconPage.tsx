import { Icon, IconName, H1, P, CodeExample } from "chalkboard-ui";

const allIcons: IconName[] = [
  "search",
  "menu",
  "close",
  "chevron-down",
  "chevron-right",
  "arrow-left",
  "arrow-right",
  "external-link",
  "edit",
  "trash",
  "copy",
  "settings",
  "plus",
  "minus",
  "info",
  "warning",
  "error",
  "check",
  "mail",
  "link",
  "user",
  "home",
  "star",
];

export function IconPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Icon</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          A collection of 23 SVG icons for common UI actions. Icons support
          different sizes and can be styled with custom colors.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="All Icons"
          code={`<Icon name="search" />
<Icon name="settings" />
<Icon name="star" />
// ... and 20 more`}
        >
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8">
            {allIcons.map((iconName) => (
              <div
                key={iconName}
                className="flex flex-col items-center gap-1"
                title={iconName}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-chalkboard-foreground">
                  <Icon name={iconName} />
                </div>
                <span className="w-full truncate text-center text-xs text-chalkboard-foreground/60">
                  {iconName}
                </span>
              </div>
            ))}
          </div>
        </CodeExample>

        <CodeExample
          title="Sizes"
          code={`<Icon name="star" size="sm" />  // 16px
<Icon name="star" size="md" />  // 20px (default)
<Icon name="star" size="lg" />  // 24px`}
        >
          <div className="flex items-end gap-6">
            <div className="flex flex-col items-center gap-1">
              <Icon name="star" size="sm" />
              <span className="text-xs text-chalkboard-foreground/60">
                sm (16px)
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Icon name="star" size="md" />
              <span className="text-xs text-chalkboard-foreground/60">
                md (20px)
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Icon name="star" size="lg" />
              <span className="text-xs text-chalkboard-foreground/60">
                lg (24px)
              </span>
            </div>
          </div>
        </CodeExample>

        <CodeExample
          title="Custom Colors"
          code={`<Icon name="info" className="text-blue-500" />
<Icon name="check" className="text-green-500" />
<Icon name="warning" className="text-yellow-500" />
<Icon name="error" className="text-red-500" />`}
        >
          <div className="flex items-center gap-4">
            <Icon name="info" className="text-blue-500" />
            <Icon name="check" className="text-green-500" />
            <Icon name="warning" className="text-yellow-500" />
            <Icon name="error" className="text-red-500" />
          </div>
        </CodeExample>

        <CodeExample
          title="Usage in Context"
          code={`// Icons work great with text
<span className="flex items-center gap-2">
  <Icon name="mail" />
  contact@example.com
</span>

// Or as visual indicators
<span className="flex items-center gap-2">
  <Icon name="check" className="text-green-500" />
  Task completed
</span>`}
        >
          <div className="space-y-3">
            <span className="flex items-center gap-2">
              <Icon name="mail" />
              contact@example.com
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check" className="text-green-500" />
              Task completed
            </span>
            <span className="flex items-center gap-2">
              <Icon name="warning" className="text-yellow-500" />
              Pending review
            </span>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
