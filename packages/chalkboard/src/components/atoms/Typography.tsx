import * as React from "react";

// Props types
export type H1Props = React.HTMLAttributes<HTMLHeadingElement>;
export type H2Props = React.HTMLAttributes<HTMLHeadingElement>;
export type H3Props = React.HTMLAttributes<HTMLHeadingElement>;
export type H4Props = React.HTMLAttributes<HTMLHeadingElement>;
export type H5Props = React.HTMLAttributes<HTMLHeadingElement>;
export type H6Props = React.HTMLAttributes<HTMLHeadingElement>;
export type PProps = React.HTMLAttributes<HTMLParagraphElement>;
export type LeadProps = React.HTMLAttributes<HTMLParagraphElement>;
export type SmallProps = React.HTMLAttributes<HTMLElement>;
export type BlockquoteProps = React.BlockquoteHTMLAttributes<HTMLQuoteElement>;
export type CodeProps = React.HTMLAttributes<HTMLElement>;
export type PreProps = React.HTMLAttributes<HTMLPreElement>;

// Heading components
export const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className = "", ...props }, ref) => (
    <h1
      ref={ref}
      className={`scroll-mt-20 text-4xl font-bold tracking-tight leading-tight text-chalkboard-foreground md:text-5xl ${className}`}
      {...props}
    />
  )
);
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, H2Props>(
  ({ className = "", ...props }, ref) => (
    <h2
      ref={ref}
      className={`scroll-mt-20 text-3xl font-semibold tracking-tight leading-tight text-chalkboard-foreground md:text-4xl ${className}`}
      {...props}
    />
  )
);
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, H3Props>(
  ({ className = "", ...props }, ref) => (
    <h3
      ref={ref}
      className={`scroll-mt-20 text-2xl font-semibold leading-snug text-chalkboard-foreground md:text-3xl ${className}`}
      {...props}
    />
  )
);
H3.displayName = "H3";

export const H4 = React.forwardRef<HTMLHeadingElement, H4Props>(
  ({ className = "", ...props }, ref) => (
    <h4
      ref={ref}
      className={`scroll-mt-20 text-xl font-semibold leading-snug text-chalkboard-foreground md:text-2xl ${className}`}
      {...props}
    />
  )
);
H4.displayName = "H4";

export const H5 = React.forwardRef<HTMLHeadingElement, H5Props>(
  ({ className = "", ...props }, ref) => (
    <h5
      ref={ref}
      className={`scroll-mt-20 text-lg font-medium leading-normal text-chalkboard-foreground md:text-xl ${className}`}
      {...props}
    />
  )
);
H5.displayName = "H5";

export const H6 = React.forwardRef<HTMLHeadingElement, H6Props>(
  ({ className = "", ...props }, ref) => (
    <h6
      ref={ref}
      className={`scroll-mt-20 text-base font-medium leading-normal text-chalkboard-foreground md:text-lg ${className}`}
      {...props}
    />
  )
);
H6.displayName = "H6";

// Text components
export const P = React.forwardRef<HTMLParagraphElement, PProps>(
  ({ className = "", ...props }, ref) => (
    <p
      ref={ref}
      className={`text-base leading-relaxed text-chalkboard-foreground ${className}`}
      {...props}
    />
  )
);
P.displayName = "P";

export const Lead = React.forwardRef<HTMLParagraphElement, LeadProps>(
  ({ className = "", ...props }, ref) => (
    <p
      ref={ref}
      className={`text-xl leading-relaxed text-chalkboard-primary ${className}`}
      {...props}
    />
  )
);
Lead.displayName = "Lead";

export const Small = React.forwardRef<HTMLElement, SmallProps>(
  ({ className = "", ...props }, ref) => (
    <small
      ref={ref}
      className={`text-sm leading-normal text-chalkboard-foreground ${className}`}
      {...props}
    />
  )
);
Small.displayName = "Small";

// Special components
export const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className = "", ...props }, ref) => (
    <blockquote
      ref={ref}
      className={`my-4 border-l-4 border-chalkboard-primary pl-4 italic text-chalkboard-foreground/80 ${className}`}
      {...props}
    />
  )
);
Blockquote.displayName = "Blockquote";

export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className = "", ...props }, ref) => (
    <code
      ref={ref}
      className={`rounded bg-chalkboard-foreground/10 px-1.5 py-0.5 font-mono text-sm ${className}`}
      {...props}
    />
  )
);
Code.displayName = "Code";

export const Pre = React.forwardRef<HTMLPreElement, PreProps>(
  ({ className = "", ...props }, ref) => (
    <pre
      ref={ref}
      className={`my-4 overflow-x-auto rounded-lg bg-chalkboard-foreground/5 p-4 font-mono text-sm ${className}`}
      {...props}
    />
  )
);
Pre.displayName = "Pre";
