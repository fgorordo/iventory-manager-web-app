import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";



import { User } from "@/models/users";
import { Table } from "@tanstack/react-table";
import { FC } from "react";
import { DataTable, DataTablePagination } from "../common/data-table";
import { ScrollArea } from "../ui/scroll-area";
import { userColumns } from "./data-table";

interface Props {
    table: Table<User>
}

export const UserTable: FC<Props> = ({ table }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Usuarios</CardTitle>
                <CardDescription>Controla, administra y genera usuarios para tus clientes o empleados.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[calc(100vh-360px)]">
                    <DataTable table={table} columns={userColumns} />
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <DataTablePagination table={table}/>
            </CardFooter>
        </Card >
    );
};