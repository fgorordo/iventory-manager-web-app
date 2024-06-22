import { FC } from "react"
import { HeaderBreadcrumb } from "./HeaderBreadcrumb"
import { HeaderSearch } from "./HeaderSearch"
import { UserDropdownMenu } from "./UserDropdownMenu"

export const DashboardHeader: FC = () => {
    return (
        <header className="bg-white fixed right-0 left-0 md:left-60 flex h-16 items-center px-5 z-50 border-b border-border ">
            <HeaderBreadcrumb />
            <HeaderSearch />
            <UserDropdownMenu />
        </header>
    )
}