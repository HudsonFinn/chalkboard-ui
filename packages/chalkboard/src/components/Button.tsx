import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variantStyles = {
  primary:
    "bg-chalkboard-primary text-chalkboard-background hover:opacity-90 focus:ring-chalkboard-primary",
  secondary:
    "bg-chalkboard-border text-chalkboard-background hover:opacity-90 focus:ring-chalkboard-border",
  outline:
    "border-2 border-chalkboard-foreground text-chalkboard-foreground hover:bg-chalkboard-foreground/10 focus:ring-chalkboard-primary",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
