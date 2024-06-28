import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react";
import { DataTableTab } from "../types";
import { Table } from "@tanstack/react-table";




interface DataTableTabFilters {
    tabs: DataTableTab[];
    table: Table<any>
    filterColumnName: string;
}

export const DataTableTabFilters: React.FC<DataTableTabFilters> = ({tabs, table, filterColumnName}) => {
    const defaultTab = tabs.find(tab => tab.defaultValue) || tabs[0];
    const [active, setActive] = useState(defaultTab.value);

    useEffect(() => {
        if (active === defaultTab.value) {
            table.getColumn(filterColumnName)?.setFilterValue("");
        } else {
            table.getColumn(filterColumnName)?.setFilterValue(active);
        };
        console.log(table.getState())
    }, [active])
    

    return (
        <Tabs defaultValue={defaultTab.value} className="w-[400px]" value={active} onValueChange={setActive}>
            <TabsList>
                <TabsTrigger value={defaultTab.value}>{defaultTab.tabText}</TabsTrigger>
                {
                    tabs.map(tab => !tab.defaultValue ? <TabsTrigger value={tab.value} key={tab.value}>{tab.tabText}</TabsTrigger> : "")
                }
            </TabsList>
        </Tabs>
    );
};