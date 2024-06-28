import {
    Table,
    flexRender,
    ColumnDef
} from "@tanstack/react-table";

import {
    Table as TableRoot,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SearchX } from "lucide-react";

interface Props {
    table: Table<any>;
    columns: ColumnDef<any>[]
    emptyState?: React.JSX.Element | React.JSX.Element[]
}

export const DataTable: React.FC<Props> = ({ table, columns, emptyState }): React.JSX.Element => {

    return (
        <div className="rounded-md border">
            <TableRoot>
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
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
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
                            <TableCell colSpan={columns.length} className="h-96 text-center">
                                {
                                    emptyState
                                    ? (emptyState)
                                    : (
                                        <div className="border-2 h-full flex items-center justify-center flex-col border-dashed">
                                            <SearchX className="w-10 h-10 mx-auto text-muted-foreground" />
                                            <p className="text-muted-foreground mt-4">No se encontraron resultados para esta busqueda.</p>
                                        </div>
                                    )
                                }
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </TableRoot>
        </div>
    )
}