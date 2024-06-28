import { Row } from "@tanstack/react-table"
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Lock, LogOut, MoreHorizontal, Pause, Pencil, Play, Trash } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

interface WithId {
    id: string;
    is_active: boolean;
}

import { cn } from '@/lib/utils';
import { DialogClose } from "@/components/ui/dialog";
import { useUserStore } from "@/hooks";
import { toast } from "sonner";
import { ResponsiveDialog } from "@/components/responsive-dialog";

interface MenuIconProps {
    icon: React.ReactNode;
    text: string;
    className?: string;
}

export default function IconMenu({ className, icon, text }: MenuIconProps) {
    return (
        <div
            className={cn(
                'flex flex-row text-center items-center justify-center space-x-2',
                className,
            )}
        >
            {icon}
            <span className="text-sm">{text}</span>
        </div>
    );
}

export function ActionsRow<TData extends WithId>({ row }: DataTableRowActionsProps<TData>) {

    const { startOnDeleteUser } = useUserStore();
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
    const [isPausedOpen, setIsPausedOpen] = useState<boolean>(false)
    const [isActivateOpen, setIsActivateOpen] = useState<boolean>(false)
    const id = row.original.id;

    function handleDeleteAction() {
        startOnDeleteUser(id)
        setIsDeleteOpen(false);
        toast.success("Usuario eliminado exitosamente", {
            className: "bg-red-100 border border-red-500 text-red-500"
        });
    };

    function handlePauseAction() {
        // startOnDeleteUser(id)
        setIsPausedOpen(false);
        toast.success("Usuario pausado exitosamente", {
            className: "bg-yellow-100 border border-yellow-500 text-yellow-500"
        });
    };

    function handleActivateAction() {
        // startOnDeleteUser(id)
        setIsActivateOpen(false);
        toast.success("Usuario activado exitosamente", {
            className: "bg-green-100 border border-green-500 text-green-500"
        });
    };


    return (
        <>
            <ResponsiveDialog
                isOpen={isDeleteOpen}
                setIsOpen={setIsDeleteOpen}
                title="Eliminar usuario"
                description="¿Estas seguro que deseas eliminar el usuario? Ten en cuenta que esta acción es irreversible."
            >
                <div className="flex w-full gap-5">
                    <DialogClose className="w-full">
                        <Button className="w-full">Cancelar</Button>
                    </DialogClose>
                    <Button className="bg-red-600 hover:bg-red-500 w-full" onClick={handleDeleteAction}>Eliminar usuario</Button>
                </div>
            </ResponsiveDialog>

            <ResponsiveDialog
                isOpen={isPausedOpen}
                setIsOpen={setIsPausedOpen}
                title="Suspender usuario"
                description="Esta acción desactiva el acceso del usuario, luego puedes volver a activar esta cuenta ¿Deseas continuar?"
            >
                <div className="flex w-full gap-5">
                    <DialogClose className="w-full">
                        <Button className="w-full">Cancelar</Button>
                    </DialogClose>
                    <Button className="bg-yellow-600 hover:bg-yellow-500 w-full" onClick={handlePauseAction}>Pausar usuario</Button>
                </div>
            </ResponsiveDialog>

            <ResponsiveDialog
                isOpen={isActivateOpen}
                setIsOpen={setIsActivateOpen}
                title="Activar usuario"
                description="Esta acción activa el acceso del usuario, podras desactivar el acceso nuevamente si es necesario ¿Deseas continuar?"
            >
                <div className="flex w-full gap-5">
                    <DialogClose className="w-full">
                        <Button className="w-full">Cancelar</Button>
                    </DialogClose>
                    <Button className="bg-green-600 hover:bg-green-500 w-full" onClick={handleActivateAction}>Activar usuario</Button>
                </div>
            </ResponsiveDialog>


            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="z-50">
                    <DropdownMenuLabel>Opciones</DropdownMenuLabel>
                    <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base">
                        <button
                            onClick={() => { return console.log("Edit function not implemented yet") }}
                            className="w-full justify-start flex rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
                        >
                            <IconMenu text="Editar información" icon={<Pencil className="h-4 w-4" />} />
                        </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base">
                        <button
                            onClick={() => { return console.log("Edit function not implemented yet") }}
                            className="w-full justify-start flex rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
                        >
                            <IconMenu text="Recuperar contraseña" icon={<Lock className="h-4 w-4" />} />
                        </button>
                    </DropdownMenuItem>
                    {
                        row.original.is_active
                            ? (
                                <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base">
                                    <button
                                        onClick={() => { setIsPausedOpen(true) }}
                                        className="w-full justify-start flex rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
                                    >
                                        <IconMenu text="Suspender usuario" icon={<Pause className="h-4 w-4" />} />
                                    </button>
                                </DropdownMenuItem>
                            )
                            : (
                                <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base">
                                    <button
                                        onClick={() => { setIsActivateOpen(true) }}
                                        className="w-full justify-start flex rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
                                    >
                                        <IconMenu text="Activar usuario" icon={<Play className="h-4 w-4" />} />
                                    </button>
                                </DropdownMenuItem>
                            )
                    }
                    <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base">
                        <button
                            onClick={() => { setIsDeleteOpen(true) }}
                            className="w-full justify-start flex text-red-500 rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
                        >
                            <IconMenu text="Eliminar usuario" icon={<Trash className="h-4 w-4" />} />
                        </button>
                    </DropdownMenuItem>
                    <DropdownMenuLabel>Inicio de sesión</DropdownMenuLabel>
                    <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base">
                        <button
                            onClick={() => { console.log("Logout user function not implemented yet") }}
                            className="w-full justify-start flex text-red-500 rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
                        >
                            <IconMenu text="Cerrar sesión del usuario" icon={<LogOut className="h-4 w-4" />} />
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};