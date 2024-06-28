import { useUserStore } from '@/hooks';
import { UsersPageLayout } from '@/layouts';
import { User } from '@/models/users';
import { ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useState } from 'react';



import { UsersPageLayoutBody, userColumns } from './components';
import { DataTablePagination } from '@/components/data-table';

export const UsersPage: React.FC = (): React.JSX.Element => {

    const { startOnLoadUsers, users_data } = useUserStore()
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
        <UsersPageLayout
            layoutBody={<UsersPageLayoutBody table={table} />}
            layoutFooter={<DataTablePagination table={table} />}
        />
    )
}