import { LoadingSpinnerMask } from "@/components/loading-state-mask";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster, toast } from "sonner";

export const RootLayout: FC = () => {

    useEffect(() => {
        toast("Toast de prueba inicio de app - Desde Root Layout")
    } , [])

    return (
        <>
            <Outlet />
            <LoadingSpinnerMask />
            <Toaster position="bottom-right"/>
        </>
    )
}