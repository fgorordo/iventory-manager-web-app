import { Input } from "@/components/ui/input"
import { Table } from "@tanstack/react-table";

interface DataTableSearchFilterProp {
    table: Table<any>
    placeholder: string;
    filterColumnName: string;
};

export const DataTableSearchFilter: React.FC<DataTableSearchFilterProp> = ({ table, placeholder = "Buscar", filterColumnName}) => {
    return (
        <Input
            placeholder={placeholder}
            value={(table.getColumn(filterColumnName)?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn(filterColumnName)?.setFilterValue(event.target.value)
            }
            className="max-w-xs"
        />
    )
}