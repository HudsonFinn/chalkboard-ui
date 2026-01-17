# Chalkboard UI

A React component library built with Tailwind CSS.

## Installation

```bash
npm install chalkboard-ui
```

## Setup

**Option 1: Import the prebuilt CSS**

```tsx
// main.tsx or App.tsx
import "chalkboard-ui/styles.css";
```

**Option 2: Tailwind CSS integration**

Add the library to your `tailwind.config.ts`:

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

## Usage

```tsx
import { Button } from "chalkboard-ui";

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}
```

## Components

### Button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary"` \| `"secondary"` \| `"outline"` | `"primary"` | Visual style |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Button size |

### DropdownMenu

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "chalkboard-ui";

<DropdownMenu>
  <DropdownMenuTrigger>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onSelect={() => console.log("Edit")}>
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem onSelect={() => console.log("Delete")}>
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Requirements

- React 18+

## License

MIT
