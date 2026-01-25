import { Table, TableColumn, H1, P, CodeExample, Tag, Button } from "chalkboard-ui";

interface User {
  key: string;
  name: string;
  age: number;
  email: string;
  role: string;
}

const users: User[] = [
  { key: "1", name: "Alice Johnson", age: 28, email: "alice@example.com", role: "Developer" },
  { key: "2", name: "Bob Smith", age: 34, email: "bob@example.com", role: "Designer" },
  { key: "3", name: "Carol White", age: 42, email: "carol@example.com", role: "Manager" },
];

const basicColumns: TableColumn<User>[] = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Role", dataIndex: "role", key: "role" },
];

interface Product {
  key: string;
  name: string;
  price: number;
  stock: number;
  status: "available" | "low" | "out";
}

const products: Product[] = [
  { key: "1", name: "Laptop Pro", price: 1299.99, stock: 15, status: "available" },
  { key: "2", name: "Wireless Mouse", price: 49.99, stock: 3, status: "low" },
  { key: "3", name: "USB-C Hub", price: 79.99, stock: 0, status: "out" },
  { key: "4", name: "Mechanical Keyboard", price: 149.99, stock: 8, status: "available" },
];

const customColumns: TableColumn<Product>[] = [
  { title: "Product", dataIndex: "name", key: "name" },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (value) => <span className="font-mono">${(value as number).toFixed(2)}</span>,
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, record) => {
      const statusColors: Record<string, string> = {
        available: "bg-chalkboard-success/20 text-chalkboard-success",
        low: "bg-chalkboard-warning text-chalkboard-foreground",
        out: "bg-chalkboard-error/20 text-chalkboard-error",
      };
      const statusLabels: Record<string, string> = {
        available: "In Stock",
        low: "Low Stock",
        out: "Out of Stock",
      };
      return (
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[record.status]}`}>
          {statusLabels[record.status]}
        </span>
      );
    },
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => alert(`Edit ${record.name}`)}>
          Edit
        </Button>
        <Button size="sm" variant="ghost" onClick={() => alert(`Delete ${record.name}`)}>
          Delete
        </Button>
      </div>
    ),
  },
];

interface Task {
  key: string;
  title: string;
  assignee: string;
  tags: string[];
}

const tasks: Task[] = [
  { key: "1", title: "Implement login flow", assignee: "Alice", tags: ["frontend", "auth"] },
  { key: "2", title: "Design database schema", assignee: "Bob", tags: ["backend", "database"] },
  { key: "3", title: "Write unit tests", assignee: "Carol", tags: ["testing", "qa"] },
];

const taskColumns: TableColumn<Task>[] = [
  { title: "Task", dataIndex: "title", key: "title" },
  { title: "Assignee", dataIndex: "assignee", key: "assignee" },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, record) => (
      <div className="flex flex-wrap gap-1">
        {record.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    ),
  },
];

export function TablePage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Table</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          A flexible table component for displaying tabular data with support for
          custom cell rendering, striped rows, and hover effects.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="Basic Usage"
          code={`interface User {
  key: string;
  name: string;
  age: number;
  email: string;
  role: string;
}

const columns: TableColumn<User>[] = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Role", dataIndex: "role", key: "role" },
];

<Table columns={columns} dataSource={users} />`}
        >
          <Table columns={basicColumns} dataSource={users} />
        </CodeExample>

        <CodeExample
          title="Striped Rows"
          code={`<Table columns={columns} dataSource={users} striped />`}
        >
          <Table columns={basicColumns} dataSource={users} striped />
        </CodeExample>

        <CodeExample
          title="Bordered"
          code={`<Table columns={columns} dataSource={users} bordered />`}
        >
          <Table columns={basicColumns} dataSource={users} bordered />
        </CodeExample>

        <CodeExample
          title="Custom Cell Rendering"
          code={`const columns: TableColumn<Product>[] = [
  { title: "Product", dataIndex: "name", key: "name" },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (value) => <span className="font-mono">\${value.toFixed(2)}</span>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, record) => (
      <span className={statusColors[record.status]}>
        {statusLabels[record.status]}
      </span>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <div className="flex gap-2">
        <Button size="sm" variant="outline">Edit</Button>
        <Button size="sm" variant="ghost">Delete</Button>
      </div>
    ),
  },
];`}
        >
          <Table columns={customColumns} dataSource={products} />
        </CodeExample>

        <CodeExample
          title="With Tags"
          code={`const columns: TableColumn<Task>[] = [
  { title: "Task", dataIndex: "title", key: "title" },
  { title: "Assignee", dataIndex: "assignee", key: "assignee" },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, record) => (
      <div className="flex flex-wrap gap-1">
        {record.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    ),
  },
];`}
        >
          <Table columns={taskColumns} dataSource={tasks} striped />
        </CodeExample>

        <CodeExample
          title="Empty State"
          code={`<Table
  columns={columns}
  dataSource={[]}
  emptyText="No users found"
/>`}
        >
          <Table columns={basicColumns} dataSource={[]} emptyText="No users found" />
        </CodeExample>
      </div>
    </div>
  );
}
