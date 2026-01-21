# Chalkboard UI

A React component library built with Tailwind CSS.

[chalkboard.finlayhu.com](https://chalkboard.finlayhu.com)

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

**Option 2: Tailwind CSS integration (recommended)**

Use the library's Tailwind config as a preset to automatically inherit all theme settings (colors, fonts, animations):

```ts
import type { Config } from "tailwindcss";
import chalkboardConfig from "chalkboard-ui/tailwind.config";

const config: Config = {
  presets: [chalkboardConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/chalkboard-ui/dist/**/*.js",
  ],
  plugins: [],
};

export default config;
```

You'll also need to import the styles for the fonts:

```tsx
// main.tsx or App.tsx
import "chalkboard-ui/styles.css";
```

## Usage

```tsx
import { Button, H1, P, Code } from "chalkboard-ui";

function App() {
  return (
    <div>
      <H1>Welcome</H1>
      <P>Get started with <Code>chalkboard-ui</Code> components.</P>
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}
```

## Components

### Icon

```tsx
import { Icon } from "chalkboard-ui";

<Icon name="search" />
<Icon name="info" size="sm" />
<Icon name="warning" size="lg" className="text-red-500" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | required | Icon identifier |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Icon size (16px, 20px, 24px) |
| `className` | `string` | `""` | Additional classes |

**Available icons:** `search`, `menu`, `close`, `chevron-down`, `chevron-right`, `arrow-left`, `arrow-right`, `external-link`, `edit`, `trash`, `copy`, `settings`, `plus`, `minus`, `info`, `warning`, `error`, `check`, `mail`, `link`, `user`, `home`, `star`

### Button

```tsx
import { Button } from "chalkboard-ui";

<Button leftIcon="search">Search</Button>
<Button rightIcon="arrow-right">Next</Button>
<Button leftIcon="plus" rightIcon="chevron-down">Add Item</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary"` \| `"secondary"` \| `"outline"` | `"primary"` | Visual style |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Button size |
| `leftIcon` | `IconName` | - | Icon before text |
| `rightIcon` | `IconName` | - | Icon after text |

### Tag

Tags are used to label and categorize content such as blog posts, products, or tasks.

```tsx
import { Tag } from "chalkboard-ui";

<Tag>Travel</Tag>
<Tag icon="star">Featured</Tag>
<Tag icon="user">Author</Tag>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconName` | - | Optional icon before text |
| `className` | `string` | `""` | Additional classes |

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
    <DropdownMenuItem iconName="edit" onClick={() => console.log("Edit")}>
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem iconName="trash" onClick={() => console.log("Delete")}>
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

**DropdownMenuItem Props:**

| Prop | Type | Description |
|------|------|-------------|
| `iconName` | `IconName` | Icon to display |
| `onClick` | `() => void` | Click handler |
| `disabled` | `boolean` | Disable the item |

### Typography

A set of semantic typography components with responsive sizing and consistent styling.

```tsx
import { H1, H2, H3, P, Lead, Small, Blockquote, Code, Pre } from "chalkboard-ui";

<H1>Main Heading</H1>
<H2>Section Heading</H2>
<Lead>Introductory text that stands out from body copy.</Lead>
<P>Regular paragraph with <Code>inline code</Code> support.</P>
<Small>Caption or fine print text.</Small>
<Blockquote>"A memorable quote."</Blockquote>
<Pre>{`const code = "block";`}</Pre>
```

**Components:**

| Component | Element | Description |
|-----------|---------|-------------|
| `H1` - `H6` | `<h1>` - `<h6>` | Headings with responsive sizing |
| `P` | `<p>` | Standard paragraph text |
| `Lead` | `<p>` | Larger introductory text |
| `Small` | `<small>` | Captions and fine print |
| `Blockquote` | `<blockquote>` | Quoted content with left border |
| `Code` | `<code>` | Inline code snippets |
| `Pre` | `<pre>` | Code blocks |

All typography components accept standard HTML attributes and support `className` for style overrides.

## Requirements

- React 18+

## License

MIT
