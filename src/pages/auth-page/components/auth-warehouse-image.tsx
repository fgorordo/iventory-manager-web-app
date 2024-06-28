import { FC } from "react";
import AuthHeroImage from "@/assets/auth-hero-img.jpg";

export const AuthWharehouseImage: FC = () => {
    return (
        <img src={AuthHeroImage} alt="Foto de un almacen de productos" className="hidden lg:block w-[560px]" />
    );
};