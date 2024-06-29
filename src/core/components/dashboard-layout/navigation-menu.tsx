import { FC, useState } from "react"
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Users } from "lucide-react";

interface NavigationMenuProps {
    text?: string;
    icon?: JSX.Element;
    to?: string;
    isOpen: boolean;
}

export const NavigationMenu: FC<NavigationMenuProps> = ({ text, icon, isOpen, to = "#" }): JSX.Element => {
    const [isNavlinkActive, setIsNavlinkActive] = useState(false)
    
    return (
        <NavLink to={to} className={({isActive}) => `flex gap-1.5 ${isActive ? setIsNavlinkActive(true) : setIsNavlinkActive(false)}`}>
            <div className={clsx("w-1 h-full transition-all duration-100 bg-black", isNavlinkActive ? "bg-black" : "bg-transparent")}>
            </div>
            <Button size={isOpen ? "default" : "icon"} variant={isNavlinkActive ? "default" : "ghost"} className={clsx("", isOpen ? "w-full justify-start gap-2" : "")}>
                {icon}
                <span className={clsx("", isOpen ? "" : "hidden")}>{text}</span>
            </Button>
        </NavLink>
    )
}