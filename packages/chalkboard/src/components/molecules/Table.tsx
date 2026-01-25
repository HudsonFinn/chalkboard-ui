import * as React from "react";

export interface TableColumn<T> {
  /** Column header text */
  title: string;
  /** Key to access the data value from each row */
  dataIndex?: keyof T;
  /** Unique identifier for the column */
  key: string;
  /** Optional custom render function */
  render?: (value: T[keyof T] | undefined, record: T, index: number) => React.ReactNode;
}

export interface TableProps<T extends { key: string | number }>
  extends Omit<React.TableHTMLAttributes<HTMLTableElement>, "children"> {
  /** Column definitions */
  columns: TableColumn<T>[];
  /** Data source array - each item must have a unique 'key' property */
  dataSource: T[];
  /** Show striped rows */
  striped?: boolean;
  /** Show hover effect on rows */
  hoverable?: boolean;
  /** Make table borders more visible */
  bordered?: boolean;
  /** Content to display when dataSource is empty */
  emptyText?: React.ReactNode;
}

export function Table<T extends { key: string | number }>({
  columns,
  dataSource,
  striped = false,
  hoverable = true,
  bordered = false,
  emptyText = "No data",
  className = "",
  ...props
}: TableProps<T>) {
  const baseTableStyles = "w-full text-left text-chalkboard-foreground";

  const headerCellStyles = `px-4 py-3 font-semibold text-sm text-chalkboard-foreground bg-chalkboard-foreground/5 border-b border-chalkboard-foreground/20 ${
    bordered ? "border-r border-chalkboard-foreground/20 last:border-r-0" : ""
  }`;

  const bodyCellStyles = `px-4 py-3 text-sm border-b border-chalkboard-foreground/10 last-of-type:[tr:last-child_&]:border-b-0 ${
    bordered ? "border-r border-chalkboard-foreground/20 last:border-r-0" : ""
  }`;

  const getRowStyles = (index: number) => {
    const styles: string[] = [];
    if (striped && index % 2 === 1) {
      styles.push("bg-chalkboard-foreground/[0.02]");
    }
    if (hoverable) {
      styles.push("hover:bg-chalkboard-foreground/[0.04] transition-colors");
    }
    return styles.join(" ");
  };

  return (
    <div className="overflow-x-auto overflow-hidden rounded-lg border border-chalkboard-foreground/20">
      <table
        className={`${baseTableStyles} ${className}`}
        {...props}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={headerCellStyles}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={`${bodyCellStyles} text-center text-chalkboard-foreground/60`}
              >
                {emptyText}
              </td>
            </tr>
          ) : (
            dataSource.map((record, rowIndex) => (
              <tr key={record.key} className={getRowStyles(rowIndex)}>
                {columns.map((column) => {
                  const value = column.dataIndex
                    ? record[column.dataIndex]
                    : undefined;

                  return (
                    <td key={column.key} className={bodyCellStyles}>
                      {column.render
                        ? column.render(value, record, rowIndex)
                        : (value as React.ReactNode) ?? ""}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

Table.displayName = "Table";
