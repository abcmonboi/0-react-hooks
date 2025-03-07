import {
  TableBody,
  TableCell,
  Table as TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/[locale]/test-component/_component/tableui";

import { type ColumnDef, type Table, flexRender } from "@tanstack/react-table";
import React from "react";

const RenderTableUI = <T,>({
  table,
  columns,
}: {
  table: Table<T>;
  columns: ColumnDef<T>[];
}) => {
  return (
    <div className="rounded-md border">
      <TableContainer>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableContainer>
    </div>
  );
};

export default RenderTableUI;
