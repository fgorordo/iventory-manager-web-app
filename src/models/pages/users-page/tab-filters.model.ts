import { DataTableTab } from "@/components/data-table";

export const tabFilters: DataTableTab[] = [
    {
        value: "ALL",
        tabText: "Todos",
        defaultValue: true,
    },
    {
        value: "ADMIN",
        tabText: "Administrador",
    },
    {
        value: "EMPLOYEE",
        tabText: "Empleado",
    },
    {
        value: "CUSTOMER",
        tabText: "Cliente",
    },
];