import * as React from "react";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { Icon, IconName } from "../atoms/Icon";

export interface NavbarItem {
  /** Display text for the nav item */
  label: string;
  /** URL to navigate to */
  href: string;
  /** Optional icon to display before the label */
  icon?: IconName;
}

export interface NavbarProps {
  /** Title displayed in the header */
  title: string;
  /** Footer text displayed at the bottom */
  footer?: string;
  /** Navigation sections - keys are section titles (empty string for no title), values are arrays of items */
  sections: Record<string, NavbarItem[]>;
  /** Custom link component (e.g., react-router's NavLink) */
  linkComponent?: React.ElementType;
  /** Callback to determine if a nav item is active */
  isActive?: (href: string) => boolean;
  /** Callback when a nav item is clicked */
  onItemClick?: (href: string) => void;
  /** Additional CSS classes for the sidebar container */
  className?: string;
  /** When true, the navbar starts collapsed even on desktop and can be toggled */
  defaultCollapsed?: boolean;
}

export function Navbar({
  title,
  footer,
  sections,
  linkComponent: LinkComponent = "a",
  isActive,
  onItemClick,
  className = "",
  defaultCollapsed = false,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(!defaultCollapsed);

  const handleItemClick = (href: string) => {
    setIsOpen(false);
    onItemClick?.(href);
  };

  // Convert sections object to array for rendering
  const sectionEntries = Object.entries(sections);

  return (
    <>
      {/* Menu button - always visible when defaultCollapsed, otherwise only on mobile */}
      {!isOpen && (
        <Button
          variant="ghost"
          icon="menu"
          onClick={() => setIsOpen(true)}
          className={`fixed left-4 top-4 z-40 bg-white shadow-md ${defaultCollapsed ? "" : "lg:hidden"}`}
          aria-label="Open menu"
        />
      )}

      {/* Overlay */}
      {isOpen && defaultCollapsed && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}
      {isOpen && !defaultCollapsed && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-60 transform bg-white shadow-lg transition-transform ${
          defaultCollapsed ? "" : "lg:translate-x-0"
        } ${isOpen ? "translate-x-0" : "-translate-x-full"} ${className}`.trim()}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-chalkboard-secondary p-4">
            <span className="text-lg font-semibold text-chalkboard-foreground">
              {title}
            </span>
            <Button
              variant="ghost"
              size="sm"
              icon="close"
              onClick={() => setIsOpen(false)}
              className={defaultCollapsed ? "" : "lg:hidden"}
              aria-label="Close menu"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {sectionEntries.map(([sectionTitle, items], sectionIndex) => (
                <div key={sectionIndex}>
                  {sectionTitle && (
                    <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-chalkboard-foreground/50">
                      {sectionTitle}
                    </h3>
                  )}
                  <ul className="space-y-1">
                    {items.map((item) => {
                      const active = isActive?.(item.href) ?? false;
                      const linkProps =
                        LinkComponent === "a"
                          ? { href: item.href }
                          : { to: item.href };

                      return (
                        <li key={item.href}>
                          <LinkComponent
                            {...linkProps}
                            onClick={() => handleItemClick(item.href)}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                              active
                                ? "bg-chalkboard-primary text-white"
                                : "text-chalkboard-foreground hover:bg-chalkboard-background"
                            }`}
                          >
                            {item.icon && <Icon name={item.icon} size="sm" />}
                            {item.label}
                          </LinkComponent>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          {footer && (
            <div className="border-t border-chalkboard-secondary p-4">
              <p className="text-xs text-chalkboard-foreground/60">{footer}</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
Navbar.displayName = "Navbar";
