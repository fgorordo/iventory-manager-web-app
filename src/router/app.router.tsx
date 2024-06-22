import { AuthGuard } from "@/guards";
import { AuthPage, CustomersPage, InventoryPage, OrdersPage, ProductsPage, UsersPage, WharehousesPage } from "@/pages";

import { TypographyH1, TypographyMuted } from "@/components/common/typography";
import { DashboardLayout, RootLayoutWithOutlet } from "@/layouts";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { PrivateRoutesV1, PublicRoutesV1 } from "@/models/routes";


const PublicRouterV1: RouteObject  = {
    element: <TypographyH1>Landing Page</TypographyH1>,
    path: PublicRoutesV1.LANDING_PAGE
}

const AppRouterV1:RouteObject = {
    element: <RootLayoutWithOutlet />,
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
                            element:<TypographyMuted>Hello from /dashboard</TypographyMuted>
                        },
                        {
                            path: PrivateRoutesV1.PRODUCTS,
                            element: <ProductsPage />
                        },
                        {
                            path: PrivateRoutesV1.INVENTORY,
                            element: <InventoryPage />
                        },
                        {
                            path: PrivateRoutesV1.WHAREHOUSES,
                            element: <WharehousesPage />
                        },
                        {
                            path: PrivateRoutesV1.CUSTOMERS,
                            element: <CustomersPage />
                        },
                        {
                            path: PrivateRoutesV1.ORDERS,
                            element: <OrdersPage />
                        },
                        {
                            path: PrivateRoutesV1.USERS,
                            element: <UsersPage />
                        },
                        {
                            path: PrivateRoutesV1.SETTINGS,
                            element:<TypographyMuted>Hello from /settings</TypographyMuted>
                        },
                        {
                            path: PrivateRoutesV1.HELP,
                            element:<TypographyMuted>Hello from /help</TypographyMuted>
                        }
                    ],
                },
            ],
        },
    ],
}

export const mainRouterV1 = createBrowserRouter([PublicRouterV1,AppRouterV1]);