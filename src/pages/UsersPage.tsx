
import { UserPageControl, UserTable } from "@/components/user-page";
import { useEffect, useState } from "react";
import { useUserStore } from '../hooks/useUserStore';
import { userColumns } from "@/components/user-page/data-table";
import { ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { User } from "@/models/users";


export const UsersPage = () => {
  const {startOnLoadUsers, users_data} = useUserStore()
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable<User>({
    data: users_data,
    columns: userColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
})
  useEffect(() => {
    startOnLoadUsers()
  }, [])
  

  return (
    <div className="flex flex-col gap-3">
      <UserPageControl table={table}/>
      <UserTable table={table}/>
    </div>
  )
}