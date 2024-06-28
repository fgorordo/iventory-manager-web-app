import { AuthGuard } from "@/guards";
import { DashboardLayout, RootLayout } from "@/layouts";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { PrivateRoutesV1, PublicRoutesV1 } from "@/models/routes";
import { AuthPage, UsersPage } from "@/pages";


const PublicRouterV1: RouteObject  = {
    element: <h1>Landing Page</h1>,
    path: PublicRoutesV1.LANDING_PAGE
}

const AppRouterV1:RouteObject = {
    element: <RootLayout />,
    children: [
        {
            path: PublicRoutesV1.AUTH,
            element: <AuthPage />
        },
        {
            element:<AuthGuard />,
            children:[
                {
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: PrivateRoutesV1.DASHBOARD,
                            element:<span>Hello from /dashboard</span>
                        },
                        {
                            path: PrivateRoutesV1.PRODUCTS,
                            element: <span>Product Page</span>
                        },
                        {
                            path: PrivateRoutesV1.INVENTORY,
                            element: <span>Inventory Page</span>
                        },
                        {
                            path: PrivateRoutesV1.WHAREHOUSES,
                            element: <span>Wharehouse Page</span>
                        },
                        {
                            path: PrivateRoutesV1.CUSTOMERS,
                            element: <span>Customers Page</span>
                        },
                        {
                            path: PrivateRoutesV1.ORDERS,
                            element: <span>Orders Page</span>
                        },
                        {
                            path: PrivateRoutesV1.USERS,
                            element: <UsersPage />
                        },
                        {
                            path: PrivateRoutesV1.SETTINGS,
                            element:<span>Hello from /settings</span>
                        },
                        {
                            path: PrivateRoutesV1.HELP,
                            element:<span>Hello from /help</span>
                        }
                    ],
                },
            ],
        },
    ],
}

export const mainRouterV1 = createBrowserRouter([PublicRouterV1,AppRouterV1]);