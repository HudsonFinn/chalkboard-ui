import { useLocation, Link } from "react-router-dom";
import { Navbar, NavbarItem } from "chalkboard-ui";

const sections: Record<string, NavbarItem[]> = {
  "": [{ href: "/", label: "Home", icon: "home" }],
  Atoms: [
    { href: "/colors", label: "Colors", icon: "star" },
    { href: "/typography", label: "Typography", icon: "edit" },
    { href: "/icon", label: "Icon", icon: "star" },
    { href: "/button", label: "Button", icon: "plus" },
    { href: "/input", label: "Input", icon: "edit" },
  ],
  Molecules: [
    { href: "/dropdown", label: "Dropdown Menu", icon: "chevron-down" },
    { href: "/message", label: "Message", icon: "info" },
    { href: "/preview", label: "Preview", icon: "external-link" },
    { href: "/table", label: "Table", icon: "menu" },
    { href: "/tag", label: "Tag", icon: "link" },
  ],
  Organisms: [{ href: "/navbar", label: "Navbar", icon: "menu" }],
};

export function Sidebar() {
  const location = useLocation();

  return (
    <Navbar
      title="Chalkboard UI"
      footer="Built with React + Tailwind"
      sections={sections}
      linkComponent={Link}
      isActive={(href) => location.pathname === href}
    />
  );
}
