import { TypographyMuted, TypographyLarge } from "@/components/common/typography";
import { HeaderBreadcrumb, HeaderSearch, UserDropdownMenu } from "@/components/dashboard-layout";

import { Link, Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  const ASIDE_WIDTH = "240px"
  const HEADER_HEIGHT = "64px";

  return (
    <div className="flex">
      <aside className={`fixed top-0 w-[${ASIDE_WIDTH}] h-screen flex py-5 px-4 border-r-2`}>
        <Link to="/"><TypographyLarge>Inventory Manager</TypographyLarge><TypographyMuted>Gestor de inventarios</TypographyMuted></Link>
      </aside>
      <div>
        <header className={`border-b-2 flex items-center justify-center fixed right-0 w-[calc(100%-${ASIDE_WIDTH})] h-[${HEADER_HEIGHT}] pr-8 pl-4`}>
          <HeaderBreadcrumb />
          <HeaderSearch />
          <UserDropdownMenu />
        </header>
        <main className={`mt-[${HEADER_HEIGHT}] ml-[${ASIDE_WIDTH}] py-4 pl-4 pr-8`}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}