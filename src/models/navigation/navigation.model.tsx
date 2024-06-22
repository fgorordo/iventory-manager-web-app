import { AsideNavLinkProps } from "@/components/dashboard-layout";
import { Boxes, BriefcaseBusiness, LayoutGrid, Package, ReceiptText, UsersIcon, Warehouse } from "lucide-react";
import { PrivateRoutesV1 } from "../routes";

export const navigationModel: AsideNavLinkProps[] = [
    {
        Icon: LayoutGrid,
        navLinkText: "Dashboard",
        to: PrivateRoutesV1.DASHBOARD,
    },
    {
        Icon: Package,
        navLinkText: "Productos",
        to: PrivateRoutesV1.PRODUCTS,
    },
    {
        Icon: Boxes,
        navLinkText: "Inventario",
        to: PrivateRoutesV1.INVENTORY,
    },
    {
        Icon: Warehouse,
        navLinkText: "Almacenes",
        to: PrivateRoutesV1.WHAREHOUSES,
    },
    {
        Icon: BriefcaseBusiness,
        navLinkText: "Clientes",
        to: PrivateRoutesV1.CUSTOMERS,
    },
    {
        Icon: ReceiptText,
        navLinkText: "Ordenes",
        to: PrivateRoutesV1.ORDERS,
    },
    {
        Icon: UsersIcon,
        navLinkText: "Usuarios",
        to: PrivateRoutesV1.USERS,
    },
]