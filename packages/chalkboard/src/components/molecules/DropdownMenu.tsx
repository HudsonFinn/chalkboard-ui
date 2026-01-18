import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { Icon, IconName } from "../atoms/Icon";

// Context for sharing state between components
type TimeoutHandle = ReturnType<typeof setTimeout> | null;

interface DropdownMenuContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement>;
  openTimeoutRef: React.MutableRefObject<TimeoutHandle>;
  closeTimeoutRef: React.MutableRefObject<TimeoutHandle>;
}

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(
  null
);

function useDropdownMenu() {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error(
      "DropdownMenu components must be used within a DropdownMenu"
    );
  }
  return context;
}

// Main container component
export interface DropdownMenuProps {
  children: React.ReactNode;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const openTimeoutRef = useRef<TimeoutHandle>(null);
  const closeTimeoutRef = useRef<TimeoutHandle>(null);

  // Cleanup timeouts on unmount
  useEffect(() => {
    const openRef = openTimeoutRef;
    const closeRef = closeTimeoutRef;
    return () => {
      if (openRef.current) clearTimeout(openRef.current);
      if (closeRef.current) clearTimeout(closeRef.current);
    };
  }, []);

  return (
    <DropdownMenuContext.Provider
      value={{ isOpen, setIsOpen, triggerRef, openTimeoutRef, closeTimeoutRef }}
    >
      <div className="relative inline-block">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

// Trigger component
export interface DropdownMenuTriggerProps {
  children: React.ReactNode;
}

export function DropdownMenuTrigger({ children }: DropdownMenuTriggerProps) {
  const { isOpen, setIsOpen, triggerRef, openTimeoutRef, closeTimeoutRef } =
    useDropdownMenu();

  const handleMouseEnter = useCallback(() => {
    // Cancel any pending close
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    // Open with small delay to prevent accidental triggers
    openTimeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }, [setIsOpen, closeTimeoutRef, openTimeoutRef]);

  const handleMouseLeave = useCallback(() => {
    // Cancel any pending open
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    // Close with delay to allow moving to menu content
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  }, [setIsOpen, openTimeoutRef, closeTimeoutRef]);

  return (
    <div
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-expanded={isOpen}
      aria-haspopup="menu"
    >
      {children}
    </div>
  );
}

// Content component (the dropdown panel)
export interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right";
}

export function DropdownMenuContent({
  children,
  className = "",
  align = "left",
}: DropdownMenuContentProps) {
  const { isOpen, setIsOpen, openTimeoutRef, closeTimeoutRef } = useDropdownMenu();
  const contentRef = useRef<HTMLDivElement>(null);
  const focusedIndexRef = useRef(-1);

  const handleMouseEnter = useCallback(() => {
    // Cancel any pending close when entering menu content
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, [closeTimeoutRef]);

  const handleMouseLeave = useCallback(() => {
    // Cancel any pending open
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    // Close with delay
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  }, [setIsOpen, openTimeoutRef, closeTimeoutRef]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const items = contentRef.current?.querySelectorAll('[role="menuitem"]');
      if (!items) return;

      switch (e.key) {
        case "Escape":
          setIsOpen(false);
          focusedIndexRef.current = -1;
          break;
        case "ArrowDown":
          e.preventDefault();
          if (focusedIndexRef.current < items.length - 1) {
            focusedIndexRef.current += 1;
            (items[focusedIndexRef.current] as HTMLElement).focus();
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (focusedIndexRef.current > 0) {
            focusedIndexRef.current -= 1;
            (items[focusedIndexRef.current] as HTMLElement).focus();
          }
          break;
        case "Enter":
        case " ":
          if (focusedIndexRef.current >= 0) {
            (items[focusedIndexRef.current] as HTMLElement).click();
          }
          break;
      }
    },
    [setIsOpen]
  );

  // Reset focus when opening
  const handleAnimationStart = useCallback(() => {
    if (isOpen) {
      focusedIndexRef.current = -1;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const alignmentClass = align === "right" ? "right-0" : "left-0";

  return (
    <div
      ref={contentRef}
      role="menu"
      className={`absolute top-full z-50 mt-1 min-w-[160px] animate-dropdown-in rounded-lg border border-chalkboard-border bg-white py-1 shadow-lg ${alignmentClass} ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onAnimationStart={handleAnimationStart}
    >
      {children}
    </div>
  );
}

// Individual menu item
export interface DropdownMenuItemProps {
  children: React.ReactNode;
  iconName?: IconName;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function DropdownMenuItem({
  children,
  iconName,
  onClick,
  disabled = false,
  className = "",
}: DropdownMenuItemProps) {
  const { setIsOpen } = useDropdownMenu();

  const handleClick = useCallback(() => {
    if (disabled) return;
    onClick?.();
    setIsOpen(false);
  }, [disabled, onClick, setIsOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  const baseStyles =
    "flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors";
  const stateStyles = disabled
    ? "cursor-not-allowed text-chalkboard-border"
    : "cursor-pointer text-chalkboard-foreground hover:bg-chalkboard-primary/10 focus:bg-chalkboard-primary/10 focus:outline-none";

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      className={`${baseStyles} ${stateStyles} ${className}`.trim()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
    >
      {iconName && (
        <span className="flex-shrink-0 text-chalkboard-primary">
          <Icon name={iconName} size="sm" />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
