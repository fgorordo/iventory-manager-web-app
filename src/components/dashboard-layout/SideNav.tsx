import { navigationModel } from "@/models/navigation";
import { HelpCircle, Settings } from "lucide-react";
import { FC } from "react";
import { AsideNavLink } from "./AsideNavlink";
import { SideNavAppLogo } from "./SideNavAppLogo";
import { PrivateRoutesV1 } from "@/models/routes";

export const SideNav: FC = () => {
    return (
        <aside className="fixed top-0 bottom-0 w-60 z-50 bg-white border-r border-border hidden md:block">
            <SideNavAppLogo />
            <div className="flex justify-between flex-col h-[calc(100vh-64px)]">
                <nav className="px-4 flex flex-col gap-2 py-4">
                    {
                        navigationModel.map(navlink => <AsideNavLink Icon={navlink.Icon} navLinkText={navlink.navLinkText} to={navlink.to} key={navlink.to} />)
                    }
                </nav>
                <nav className="px-4 flex flex-col gap-2 py-4">
                    <AsideNavLink Icon={Settings} navLinkText="Configuraciones" to={PrivateRoutesV1.SETTINGS} />
                    <AsideNavLink Icon={HelpCircle} navLinkText="Ayuda" to={PrivateRoutesV1.HELP} />
                </nav>
            </div>
        </aside>
    )
}