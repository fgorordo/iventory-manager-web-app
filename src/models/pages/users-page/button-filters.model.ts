import { DataTableButtonFilter } from "@/components/data-table";

export const buttonsFilter: DataTableButtonFilter[] = [
    {
        value: "all",
        buttonText: "Todos",
        defaultValue: true,
    },
    {
        value: true,
        buttonText: "Activos"
    },
    {
        value: false,
        buttonText: "Inactivos"
    }
]