import { FC } from "react";


import clsx from "clsx";
import { NavigationHeader } from "./navigation-header";
import { NavigationMenu } from "./navigation-menu";
import { LAYOUT_NAVIGATION_ROOT } from "@/core/models";



interface LayoutAsideNavigationProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const LayoutAsideNavigation: FC<LayoutAsideNavigationProps> = ({ isOpen, toggleOpen }): JSX.Element => {
  return (
    <aside className={clsx("bg-background  fixed top-0 left-0 bottom-0 flex flex-col gap-5 py-2 transition-all duration-100", isOpen ? "w-60" : "w-14")}>
      <NavigationHeader isOpen={isOpen} toggleOpen={toggleOpen} />
      <nav className={"flex flex-col gap-2 pr-2"}>
        {
          LAYOUT_NAVIGATION_ROOT.map(item => <NavigationMenu isOpen={isOpen} to={item.to} text={item.text} icon={item.icon} key={item.to} subMenues={item.subMenues}/>)
        }
      </nav>
    </aside>
  );
};