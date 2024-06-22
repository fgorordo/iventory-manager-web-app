import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";
import { FC } from "react";

export const ExportTableButton: FC = () => {
    return (
        <Button size="sm" variant="outline" className="h-10 gap-1">
            <FileIcon className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Exportar</span>
        </Button>
    )
}