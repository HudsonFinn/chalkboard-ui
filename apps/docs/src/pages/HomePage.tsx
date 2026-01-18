import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Message,
  H1,
  H2,
  H3,
  P,
  Lead,
  Small,
  Code,
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
              <P className="mb-2 font-semibold">Option 2: Tailwind CSS integration</P>
              <P className="mb-3 text-sm text-chalkboard-foreground/70">
                Add the library to your <Code>tailwind.config.ts</Code>:
              </P>
              <Pre className="my-0">{`import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/chalkboard-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        chalkboard: {
          background: "#FFFAF6",
          foreground: "#0d1321",
          primary: "#66717e",
          secondary: "#8d818c",
          success: "#63821B",
          error: "#F76350",
          info: "#9DCBBA",
          warning: "#FDF5BF",
        },
      },
    },
  },
  plugins: [],
};

export default config;`}</Pre>
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
          <Link
            to="/colors"
            className="group rounded-lg border border-chalkboard-secondary bg-white p-6 shadow transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <H3 className="text-lg">Colors</H3>
              <Icon
                name="arrow-right"
                className="text-chalkboard-primary transition-transform group-hover:translate-x-1"
              />
            </div>
            <P className="mb-4 text-sm text-chalkboard-foreground/70">
              The chalkboard color palette and semantic colors.
            </P>
            <div className="flex gap-1">
              <div className="h-6 w-6 rounded bg-chalkboard-50" />
              <div className="h-6 w-6 rounded bg-chalkboard-200" />
              <div className="h-6 w-6 rounded bg-chalkboard-400" />
              <div className="h-6 w-6 rounded bg-chalkboard-600" />
              <div className="h-6 w-6 rounded bg-chalkboard-800" />
              <div className="h-6 w-6 rounded bg-chalkboard-950" />
            </div>
          </Link>

          {/* Button Preview */}
          <Link
            to="/button"
            className="group rounded-lg border border-chalkboard-secondary bg-white p-6 shadow transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <H3 className="text-lg">Button</H3>
              <Icon
                name="arrow-right"
                className="text-chalkboard-primary transition-transform group-hover:translate-x-1"
              />
            </div>
            <P className="mb-4 text-sm text-chalkboard-foreground/70">
              Buttons with variants, sizes, and icon support.
            </P>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Default</Button>
              <Button size="sm" variant="secondary">
                Secondary
              </Button>
              <Button size="sm" variant="outline">
                Outline
              </Button>
            </div>
          </Link>

          {/* Icon Preview */}
          <Link
            to="/icon"
            className="group rounded-lg border border-chalkboard-secondary bg-white p-6 shadow transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <H3 className="text-lg">Icon</H3>
              <Icon
                name="arrow-right"
                className="text-chalkboard-primary transition-transform group-hover:translate-x-1"
              />
            </div>
            <P className="mb-4 text-sm text-chalkboard-foreground/70">
              23 SVG icons with size and color customization.
            </P>
            <div className="flex gap-3">
              <Icon name="search" />
              <Icon name="settings" />
              <Icon name="star" />
              <Icon name="home" />
              <Icon name="mail" />
              <Icon name="user" />
            </div>
          </Link>

          {/* Typography Preview */}
          <Link
            to="/typography"
            className="group rounded-lg border border-chalkboard-secondary bg-white p-6 shadow transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <H3 className="text-lg">Typography</H3>
              <Icon
                name="arrow-right"
                className="text-chalkboard-primary transition-transform group-hover:translate-x-1"
              />
            </div>
            <P className="mb-4 text-sm text-chalkboard-foreground/70">
              Headings, paragraphs, blockquotes, and code blocks.
            </P>
            <div className="space-y-1 text-sm">
              <P className="font-semibold">H1 - H6 Headings</P>
              <Small className="block text-chalkboard-foreground/70">
                Paragraphs, Lead, Small
              </Small>
              <Small className="block text-chalkboard-foreground/70">
                Code blocks & more
              </Small>
            </div>
          </Link>
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
          <Link
            to="/dropdown"
            className="group rounded-lg border border-chalkboard-secondary bg-white p-6 shadow transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <H3 className="text-lg">Dropdown Menu</H3>
              <Icon
                name="arrow-right"
                className="text-chalkboard-primary transition-transform group-hover:translate-x-1"
              />
            </div>
            <P className="mb-4 text-sm text-chalkboard-foreground/70">
              Hover-triggered dropdown menus with icon support.
            </P>
            <div onClick={(e) => e.preventDefault()}>
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
            </div>
          </Link>

          {/* Message Preview */}
          <Link
            to="/message"
            className="group rounded-lg border border-chalkboard-secondary bg-white p-6 shadow transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <H3 className="text-lg">Message</H3>
              <Icon
                name="arrow-right"
                className="text-chalkboard-primary transition-transform group-hover:translate-x-1"
              />
            </div>
            <P className="mb-4 text-sm text-chalkboard-foreground/70">
              Semantic alert messages for success, error, info, and warning.
            </P>
            <div className="space-y-2">
              <Message variant="success">Operation completed</Message>
              <Message variant="error">Something went wrong</Message>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
