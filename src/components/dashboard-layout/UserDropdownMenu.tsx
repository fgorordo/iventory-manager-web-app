import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import userPlaceholderImage from "@/assets/user-placeholder.jpg";
import { useAuthStore } from '../../hooks/useAuthStore';

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
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={startOnLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}