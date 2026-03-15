import * as React from "react";

// Props types
export type ListProps = React.HTMLAttributes<HTMLUListElement | HTMLOListElement> & {
  /** Render as an ordered list (`<ol>`) instead of `<ul>` */
  ordered?: boolean;
};

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

// List component
export const List = React.forwardRef<
  HTMLUListElement | HTMLOListElement,
  ListProps
>(({ className = "", ordered = false, ...props }, ref) => {
  const Component = ordered ? "ol" : "ul";
  return (
    <Component
      ref={ref as React.Ref<HTMLUListElement> & React.Ref<HTMLOListElement>}
      className={`space-y-2 text-chalkboard-foreground ${ordered ? "list-decimal" : "list-disc"} pl-6 ${className}`}
      {...props}
    />
  );
});
List.displayName = "List";

// ListItem component
export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className = "", ...props }, ref) => (
    <li
      ref={ref}
      className={`text-base leading-relaxed text-chalkboard-foreground ${className}`}
      {...props}
    />
  )
);
ListItem.displayName = "ListItem";
