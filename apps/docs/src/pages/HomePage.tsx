import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  H1,
  H2,
  P,
  Lead,
  Small,
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

      <div className="grid gap-8 md:grid-cols-2">
        {/* Button Preview */}
        <Link
          to="/button"
          className="group rounded-lg border border-chalkboard-secondary bg-white p-6 shadow transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex items-center justify-between">
            <H2 className="text-lg">Button</H2>
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
            <H2 className="text-lg">Icon</H2>
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

        {/* Dropdown Preview */}
        <Link
          to="/dropdown"
          className="group rounded-lg border border-chalkboard-secondary bg-white p-6 shadow transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex items-center justify-between">
            <H2 className="text-lg">Dropdown Menu</H2>
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

        {/* Typography Preview */}
        <Link
          to="/typography"
          className="group rounded-lg border border-chalkboard-secondary bg-white p-6 shadow transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex items-center justify-between">
            <H2 className="text-lg">Typography</H2>
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
            <Small className="block text-chalkboard-foreground/70">Code blocks & more</Small>
          </div>
        </Link>
      </div>
    </div>
  );
}
