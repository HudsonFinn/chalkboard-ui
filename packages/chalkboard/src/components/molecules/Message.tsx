import * as React from "react";
import { Icon, IconName } from "../atoms/Icon";

export type MessageVariant = "success" | "error" | "info" | "warning";

export interface MessageProps {
  variant: MessageVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variantConfig: Record<
  MessageVariant,
  { icon: IconName; bgColor: string; borderColor: string; iconColor: string }
> = {
  success: {
    icon: "check",
    bgColor: "bg-chalkboard-success/10",
    borderColor: "border-chalkboard-success",
    iconColor: "text-chalkboard-success",
  },
  error: {
    icon: "error",
    bgColor: "bg-chalkboard-error/10",
    borderColor: "border-chalkboard-error",
    iconColor: "text-chalkboard-error",
  },
  info: {
    icon: "info",
    bgColor: "bg-chalkboard-info/30",
    borderColor: "border-chalkboard-info",
    iconColor: "text-chalkboard-foreground",
  },
  warning: {
    icon: "warning",
    bgColor: "bg-chalkboard-warning",
    borderColor: "border-chalkboard-warning",
    iconColor: "text-chalkboard-foreground",
  },
};

export function Message({
  variant,
  title,
  children,
  className = "",
}: MessageProps) {
  const config = variantConfig[variant];

  return (
    <div
      role="alert"
      className={`flex gap-3 rounded-lg border ${config.bgColor} ${config.borderColor} p-4 ${className}`.trim()}
    >
      <div className={`flex-shrink-0 ${config.iconColor}`}>
        <Icon name={config.icon} size="md" />
      </div>
      <div className="flex-1">
        {title && (
          <p className="font-semibold text-chalkboard-foreground">{title}</p>
        )}
        <div className="text-sm text-chalkboard-foreground/80">{children}</div>
      </div>
    </div>
  );
}
