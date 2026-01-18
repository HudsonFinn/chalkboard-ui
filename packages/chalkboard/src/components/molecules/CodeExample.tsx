import * as React from "react";
import { H3, Small, Pre } from "../atoms/Typography";

export interface CodeExampleProps {
  title?: string;
  code: string;
  children: React.ReactNode;
}

export function CodeExample({ title, code, children }: CodeExampleProps) {
  return (
    <div className="rounded-lg border border-chalkboard-border bg-white shadow">
      {title && (
        <div className="border-b border-chalkboard-border px-4 py-3">
          <H3 className="!text-sm !font-medium !md:text-sm">{title}</H3>
        </div>
      )}
      <div className="p-4">
        <div className="mb-4 rounded-lg bg-chalkboard-background p-4">
          {children}
        </div>
        <div>
          <Small className="mb-2 block uppercase tracking-wide text-chalkboard-foreground/60">
            Code
          </Small>
          <Pre className="my-0">{code}</Pre>
        </div>
      </div>
    </div>
  );
}
