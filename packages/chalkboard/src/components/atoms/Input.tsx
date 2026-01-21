import * as React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = "md", className = "", ...props }, ref) => {
    const baseStyles =
      "w-full rounded-lg border-2 border-chalkboard-secondary bg-white text-chalkboard-foreground placeholder:text-chalkboard-foreground/50 transition-colors focus:outline-none focus:border-chalkboard-primary focus:ring-2 focus:ring-chalkboard-primary/20 disabled:opacity-50 disabled:cursor-not-allowed";

    const classes = `${baseStyles} ${sizeStyles[size]} ${className}`.trim();

    return <input ref={ref} className={classes} {...props} />;
  }
);
Input.displayName = "Input";
