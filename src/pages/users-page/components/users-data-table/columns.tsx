import { User } from "@/models/users"
import { ColumnDef } from "@tanstack/react-table";
import { FullNameRow, IdRow, RoleBadgeRow, SessionStatusBadgeRow, StatusBadgeRow } from "./rows";
import { ActionsRow } from "./row-actions";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",

    cell: ({ row }) => <IdRow row={row}/>,
  },
  {
    accessorKey: "full_name",
    header: "Nombre completo",
    cell: ({row}) => <FullNameRow row={row}/>
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Tipo",
    cell: ({ row }) => <RoleBadgeRow row={row}/>
  },
  {
    accessorKey: "is_active",
    header: "Estado",
    cell: ({ row }) => <StatusBadgeRow row={row}/>,
  },
  {
    accessorKey: "refresh_token_hash",
    header: () => <div className="w-[88px]">Sesión activa</div>,
    cell: ({ row }) => <SessionStatusBadgeRow row={row}/> 
  },
  {
    id: "actions",
    header: () => <div className="w-10 text-center">Acciones</div>,
    cell: ({ row }) => <ActionsRow row={row}/>,
  }
]