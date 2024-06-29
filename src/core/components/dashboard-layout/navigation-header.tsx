import clsx from "clsx"
import { FC } from "react";
import { Button } from "../ui/button";
import { PanelLeftOpen } from "lucide-react";

interface NavigationHeaderProps {
    isOpen: boolean;
    toggleOpen: () => void;
}

export const NavigationHeader: FC<NavigationHeaderProps> = ({isOpen, toggleOpen}) => {
    return (
        <div className={clsx("w-full flex", isOpen ? "justify-between" : "justify-center")}>
            <h1 className={clsx("text-2xl font-semibold", isOpen ? "" : "w-0 opacity-0 pointer-events-none")}>Inventorium</h1>
            <Button size={"icon"} onClick={toggleOpen} className={clsx("transition-all duration-100", isOpen ? "rotate-180" : "")}>
                <PanelLeftOpen />
            </Button>
        </div>
    )
}