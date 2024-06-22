import { Boxes } from "lucide-react";
import { FC } from "react";

export const SideNavAppLogo: FC = () => {
    return (
        <div className="flex items-center gap-2 h-16 px-4 border-b border-border">
            <span className="bg-foreground rounded-full px-2 py-2">
                <Boxes className="w-4 h-4 text-background" />
            </span>
            <div className="">
                <h1 className="text-lg font-semibold">Inventorium</h1>
            </div>
        </div>
    );
};