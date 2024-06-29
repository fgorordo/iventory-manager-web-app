import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { AuthGuard } from "@/core/guards";
import { UserInterfaceLayout } from "@/core/layouts/dashboard";

export const appRoutesV1 = createBrowserRouter([
    {
        path: "/",
        element:<><h1 className="text-3xl">Landing Page</h1><hr /></>,
    },
    {
        path: "/login",
        element:<><h1 className="text-3xl">Login Page</h1><hr /></>,
    },
    {
        path: "/dashboard",
        element: <AuthGuard />,
        children: [
            {
                element: <UserInterfaceLayout><Outlet/></UserInterfaceLayout>,
                children: [
                    {
                        path: "/dashboard/",
                        element: <Navigate to={"/dashboard/home"} />,
                    },
                    {
                        path: "/dashboard/home",
                        element:<><h1 className="text-xl">Dashboard - Home</h1><hr /></>,
                    },
                    {
                        path: "/dashboard/users",
                        element: <><h1 className="text-xl">Dashboard - User</h1><hr /></>,
                    }
                ],
            }
        ],
    }
])