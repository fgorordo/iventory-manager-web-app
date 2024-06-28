import { FC } from "react"
import { HeaderBreadcrumb } from "./header-breadcrumb"
import { HeaderSearch } from "./header-search"
import { UserDropdownMenu } from "./user-dropdown-menu"

export const DashboardHeader: FC = () => {
    return (
        <header className="bg-white fixed right-0 left-0 md:left-60 flex h-16 items-center px-5 z-50 border-b border-border ">
            <HeaderBreadcrumb />
            <HeaderSearch />
            <UserDropdownMenu />
        </header>
    )
}