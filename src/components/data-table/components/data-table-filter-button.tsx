import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { ListFilterIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { DataTableButtonFilter } from "../types";

interface DataTableFilterButtonProps {
  table: Table<any>
  filterColumnName: string;
  buttons: DataTableButtonFilter[];
}

export const DataTableFilterButton: React.FC<DataTableFilterButtonProps> = ({ table, filterColumnName, buttons }) => {
  const defaultButton = buttons.find((button:any) => button.defaultValue) || buttons[0]
  const [criteria, setCriteria] = useState<any>(defaultButton.value)

  useEffect(() => {
    if (criteria === defaultButton.value) {
      table.getColumn(filterColumnName)?.setFilterValue("");
    } else {
      table.getColumn(filterColumnName)?.setFilterValue(criteria);
    }
  }, [criteria])


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
        {
          buttons.map((button:any) => <DropdownMenuCheckboxItem checked={criteria === button.value ? true : false} onCheckedChange={() => setCriteria(button.value)} textValue={button.value} key={button.value}>{button.buttonText}</DropdownMenuCheckboxItem>)
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}