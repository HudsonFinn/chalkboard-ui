import { Button, H1, P, CodeExample } from "chalkboard-ui";

export function ButtonPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Button</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          Buttons trigger actions. They come in different variants and sizes,
          and can include icons.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="Variants"
          code={`<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </CodeExample>

        <CodeExample
          title="Sizes"
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </CodeExample>

        <CodeExample
          title="With Icons"
          code={`<Button leftIcon="search">Search</Button>
<Button rightIcon="arrow-right">Next</Button>
<Button leftIcon="plus" rightIcon="chevron-down">Add Item</Button>
<Button variant="outline" leftIcon="settings">Settings</Button>
<Button variant="secondary" leftIcon="mail">Contact</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button leftIcon="search">Search</Button>
            <Button rightIcon="arrow-right">Next</Button>
            <Button leftIcon="plus" rightIcon="chevron-down">
              Add Item
            </Button>
            <Button variant="outline" leftIcon="settings">
              Settings
            </Button>
            <Button variant="secondary" leftIcon="mail">
              Contact
            </Button>
          </div>
        </CodeExample>

        <CodeExample
          title="Icon-Only Buttons"
          code={`<Button icon="menu" aria-label="Menu" />
<Button icon="close" variant="ghost" aria-label="Close" />
<Button icon="settings" variant="outline" aria-label="Settings" />
<Button icon="plus" size="sm" aria-label="Add" />
<Button icon="search" size="lg" aria-label="Search" />`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button icon="menu" aria-label="Menu" />
            <Button icon="close" variant="ghost" aria-label="Close" />
            <Button icon="settings" variant="outline" aria-label="Settings" />
            <Button icon="plus" size="sm" aria-label="Add" />
            <Button icon="search" size="lg" aria-label="Search" />
          </div>
        </CodeExample>

        <CodeExample
          title="Combined Variants and Sizes"
          code={`<Button variant="secondary" size="sm" leftIcon="edit">
  Edit
</Button>
<Button variant="outline" size="lg" rightIcon="external-link">
  Open
</Button>`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="sm" leftIcon="edit">
              Edit
            </Button>
            <Button variant="outline" size="lg" rightIcon="external-link">
              Open
            </Button>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
