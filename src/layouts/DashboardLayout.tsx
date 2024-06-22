import { DashboardHeader, SideNav } from "@/components/dashboard-layout";

import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="">
      <SideNav />
      <div className="md:ml-60">
        <DashboardHeader />
        <main className="pt-20 px-5 pb-5 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}