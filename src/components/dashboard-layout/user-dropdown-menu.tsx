import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import userPlaceholderImage from "@/assets/user-placeholder.jpg";
import { useAuthStore } from '../../hooks/useAuthStore';
import { LogOut } from "lucide-react";

export const UserDropdownMenu = () => {

    const { startOnLogout } = useAuthStore()

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild className="ml-6">
                <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                    <img
                        src={userPlaceholderImage}
                        width={36}
                        height={36}
                        alt="Avatar"
                        className="overflow-hidden rounded-full"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Jhon Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs font-normal">Mi cuenta</DropdownMenuLabel>
                <DropdownMenuItem>Editar informacion</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs font-normal">Inicio de sesión</DropdownMenuLabel>
                <DropdownMenuItem onClick={startOnLogout} className="text-destructive hover:!text-destructive text-xs">Cerrar sesión </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}