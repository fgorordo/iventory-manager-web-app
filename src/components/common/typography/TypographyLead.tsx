import { FC, PropsWithChildren } from "react";

export const TypographyLead: FC<PropsWithChildren> = ({ children }) => {
    return (
        <p className="text-xl text-muted-foreground">
            {children}
        </p>
    );
};