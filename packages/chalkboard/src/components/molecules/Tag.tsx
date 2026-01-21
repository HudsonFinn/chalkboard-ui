import * as React from "react";
import { Icon, IconName } from "../atoms/Icon";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: IconName;
  children: React.ReactNode;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ icon, className = "", children, ...props }, ref) => (
    <span
      ref={ref}
      className={`inline-flex items-center gap-1.5 rounded-full bg-chalkboard-info px-3 py-0.5 text-sm font-medium text-chalkboard-foreground ${className}`}
      {...props}
    >
      {icon && <Icon name={icon} size="sm" />}
      {children}
    </span>
  )
);
Tag.displayName = "Tag";
