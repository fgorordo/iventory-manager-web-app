import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


import { Dispatch, FC, SetStateAction } from "react"
import { useUserStore } from "@/hooks"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DialogClose, DialogFooter } from "@/components/ui/dialog"

const formSchema = z.object({
    full_name: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    role: z.string()
})

interface Props {
    dialogCloseFunction: Dispatch<SetStateAction<boolean>>
}

export const AddUserForm: FC<Props> = ({dialogCloseFunction}: any) => {
    const { startOnCreateUser } = useUserStore();


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            full_name: "",
            email: "",
            role: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        startOnCreateUser(values);
        toast.success("Usuario creado exitosamente", {
            className: "bg-green-100 border border-green-500"
        });
        dialogCloseFunction(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre completo</FormLabel>
                            <FormControl>
                                <Input placeholder="Juan Pérez" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo electronico</FormLabel>
                            <FormControl>
                                <Input placeholder="juanperez@google.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                El código de primer acceso sera enviado a la direccion de correo electronico especificada.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tipo de usuario</FormLabel>
                            <FormControl>
                                <Select onValueChange={(value: string) => field.onChange(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona un tipo de usuario" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="EMPLOYEE">Empleado</SelectItem>
                                        <SelectItem value="CUSTOMER">Cliente</SelectItem>
                                        <SelectItem value="ADMIN">Administrador</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                El tipo de usuario va a definir que tipo de operaciones podra realizar dentro de la plataforma.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button type="submit">Confirmar</Button>
                </DialogFooter>
            </form>
        </Form>
    )
}