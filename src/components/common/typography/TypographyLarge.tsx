import { FC, PropsWithChildren } from "react";

export const TypographyLarge: FC<PropsWithChildren> = ({children}) => {
    return <div className="text-lg font-semibold">{ children }</div>
};