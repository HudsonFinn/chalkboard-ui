import { Pre } from "chalkboard-ui";

interface CodeExampleProps {
  title?: string;
  code: string;
  children: React.ReactNode;
}

export function CodeExample({ title, code, children }: CodeExampleProps) {
  return (
    <div className="rounded-lg border border-chalkboard-border bg-white shadow">
      {title && (
        <div className="border-b border-chalkboard-border px-4 py-3">
          <h3 className="text-sm font-medium text-chalkboard-foreground">
            {title}
          </h3>
        </div>
      )}
      <div className="p-4">
        <div className="mb-4 rounded-lg bg-chalkboard-background p-4">
          {children}
        </div>
        <div>
          <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-chalkboard-foreground/60">
            Code
          </span>
          <Pre>{code}</Pre>
        </div>
      </div>
    </div>
  );
}
