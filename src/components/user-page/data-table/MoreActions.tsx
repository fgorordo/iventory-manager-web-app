import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { User } from "@/models/users";
import { Lock, LogOut, MoreHorizontal, Pause, Pencil, Trash } from "lucide-react";
import { FC } from "react";

interface Props {
    user: User
}

export const MoreActions: FC<Props> = ({user}) => {

    const handleConsoleLog = () => {
        console.log(user)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Abrir menu de acciones</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Opciones</DropdownMenuLabel>
                <DropdownMenuItem className="flex-items-center gap-2" onClick={() => handleConsoleLog()}><Pencil className="h-3.5 w-3.5" />Editar información</DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2" onClick={() => handleConsoleLog()}><Lock className="h-3.5 w-3.5" />Recuperar contraseña</DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2" onClick={() => handleConsoleLog()}><Pause className="h-3.5 w-3.5" />Suspender usuario</DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 hover:!text-destructive text-destructive" onClick={() => handleConsoleLog()}><Trash className="h-3.5 w-3.5" />Eliminar usuario</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Inicio de sesión</DropdownMenuLabel>
                <DropdownMenuItem className="text-destructive hover:!text-destructive flex items-center gap-2" onClick={() => handleConsoleLog()}><LogOut className="h-3.5 w-3.5" />Cerrar sesión del usuario</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};