import { DataTable, DataTableFilterButton, DataTableScrollArea, DataTableSearchFilter, DataTableTabFilters } from "@/components/data-table"
import { ExportTableButton } from "@/components/export-csv-button"
import { AddUserButton } from "./add-user-button"
import { buttonsFilter, tabFilters } from "@/models/pages/users-page"
import { Table } from "@tanstack/react-table"
import { User } from "@/models/users"
import { userColumns } from "./users-data-table"

interface UsersPageLayoutBody {
    table: Table<User>
}

export const UsersPageLayoutBody: React.FC<UsersPageLayoutBody> = ({ table }): React.JSX.Element => {
    return (
        <>
            <div className='flex gap-5'>
                <DataTableTabFilters filterColumnName='role' table={table} tabs={tabFilters} />
                <DataTableSearchFilter filterColumnName="full_name" placeholder='Buscar por nombre' table={table} />
                <DataTableFilterButton filterColumnName='is_active' buttons={buttonsFilter} table={table} />
                <ExportTableButton />
                <AddUserButton />
            </div>
            <DataTableScrollArea>
                <DataTable table={table} columns={userColumns} />
            </DataTableScrollArea>
        </>
    )
}