import { DataTable } from "@/components/data-table"
import { User } from "@/models/users"
import { ColumnDef, ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react"

interface UserDataTableProps {
    data: User[],
    columns:ColumnDef<User>[]
}

export const UsersDataTable: React.FC<UserDataTableProps> = ({data, columns}): React.JSX.Element => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const table = useReactTable<User>({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        columnFilters,
      },
  })
    return (
        <>
            <DataTable table={table} columns={columns}/>
        </>
    )
}