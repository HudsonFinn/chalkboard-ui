import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
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

// Simple icon components for demo
const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-chalkboard-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-chalkboard-foreground">
          Chalkboard UI
        </h1>
        <p className="mb-8 text-lg text-chalkboard-primary">
          A React design system built with Tailwind CSS
        </p>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-chalkboard-foreground">Button</h2>
          <div className="flex flex-wrap gap-4 rounded-lg border border-chalkboard-border bg-white p-6 shadow">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-chalkboard-foreground">
            Dropdown Menu
          </h2>
          <p className="mb-4 text-chalkboard-foreground/70">
            Hover over the buttons to reveal the dropdown menus.
          </p>
          <div className="flex flex-wrap gap-4 rounded-lg border border-chalkboard-border bg-white p-6 shadow">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button>Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  icon={<EditIcon />}
                  onClick={() => alert("Edit clicked")}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  icon={<CopyIcon />}
                  onClick={() => alert("Duplicate clicked")}
                >
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem
                  icon={<TrashIcon />}
                  onClick={() => alert("Delete clicked")}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">Actions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem icon={<SettingsIcon />}>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Disabled Item
                </DropdownMenuItem>
                <DropdownMenuItem>No Icon Item</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="secondary">Right Aligned</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="right">
                <DropdownMenuItem icon={<EditIcon />}>Edit</DropdownMenuItem>
                <DropdownMenuItem icon={<CopyIcon />}>Copy</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-chalkboard-foreground">
            Typography
          </h2>
          <div className="space-y-6 rounded-lg border border-chalkboard-border bg-white p-6 shadow">
            <div className="space-y-4">
              <H1>Heading 1</H1>
              <H2>Heading 2</H2>
              <H3>Heading 3</H3>
              <H4>Heading 4</H4>
              <H5>Heading 5</H5>
              <H6>Heading 6</H6>
            </div>

            <hr className="border-chalkboard-border" />

            <div className="space-y-4">
              <Lead>
                This is a lead paragraph. It's designed for introductory text
                that should stand out from regular body copy.
              </Lead>
              <P>
                This is a standard paragraph. It uses relaxed line-height for
                comfortable reading. You can include <Code>inline code</Code>{" "}
                within paragraphs to highlight technical terms or code snippets.
              </P>
              <P>
                <Small>
                  This is small text, useful for captions, footnotes, or fine
                  print.
                </Small>
              </P>
            </div>

            <hr className="border-chalkboard-border" />

            <div>
              <Blockquote>
                "Design is not just what it looks like and feels like. Design is
                how it works." — Steve Jobs
              </Blockquote>
            </div>

            <hr className="border-chalkboard-border" />

            <div>
              <P className="mb-2">Code block example:</P>
              <Pre>{`function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`}</Pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
