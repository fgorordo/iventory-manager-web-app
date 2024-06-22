import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table } from "@tanstack/react-table";
import { FC, useState } from "react";

interface Props {
    table: Table<any>
}

export const FilterTab: FC<Props> = ({table}) => {
    const [currentTab, setCurrentTab] = useState<string>("ALL")

    const handleTabFilter = (value:string) => {
        if (value === "ALL") {
            setCurrentTab("ALL")
            return table.getColumn("role")?.setFilterValue("")
        } else if (value === "EMPLOYEE") {
            setCurrentTab("EMPLOYEE")
            return table.getColumn("role")?.setFilterValue("EMPLOYEE")
        } else if (value === "CUSTOMER") {
            setCurrentTab("CUSTOMER")
            return table.getColumn("role")?.setFilterValue("CUSTOMER")
        }
    };

    return (
        <Tabs defaultValue="all" className="w-[400px]" onValueChange={handleTabFilter} value={currentTab}>
            <TabsList>
                <TabsTrigger value="ALL">Todos</TabsTrigger>
                <TabsTrigger value="EMPLOYEE">Empleados</TabsTrigger>
                <TabsTrigger value="CUSTOMER">Clientes</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}