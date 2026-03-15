import { List, ListItem, H1, P, CodeExample } from "chalkboard-ui";

export function ListPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>List</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          Styled list components for displaying items in unordered or ordered
          format. Consistent with the Typography atoms.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="Unordered List"
          code={`<List>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>`}
        >
          <List>
            <ListItem>First item</ListItem>
            <ListItem>Second item</ListItem>
            <ListItem>Third item</ListItem>
          </List>
        </CodeExample>

        <CodeExample
          title="Ordered List"
          code={`<List ordered>
  <ListItem>Install dependencies</ListItem>
  <ListItem>Import components</ListItem>
  <ListItem>Start building</ListItem>
</List>`}
        >
          <List ordered>
            <ListItem>Install dependencies</ListItem>
            <ListItem>Import components</ListItem>
            <ListItem>Start building</ListItem>
          </List>
        </CodeExample>

        <CodeExample
          title="Nested Lists"
          code={`<List>
  <ListItem>
    Frontend
    <List className="mt-2">
      <ListItem>React</ListItem>
      <ListItem>TypeScript</ListItem>
      <ListItem>Tailwind CSS</ListItem>
    </List>
  </ListItem>
  <ListItem>
    Backend
    <List className="mt-2">
      <ListItem>Node.js</ListItem>
      <ListItem>PostgreSQL</ListItem>
    </List>
  </ListItem>
</List>`}
        >
          <List>
            <ListItem>
              Frontend
              <List className="mt-2">
                <ListItem>React</ListItem>
                <ListItem>TypeScript</ListItem>
                <ListItem>Tailwind CSS</ListItem>
              </List>
            </ListItem>
            <ListItem>
              Backend
              <List className="mt-2">
                <ListItem>Node.js</ListItem>
                <ListItem>PostgreSQL</ListItem>
              </List>
            </ListItem>
          </List>
        </CodeExample>

        <CodeExample
          title="Mixed with Typography"
          code={`<P>Here's what you need to get started:</P>
<List ordered className="mt-3">
  <ListItem>Clone the repository</ListItem>
  <ListItem>Run bun install</ListItem>
  <ListItem>Start the dev server</ListItem>
</List>`}
        >
          <div>
            <P>Here&apos;s what you need to get started:</P>
            <List ordered className="mt-3">
              <ListItem>Clone the repository</ListItem>
              <ListItem>Run bun install</ListItem>
              <ListItem>Start the dev server</ListItem>
            </List>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
