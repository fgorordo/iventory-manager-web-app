import { AuthGuard } from "@/guards";
import { AuthPage, LandingPage } from "@/pages";

import { TypographyH1, TypographyMuted } from "@/components/common/typography";
import { DashboardLayout, RootLayoutWithOutlet } from "@/layouts";
import { RouteObject, createBrowserRouter } from "react-router-dom";

export enum AppRoutes {
    LANDING="/",
    AUTH="/auth",
    HOME="/home",
};

const PublicRouterV1: RouteObject  = {
    element: <TypographyH1>Landing Page</TypographyH1>,
    path: "/"
}

const AppRouterV1:RouteObject = {
    element: <RootLayoutWithOutlet />,
    children: [
        {
            path: "/auth",
            element: <AuthPage />
        },
        {
            element:<AuthGuard />,
            children:[
                {
                    element: <DashboardLayout />,
                    children: [
                        {
                            path:"/dashboard",
                            element:<TypographyMuted>Hello from /dashboard</TypographyMuted>
                        },
                        {
                            path:"/users",
                            element:<TypographyMuted>Hello from /users</TypographyMuted>
                        }
                    ],
                },
            ],
        },
    ],
}

export const mainRouterV1 = createBrowserRouter([PublicRouterV1,AppRouterV1]);