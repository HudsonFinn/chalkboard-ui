# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install              # Install dependencies
bun run dev              # Start docs site (localhost:5173)
bun run build            # Build component library
bun run build:all        # Build library + docs
bun run lint             # Run ESLint
bun run test             # Run Vitest
```

Run commands in specific packages:
```bash
bun run --cwd packages/chalkboard build   # Build library only
bun run --cwd packages/chalkboard dev     # Watch mode for library
bun run --cwd apps/docs dev               # Start docs server
```

## Architecture

This is a Bun monorepo with two workspaces:

- **packages/chalkboard** - The `chalkboard-ui` component library (React + Tailwind CSS)
- **apps/docs** - Vite-powered documentation/showcase site

### Component Library (`packages/chalkboard`)

- Components live in `src/components/` and are exported from `src/index.ts`
- Built with tsup (outputs ESM + TypeScript declarations to `dist/`)
- Uses Tailwind CSS with a custom `chalkboard` color palette
- Peer dependencies: React 18

### Docs Site (`apps/docs`)

- Consumes `chalkboard-ui` as a workspace dependency
- Vite + React + TypeScript
- Tailwind config includes paths to library components for proper style purging
- **IMPORTANT**: Always use components from `chalkboard-ui` instead of native HTML elements. For example:
  - Use `<H1>`, `<H2>`, `<H3>`, etc. instead of `<h1>`, `<h2>`, `<h3>`
  - Use `<P>` instead of `<p>`
  - Use `<Small>` instead of `<small>`
  - Use `<Code>` instead of `<code>`
  - Use `<Pre>` instead of `<pre>`
  - Use `<Blockquote>` instead of `<blockquote>`
  - Use `<Button>` instead of `<button>`
  - This ensures consistent styling and demonstrates the library's components in action

## Adding Components

1. Create component in `packages/chalkboard/src/components/ComponentName.tsx`
2. Export from `packages/chalkboard/src/index.ts`
3. Add demo to `apps/docs/src/App.tsx`
4. Rebuild: `bun run build`

## Documentation Requirements

When adding or modifying components in `packages/chalkboard/src/components/`, always update:

1. **README** (`packages/chalkboard/README.md`) - Add/update component documentation with usage examples and props table
2. **Docs site** (`apps/docs/src/App.tsx`) - Add/update interactive demos showcasing the component
