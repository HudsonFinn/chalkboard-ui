import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Lead,
  Small,
  Blockquote,
  Code,
  Pre,
} from "chalkboard-ui";
import { CodeExample } from "../components/CodeExample";

export function TypographyPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Typography</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          A complete set of typography components for headings, paragraphs,
          quotes, and code blocks. All components are styled consistently with
          the Chalkboard design system.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="Headings"
          code={`<H1>Heading 1</H1>
<H2>Heading 2</H2>
<H3>Heading 3</H3>
<H4>Heading 4</H4>
<H5>Heading 5</H5>
<H6>Heading 6</H6>`}
        >
          <div className="space-y-4">
            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <H4>Heading 4</H4>
            <H5>Heading 5</H5>
            <H6>Heading 6</H6>
          </div>
        </CodeExample>

        <CodeExample
          title="Body Text"
          code={`<Lead>
  This is a lead paragraph. It's designed for introductory
  text that should stand out from regular body copy.
</Lead>

<P>
  This is a standard paragraph with relaxed line-height
  for comfortable reading.
</P>

<Small>
  This is small text, useful for captions, footnotes,
  or fine print.
</Small>`}
        >
          <div className="space-y-4">
            <Lead>
              This is a lead paragraph. It's designed for introductory text that
              should stand out from regular body copy.
            </Lead>
            <P>
              This is a standard paragraph. It uses relaxed line-height for
              comfortable reading. Multiple paragraphs can be used to break up
              longer content into digestible sections.
            </P>
            <P>
              <Small>
                This is small text, useful for captions, footnotes, or fine
                print.
              </Small>
            </P>
          </div>
        </CodeExample>

        <CodeExample
          title="Inline Code"
          code={`<P>
  You can include <Code>inline code</Code> within paragraphs
  to highlight technical terms or code snippets.
</P>`}
        >
          <P>
            You can include <Code>inline code</Code> within paragraphs to
            highlight technical terms like <Code>useState</Code>,{" "}
            <Code>className</Code>, or file names like{" "}
            <Code>package.json</Code>.
          </P>
        </CodeExample>

        <CodeExample
          title="Blockquote"
          code={`<Blockquote>
  "Design is not just what it looks like and feels like.
  Design is how it works." — Steve Jobs
</Blockquote>`}
        >
          <Blockquote>
            "Design is not just what it looks like and feels like. Design is how
            it works." — Steve Jobs
          </Blockquote>
        </CodeExample>

        <CodeExample
          title="Code Block"
          code={`<Pre>{\`function greet(name: string) {
  return \\\`Hello, \\\${name}!\\\`;
}

console.log(greet("World"));\`}</Pre>`}
        >
          <Pre>{`function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`}</Pre>
        </CodeExample>

        <CodeExample
          title="Combined Example"
          code={`<H2>Getting Started</H2>
<Lead>
  Follow these steps to install and use the component.
</Lead>
<P>
  First, install the package using <Code>bun add chalkboard-ui</Code>.
</P>
<Pre>{\`import { Button } from "chalkboard-ui";

function App() {
  return <Button>Click me</Button>;
}\`}</Pre>
<Small>Note: React 18+ is required.</Small>`}
        >
          <div className="space-y-4">
            <H2>Getting Started</H2>
            <Lead>Follow these steps to install and use the component.</Lead>
            <P>
              First, install the package using <Code>bun add chalkboard-ui</Code>
              .
            </P>
            <Pre>{`import { Button } from "chalkboard-ui";

function App() {
  return <Button>Click me</Button>;
}`}</Pre>
            <P>
              <Small>Note: React 18+ is required.</Small>
            </P>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
