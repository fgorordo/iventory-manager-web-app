import { Badge } from "@/components/ui/badge"
import { User } from "@/models/users"
import { ColumnDef } from "@tanstack/react-table"
import { CircleCheck, XCircle } from "lucide-react"
import { MoreActions } from "./MoreActions"

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",

    cell: ({ row }) => {
      const user = row.original;
      const formattedId = user.id.split("-")
      return (
        <p className="text-xs font-mono">{formattedId[formattedId.length - 1]}</p>
      )
    },
  },
  {
    accessorKey: "full_name",
    header: "Nombre completo",
    cell: ({row}) => <p className="font-bold">{row.original.full_name}</p>
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Tipo",
    cell: ({ row }) => {
      const user = row.original

      if (user.role === "EMPLOYEE") {
        return <Badge>Empleado</Badge>
      } else if (user.role === "CUSTOMER") {
        return <Badge className="bg-blue-700">Cliente</Badge>
      } else if (user.role === "ADMIN") {
        return <Badge className="bg-yellow-700">Administrador</Badge>
      } else if (user.role === "SUPER_USER") {
        return <Badge className="bg-purple-700">Usuario Maestro</Badge>
      }
    }
  },
  {
    accessorKey: "is_active",
    header: "Estado",
    cell: ({ row }) => {
      const user = row.original
      if (user.is_active) {
        return <Badge className="bg-green-800 items-center">Activo</Badge>
      } else {
        return <Badge className="bg-destructive">Inactivo</Badge>
      }
    },
  },
  {
    accessorKey: "refresh_token_hash",
    header: () => <div className="w-[88px]">Sesión activa</div>,
    cell: ({ row }) => {
      const user = row.original;
      if (user.refresh_token_hash === 'logged-in') {
        return (<div className="w-[88px] flex justify-center"><CircleCheck className="text-green-700" /></div>)
      } else {
        return (<div className="w-[88px] flex justify-center"><XCircle className="text-destructive" /></div>)
      }
    },
  },
  {
    id: "actions",
    header: () => <div className="w-10 text-center">Acciones</div>,
    cell: ({ row }) => {
      const user = row.original
      return (
        <div className="flex justify-center w-10"><MoreActions user={user}/></div>
      )
    },
  }
]