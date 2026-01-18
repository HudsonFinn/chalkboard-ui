# Chalkboard UI

A React design system built with Tailwind CSS.

## Prerequisites

- [Bun](https://bun.sh) v1.0 or later

## Getting Started

### Installation

```bash
bun install
```

### Development

Start the documentation site:

```bash
bun run dev
```

This launches the Vite-powered docs site at `http://localhost:5173` where you can preview all components.

### Build

Build the component library:

```bash
bun run build
```

Build everything (library + docs):

```bash
bun run build:all
```

### Linting

```bash
bun run lint
```

### Testing

```bash
bun run test
```

## Project Structure

```
chalkboard-ui/
├── packages/
│   └── chalkboard/           # Component library
│       ├── src/
│       │   ├── components/   # UI components
│       │   └── index.ts      # Public exports
│       └── dist/             # Built output
├── apps/
│   └── docs/                 # Documentation site
└── package.json              # Workspace root
```

## Consuming Chalkboard UI

### Install the Package

```bash
# npm
npm install chalkboard-ui

# bun
bun add chalkboard-ui

# yarn
yarn add chalkboard-ui

# pnpm
pnpm add chalkboard-ui
```

### Styles Setup

**Option 1: Import the prebuilt CSS**

Import the bundled stylesheet in your app's entry point:

```tsx
// main.tsx or App.tsx
import "chalkboard-ui/styles.css";
```

**Option 2: Tailwind CSS integration**

If you want to customize styles or use Tailwind's purging, add the library to your `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/chalkboard-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        chalkboard: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### Usage

Import and use components in your React application:

```tsx
import { Button } from "chalkboard-ui";

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
```
## Contributing

### Adding a New Component

1. Create the component in `packages/chalkboard/src/components/`
2. Export it from `packages/chalkboard/src/index.ts`
3. Add a demo to `apps/docs/src/App.tsx`
4. Build and test: `bun run build && bun run dev`

### Package Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start the docs development server |
| `bun run build` | Build the component library |
| `bun run build:all` | Build library and docs site |
| `bun run lint` | Run ESLint |
| `bun run test` | Run tests with Vitest |

### Working in the Monorepo

Run commands in specific packages:

```bash
# Build only the library
bun run --cwd packages/chalkboard build

# Start docs dev server
bun run --cwd apps/docs dev

# Watch mode for library development
bun run --cwd packages/chalkboard dev
```

## License

MIT
