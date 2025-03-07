import type { ColumnDef, Table } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/[locale]/test-component/2/_component/_ui/dropdown-menu";
import { Button } from "@/app/[locale]/test-component/2/_component/_ui/button";
import { Input } from "@/app/[locale]/test-component/2/_component/_ui/input";

import { ChevronDown } from "lucide-react";
import RenderTableUI from "@/app/[locale]/test-component/2/_component/RenderTableUI";

import React from "react";

const CommonDataTable = <T,>({
  table,
  columns,
}: {
  table: Table<T>;
  columns: ColumnDef<T>[];
}) => {
  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => {
                      column.toggleVisibility(!!value);
                    }}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <RenderTableUI table={table} columns={columns} />
    </>
  );
};

export default CommonDataTable;
