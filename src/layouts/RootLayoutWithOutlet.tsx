import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { LoadingSpinnerMask } from '../components/common/loading-state/LoadingSpinnerMask';

export const RootLayoutWithOutlet: FC = () => {

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