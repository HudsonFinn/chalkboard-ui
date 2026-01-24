import * as React from "react";
import { Icon } from "../atoms/Icon";

export interface PreviewProps {
  /** Custom component to render as (e.g., react-router's Link) */
  as?: React.ElementType;
  /** URL to navigate to (passed as href for anchor, or to for custom components like react-router) */
  href?: string;
  /** Callback function when clicked (alternative to href) */
  onClick?: () => void;
  /** Content to render inside the preview */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const baseClasses =
  "group block rounded-lg border border-chalkboard-secondary bg-white p-6 shadow transition-shadow hover:shadow-md";

export function Preview({
  as: Component,
  href,
  onClick,
  children,
  className = "",
}: PreviewProps) {
  const combinedClasses = `${baseClasses} ${className}`.trim();

  // If a custom component is provided (e.g., react-router's Link)
  if (Component) {
    return (
      <Component to={href} className={combinedClasses}>
        {children}
      </Component>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${combinedClasses} w-full cursor-pointer text-left`}
      >
        {children}
      </button>
    );
  }

  return <div className={combinedClasses}>{children}</div>;
}
Preview.displayName = "Preview";

export interface PreviewHeaderProps {
  /** Title text for the preview */
  title: string;
  /** Whether to show the arrow icon (defaults to true) */
  showArrow?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function PreviewHeader({
  title,
  showArrow = true,
  className = "",
}: PreviewHeaderProps) {
  return (
    <div className={`mb-4 flex items-center justify-between ${className}`.trim()}>
      <h3 className="font-display text-lg font-semibold tracking-tight">
        {title}
      </h3>
      {showArrow && (
        <Icon
          name="arrow-right"
          className="text-chalkboard-primary transition-transform group-hover:translate-x-1"
        />
      )}
    </div>
  );
}
PreviewHeader.displayName = "PreviewHeader";

export interface PreviewDescriptionProps {
  /** Description text */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function PreviewDescription({
  children,
  className = "",
}: PreviewDescriptionProps) {
  return (
    <p className={`mb-4 text-sm text-chalkboard-foreground/70 ${className}`.trim()}>
      {children}
    </p>
  );
}
PreviewDescription.displayName = "PreviewDescription";

export interface PreviewContentProps {
  /** Content to render */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler for the content area */
  onClick?: (e: React.MouseEvent) => void;
}

export function PreviewContent({
  children,
  className = "",
  onClick,
}: PreviewContentProps) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
PreviewContent.displayName = "PreviewContent";
