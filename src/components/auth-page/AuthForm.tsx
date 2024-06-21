import { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AuthCredentials } from "@/api/models";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z.object({
    email: z.string().email("Ingresa un correo electronico válido."),
    password: z.string().min(6, "La contraseña debe contener al menos 6 caracteres").max(50),
})

interface Props {
    onSubmit: (values: AuthCredentials) => Promise<void>;
}


export const AuthForm: FC<Props> = ({onSubmit}) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
        return await onSubmit(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-8 max-w-sm mx-auto">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo electronico</FormLabel>
                            <FormControl>
                                <Input placeholder="juanperez@google.com" {...field} autoComplete="username" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex items-center justify-between">
                                <FormLabel>Contraseña</FormLabel>
                                <Link to="#" className="underline text-sm">¿Olvidaste tu contraseña?</Link>
                            </div>
                            <FormControl>
                                <Input placeholder="Escribe tu contraseña" {...field} type="password" autoComplete="current-password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Iniciar sesión</Button>
            </form>
        </Form>
    )
}