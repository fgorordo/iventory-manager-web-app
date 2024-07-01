import { BellDot, Boxes, ChevronsLeft, ChevronsRight, History, Home, Package, PackageMinus, PackageOpen, PackagePlus, PackageSearch, PackageX, UserRoundMinus, UserRoundPlus, UserRoundSearch, UserRoundX, Users } from "lucide-react";

export interface LayoutNavigationObject {
  text: string;
  to: string;
  icon: JSX.Element,
  subMenues?: LayoutNavigationObject[]
}

export const LAYOUT_NAVIGATION_ROOT :LayoutNavigationObject[] = [
    {
      text: "Inicio",
      to: "/dashboard/home",
      icon: <Home />,
    },
    {
      text: "Productos",
      to: "/dashboard/products",
      icon: <Package />,
      subMenues: [
        {
          text: "Ver todos los productos",
          to: "#",
          icon: <PackageSearch />,
        },
        {
          text: "Añadir un producto",
          to: "#",
          icon: <PackagePlus />,
        },
        {
          text: "Editar un producto",
          to: "#",
          icon: <PackageOpen />,
        },
        {
          text: "Pausar un producto",
          to: "#",
          icon: <PackageX />
        },
        {
          text: "Eliminar un producto",
          to: "#",
          icon: <PackageMinus />
        }, 
      ]
    },
    {
      text: "Inventario",
      to: "/dashboard/inventory",
      icon: <Boxes />,
      subMenues: [
        {
          text: "Registrar entrada",
          to: "#",
          icon: <ChevronsRight />,
        },
        {
          text: "Registrar sálida",
          to: "#",
          icon: <ChevronsLeft />,
        },
        {
          text: "Historial de inventario",
          to: "#",
          icon: <History />,
        },
        {
          text: "Alarmas de stock",
          to: "#",
          icon: <BellDot />,
        },
      ]
    },
    {
      text: "Usuarios",
      to: "/dashboard/users",
      icon: <Users />,
      subMenues: [
        {
          text: "Ver todos los usuarios",
          to: "/dashboard/users",
          icon: <UserRoundSearch />,
        },
        {
          text: "Añadir un usuario",
          to: "/dashboard/users",
          icon: <UserRoundPlus />,
        },
        {
          text: "Suspender un usuario",
          to: "/dashboard/users",
          icon: <UserRoundMinus />,
        },
        {
          text: "Eliminar un usuario",
          to: "/dashboard/users",
          icon: <UserRoundX />,
        },
      ]
    },
   
  ]