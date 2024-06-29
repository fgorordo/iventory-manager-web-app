import { FC } from "react";


import clsx from "clsx";
import { NavigationHeader } from "./navigation-header";
import { NavigationMenu } from "./navigation-menu";
import { Home, Users } from "lucide-react";

interface LayoutAsideNavigationProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const LayoutAsideNavigation: FC<LayoutAsideNavigationProps> = ({ isOpen, toggleOpen }): JSX.Element => {
  return (
    <aside className={clsx("bg-background  fixed top-0 left-0 bottom-0 flex flex-col gap-5 py-2 transition-all duration-100", isOpen ? "w-60" : "w-14")}>
      <NavigationHeader isOpen={isOpen} toggleOpen={toggleOpen}/>
      <nav className={"flex flex-col gap-2 pr-2"}>
        <NavigationMenu isOpen={isOpen} to="/dashboard/users" text={"Usuarios"} icon={<Users />}/>
        <NavigationMenu isOpen={isOpen} to="/dashboard/home" text="Inicio" icon={<Home />}/>
      </nav>
    </aside>
  );
};