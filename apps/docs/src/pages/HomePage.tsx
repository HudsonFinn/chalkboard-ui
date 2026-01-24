import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  Input,
  Tag,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Message,
  Preview,
  PreviewHeader,
  PreviewDescription,
  PreviewContent,
  H1,
  H2,
  H3,
  P,
  Lead,
  Small,
  Pre,
} from "chalkboard-ui";

export function HomePage() {
  return (
    <div>
      <div className="mb-12">
        <H1>Chalkboard UI</H1>
        <Lead className="mt-4">
          A React design system built with Tailwind CSS. Simple, accessible, and
          customizable components for your next project.
        </Lead>
      </div>

      {/* Getting Started Section */}
      <div className="mb-12">
        <H2 className="mb-6">Getting Started</H2>

        <div className="space-y-6">
          {/* Installation */}
          <div className="rounded-lg border border-chalkboard-secondary bg-white p-6 shadow">
            <H3 className="mb-3">Installation</H3>
            <Pre className="my-0">npm install chalkboard-ui</Pre>
          </div>

          {/* Setup */}
          <div className="rounded-lg border border-chalkboard-secondary bg-white p-6 shadow">
            <H3 className="mb-3">Setup</H3>
            <P className="mb-4 text-chalkboard-foreground/80">
              Choose one of the following setup options:
            </P>

            {/* Option 1 */}
            <div className="mb-6">
              <P className="mb-2 font-semibold">Option 1: Import the prebuilt CSS</P>
              <Pre className="my-0">{`// main.tsx or App.tsx
import "chalkboard-ui/styles.css";`}</Pre>
            </div>

            {/* Option 2 */}
            <div>
              <P className="mb-2 font-semibold">Option 2: Tailwind CSS integration (recommended)</P>
              <P className="mb-3 text-sm text-chalkboard-foreground/70">
                Use the library's Tailwind config as a preset to inherit all theme settings:
              </P>
              <Pre className="my-0">{`import type { Config } from "tailwindcss";
import chalkboardConfig from "chalkboard-ui/tailwind.config";

const config: Config = {
  presets: [chalkboardConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/chalkboard-ui/dist/**/*.js",
  ],
  plugins: [],
};

export default config;`}</Pre>
              <P className="mt-3 text-sm text-chalkboard-foreground/70">
                You'll also need to import the styles for the fonts:
              </P>
              <Pre className="my-0">{`// main.tsx or App.tsx
import "chalkboard-ui/styles.css";`}</Pre>
            </div>
          </div>

          {/* Basic Usage */}
          <div className="rounded-lg border border-chalkboard-secondary bg-white p-6 shadow">
            <H3 className="mb-3">Basic Usage</H3>
            <Pre className="my-0">{`import { Button, H1, P, Code } from "chalkboard-ui";

function App() {
  return (
    <div>
      <H1>Welcome</H1>
      <P>Get started with <Code>chalkboard-ui</Code> components.</P>
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}`}</Pre>
          </div>
        </div>
      </div>

      {/* Atoms Section */}
      <div className="mb-12">
        <H2 className="mb-2">Atoms</H2>
        <P className="mb-6 text-chalkboard-foreground/70">
          The fundamental building blocks of the design system.
        </P>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Colors Preview */}
          <Preview as={Link} href="/colors">
            <PreviewHeader title="Colors" />
            <PreviewDescription>
              The chalkboard color palette and semantic colors.
            </PreviewDescription>
            <PreviewContent className="flex gap-1">
              <div className="h-6 w-6 rounded bg-chalkboard-50" />
              <div className="h-6 w-6 rounded bg-chalkboard-200" />
              <div className="h-6 w-6 rounded bg-chalkboard-400" />
              <div className="h-6 w-6 rounded bg-chalkboard-600" />
              <div className="h-6 w-6 rounded bg-chalkboard-800" />
              <div className="h-6 w-6 rounded bg-chalkboard-950" />
            </PreviewContent>
          </Preview>

          {/* Typography Preview */}
          <Preview as={Link} href="/typography">
            <PreviewHeader title="Typography" />
            <PreviewDescription>
              Headings, paragraphs, blockquotes, and code blocks.
            </PreviewDescription>
            <PreviewContent className="space-y-1 text-sm">
              <P className="font-semibold">H1 - H6 Headings</P>
              <Small className="block text-chalkboard-foreground/70">
                Paragraphs, Lead, Small
              </Small>
              <Small className="block text-chalkboard-foreground/70">
                Code blocks & more
              </Small>
            </PreviewContent>
          </Preview>

          {/* Icon Preview */}
          <Preview as={Link} href="/icon">
            <PreviewHeader title="Icon" />
            <PreviewDescription>
              23 SVG icons with size and color customization.
            </PreviewDescription>
            <PreviewContent className="flex gap-3">
              <Icon name="search" />
              <Icon name="settings" />
              <Icon name="star" />
              <Icon name="home" />
              <Icon name="mail" />
              <Icon name="user" />
            </PreviewContent>
          </Preview>

          {/* Button Preview */}
          <Preview as={Link} href="/button">
            <PreviewHeader title="Button" />
            <PreviewDescription>
              Buttons with variants, sizes, and icon support.
            </PreviewDescription>
            <PreviewContent className="flex flex-wrap gap-2">
              <Button size="sm">Default</Button>
              <Button size="sm" variant="secondary">
                Secondary
              </Button>
              <Button size="sm" variant="outline">
                Outline
              </Button>
            </PreviewContent>
          </Preview>

          {/* Input Preview */}
          <Preview as={Link} href="/input">
            <PreviewHeader title="Input" />
            <PreviewDescription>
              Text input with placeholder, sizes, and focus highlighting.
            </PreviewDescription>
            <PreviewContent onClick={(e) => e.preventDefault()}>
              <Input size="sm" placeholder="Enter text..." />
            </PreviewContent>
          </Preview>
        </div>
      </div>

      {/* Molecules Section */}
      <div>
        <H2 className="mb-2">Molecules</H2>
        <P className="mb-6 text-chalkboard-foreground/70">
          Combinations of atoms that form more complex UI patterns.
        </P>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Dropdown Preview */}
          <Preview as={Link} href="/dropdown">
            <PreviewHeader title="Dropdown Menu" />
            <PreviewDescription>
              Hover-triggered dropdown menus with icon support.
            </PreviewDescription>
            <PreviewContent onClick={(e) => e.preventDefault()}>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button size="sm" rightIcon="chevron-down">
                    Options
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem iconName="edit">Edit</DropdownMenuItem>
                  <DropdownMenuItem iconName="copy">Duplicate</DropdownMenuItem>
                  <DropdownMenuItem iconName="trash">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </PreviewContent>
          </Preview>

          {/* Message Preview */}
          <Preview as={Link} href="/message">
            <PreviewHeader title="Message" />
            <PreviewDescription>
              Semantic alert messages for success, error, info, and warning.
            </PreviewDescription>
            <PreviewContent className="space-y-2">
              <Message variant="success">Operation completed</Message>
              <Message variant="error">Something went wrong</Message>
            </PreviewContent>
          </Preview>

          {/* Preview Preview */}
          <Preview as={Link} href="/preview">
            <PreviewHeader title="Preview" />
            <PreviewDescription>
              Showcase cards with hover effects for navigation or actions.
            </PreviewDescription>
            <PreviewContent className="rounded border border-chalkboard-secondary bg-chalkboard-50 p-3 text-sm text-chalkboard-foreground/70">
              Link to pages or trigger callbacks
            </PreviewContent>
          </Preview>

          {/* Tag Preview */}
          <Preview as={Link} href="/tag">
            <PreviewHeader title="Tag" />
            <PreviewDescription>
              Labels for categorizing content with optional icons.
            </PreviewDescription>
            <PreviewContent className="flex flex-wrap gap-2">
              <Tag icon="star">Featured</Tag>
              <Tag>Travel</Tag>
              <Tag>Design</Tag>
            </PreviewContent>
          </Preview>
        </div>
      </div>
    </div>
  );
}
