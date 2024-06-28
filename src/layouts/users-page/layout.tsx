import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface UserPageLayoutProps {
    layoutBody: React.JSX.Element | React.JSX.Element[];
    layoutFooter: React.JSX.Element | React.JSX.Element[];
}

export const UsersPageLayout: React.FC<UserPageLayoutProps> = ({layoutBody, layoutFooter}): React.JSX.Element => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Administrar usuarios</CardTitle>
                <CardDescription>Crea, administra y controla las credenciales de acceso de tus clientes, empleados o administradores</CardDescription>
            </CardHeader>
            <CardContent>
                { layoutBody }
            </CardContent>
            <CardFooter>
                { layoutFooter}
            </CardFooter>
        </Card>
    )
}