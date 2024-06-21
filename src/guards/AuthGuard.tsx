import { useAuthStore } from "@/hooks/useAuthStore";
import { RootLayoutWithOutlet } from "@/layouts";
import { AuthStatus } from "@/models/auth";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";


export const AuthGuard:FC<PropsWithChildren> = () => {
    const { status } = useAuthStore();
    return status === AuthStatus.AUTHENTICATED ?  <RootLayoutWithOutlet /> : <Navigate replace to={"/auth"}/>
}