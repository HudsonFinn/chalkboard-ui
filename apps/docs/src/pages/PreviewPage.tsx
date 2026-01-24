import {
  Button,
  Icon,
  Tag,
  Preview,
  PreviewHeader,
  PreviewDescription,
  PreviewContent,
  H1,
  P,
  CodeExample,
} from "chalkboard-ui";

export function PreviewPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Preview</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          Preview cards are used to showcase content and link to other pages or
          trigger actions. They feature a consistent card style with hover
          effects and an animated arrow icon.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="With Link (href)"
          code={`<Preview href="/components/button">
  <PreviewHeader title="Button" />
  <PreviewDescription>
    Buttons with variants, sizes, and icon support.
  </PreviewDescription>
  <PreviewContent>
    <Button size="sm">Click me</Button>
  </PreviewContent>
</Preview>`}
        >
          <Preview href="#example">
            <PreviewHeader title="Button" />
            <PreviewDescription>
              Buttons with variants, sizes, and icon support.
            </PreviewDescription>
            <PreviewContent>
              <Button size="sm">Click me</Button>
            </PreviewContent>
          </Preview>
        </CodeExample>

        <CodeExample
          title="With onClick Callback"
          code={`<Preview onClick={() => alert("Clicked!")}>
  <PreviewHeader title="Action Card" />
  <PreviewDescription>
    Click this card to trigger an action.
  </PreviewDescription>
  <PreviewContent>
    <Icon name="plus" />
  </PreviewContent>
</Preview>`}
        >
          <Preview onClick={() => alert("Clicked!")}>
            <PreviewHeader title="Action Card" />
            <PreviewDescription>
              Click this card to trigger an action.
            </PreviewDescription>
            <PreviewContent>
              <Icon name="plus" />
            </PreviewContent>
          </Preview>
        </CodeExample>

        <CodeExample
          title="Static Card (No Interaction)"
          code={`<Preview>
  <PreviewHeader title="Info Card" showArrow={false} />
  <PreviewDescription>
    This is a non-interactive preview card.
  </PreviewDescription>
  <PreviewContent>
    Static content here.
  </PreviewContent>
</Preview>`}
        >
          <Preview>
            <PreviewHeader title="Info Card" showArrow={false} />
            <PreviewDescription>
              This is a non-interactive preview card.
            </PreviewDescription>
            <PreviewContent>Static content here.</PreviewContent>
          </Preview>
        </CodeExample>

        <CodeExample
          title="With Custom Link Component"
          code={`import { Link } from "react-router-dom";

<Preview as={Link} href="/button">
  <PreviewHeader title="Button" />
  <PreviewDescription>
    Uses react-router for client-side navigation.
  </PreviewDescription>
</Preview>`}
        >
          <P className="text-sm text-chalkboard-foreground/70">
            Use the <code className="rounded bg-chalkboard-100 px-1">as</code>{" "}
            prop to pass a custom link component like react-router's Link. The{" "}
            <code className="rounded bg-chalkboard-100 px-1">href</code> value
            is passed as{" "}
            <code className="rounded bg-chalkboard-100 px-1">to</code> to the
            custom component.
          </P>
        </CodeExample>

        <CodeExample
          title="Grid Layout"
          code={`<div className="grid gap-4 md:grid-cols-2">
  <Preview href="/icons">
    <PreviewHeader title="Icons" />
    <PreviewDescription>
      23 SVG icons with size customization.
    </PreviewDescription>
    <PreviewContent className="flex gap-2">
      <Icon name="search" />
      <Icon name="star" />
      <Icon name="home" />
    </PreviewContent>
  </Preview>

  <Preview href="/tags">
    <PreviewHeader title="Tags" />
    <PreviewDescription>
      Labels for categorizing content.
    </PreviewDescription>
    <PreviewContent className="flex gap-2">
      <Tag>React</Tag>
      <Tag>TypeScript</Tag>
    </PreviewContent>
  </Preview>
</div>`}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Preview href="#icons">
              <PreviewHeader title="Icons" />
              <PreviewDescription>
                23 SVG icons with size customization.
              </PreviewDescription>
              <PreviewContent className="flex gap-2">
                <Icon name="search" />
                <Icon name="star" />
                <Icon name="home" />
              </PreviewContent>
            </Preview>

            <Preview href="#tags">
              <PreviewHeader title="Tags" />
              <PreviewDescription>
                Labels for categorizing content.
              </PreviewDescription>
              <PreviewContent className="flex gap-2">
                <Tag>React</Tag>
                <Tag>TypeScript</Tag>
              </PreviewContent>
            </Preview>
          </div>
        </CodeExample>

        <CodeExample
          title="Interactive Content"
          code={`<Preview href="/dropdown">
  <PreviewHeader title="Dropdown" />
  <PreviewDescription>
    Interactive content inside a preview.
  </PreviewDescription>
  <PreviewContent onClick={(e) => e.preventDefault()}>
    <Button size="sm">Interactive Button</Button>
  </PreviewContent>
</Preview>`}
        >
          <Preview href="#dropdown">
            <PreviewHeader title="Dropdown" />
            <PreviewDescription>
              Use onClick on PreviewContent to prevent navigation when
              interacting with nested elements.
            </PreviewDescription>
            <PreviewContent onClick={(e) => e.preventDefault()}>
              <Button size="sm">Interactive Button</Button>
            </PreviewContent>
          </Preview>
        </CodeExample>
      </div>
    </div>
  );
}
