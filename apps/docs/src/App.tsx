import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Icon,
  IconName,
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

// All available icons for the showcase
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
          <h2 className="mb-4 text-2xl font-semibold text-chalkboard-foreground">
            Icon
          </h2>
          <div className="space-y-6 rounded-lg border border-chalkboard-border bg-white p-6 shadow">
            <div>
              <h3 className="mb-3 text-lg font-medium text-chalkboard-foreground">
                All Icons
              </h3>
              <div className="grid grid-cols-6 gap-4 sm:grid-cols-8 md:grid-cols-12">
                {allIcons.map((iconName) => (
                  <div
                    key={iconName}
                    className="flex flex-col items-center gap-1"
                    title={iconName}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chalkboard-background text-chalkboard-foreground">
                      <Icon name={iconName} />
                    </div>
                    <span className="text-xs text-chalkboard-foreground/60 truncate w-full text-center">
                      {iconName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-chalkboard-foreground">
                Sizes
              </h3>
              <div className="flex items-end gap-6">
                <div className="flex flex-col items-center gap-1">
                  <Icon name="star" size="sm" />
                  <span className="text-xs text-chalkboard-foreground/60">sm (16px)</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Icon name="star" size="md" />
                  <span className="text-xs text-chalkboard-foreground/60">md (20px)</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Icon name="star" size="lg" />
                  <span className="text-xs text-chalkboard-foreground/60">lg (24px)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-chalkboard-foreground">
                Custom Colors
              </h3>
              <div className="flex items-center gap-4">
                <Icon name="info" className="text-blue-500" />
                <Icon name="check" className="text-green-500" />
                <Icon name="warning" className="text-yellow-500" />
                <Icon name="error" className="text-red-500" />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-chalkboard-foreground">Button</h2>
          <div className="space-y-6 rounded-lg border border-chalkboard-border bg-white p-6 shadow">
            <div>
              <h3 className="mb-3 text-lg font-medium text-chalkboard-foreground">
                Variants
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-chalkboard-foreground">
                Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-chalkboard-foreground">
                With Icons
              </h3>
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
            </div>
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
                <Button rightIcon="chevron-down">Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  iconName="edit"
                  onClick={() => alert("Edit clicked")}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  iconName="copy"
                  onClick={() => alert("Duplicate clicked")}
                >
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem
                  iconName="trash"
                  onClick={() => alert("Delete clicked")}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" rightIcon="chevron-down">
                  Actions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem iconName="settings">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem iconName="user">Profile</DropdownMenuItem>
                <DropdownMenuItem disabled iconName="link">
                  Disabled Item
                </DropdownMenuItem>
                <DropdownMenuItem>No Icon Item</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="secondary" rightIcon="chevron-down">
                  Right Aligned
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="right">
                <DropdownMenuItem iconName="home">Home</DropdownMenuItem>
                <DropdownMenuItem iconName="star">Favorites</DropdownMenuItem>
                <DropdownMenuItem iconName="external-link">
                  Open in New Tab
                </DropdownMenuItem>
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
