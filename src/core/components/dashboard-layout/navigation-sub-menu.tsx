import clsx from "clsx"
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom"

interface NavigationSubMenuProps {
    text: string;
    icon: JSX.Element;
    to: string;
}

export const NavigationSubMenu: FC<NavigationSubMenuProps> = ({ text, icon, to }): JSX.Element => {
    return (
        <Link
            className="bg-muted py-1 px-2 hover:bg-gray-200 transition-all duration-100 rounded-sm text-sm flex items-center gap-2 font-medium"
            to={to}
        >
            {icon}
            {text}
        </Link>
    )
}

interface NavigationSubMenuContainerProps extends PropsWithChildren {
    isOpen: boolean;
    isNavlinkActive: boolean;
}

export const NavigationSubMenuContainer:FC<NavigationSubMenuContainerProps> = ({ isOpen, isNavlinkActive, children }) => {

    if (!isOpen ||  !isNavlinkActive ) return (<></>)

    return (
        <>
            {
                isOpen && <div className={clsx("transition-all duration-200 ml-2.5 rounded-sm bg-muted", isNavlinkActive ? "h-full py-2 px-2 border" : "h-0")}>
                    <ul className={clsx("flex flex-col gap-2", isNavlinkActive ? "h-full opacity-1" : "overflow-hidden pointer-events-none h-0")}>
                        {children}
                    </ul>
                </div>
            }
        </>
    )
}

