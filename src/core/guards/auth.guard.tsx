import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard: FC = (): JSX.Element => {
    const user = true;
    return user ? <Outlet /> : <Navigate replace to={"/login"} />;
};