import { ScrollArea } from "@/components/ui/scroll-area"
import { PropsWithChildren } from "react"

export const DataTableScrollArea: React.FC<PropsWithChildren> = ({ children }): React.JSX.Element => {
    return (
        <ScrollArea className='h-[320px] mt-5'>
            {children}
        </ScrollArea>
    )
}