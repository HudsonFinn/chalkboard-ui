import React from "react";
import { Icon, IconName } from "./Icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  leftIcon?: IconName;
  rightIcon?: IconName;
  children: React.ReactNode;
}

const variantStyles = {
  primary:
    "bg-chalkboard-primary text-chalkboard-background hover:opacity-90 focus:ring-chalkboard-primary",
  secondary:
    "bg-chalkboard-secondary text-chalkboard-background hover:opacity-90 focus:ring-chalkboard-secondary",
  outline:
    "border-2 border-chalkboard-foreground text-chalkboard-foreground hover:bg-chalkboard-foreground/10 focus:ring-chalkboard-primary",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

// Icon size mapping based on button size
const iconSizes: Record<"sm" | "md" | "lg", "sm" | "md" | "lg"> = {
  sm: "sm",
  md: "sm",
  lg: "md",
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  const iconSize = iconSizes[size];

  return (
    <button className={classes} {...props}>
      {leftIcon && <Icon name={leftIcon} size={iconSize} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={iconSize} />}
    </button>
  );
}
