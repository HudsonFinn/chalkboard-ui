import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  H1,
  P,
} from "chalkboard-ui";
import { CodeExample } from "../components/CodeExample";

export function DropdownPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Dropdown Menu</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          Hover-triggered dropdown menus for displaying a list of actions or
          options. Menu items can include icons and disabled states.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="Basic Dropdown"
          code={`<DropdownMenu>
  <DropdownMenuTrigger>
    <Button rightIcon="chevron-down">Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem iconName="edit" onClick={() => alert("Edit")}>
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem iconName="copy" onClick={() => alert("Duplicate")}>
      Duplicate
    </DropdownMenuItem>
    <DropdownMenuItem iconName="trash" onClick={() => alert("Delete")}>
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button rightIcon="chevron-down">Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                iconName="edit"
                onClick={() => alert("Edit clicked")}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                iconName="copy"
                onClick={() => alert("Duplicate clicked")}
              >
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem
                iconName="trash"
                onClick={() => alert("Delete clicked")}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CodeExample>

        <CodeExample
          title="With Disabled Items"
          code={`<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="outline" rightIcon="chevron-down">
      Actions
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem iconName="settings">Settings</DropdownMenuItem>
    <DropdownMenuItem iconName="user">Profile</DropdownMenuItem>
    <DropdownMenuItem disabled iconName="link">
      Disabled Item
    </DropdownMenuItem>
    <DropdownMenuItem>No Icon Item</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" rightIcon="chevron-down">
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem iconName="settings">Settings</DropdownMenuItem>
              <DropdownMenuItem iconName="user">Profile</DropdownMenuItem>
              <DropdownMenuItem disabled iconName="link">
                Disabled Item
              </DropdownMenuItem>
              <DropdownMenuItem>No Icon Item</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CodeExample>

        <CodeExample
          title="Right Alignment"
          code={`<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="secondary" rightIcon="chevron-down">
      Right Aligned
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="right">
    <DropdownMenuItem iconName="home">Home</DropdownMenuItem>
    <DropdownMenuItem iconName="star">Favorites</DropdownMenuItem>
    <DropdownMenuItem iconName="external-link">
      Open in New Tab
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="secondary" rightIcon="chevron-down">
                  Right Aligned
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="right">
                <DropdownMenuItem iconName="home">Home</DropdownMenuItem>
                <DropdownMenuItem iconName="star">Favorites</DropdownMenuItem>
                <DropdownMenuItem iconName="external-link">
                  Open in New Tab
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CodeExample>

        <CodeExample
          title="Different Trigger Styles"
          code={`// Default variant
<DropdownMenu>
  <DropdownMenuTrigger>
    <Button rightIcon="chevron-down">Default</Button>
  </DropdownMenuTrigger>
  ...
</DropdownMenu>

// Outline variant
<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="outline" rightIcon="chevron-down">Outline</Button>
  </DropdownMenuTrigger>
  ...
</DropdownMenu>

// Secondary variant
<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="secondary" rightIcon="chevron-down">Secondary</Button>
  </DropdownMenuTrigger>
  ...
</DropdownMenu>`}
        >
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button rightIcon="chevron-down">Default</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" rightIcon="chevron-down">
                  Outline
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="secondary" rightIcon="chevron-down">
                  Secondary
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
