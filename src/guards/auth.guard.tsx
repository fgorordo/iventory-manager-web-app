import { useAuthStore } from "@/hooks/useAuthStore";
import { RootLayout } from "@/layouts";
import { AuthStatus } from "@/models/auth";
import { PublicRoutesV1 } from "@/models/routes";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";


export const AuthGuard:FC<PropsWithChildren> = () => {
    const { status } = useAuthStore();
    return status === AuthStatus.AUTHENTICATED ?  <RootLayout /> : <Navigate replace to={PublicRoutesV1.AUTH}/>
}