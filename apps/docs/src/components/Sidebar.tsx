import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon, IconName } from "chalkboard-ui";

interface NavItem {
  path: string;
  label: string;
  icon: IconName;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "",
    items: [{ path: "/", label: "Home", icon: "home" }],
  },
  {
    title: "Atoms",
    items: [
      { path: "/colors", label: "Colors", icon: "star" },
      { path: "/button", label: "Button", icon: "plus" },
      { path: "/icon", label: "Icon", icon: "star" },
      { path: "/tag", label: "Tag", icon: "link" },
      { path: "/typography", label: "Typography", icon: "edit" },
    ],
  },
  {
    title: "Molecules",
    items: [
      { path: "/dropdown", label: "Dropdown Menu", icon: "chevron-down" },
      { path: "/message", label: "Message", icon: "info" },
    ],
  },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-lg bg-white p-2 shadow-md lg:hidden"
        aria-label="Open menu"
      >
        <Icon name="menu" size="md" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-60 transform bg-white shadow-lg transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-chalkboard-secondary p-4">
            <span className="text-lg font-semibold text-chalkboard-foreground">
              Chalkboard UI
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 hover:bg-chalkboard-background lg:hidden"
              aria-label="Close menu"
            >
              <Icon name="close" size="md" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {navSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  {section.title && (
                    <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-chalkboard-foreground/50">
                      {section.title}
                    </h3>
                  )}
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.path}>
                        <NavLink
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                              isActive
                                ? "bg-chalkboard-primary text-white"
                                : "text-chalkboard-foreground hover:bg-chalkboard-background"
                            }`
                          }
                        >
                          <Icon name={item.icon} size="sm" />
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-chalkboard-secondary p-4">
            <p className="text-xs text-chalkboard-foreground/60">
              Built with React + Tailwind
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
