import { Badge } from "@/components/ui/badge";
import { User } from "@/models/users";
import { Row } from "@tanstack/react-table";
import { CircleCheck, XCircle } from "lucide-react";

interface UserRowsProps {
    row: Row<User>
}

export const IdRow: React.FC<UserRowsProps> = ({ row }): React.JSX.Element => {
    const formattedRow = row.original.id.split("-");
    return (
        <p className="text-xs font-mono w-[40px] overflow-hidden text-ellipsis">{formattedRow[formattedRow.length - 1]}</p>
    );
};

export const FullNameRow: React.FC<UserRowsProps> = ({ row }): React.JSX.Element => {
    return (
        <p className="font-bold">{row.original.full_name}</p>
    );
};

export const RoleBadgeRow: React.FC<UserRowsProps> = ({ row }): React.JSX.Element => {
    if (row.original.role === "EMPLOYEE") {
        return <Badge>Empleado</Badge>
    } else if (row.original.role === "CUSTOMER") {
        return <Badge className="bg-blue-700">Cliente</Badge>
    } else if (row.original.role === "ADMIN") {
        return <Badge className="bg-yellow-700">Administrador</Badge>
    } else if (row.original.role === "SUPER_USER") {
        return <Badge className="bg-purple-700">Usuario Maestro</Badge>
    }
    return <></>
};

export const SessionStatusBadgeRow: React.FC<UserRowsProps> = ({ row }): React.JSX.Element => {
    if (row.original.refresh_token_hash === 'logged-in') {
        return (<div className="w-[88px] flex justify-center"><CircleCheck className="text-green-700" /></div>)
    } else {
        return (<div className="w-[88px] flex justify-center"><XCircle className="text-destructive" /></div>)
    }
}

export const StatusBadgeRow: React.FC<UserRowsProps> = ({ row }): React.JSX.Element => {
    if (row.original.is_active) {
        return <Badge className="bg-green-800 items-center">Activo</Badge>
    } else {
        return <Badge className="bg-destructive">Inactivo</Badge>
    };
};
