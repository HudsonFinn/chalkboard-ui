import { Link } from "react-router-dom";
import { H1, H3, P, CodeExample, Pre } from "chalkboard-ui";

export function NavbarPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Navbar</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          A responsive sidebar navigation component with mobile menu support.
          Features collapsible sections, icon support, and active state
          highlighting.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="Basic Usage"
          code={`import { Navbar } from "chalkboard-ui";

const sections = {
  "": [{ href: "/", label: "Home", icon: "home" }],
  "Components": [
    { href: "/button", label: "Button", icon: "plus" },
    { href: "/input", label: "Input", icon: "edit" },
  ],
};

<Navbar
  title="My App"
  footer="© 2024 My Company"
  sections={sections}
/>`}
        >
          <P className="text-sm text-chalkboard-foreground/70">
            The Navbar renders as a fixed sidebar. See the left side of this
            page for a live example.
          </P>
        </CodeExample>

        <CodeExample
          title="With React Router"
          code={`import { Link, useLocation } from "react-router-dom";
import { Navbar } from "chalkboard-ui";

const sections = {
  "": [{ href: "/", label: "Home", icon: "home" }],
  "Pages": [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

function AppNavbar() {
  const location = useLocation();

  return (
    <Navbar
      title="My App"
      sections={sections}
      linkComponent={Link}
      isActive={(href) => location.pathname === href}
    />
  );
}`}
        >
          <P className="text-sm text-chalkboard-foreground/70">
            Pass a custom <code className="rounded bg-chalkboard-100 px-1">linkComponent</code> for
            client-side navigation and use <code className="rounded bg-chalkboard-100 px-1">isActive</code> to
            highlight the current page.
          </P>
        </CodeExample>

        <CodeExample
          title="Sections Structure"
          code={`// Keys are section titles (empty string for no title)
// Values are arrays of NavbarItem objects
const sections = {
  "": [
    { href: "/", label: "Home", icon: "home" },
  ],
  "Section Title": [
    { href: "/page1", label: "Page 1", icon: "star" },
    { href: "/page2", label: "Page 2" }, // icon is optional
  ],
  "Another Section": [
    { href: "/page3", label: "Page 3", icon: "settings" },
  ],
};`}
        >
          <P className="text-sm text-chalkboard-foreground/70">
            Sections are defined as an object where keys are section titles and
            values are arrays of items. Use an empty string key for items
            without a section header.
          </P>
        </CodeExample>

        <CodeExample
          title="Collapsed by Default"
          code={`<Navbar
  title="My App"
  sections={sections}
  defaultCollapsed={true}
/>`}
        >
          <P className="text-sm text-chalkboard-foreground/70">
            Use <code className="rounded bg-chalkboard-100 px-1">defaultCollapsed</code> to
            have the navbar start in a collapsed state, even on desktop. Users can toggle
            it open using the menu button. This is useful for full-width layouts or when
            you want to maximize content space.
          </P>
        </CodeExample>

        <div>
          <H3 className="mb-4">NavbarItem Interface</H3>
          <Pre className="my-0">{`interface NavbarItem {
  label: string;   // Display text
  href: string;    // URL to navigate to
  icon?: IconName; // Optional icon
}`}</Pre>
          <P className="mt-3 text-sm text-chalkboard-foreground/70">
            See the <Link to="/icon" className="text-chalkboard-primary underline">Icon component</Link> for
            available icon names.
          </P>
        </div>
      </div>
    </div>
  );
}
