import { Input, H1, P, CodeExample } from "chalkboard-ui";

export function InputPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Input</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          A text input component for collecting user input. Supports placeholder
          text, default values, and highlights when focused.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="Basic Usage"
          code={`<Input placeholder="Enter your name" />
<Input placeholder="Enter your email" type="email" />`}
        >
          <div className="space-y-4 max-w-md">
            <Input placeholder="Enter your name" />
            <Input placeholder="Enter your email" type="email" />
          </div>
        </CodeExample>

        <CodeExample
          title="With Default Value"
          code={`<Input defaultValue="John Doe" />
<Input defaultValue="john@example.com" type="email" />`}
        >
          <div className="space-y-4 max-w-md">
            <Input defaultValue="John Doe" />
            <Input defaultValue="john@example.com" type="email" />
          </div>
        </CodeExample>

        <CodeExample
          title="Sizes"
          code={`<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input (default)" />
<Input size="lg" placeholder="Large input" />`}
        >
          <div className="space-y-4 max-w-md">
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input (default)" />
            <Input size="lg" placeholder="Large input" />
          </div>
        </CodeExample>

        <CodeExample
          title="Disabled State"
          code={`<Input placeholder="Disabled input" disabled />
<Input defaultValue="Disabled with value" disabled />`}
        >
          <div className="space-y-4 max-w-md">
            <Input placeholder="Disabled input" disabled />
            <Input defaultValue="Disabled with value" disabled />
          </div>
        </CodeExample>

        <CodeExample
          title="Input Types"
          code={`<Input type="text" placeholder="Text input" />
<Input type="password" placeholder="Password input" />
<Input type="number" placeholder="Number input" />
<Input type="search" placeholder="Search input" />`}
        >
          <div className="space-y-4 max-w-md">
            <Input type="text" placeholder="Text input" />
            <Input type="password" placeholder="Password input" />
            <Input type="number" placeholder="Number input" />
            <Input type="search" placeholder="Search input" />
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
