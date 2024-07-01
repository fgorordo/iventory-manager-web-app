import { LayoutNavigationObject } from "@/core/models";
import clsx from "clsx";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { NavigationSubMenu, NavigationSubMenuContainer } from "./navigation-sub-menu";

interface NavigationMenuProps {
    text?: string;
    icon?: JSX.Element;
    to?: string;
    isOpen: boolean;
    subMenues?: LayoutNavigationObject[];
}


export const NavigationMenu: FC<NavigationMenuProps> = ({ text, icon, isOpen, to = "#", subMenues }): JSX.Element => {
    const [isNavlinkActive, setIsNavlinkActive] = useState(false)

    return (
        <>
            <NavLink to={to} className={({ isActive }) => `flex gap-1.5 ${isActive ? setIsNavlinkActive(true) : setIsNavlinkActive(false)}`}>
                <div className={clsx("w-1.5 h-full transition-all duration-100", isNavlinkActive ? "bg-black" : "bg-gray-400")}>
                </div>
                <Button size={isOpen ? "default" : "icon"} variant={isNavlinkActive ? "default" : "ghost"} className={clsx("", isOpen ? "w-full justify-start gap-2" : "")}>
                    {icon}
                    <span className={clsx("", isOpen ? "" : "hidden")}>{text}</span>
                </Button>
            </NavLink>
            {
                subMenues && (
                    <NavigationSubMenuContainer isNavlinkActive={isNavlinkActive} isOpen={isOpen}>
                        {
                            subMenues.map(item => <NavigationSubMenu icon={item.icon} text={item.text} to={item.to} />)
                        }
                    </NavigationSubMenuContainer>
                )
            }
        </>
    )
}