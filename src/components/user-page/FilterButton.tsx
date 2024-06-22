import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { ListFilterIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";

interface Props {
    table: Table<any>
}

export const FilterButton: FC<Props> = ({table}) => {

    const resetStatusFilter = () => {
        return table.getColumn("is_active")?.setFilterValue("")
    }

    const setActiveUsersFilter = () => {
        return table.getColumn("is_active")?.setFilterValue(true)
    }

    const setInactiveUsersFilter = () => {
        return table.getColumn("is_active")?.setFilterValue(false)
    } 

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-10 gap-1">
                    <ListFilterIcon className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filtro</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={table.getState().columnFilters.length === 0 ? true : false} onCheckedChange={resetStatusFilter}>Todos</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={table.getState().columnFilters[0]?.id === "is_active" && table.getState().columnFilters[0].value === true ? true : false} onCheckedChange={setActiveUsersFilter}>Activos</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={table.getState().columnFilters[0]?.id === "is_active" && table.getState().columnFilters[0].value === false ? true : false} onCheckedChange={setInactiveUsersFilter}>Suspendidos</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}