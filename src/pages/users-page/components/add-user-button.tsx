import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { CirclePlusIcon } from "lucide-react";
import { FC, useState } from "react";
import { AddUserForm } from "./add-user-form";
import { Button } from "@/components/ui/button";

export const AddUserButton: FC = () => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" className="h-10 gap-1">
                    <CirclePlusIcon className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Añadir usuario</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Añadir un nuevo usuario</DialogTitle>
                    <DialogDescription>
                        A traves de este formulario usted podra brindarle acceso a la plataforma a sus empleados o clientes.
                    </DialogDescription>
                </DialogHeader>
                <AddUserForm dialogCloseFunction={setOpen}/>
            </DialogContent>
        </Dialog>
    )
}

