import { LucideProps } from "lucide-react";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";

export interface AsideNavLinkProps {
    to: string;
    navLinkText: string;
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
};

export const AsideNavLink: FC<AsideNavLinkProps> = ({ to, navLinkText, Icon }) => {
    return (
        // <NavLink to={to} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-muted-foreground hover:bg-gray-200 group font-medium transition-all duration-100">
        <NavLink to={to} className={({ isActive }) => (isActive ? "bg-gray-200 flex items-center gap-2 px-2 py-2 rounded-md group font-medium transition-all duration-100 text-sm" : "hover:bg-gray-200 flex items-center gap-2 px-2 py-2 rounded-md group font-medium transition-all duration-100 text-sm")}>
            {
                ({ isActive }) => (
                    isActive
                        ? (
                            <>
                                <Icon className="text-foreground w-5 h-5" />
                                {navLinkText}
                                <span className="sr-only">{navLinkText}</span>
                            </>
                        )
                        : (
                            <>
                                <Icon className="text-muted-foreground w-5 h-5" />
                                {navLinkText}
                                <span className="sr-only">{navLinkText}</span>
                            </>
                        )
                )
            }
        </NavLink>
    );
};