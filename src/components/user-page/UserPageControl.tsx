import { Table } from "@tanstack/react-table"
import { ExportTableButton } from "../common/buttons"
import { AddUserButton } from "./AddUserButton"
import { FilterButton } from "./FilterButton"
import { FilterTab } from "./FilterTab"
import { FC } from "react"
import { Input } from "../ui/input"

interface SearchProp {
  table: Table<any>
}

const SearchFilter: FC<SearchProp> = ({ table }) => {
  return (
    <Input
      placeholder="Buscar usuario por nombre"
      value={(table.getColumn("full_name")?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn("full_name")?.setFilterValue(event.target.value)
      }
      className="max-w-xs"
    />
  )
}

interface Props {
  table: Table<any>
}

export const UserPageControl: FC<Props> = ({ table }) => {
  return (
    <div className="flex justify-between">
      <FilterTab table={table} />
      <div className="flex gap-2 items-center w-full justify-end">
        <SearchFilter table={table}/>
        <FilterButton table={table} />
        <ExportTableButton />
        <AddUserButton />
      </div>

    </div>
  )
}