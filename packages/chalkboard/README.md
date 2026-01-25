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
<Button variant="ghost">Ghost</Button>
<Button variant="ghost" icon="menu" aria-label="Menu" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary"` \| `"secondary"` \| `"outline"` \| `"ghost"` | `"primary"` | Visual style |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Button size |
| `icon` | `IconName` | - | Icon for icon-only buttons (children optional) |
| `leftIcon` | `IconName` | - | Icon before text |
| `rightIcon` | `IconName` | - | Icon after text |

### Input

A text input component for collecting user input with focus highlighting.

```tsx
import { Input } from "chalkboard-ui";

<Input placeholder="Enter your name" />
<Input defaultValue="John Doe" />
<Input size="lg" placeholder="Large input" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | - | Placeholder text |
| `defaultValue` | `string` | - | Default input value |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Input size |
| `disabled` | `boolean` | `false` | Disable the input |
| `type` | `string` | `"text"` | Input type (text, email, password, etc.) |

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

### Preview

Preview cards for linking to other pages or triggering actions. Commonly used for component showcases, feature highlights, or navigation cards.

```tsx
import {
  Preview,
  PreviewHeader,
  PreviewDescription,
  PreviewContent,
} from "chalkboard-ui";

// With href (renders as anchor)
<Preview href="/components/button">
  <PreviewHeader title="Button" />
  <PreviewDescription>Buttons with variants and sizes.</PreviewDescription>
  <PreviewContent>
    <Button>Click me</Button>
  </PreviewContent>
</Preview>

// With onClick callback
<Preview onClick={() => console.log("clicked")}>
  <PreviewHeader title="Action Card" />
  <PreviewDescription>Click to trigger an action.</PreviewDescription>
</Preview>

// With custom link component (e.g., react-router)
import { Link } from "react-router-dom";

<Preview as={Link} href="/button">
  <PreviewHeader title="Button" />
  <PreviewDescription>Client-side navigation.</PreviewDescription>
</Preview>

// Without interaction (static card)
<Preview>
  <PreviewHeader title="Info Card" showArrow={false} />
  <PreviewDescription>A non-interactive preview.</PreviewDescription>
</Preview>
```

**Preview Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `React.ElementType` | `"a"` | Custom component to render (e.g., react-router's Link) |
| `href` | `string` | - | URL to navigate to (passed as `to` when using custom component) |
| `onClick` | `() => void` | - | Click handler (alternative to href) |
| `className` | `string` | `""` | Additional classes |

**PreviewHeader Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Title text for the preview |
| `showArrow` | `boolean` | `true` | Whether to show the animated arrow icon |
| `className` | `string` | `""` | Additional classes |

**PreviewDescription Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | required | Description text |
| `className` | `string` | `""` | Additional classes |

**PreviewContent Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | required | Content to render |
| `className` | `string` | `""` | Additional classes |

### Table

A flexible table component for displaying tabular data with support for custom cell rendering.

```tsx
import { Table, TableColumn } from "chalkboard-ui";

interface User {
  key: string;
  name: string;
  age: number;
  email: string;
}

const columns: TableColumn<User>[] = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Email", dataIndex: "email", key: "email" },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Button size="sm" onClick={() => alert(record.name)}>
        View
      </Button>
    ),
  },
];

const users: User[] = [
  { key: "1", name: "Alice", age: 28, email: "alice@example.com" },
  { key: "2", name: "Bob", age: 34, email: "bob@example.com" },
];

<Table columns={columns} dataSource={users} />
<Table columns={columns} dataSource={users} striped />
<Table columns={columns} dataSource={users} bordered />
```

**Table Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `TableColumn<T>[]` | required | Column definitions |
| `dataSource` | `T[]` | required | Data array (each item must have a `key` property) |
| `striped` | `boolean` | `false` | Show alternating row backgrounds |
| `hoverable` | `boolean` | `true` | Show hover effect on rows |
| `bordered` | `boolean` | `false` | Show cell borders |
| `emptyText` | `ReactNode` | `"No data"` | Content shown when dataSource is empty |

**TableColumn:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | `string` | Yes | Column header text |
| `key` | `string` | Yes | Unique identifier for the column |
| `dataIndex` | `keyof T` | No | Key to access value from each row |
| `render` | `(value, record, index) => ReactNode` | No | Custom render function |

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

### Navbar

A responsive sidebar navigation component with mobile menu support.

```tsx
import { Navbar } from "chalkboard-ui";

const sections = {
  "": [{ href: "/", label: "Home", icon: "home" }],
  "Components": [
    { href: "/button", label: "Button", icon: "plus" },
    { href: "/input", label: "Input", icon: "edit" },
  ],
  "Patterns": [
    { href: "/forms", label: "Forms" },
    { href: "/layouts", label: "Layouts" },
  ],
};

<Navbar
  title="My App"
  footer="© 2024 My Company"
  sections={sections}
/>

// With react-router
import { Link, useLocation } from "react-router-dom";

function AppNavbar() {
  const location = useLocation();

  return (
    <Navbar
      title="My App"
      sections={sections}
      linkComponent={Link}
      isActive={(href) => location.pathname === href}
    />
  );
}
```

**Navbar Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Title displayed in the header |
| `footer` | `string` | - | Footer text displayed at the bottom |
| `sections` | `Record<string, NavbarItem[]>` | required | Navigation sections (keys are titles, empty string for no title) |
| `linkComponent` | `React.ElementType` | `"a"` | Custom link component (e.g., react-router's Link) |
| `isActive` | `(href: string) => boolean` | - | Callback to determine if an item is active |
| `onItemClick` | `(href: string) => void` | - | Callback when a nav item is clicked |
| `className` | `string` | `""` | Additional classes |
| `defaultCollapsed` | `boolean` | `false` | When true, the navbar starts collapsed even on desktop and can be toggled |

**NavbarItem:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Yes | Display text for the nav item |
| `href` | `string` | Yes | URL to navigate to |
| `icon` | `IconName` | No | Icon to display before the label |

## Requirements

- React 18+

## License

MIT
